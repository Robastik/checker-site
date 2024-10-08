---
title: Общие сведения и содержание
slug: short-overview
date: '2024-08-25'
excerpt: >-
  Для начала использования сделайте копию файла гугл-таблицы, внесите в нее
  ключи API от своих ЛК и активируйте скрипт; затем пройдите авторизацию и
  получите первую выгрузку данных по API. Не требуется регистрации и предоплаты.
  Клик здесь, чтобы узнать подробнее → 
featuredImage:
  url: /images/general-and-content.svg
  altText: Содержание справочных материалов чекера
  type: ImageBlock
  styles:
    self:
      borderRadius: medium
isFeatured: true
seo:
  metaTitle: Содержание справочной документации
  metaDescription: Оглавление документации
  socialImage: /images/beginning-of-all-google-workspace.svg
  type: Seo
colors: bg-light-fg-dark
styles:
  self:
    flexDirection: row
type: PostLayout
author: content/data/person1.json
---
**Чекер** - это сервис для выгрузки по API данных личного кабинета селлера, в том числе ВБ, Озон, Мой склад и MPstats.

**Чекер** полностью реализован на инфраструктуре Гугл: весь код написан на [Apps Script](https://developers.google.com/apps-script), цифры выгружаются в хранилище данных [Big Query](https://cloud.google.com/bigquery), откуда они доступны для привычных всем [Google Sheets](https://support.google.com/docs/answer/6000292?hl=en-gh\&co=GENIE.Platform%3DDesktop) и Microsoft Excel, для дашбординга в [Google Looker](https://lookerstudio.google.com/gallery) (облачный BI от гугл), в Tableau и Power BI, для ИИ-ассистента [Gemini](https://workspace.google.com/solutions/ai/?utm_source=geminiforbusiness\&utm_medium=et\&utm_campaign=Gemini-page-crosslink\&utm_content=forbusiness) и для всех других приложений экосистемы Гугл.

Гугл предоставляет огромные бесплатные лимиты на основные сервисы, которых достаточно для нескольких ЛК с оборотами в сотни млн/мес.

**Чекер** конфиденциален: данные выгружаются непосредственно в ваш гугл-аккаунт принадлежащим вам скриптом, так что Чекер никогда не получает ваших данных, в том числе не получает ключи API.

**Чекер** прост: для начала использования нужно скопировать [гугл-табличку](/blog/copying-spreadsheet-file/) и внести в нее ключи API. После этого уже можно выгрузить все данные ЛК вручную и включить автоматическую ежедневную выгрузку.

**Чекер** удобен: одного аккаунта гугл достаточно для выгрузки нескольких кабинетов ВБ, Озон, Мой склад и MPstats одновременно.

Для начала работы с Чекером **не требуется регистрация**, данные карточки и платежные реквизиты.

По всем вопросам поможет [**техподдержка**](https://t.me/techsupport_4eker) Чекера в Telegram.

**Подпишитесь** на [новости Чекера в tg](https://t.me/official_4eker) для получения обновлений, новых функций, аналитических таблиц, приемов работы, финансовых расчетов и их разборов.

**Присоединяйтесь** к [сообществу](https://t.me/community_4eker) Чекера для обмена опытом по работе с цифрами.

Дальше переходите к [**Началу работы.**](/blog/beginning-of-use/)

### Оглавление

#### справочных материалов

[Начало работы](/blog/beginning-of-use/) *Предварительная настройка и подготовительные действия*

   [Скопировать гугл-таблицу](/blog/copying-spreadsheet-file/) *Получение собственного экземпляра чекера*

   [id проекта Big Query](/blog/bigquery-initialization/) *Получение id проекта BigQuery для вставки на лист чекера Ключи API*

      [Big Query бесплатно](/blog/bigquery-sandbox/) *Бесплатный и платный тарифы Big Query*

   [Активация чекера](/blog/google-script-authorization/) *Подготовка чекера к ручной и ежедневной автоматической выгрузке*

   [Тестовая выгрузка ЛК по API](/blog/first-manual-unloading-bigquery/) *Проверка работоспособности настроек*

[Автоматическая выгрузка](/blog/everyday-upload-turn-on/) *Включение ежедневной автоматической выгрузки ЛК по API*

[Контрольная панель чекера](/blog/checker-control-panel/) *Настройка, запуск и контроль результатов выгрузок*

   [Лист **Параметры**](/blog/parameters-list-control-panel/) *Функции и организация данных*

[*Создание аналитическх таблиц*](/blog/creation-analytical-tables-general-guide/) *Общий подход и порядок действий*

[Примечания к выгрузкам](/blog/notes-for-uploads/) *Особенности реализации*

   [Озон ](/blog/ozon-uploads-notes/)*Примечание к выгрузкам Озон*

      [Озон → Аналитические отчёты → Данные аналитики](/blog/ozon-analytical-reports-data/)

   

   
