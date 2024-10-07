---
type: PostLayout
title: Выгрузки Озон
date: '2024-10-02'
author: content/data/person1.json
excerpt: Общие особенности выгрузок Озон →
featuredImage:
  type: ImageBlock
  url: /images/ozone-marketplace-general-features.svg
  altText: Особенности реализации выгрузок Озон
  elementId: ''
  styles:
    self:
      padding:
        - pt-0
        - pl-0
        - pb-0
        - pr-0
bottomSections: []
slug: /ozon-uploads-notes
isFeatured: false
isDraft: false
seo:
  type: Seo
  metaTitle: Выгрузки Озон
  metaDescription: Особенности реализации
  addTitleSuffix: false
  socialImage: /images/ozone-marketplace-general-features.svg
  metaTags: []
colors: bg-light-fg-dark
styles:
  self:
    flexDirection: col
---
Особенности реализации всех выгрузок Озон заключаются в следующем:

1.  Возвращаемые данные не содержат ключевое поле.
    Например, выгрузка метода *Озон → Финансовые отчёты → Суммы транзакций* выгружает данные для запрашиваемого *posting\_number*, но в возвращаемых данных *posting\_number* отсутствует. Поэтому полученные данные дополняются *posting\_number*.

2.  Возвращаемые данные свернуты в компактную форму. Поэтому там, где это уместно, полученные данные сохраняются в развернутом виде.

##### Дальше

[Озон → Аналитические отчёты → Данные аналитики](/blog/ozon-analytical-reports-data/)

##### Назад

[Примечания к выгрузкам](/blog/notes-for-uploads/)

