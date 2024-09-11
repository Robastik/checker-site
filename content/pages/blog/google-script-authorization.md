---
type: PostLayout
title: Авторизация гугл-скрипта
date: '2024-09-10'
author: content/data/person1.json
excerpt: >-
  Использование гугл-скрипта начинается с его авторизации. Процедура авторизации
  включает информирование пользователя об авторе скрипта и предоставление
  скрипту разрешений на использование гугл-ресурсов пользователя →
featuredImage:
  type: ImageBlock
  url: /images/google-script-authorization.svg
  altText: Авторизация гугл-скрипта
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
slug: /google-script-authorization
isFeatured: false
isDraft: false
seo:
  type: Seo
  metaTitle: Авторизация гугл-скрипта
  metaDescription: >-
    Разрешение на запуск скрипта и предоставление скрипту разрешений на
    использование ресурсов
  addTitleSuffix: false
  metaTags: []
  socialImage: /images/google-script-authorization.svg
colors: bg-light-fg-dark
styles:
  self:
    flexDirection: col
---
Гугл-скрипт - это программа, которая написана на языке Apps Script и выполняется в гугл-облаке.

В чекере гугл-скрипты занимаются выгрузкой ЛК по API.

Гугл-скрипты прикреплены к чекеру. При [копировании чекера](/blog/copying-spreadsheet-file/) вместе с копией чекера получается копия прикрепленных к нему скриптов.

Для выгрузки ЛК по API гугл-скрипту нужно разрешение на получение указанных в чекере ключей и параметров, на запись данных в BigQuery, на использование бесплатного лимита запросов. 

Разрешения предоставляются гугл-скрипту при авторизации. Без авторизации гугл-скрипт выполняться не может.

