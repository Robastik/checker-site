---
type: PostLayout
title: SQL (актуальность данных)
date: '2024-12-28'
excerpt: Код SQL для примера расчета процента выкупа →
featuredImage:
  type: ImageBlock
  url: /images/data-quality-by-days-sql-KPDV.svg
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
  metaTitle: SQL (актуальность данных)
  metaDescription: Подсчет количества заказов в ежедневных выгрузках
  addTitleSuffix: false
  socialImage: /images/data-quality-by-days-sql-KPDV.svg
  metaTags: []
colors: bg-light-fg-dark
styles:
  self:
    flexDirection: col
---
Код для подсчета количества заказов в ежедневных выгрузках:

```
-- Define the target date as a variable
DECLARE target_date DATE DEFAULT DATE('2024-12-19');
DECLARE explore_days INT64 DEFAULT 17;


-- Query to count the number of orders from the target date present in tables from the next explore_days days
SELECT
  target_date AS `Дата заказа`,
  COUNT(DISTINCT o.srid) AS `Количество заказов`,
  FORMAT_DATE('%Y-%m-%d', DATE_ADD(target_date, INTERVAL day_diff DAY)) AS `Дата выгрузки`
FROM
  UNNEST(GENERATE_ARRAY(1, explore_days)) AS day_diff
LEFT JOIN
  `test-project-my-new.wb_api_statistics.Заказы_*` AS o
ON
  SPLIT(o.TABLE_SUFFIX, '_')[0] = FORMAT_DATE('%Y-%m-%d', DATE_ADD(target_date, INTERVAL day_diff DAY))
WHERE 
  DATE(o.date) = target_date
  AND  
  orderType = 'Клиентский'
GROUP BY
  `Дата выгрузки`
ORDER BY
  `Дата выгрузки`;
```

В запросах нужно поменять **id** тестового проекта *test-project-my-new* на **id** вашего проекта.

##### Дальше

[](/blog/google-script-authorization/)

##### Назад

[Актуальность данных](/blog/data-quality-monitoring-case/)

[Оглавление](/blog/table-of-contents)
