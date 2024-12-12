---
type: PostLayout
title: SQL (процент выкупа)
date: '2024-12-09'
excerpt: Код SQL для примера расчета процента выкупа →
featuredImage:
  type: ImageBlock
  url: /images/percentage-of-purchased-orders-KPDV.svg
  altText: Расчет процента выкупа ВБ Озон
  elementId: ''
  styles:
    self:
      padding:
        - pt-0
        - pl-0
        - pb-0
        - pr-0
bottomSections: []
slug: /case-percent-buyout-base-attachment
isFeatured: false
isDraft: false
seo:
  type: Seo
  metaTitle: Процент выкупа
  metaDescription: Расчет процента выкупа заказанных товаров на маркетплейсе
  addTitleSuffix: false
  socialImage: /images/percentage-of-purchased-orders-KPDV.svg
  metaTags: []
colors: bg-light-fg-dark
styles:
  self:
    flexDirection: col
---
**Процент выкупа** - это доля выкупленных заказов. Выкуп и продажа являются синонимами в этом контексте.

```
WITH
orders AS(  
  /*Получаем заказы*/  
  SELECT DISTINCT  
    srid 
  FROM   
    /*Вставить id своего проекта вместо test-project-my-new*/
    `test-project-my-new.wb_api_statistics.Заказы_*`  
  WHERE  
    /*Обрабатываем только необходимые таблицы для экономии лимита*/
    DATE(SPLIT(_TABLE_SUFFIX, '_')[0]) >= DATE_SUB(CURRENT_DATE(), INTERVAL 14 DAY)  
  AND  
    /*На какую дату считаем процент выкупа*/
    DATE(date) = DATE_SUB(CURRENT_DATE(), INTERVAL 14 DAY)  
  AND  
    /*Поле отличает заказы от возвратов*/
    orderType = 'Клиентский'
)
/*Получаем продажи*/
SELECT DISTINCT
  DATE(sales.date) AS salesDate,
  COUNT(sales.date) AS salesCount
FROM
  `test-project-my-new.wb_api_statistics.Продажи_*` as sales
RIGHT JOIN
  orders
ON
  /*Только выкупленные заказы*/
  sales.srid = orders.srid
WHERE
  /*Обрабатываем только необходимые таблицы с продажами для экономии лимита*/
  DATE(SPLIT(_TABLE_SUFFIX, '_')[0]) >= DATE_SUB(CURRENT_DATE(), INTERVAL 14 DAY)
GROUP BY
  /*Объединяем выкупы по дням*/
  DATE(sales.date)
ORDER BY 
  salesDate

```

##### Дальше

[](/blog/google-script-authorization/)

##### Назад

[Начало работы](/blog/beginning-of-use/)

[Оглавление](/blog/table-of-contents)
