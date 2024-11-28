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

