---
type: PostLayout
title: Решение на гугл-платформе
date: '2024-10-03'
excerpt: 'Решение на гугл-платформе: обзор  возможностей →'
featuredImage:
  type: ImageBlock
  url: /images/google-platform-main-pic.svg
  altText: Решение на гугл-платформе
  elementId: ''
  styles:
    self:
      padding:
        - pt-0
        - pl-0
        - pb-0
        - pr-0
bottomSections: []
slug: /detailed-profits-google-platform
isFeatured: false
isDraft: false
seo:
  type: Seo
  metaTitle: Решение на гугл-платформе
  metaDescription: Обзор возможностей
  addTitleSuffix: false
  socialImage: /images/google-platform-main-pic.svg
  metaTags: []
colors: bg-light-fg-dark
styles:
  self:
    flexDirection: col
---
Чекер выгружает данные из личных кабинетов маркетплейсов Вайлдберриз и Озон в гугл-хранилище данных BigQuery. Дальнейшая работа с данными может строиться по разным сценариям. Условно их можно разделить на две группы:

1.  Сторонние сервисы

2.  Платформа Гугл

Сторонние сервисы позволяют использовать данные из BigQuery практически где угодно: в [Excel ](https://learn.microsoft.com/en-us/power-query/connectors/google-bigquery#connect-to-google-bigquery-data-from-power-query-desktop)через надстройку Power Query, в [Power BI](https://learn.microsoft.com/en-us/power-query/connectors/google-bigquery#connecting-to-google-bigquery-in-power-bi-desktop), в [Tableau ](https://www.tableau.com/solutions/workbook/explore-your-big-data-cloud)и огромном количестве [других](https://console.cloud.google.com/bigquery/partner-center).

Отраслевым стандартом в индустрии маркетплейсов стали [гугл-таблицы](https://cloud.google.com/bigquery/docs/connected-sheets). Поэтому в дальнейшем этому направлению будет уделено основное внимание.

Бесплатный облачный BI-визуализатор [гугл-лукер](https://cloud.google.com/bigquery/docs/visualize-looker-studio) отлично дополняет возможности гугл-таблиц.

[Гугл-скрипты](https://developers.google.com/apps-script/) автоматизируют все гугл-сервисы: гугл-почту, гугл-диск, гугл-календарь, гугл-чат, гугл-видеоконференцию и [огромное количество других](https://about.google/intl/ru/products/). В связке со сторонними сервисами возможности гугл-платформы становятся просто безграничными. Например, гугл-скрипты легко и просто реализуют [телеграм-ботов](https://habr.com/ru/articles/788206/). Это позволяет быстро и часто бесплатно реализовывать любые задачи бизнеса на маркетплейсах.

[Гугл-ИИ Gemini](https://cloud.google.com/bigquery/docs/data-insights) уже [заточен на работу с гугл-платформой](https://cloud.google.com/gemini/docs/overview), он идеально оптимизирован для [поиска инсайтов](https://cloud.google.com/bigquery/docs/data-insights) в хранящихся в BigQuery данных. Как и все подобные технологии, он [анализирует текст, изображения, аудио и видео](https://ai.google.dev/gemini-api/docs/models/gemini), что позволяет автоматизировать работу с карточками, и не только со своими. Конечно, есть и возможность запустить [чат-бота](https://extensions.dev/blogs/chatbot-with-gemini-firebase-extension) для общения с покупателями.

##### Дальше

[Начало работы с чекером](/blog/beginning-of-use/)

##### Назад

[Общие сведения и содержание справки чекера](/blog/short-overview/)

[Оглавление](/blog/table-of-contents)
