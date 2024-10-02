---
type: PostLayout
title: Озон → Аналитические отчёты → Данные аналитики
date: '2024-10-02'
author: content/data/person1.json
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

В reportCreateDateTime находится время создания отчета.

В каждой строке добавлены параметры запроса dateFrom и dateTo.



##### Дальше

##### Назад

[Лист **Параметры**](/blog/parameters-list-control-panel/)
