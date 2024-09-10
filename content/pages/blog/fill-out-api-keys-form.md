---
type: PostLayout
title: Инструкция по заполнению листа чекера Ключи API
date: '2024-09-09'
author: content/data/person1.json
excerpt: Подробное объяснение порядка заполнения ключей API для использования чекера →
featuredImage:
  type: ImageBlock
  url: /images/google-sheets-schema-cells.svg
  altText: Ключи API чекера
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
slug: fill-out-api-keys-form
isFeatured: false
isDraft: false
seo:
  type: Seo
  metaTitle: Заполняем чекер ключами API
  metaDescription: Как устроена форма чекера с ключами API
  addTitleSuffix: false
  metaTags: []
colors: bg-light-fg-dark
styles:
  self:
    flexDirection: col
---
Для выгрузки ЛК по API используются ключи API. Ссылки для получения ключей API приведены в разделе [Начало работы](/blog/beginning-of-use/) на 3-м шаге. Также потребуется id проекта BigQuery, о котором подробно [здесь](/blog/bigquery-initialization/).

Полученные ключи API заполняются на листе Ключи API чекера:![](/images/checker-lists-api-keys.PNG)

Лист **Ключи API** разделен на разделы, каждый раздел предназначен для своего маркетплейса и сервиса. Желтым выделена строка с назначением раздела:![](/images/api-keys-sheet-parts.PNG)

На рисунке синим обозначен раздел Вайлдберриз, розовым - Озон, второй розовый блок - реклама Озон, фиолетовый - Мой склад и зеленый - MP Stats.



Каждый раздел состоит из двух частей:

1.  id проекта BigQuery

2.  ключи API

Для выгрузки каждого маркетплейса и сервиса можно использовать разные проекты BigQuery независимо друг от друга. В приведенном на рисунке примере все данные выгружаются в один проект.





