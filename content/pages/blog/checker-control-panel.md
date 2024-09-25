---
type: PostLayout
title: Панель управления чекера
date: '2024-09-02'
author: content/data/person1.json
excerpt: >-
  Инструкция по получению id проекта BigQuery для вставки на лист чекера Ключи
  API →
featuredImage:
  type: ImageBlock
  url: /images/BigQuery-integrations-cover.png
  altText: id проекта BigQuery
  elementId: ''
  styles:
    self:
      padding:
        - pt-0
        - pl-0
        - pb-0
        - pr-0
bottomSections: []
slug: /checker-control-panel
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
Если облачный проект Гугл уже создан, можно перейти к следующему пункту. Чтобы проверить наличие проекта и его состояние перейдите по ссылке [console.cloud.google.com/bigquery](https://console.cloud.google.com/bigquery).

### Создание проекта

Перейдем в консоль BigQuery по адресу [console.cloud.google.com/bigquery](https://console.cloud.google.com/bigquery).

Если вы совсем новый пользователь и у вас не было ранее создано проекта, нужно будет указать страну (понятно какую страну указывать не стоит) и согласиться с условиями использования облачных сервисов Гугл. Затем нужно создать свой первый проект (кнопка **Создать проект**), указав его название. Также можно сменить автоматически сгенерированный **ID** (идентификатор проекта) на более осмысленный:![](/images/create-bq-project.PNG)

> Указанный при создании проекта идентификатор проекта **ID** нужно будет вставлять в чекере на листе **Ключи API** в поле **проект  BigQuery**.

### Подключение в проект BigQuery

После создания проекта по той же ссылке [console.cloud.google.com/bigquery](https://console.cloud.google.com/bigquery) откроется страница с кнопкой для подключения к проекту возможности использования BigQuery:![](/images/bq-enable-api.PNG)
В выпадающем списке вверху выберите нужный проект и нажмите кнопку для подключения BigQuery.

### Получение идентификатора проекта из списка

После включения API-интерфейса BigQuery по ссылке [console.cloud.google.com/bigquery](https://cloud.google.com/bigquery/) откроется консоль BigQuery. Откройте выпадающий список проектов вверху:![](/images/console-bq-dropdown-list.png)

В открывшемся списке две колонки: в левой названия проектов и в правой их идентификаторы **ID**:![](/images/bq-list-projects.PNG)

Скопируйте ID нужного проекта в чекер на лист **Ключи API** в поле **проект BigQuery**.

##### Дальше

[Бесплатный и платный тарифы BigQuery](/blog/bigquery-sandbox/)

##### Назад

[Начало работы](/blog/beginning-of-use/)
