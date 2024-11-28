---
type: PostLayout
title: Склады ВБ на карте
date: '2024-11-28'
author: content/data/person1.json
excerpt: Инструкция для копирования файла гугл-таблицы →
featuredImage:
  type: ImageBlock
  url: /images/duplication-spreadsheets-schema.svg
  altText: копирование таблицы гугл
  elementId: ''
  styles:
    self:
      padding:
        - pt-0
        - pl-0
        - pb-0
        - pr-0
bottomSections: []
slug: /example-first-bigquery-warehouses-WB-map
isFeatured: false
isDraft: false
seo:
  type: Seo
  metaTitle: Инструкция для копирования файла гугл-таблицы
  metaDescription: Инструкция для копирования файла гугл-таблицы
  addTitleSuffix: false
  metaTags: []
colors: bg-light-fg-dark
styles:
  self:
    flexDirection: col
---
В этом примере приведена основная схема подготовки расчета в BigQuery для последующего открытия уже готовых данных в гугл-таблице.

Операции с данными в BigQuery пишутся на [языке SQL](https://cloud.google.com/bigquery/docs/introduction-sql). SQL - это аббревиатура от англ. **S**tructured **Q**uery **L**anguage («язык структурированных запросов»). SQL проще и понятнее, чем многоэтажные формулы гугл-таблиц, и расчет таблицы в SQL практически никогда не зависает.

В качестве данных используем выгрузку **ВБ → Поставки FBW → Поставки → Список складов**. На листе чекера **Параметры** находим, что данные выгружаются в таблицу BigQuery с названием **Список складов**.

Посмотрим эту таблицу в BigQuery: в адресной строке баузера вставляем <https://console.cloud.google.com/> и в открывшейся странице кликаем BigQuery:![](/images/BQ.PNG)

В открывшейся консоли BQ проверяем, что находимся в том проекте BigQuery, ID которого указан в чекере:![](/images/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82.PNG)

В поле поиска вводим название таблицы:![](/images/%D0%9E%D0%BA%D0%BD%D0%BE%20%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0.PNG)

Нажимаем Enter и получаем выгруженные таблицы:![](/images/%D0%9F%D0%BE%D0%B8%D1%81%D0%BA.PNG)
