---
type: PostLayout
title: Озон → Аналитические отчёты → Данные аналитики
date: '2024-10-02'
excerpt: Озон → Аналитические отчёты → Данные аналитики
featuredImage:
  type: ImageBlock
  url: /images/ozon-uploads-analytical-reports-data.svg
  altText: Озон → Аналитические отчёты → Данные аналитики
  elementId: ''
  styles:
    self:
      padding:
        - pt-0
        - pl-0
        - pb-0
        - pr-0
bottomSections: []
slug: /ozon-analytical-reports-data
isFeatured: false
isDraft: false
seo:
  type: Seo
  metaTitle: Озон → Аналитические отчёты → Данные аналитики
  metaDescription: Особенности реализации
  addTitleSuffix: false
  socialImage: /images/ozon-uploads-analytical-reports-data.svg
  metaTags: []
colors: bg-light-fg-dark
styles:
  self:
    flexDirection: col
---
Документация API метода [Озон → Аналитические отчёты → Данные аналитики](https://docs.ozon.ru/api/seller/?abt_att=1\&origin_referer=script.google.com#operation/AnalyticsAPI_AnalyticsGetData).

Выгрузка разбита на три части по ограничению на *metrics*:

1.  Бесплатные метрики

2.  Первая половина платных метрик

3.  Вторая половина платных метрик

В каждую строку добавлена дата из *timestamp*.

В *reportCreateDateTime* находится время создания отчета.

В каждой строке добавлены параметры запроса *dateFrom* и *dateTo*.

Значения метрик из массива *totals* сохранены в полях соответствующих названиям метрик с префиксом *total*. Например, *totals.hits\_tocart\_search* сохраняется в *totalHits\_tocart\_search*.

Массив *dimensions* развернут по названиям в соответствии с *id* и соответствующим им *name*.

Массив *metrics* также развернут по названиям.

Пример развернутой структуры данных:

| field name                 | type      |
| -------------------------- | --------- |
| session\_view\_pdp         | INTEGER   |
| session\_view\_search      | INTEGER   |
| hits\_view                 | INTEGER   |
| hits\_tocart\_pdp          | INTEGER   |
| totalHits\_tocart\_search  | INTEGER   |
| name1                      | STRING    |
| day                        | DATE      |
| name0                      | STRING    |
| dateTo                     | DATE      |
| hits\_view\_pdp            | INTEGER   |
| timestamp                  | TIMESTAMP |
| sku                        | INTEGER   |
| totalHits\_view            | INTEGER   |
| totalHits\_view\_pdp       | INTEGER   |
| totalHits\_tocart\_pdp     | INTEGER   |
| totalSession\_view\_pdp    | INTEGER   |
| dateFrom                   | DATE      |
| totalHits\_view\_search    | INTEGER   |
| totalHits\_tocart          | INTEGER   |
| reportCreateDateTime       | TIMESTAMP |
| hits\_tocart               | INTEGER   |
| hits\_tocart\_search       | INTEGER   |
| hits\_view\_search         | INTEGER   |
| totalSession\_view\_search | INTEGER   |

##### Дальше

##### Назад

[Выгрузки Озон](/blog/ozon-uploads-notes/)


[Оглавление](/table-of-contents)