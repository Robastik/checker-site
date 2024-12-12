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
  srid,  
  DATE(date) AS orderDate  
  FROM   
  `sublime-triode-422515-k3.wb_api_statistics.Заказы_*`  
  WHERE  
  DATE(SPLIT(_TABLE_SUFFIX, '_')[0]) >= DATE_SUB(CURRENT_DATE(), INTERVAL 14 DAY)  
  AND  
  DATE(date) = DATE_SUB(CURRENT_DATE(), INTERVAL 14 DAY)  
  AND  
  orderType = 'Клиентский'
)
SELECT DISTINCT
DATE(sales.date) AS salesDate,
COUNT(sales.date) AS salesCount
FROM
`sublime-triode-422515-k3.wb_api_statistics.Продажи_*` as sales
RIGHT JOIN
orders
ON
sales.srid = orders.srid
WHERE
DATE(SPLIT(_TABLE_SUFFIX, '_')[0]) > DATE_SUB(CURRENT_DATE(), INTERVAL 15 DAY)
GROUP BY
DATE(sales.date)
ORDER BY salesDate
```

##### Дальше

[Активация чекера](/blog/google-script-authorization/)

##### Назад

[Начало работы](/blog/beginning-of-use/)

[Оглавление](/table-of-contents)
