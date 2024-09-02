---
title: 'Как все устроено: краткий обзор'
slug: short-overview
date: '2024-08-25'
excerpt: >-
  Для начала использования сделайте копию файла гугл-таблицы, внесите в нее
  ключи API от своих ЛК и активируйте скрипт, затем пройдите авторизацию и
  получите первую выгрузку данных по API. Не требуется регистрации и предоплаты.
  Кликните здесь, чтобы узнать подробнее →
featuredImage:
  url: /images/abstract-feature2.svg
  altText: Thumbnail
  type: ImageBlock
  styles:
    self:
      borderRadius: medium
isFeatured: true
seo:
  metaTitle: The Top Ten Lessons We’ve Learned Since Our Initial Launch
  metaDescription: You can add the excerpt and main keywords of your blog post here.
  socialImage: /images/abstract-feature2.svg
  type: Seo
colors: bg-light-fg-dark
styles:
  self:
    flexDirection: row
type: PostLayout
author: content/data/person1.json
---
Чекер - это сервис для выгрузки по API данных личного кабинета селлера, в том числе ВБ, Озон, Мой склад и MPstats.

Чекер полностью реализован на инфраструктуре Гугл: весь код написан на [Apps Script](https://developers.google.com/apps-script), цифры выгружаются в хранилище данных [Big Query](https://cloud.google.com/bigquery), откуда они доступны для привычных всем [Google Sheets](https://support.google.com/docs/answer/6000292?hl=en-gh\&co=GENIE.Platform%3DDesktop) и Microsoft Excel, для дашбординга в [Google Looker](https://lookerstudio.google.com/gallery) (облачный BI от гугл), в Tableau и Power BI, для ИИ-ассистента [Gemini](https://workspace.google.com/solutions/ai/?utm_source=geminiforbusiness\&utm_medium=et\&utm_campaign=Gemini-page-crosslink\&utm_content=forbusiness) и для всех других приложений экосистемы Гугл.

Гугл предоставляет огромные бесплатные лимиты на основные сервисы, которых достаточно для нескольких ЛК с оборотами в сотни млн/мес.

Чекер конфиденциален: данные выгружаются непосредственно в ваш гугл-аккаунт принадлежащим вам скриптом, так что Чекер никогда не получает ваших данных, в том числе не получает ключи API. Сервису не требуется предоставлять вообще никакие доступы.

Чекер прост: для начала использования нужно скопировать [гугл-табличку](https://www.rbc.ru/) и внести в нее ключи API. После этого уже можно выгрузить все данные ЛК вручную и включить автоматическую ежедневную выгрузку.

Чекер удобен: одного аккаунта гугл достаточно для выгрузки нескольких кабинетов ВБ, Озон, Мой склад и MPstats одновременно.

По всем вопросам поможет [техподдержка Чекера в Telegram](https://t.me/+rYEGldKzj3M3NTBi).

Для начала работы не требуется регистрация, данные карточки и платежные реквизиты.

Подпишитесь на [Чекер в tg](https://t.me/official_4eker).

Ознакомьтесь с разделом Начало работы.
