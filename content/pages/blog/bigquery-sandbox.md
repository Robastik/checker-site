---
type: PostLayout
title: Бесплатный и платный тарифы BigQuery
date: '2024-09-05'
excerpt: BigQuery - это бесплатно →
featuredImage:
  type: ImageBlock
  url: /images/big-query-initialization.svg
  altText: BigQuery бесплатно
  elementId: ''
  styles:
    self:
      padding:
        - pt-0
        - pl-0
        - pb-0
        - pr-0
bottomSections: []
slug: bigquery-sandbox
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
  socialImage: /images/big-query-initialization.svg
colors: bg-light-fg-dark
styles:
  self:
    flexDirection: col
---
Начальная страница BigQuery находится по адресу [cloud.google.com/bigquery](https://cloud.google.com/bigquery/). На этой странице находится такой текст об условиях бесплатного использования BigQuery:![](/images/BQ-free-start-300-1.PNG)Недалекие авторы часто интерпретируют этот текст как необходимость как минимум указывать данные карты, а то и оплачивать использование BigQuery. Это совсем не так!

Перейдем в консоль BigQuery по адресу [console.cloud.google.com/bigquery](https://console.cloud.google.com/bigquery).

Если вы совсем новый пользователь и у вас не было ранее создано проекта, нужно будет указать страну (понятно какую страну указывать не стоит) и согласиться с условиями использования облачных сервисов Гугл. Затем нужно создать свой первый проект (кнопка **Создать проект**), указав его название. Также можно сменить автоматически сгенерированный **id** (идентификатор проекта) на более осмысленный:![](/images/create-bq-project.PNG)

После создания проекта по той же ссылке [console.cloud.google.com/bigquery](https://console.cloud.google.com/bigquery) откроется страница с кнопкой для подключения к проекту возможности использования BigQuery:![](/images/bq-enable-api.PNG)
В выпадающем списке вверху выберите нужный проект и подключите BigQuery.

После включения API-интерфейса BigQuery по той же ссылке [console.cloud.google.com/bigquery](https://cloud.google.com/bigquery/) откроется консоль BigQuery:![](/images/sandbox-bq.PNG)

Надпись ПЕСОЧНИЦА (Sandbox) указывает на то, что вы на бесплатном тарифе. С ним связаны следующие ограничения:

*   применяются [стандартные квоты и лимиты](https://cloud.google.com/bigquery/quotas);

*   доступны [бесплатные ресурсы](https://cloud.google.com/bigquery/pricing#free-tier);

*   все датасеты BigQuery установлены на стандартное время хранения 60 дней;

*   не поддерживаются дополнительные возможности: стриминг, DML и Data Transfer.

Установленное время хранения 60 дней означает, что все таблицы, вьюшки и партиции будут автоматически удалены спустя 60 дней после их создания. Для 99% задач любого селлера этого срока более чем достаточно: аналитика делается либо за последнюю неделю, либо за последний месяц.

Если вам нужно снять эти ограничения, достаточно лишь указать данные карты. Подойдут только Visa и MasterCard, выпущенные по белым схемам. Некоторые виртуальные карты, а также UnionPay не подойдут.

Внесение данных карты в платежный профиль все еще не означает, что с нее могут быть автоматически сняты деньги.

##### Дальше

Соберите ключи API по ссылкам указанным в пункте [Шаг 3](/blog/beginning-of-use/).

##### Назад

[Как получить id проекта Big Query](/blog/bigquery-initialization/)
