---
type: PostLayout
title: Актуальность данных
date: '2024-12-27'
excerpt: Пример задержки поступления данных в выгрузках API →
featuredImage:
  type: ImageBlock
  url: /images/data-quality-by-days-KPDV.svg
  altText: Задержка данных в API
  elementId: ''
  styles:
    self:
      padding:
        - pt-0
        - pl-0
        - pb-0
        - pr-0
bottomSections: []
slug: /data-quality-monitoring-case
isFeatured: false
isDraft: false
seo:
  type: Seo
  metaTitle: Актуальность данных
  metaDescription: Задержка поступления данных по API
  addTitleSuffix: false
  socialImage: /images/data-quality-by-days-KPDV.svg
  metaTags: []
colors: bg-light-fg-dark
styles:
  self:
    flexDirection: col
---
Данные по API теоретически поступают с небольшой задержкой. Иногда задержка может быть значительной.

### Пример

Возьмем все заказы за 19 декабря 2024. На следующий день 20.12.2024 выгружается 1254 заказа. Через день 21-го будет уже 1631 заказ от 19 декабря 2024. И даже спустя 8 дней добавится 2 заказа от той же даты 19 декабря 2024.

![](/images/data-quality-by-days-long-2.PNG)

Пример показывает, что задержка данных может быть очень значительна. На следующий день после даты заказа почти четверть заказов еще недоступна. Только через день от даты заказа 99,5% заказов выгружаются по API. Оставшиеся 0,5% могут появляться в течение следующих 2 недель.

В другое время, в другом ЛК или на другом маркетплейсе задержки могут иметь другой характер. Этот показатель полезно наблюдать для каждой выгрузки для определения актуальности данных.

Дополнительный дефект может быть в случайном отклонении данных. Для примера посмотрим на продолжение таблицы:

![](/images/data-quality-by-days-long-3.PNG)

В 15-й строке, в выгрузке за 3 января, количество заказов выгрузилось на 105 меньше. Если посмотреть эти данные в разрезе артикулов, то можно будет увидеть, что по некоторым артикулам данные не выгрузились, то есть нет заказов, или доля невыгруженных заказов значительная (больше десятой части).

Такой дефект может встретиться в любой день, а не только в ситуации, когда выгружаемые данные больше не меняются.

Приведенные примеры иллюстрируют невозможность построения достоверной аналитики на единственной выгрузке и в первые один-два дня.

##### Дальше

[Приложение SQL](/blog/data-quality-monitoring-case-sql/)

[Расширенная версия статьи](https://habr.com/ru/articles/870530/)

[Жизненный цикл заказа](/blog/case-order-lifecycle-overview/)

##### Назад

[Процент выкупа](/blog/case-percent-buyout-base/)

[Оглавление](/blog/table-of-contents)
