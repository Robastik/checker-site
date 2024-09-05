---
type: PostLayout
title: Как получить id проекта BigQuery
date: '2024-09-04'
author: content/data/person1.json
excerpt: Инструкция по получению id проекта BigQuery для вставки на лист Ключи API →
featuredImage:
  type: ImageBlock
  url: /images/BigQuery-integrations-cover.png
  altText: id проекта BigQuery в чекере
  elementId: ''
  styles:
    self:
      padding:
        - pt-0
        - pl-0
        - pb-0
        - pr-0
bottomSections:
  - type: DividerSection
    title: Divider
    elementId: ''
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-3
          - pl-3
          - pb-3
          - pr-3
  - type: RecentPostsSection
    title:
      type: TitleBlock
      text: Recent posts
      color: text-dark
      styles:
        self:
          textAlign: center
    recentCount: 3
    showThumbnail: true
    showExcerpt: true
    showDate: true
    showAuthor: true
    actions: []
    elementId: ''
    variant: three-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
slug: bigquery-initialization
isFeatured: false
isDraft: false
seo:
  type: Seo
  metaTitle: Как получить id проекта BigQuery для чекера
  metaDescription: >-
    Инструкция по инициализации BigQuery для хранения данных Вайлдберриз Озон
    Мой склад mpStats
  addTitleSuffix: false
  metaTags: []
colors: bg-light-fg-dark
styles:
  self:
    flexDirection: col
---
### Бесплатный и платный тарифы BigQuery

Начальная страница BigQuery находится по адресу [cloud.google.com/bigquery](https://cloud.google.com/bigquery/). На этой странице находится такой текст об условиях бесплатного использования BigQuery:![](/images/BQ-free-start-300-1.PNG)Недалекие авторы часто интерпретируют этот текст как необходимость как минимум указывать данные карты, а то и оплачивать использование BigQuery. Это совсем не так!

Перейдем в консоль BigQuery по адресу [console.cloud.google.com/bigquery](https://console.cloud.google.com/bigquery).

Если вы совсем новый пользователь и у вас не было ранее создано проекта, нужно будет указать страну (понятно какую страну указывать не стоит) и согласиться с условиями использования облачных сервисов Гугл. Затем нужно создать свой первый проект, указав его название. Также можно сменить автоматически сгенерированный **id** (идентификатор проекта) на более осмысленный:![](/images/create-bq-project.PNG)

После создания проекта или если уже есть ранее созданные проекты, откроется консоль BigQuery:![](/images/sandbox-bq.PNG)



Можно использовать созданный ранее проект, выбрав его в выпадающем списке слева вверху:
