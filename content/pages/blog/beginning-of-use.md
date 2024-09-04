---
type: PostLayout
title: Начало работы
date: '2024-09-02'
author: content/data/person1.json
excerpt: >-
  Шаги для начала использования Чекера: ключи API, настройка гугл-аккаунта и
  авторизация скрипта. Подробнее →
featuredImage:
  type: ImageBlock
  url: /images/beginning-of-all-google-workspace.svg
  altText: Thumbnail
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
slug: beginning-of-use
isFeatured: false
isDraft: false
seo:
  type: Seo
  metaTitle: lorem-ipsum
  metaDescription: lorem-ipsum
  addTitleSuffix: false
  metaTags: []
colors: bg-light-fg-dark
styles:
  self:
    flexDirection: col
---
Для начала работы нужно проверить настройки в гугл-облаке. В результате у вас будет собрана связка гугл-сервисов для выгрузки по API данных из ЛК селлера в гугл-облако.

Чекер полностью основан на сервисах Гугл. Поэтому, если у вас еще нет **аккаунта Гугл**, то его нужно сделать - [здесь](https://support.google.com/accounts/answer/27441?hl=ru-ru) написано как. Если при регистрации возникает проблема с номером телефона, решение можно [найти](https://ya.ru/search/?text=%D0%BA%D0%B0%D0%BA+%D0%B7%D0%B0%D1%80%D0%B5%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F+%D0%B2+%D0%B3%D1%83%D0%B3%D0%BB+%D0%B1%D0%B5%D0%B7+%D0%BD%D0%BE%D0%BC%D0%B5%D1%80%D0%B0+%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%D0%B0\&lr=74\&src=suggest_B).

#### Шаг 1

**Панель управления** Чекера находится в [гугл-таблице](https://docs.google.com/spreadsheets/d/1JOyAG5IBxVWZKnmDqZgcxdUHZlKRVU9vn6e3ico7bE8/edit?usp=sharing). На вкладках этой таблицы находится вся информация о выгрузках, их настройки и управление ими. Далее и везде эта таблица называется **чекер** - с маленькой буквы, чтобы отличать от названия сервиса **Чекер** - который всегда с заглавной. Сделайте копию этой таблицы. Если не знаете как копировать гугл-таблицу - посмотрите.

#### Шаг 2

Чекер выгружает данные в хранилище данных Big Query. Оттуда они в два клика попадают в гугл-таблицы или используются другими способами. Вам необходимо получить **id** вашего **проекта Big Query**, в котором будут храниться данные. Смотрите как это сделать.

#### Шаг 3

Для выгрузки данных по API используются специальные пароли, которые называются **ключи API** или **токены**. Ключи API (токены) можно получить в своем личном кабинете. Где они находятся в ЛК и как их там получить написано в справочных материалах каждого сервиса: [**ВБ**](https://openapi.wildberries.ru/general/authorization/ru/?ysclid=m0lqy3a2ib366798734), [**Озон**](https://seller-edu.ozon.ru/api-ozon/how-to-api), [**Мой склад**](https://dev.moysklad.ru/doc/api/remap/1.2/?ysclid=m0lr4f4lqp670379825#mojsklad-json-api), [**mpStats**](https://mpstats.io/integrations). Если в официальной справке написано непонятно или она устарела и не соответствует текущему устройству ЛК, тогда нужно искать по фразе ["*как получить ключ апи вб* (озон, мой склад, мпСтатс - указать нужное)"](https://ya.ru/search/?text=%D0%BA%D0%B0%D0%BA+%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C+%D0%BA%D0%BB%D1%8E%D1%87+%D0%B0%D0%BF%D0%B8+%D0%B2%D0%B1\&lr=74).

#### Шаг 4

Полученные на предыдущем шаге ключи API (токены) и полученный на втором шаге id вашего проекта BigQuery нужно вставить в **форму**, расположенную на листе ***Ключи API*** гугл-таблицы ***чекер***, скопированной на шаге 1. Подробная инструкция здесь.

#### Шаг 5

Гугл очень заботится о безопасности своих пользователей. Поэтому в максимально тревожной форме предупреждает о возможных рисках. Прежде, чем запустится выгрузка по API, необходимо просмотреть эти предупреждения и подтвердить свои действия как потенциально опасные. Как **пройти авторизацию** написали здесь.

На этом подготовка закончена. Можно перейти к ручной выгрузке, включить автоматическую ежедневную выгрузку и познакомиться с назначением листов чекера.
