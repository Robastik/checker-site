---
type: PostLayout
title: SQL (актуальность данных)
date: '2024-12-28'
excerpt: Код SQL для примера расчета процента выкупа →
featuredImage:
  type: ImageBlock
  url: /images/percentage-of-purchased-orders-SQL-KPDV.svg
  altText: Приложение SQL к расчету процента выкупа
  elementId: ''
  styles:
    self:
      padding:
        - pt-0
        - pl-0
        - pb-0
        - pr-0
bottomSections: []
slug: /data-quality-monitoring-case-sql
isFeatured: false
isDraft: false
seo:
  type: Seo
  metaTitle: Процент выкупа
  metaDescription: Расчет процента выкупа заказанных товаров на маркетплейсе
  addTitleSuffix: false
  socialImage: /images/percentage-of-purchased-orders-SQL-KPDV.svg
  metaTags: []
colors: bg-light-fg-dark
styles:
  self:
    flexDirection: col
---
Код для подсчета количества заказов в ежедневных таблицах:

```
WITH RECURSIVE
DateSeries AS (
  SELECT      
    DATE_SUB(CURRENT_DATE(), INTERVAL dayStart + daysPeriod DAY) AS startDate,-- Дальний день смещения       
    DATE_SUB(CURRENT_DATE(), INTERVAL dayStart + daysPeriod DAY) AS rollingDate,-- Скользящий ближний день      
    DATE_SUB(CURRENT_DATE(), INTERVAL dayStart DAY) AS endDate -- Ближний день смещения    
  FROM ( SELECT 
          1 AS dayStart,  -- Ближний день смещения от текущей даты          
          8 AS daysPeriod -- Длительность периода в днях      
       )    
  UNION ALL    
    SELECT      
      startDate,      
      DATE_ADD(rollingDate, INTERVAL 1 DAY),      
      endDate    
    FROM      
      DateSeries     
    WHERE 
      rollingDate < endDate  
),
Orders AS (  
  SELECT DISTINCT    
    o.srid,    
    DATE(o.date) AS orderDate,    
    DATE(SPLIT(o._TABLE_SUFFIX, '_')[0]) AS tableDate  
  FROM    
    `test-project-my-new.wb_api_statistics.Заказы_*` AS o,    
    DateSeries AS ds   
  WHERE    
    DATE(SPLIT(o._TABLE_SUFFIX, '_')[0]) BETWEEN ds.startDate AND ds.rollingDate    
    AND       
      o.orderType = 'Клиентский'    
    AND      
      DATE(o.date) = DATE(ds.startDate)
)
SELECT  
  ANY_VALUE(orderDate) AS `Дата заказа`,  
  COUNT(DISTINCT srid) AS `Количество заказов`,  
  tableDate AS `День выгрузки`
FROM  
  Orders
GROUP BY  
  tableDate
ORDER BY  
  tableDate



```

В запросах нужно поменять **id** тестового проекта *test-project-my-new* на **id** вашего проекта.

##### Дальше

[](/blog/google-script-authorization/)

##### Назад

[Актуальность данных](/blog/data-quality-monitoring-case/)

[Оглавление](/blog/table-of-contents)
