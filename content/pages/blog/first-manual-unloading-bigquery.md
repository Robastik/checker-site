---
type: PostLayout
title: Тест выгрузки ЛК по API
date: '2024-09-04'
author: content/data/person1.json
excerpt: Делаем первую тестовую выгрузку ЛК по API →
featuredImage:
  type: ImageBlock
  url: /images/first-unload-api.svg
  altText: Тестовая выгрузка ЛК по API
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
slug: /first-manual-unloading-bigquery
isFeatured: false
isDraft: false
seo:
  type: Seo
  metaTitle: Как получить id проекта BigQuery для чекера
  metaDescription: >-
    Инструкция по инициализации BigQuery для хранения данных Вайлдберриз Озон
    Мой склад mpStats
  addTitleSuffix: false
  socialImage: /images/BigQuery-integrations-cover.png
  metaTags: []
colors: bg-light-fg-dark
styles:
  self:
    flexDirection: col
---
Это завершающий пункт в [чек-листе проверки настроек чекера](/blog/beginning-of-use/). Всё уже проверено и настроено, сейчас мы только протестируем работоспособность системы, чтобы затем можно было включить ежедневную автоматическую выгрузку ЛК селлера по API.

Откройте чекер.

Лист **Ключи API** заполнен и например для ВБ выглядит примерно так:

![](/images/test-unload-api-keys.png)

 Перейдите на лист **Параметры** и прокрутите в конец раздела ВБ до выгрузки **Поставки → Список складов**:

![](/images/test-unload-row-getwarehouse.PNG)

Поставки - это [раздел API ВБ](https://openapi.wildberries.ru/supplies/api/ru/). Список складов - [метод этого раздела](https://openapi.wildberries.ru/supplies/api/ru/#tag/Informaciya-dlya-formirovaniya-postavok/paths/~1api~1v1~1warehouses/get). getListWarehouse - функция реализующая метод **Список складов**. Функция getListWarehouse находится в проекте гугл-скриптов 4eker, который открывается в меню **Расширения → Apps Script**:

![](/images/test-unload-menu-appsscript.png)

Сделаем тестовую выгрузку списка складов ВБ.

