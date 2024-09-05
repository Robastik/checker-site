---
type: PostLayout
title: Как получить id проекта BigQuery
date: '2024-09-04'
author: content/data/person1.json
excerpt: Инструкция по получению id проекта BigQuery для вставки на лист Ключи API →
featuredImage:
  type: ImageBlock
  url: /images/big-query-initialization.svg
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
BigQuery используется чекером для хранения и обработки данных. Работа с данными в BigQuery кардинально проще, надежнее и быстрее, чем в гугл-таблицах. Поэтому даже начинающему селлеру необходимо освоить BigQuery на начальном уровне, чтобы при увеличении масштаба бизнеса и связанной с ним горы цифр аналитика не остановилась из-за технических ограничений гугл-таблиц. 

Общий подход такой: пока у селлера нет опыта и используется мало таблиц - данные хранятся в BigQuery и рассчитываются в гугл-таблицах, а по мере накопления опыта количество таблиц стремительно растет, их сложность растет еще быстрее, гугл-таблицы все хуже справляются с возросшей нагрузкой, поэтому расчеты уже в основном выполняются в BigQuery и гугл-таблицы используются только для просмотра результатов расчета.

### Бесплатный и платный тарифы

Главная страница BigQuery находится по адресу [cloud.google.com/bigquery](https://cloud.google.com/bigquery/). На этой странице находится такой невнятный текст об условиях бесплатного использования BigQuery:![](/images/BQ-free-start-300.PNG)
