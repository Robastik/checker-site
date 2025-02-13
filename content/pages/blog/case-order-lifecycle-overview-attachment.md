---
type: PostLayout
title: SQL (цикл заказа)
date: '2024-12-09'
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
slug: /case-order-lifecycle-overview-attachment
isFeatured: false
isDraft: false
seo:
  type: Seo
  metaTitle: SQL (процент выкупа)
  metaDescription: Расчет процента выкупа заказанных товаров на маркетплейсе
  addTitleSuffix: false
  socialImage: /images/percentage-of-purchased-orders-SQL-KPDV.svg
  metaTags: []
colors: bg-light-fg-dark
styles:
  self:
    flexDirection: col
---
Код для построения диаграммы жизненного цикла заказа:

```
-- Define the target date as a variable
DECLARE target_date DATE DEFAULT DATE('2024-12-19');
DECLARE explore_days INT64 DEFAULT 30;

CREATE TEMP TABLE days AS (
  SELECT 
    DATE_ADD(
      target_date, INTERVAL day_diff DAY
    ) AS `Дата` 
  FROM 
    UNNEST(
      GENERATE_ARRAY(1, explore_days)
    ) AS day_diff
);

CREATE TEMP TABLE cancelIds AS (
  SELECT 
    DISTINCT `Дата`, 
    srid 
  FROM 
    days 
    LEFT JOIN `test-project-my-new.wb_api_statistics.Заказы_*` ON 
    /*Кумулятивно*/
    SPLIT(_TABLE_SUFFIX, '_') [0] <= FORMAT_DATE('%Y-%m-%d', `Дата`) 
  WHERE 
    
    /*Отмененные*/
    isCancel = TRUE 
    AND DATE(date) = target_date 
    AND orderType = 'Клиентский'
);

CREATE TEMP TABLE orderIds AS (
  /*Заказы не отмененные*/
  SELECT 
    `Дата`, 
    srid 
  FROM 
    days 
    LEFT JOIN `test-project-my-new.wb_api_statistics.Заказы_*` ON 
    /*Кумулятивно*/
    SPLIT(_TABLE_SUFFIX, '_') [0] <= FORMAT_DATE('%Y-%m-%d', `Дата`) 
  WHERE 
    DATE(date) = target_date 
    AND orderType = 'Клиентский' 
    AND srid NOT IN (
      /*Отмененные*/
      SELECT 
        DISTINCT srid 
      FROM 
        cancelIds 
      WHERE 
        cancelIds.`Дата` <= days.`Дата`
    )
);

WITH cancels AS (
  SELECT 
    `Дата`, 
    COUNT(DISTINCT srid) AS `Отмены заказов` 
  FROM 
    cancelIds 
  GROUP BY 
    `Дата`
), 

orders AS (
  /*Заказы не отмененные*/
  SELECT 
    `Дата`, 
    COUNT(DISTINCT srid) AS `Заказы не отмененные` 
  FROM 
    orderIds 
  GROUP BY 
    `Дата`
), 

sales AS(
  /*Выкупы*/
  SELECT 
    `Дата`, 
    COUNT(DISTINCT srid) AS `Выкупы` 
  FROM 
    days 
    LEFT JOIN `test-project-my-new.wb_api_statistics.Продажи_*` AS o ON SPLIT(o._TABLE_SUFFIX, '_') [0] <= FORMAT_DATE('%Y-%m-%d', `Дата`) 
  WHERE 
    srid NOT IN (
      SELECT 
        DISTINCT srid 
      FROM 
        `test-project-my-new.wb_api_statistics.Продажи_*` 
      WHERE 
        LEFT(saleID, 1)= "R"
    ) 
    AND srid IN (
      SELECT 
        srid 
      FROM 
        orderIds
    ) 
  GROUP BY 
    `Дата`
), 

returns AS (
  /*Возвраты*/
  SELECT 
    `Дата`, 
    COUNT(DISTINCT srid) AS `Возвраты` 
  FROM 
    days 
    LEFT JOIN `test-project-my-new.wb_api_statistics.Продажи_*` AS o ON SPLIT(o._TABLE_SUFFIX, '_') [0] <= FORMAT_DATE('%Y-%m-%d', `Дата`) 
  WHERE 
    srid IN (
      SELECT 
        DISTINCT srid 
      FROM 
        `test-project-my-new.wb_api_statistics.Продажи_*` 
      WHERE 
        LEFT(saleID, 1)= "R"
    ) 
    AND srid IN (
      SELECT 
        srid 
      FROM 
        orderIds
    ) 
  GROUP BY 
    `Дата`
) 

SELECT 
  days.`Дата`, 
  `Заказы не отмененные` - IFNULL(`Выкупы`, 0)- IFNULL(`Возвраты`, 0) AS `Заказы`, 
  `Отмены заказов`, 
  IFNULL(`Выкупы`, 0) AS `Выкупы`, 
  IFNULL(`Возвраты`, 0) AS `Возвраты` 
FROM 
  days 
  LEFT JOIN orders ON days.`Дата` = orders.`Дата` 
  LEFT JOIN cancels ON days.`Дата` = cancels.`Дата` 
  LEFT JOIN returns ON days.`Дата` = returns.`Дата` 
  LEFT JOIN sales ON days.`Дата` = sales.`Дата` 
ORDER BY 
  `Дата`
```

В запросах нужно поменять **id** тестового проекта *test-project-my-new* на **id** вашего проекта.

##### Дальше

[](/blog/google-script-authorization/)

##### Назад

[Процент выкупа](/blog/case-percent-buyout-base/)

[Оглавление](/blog/table-of-contents)
