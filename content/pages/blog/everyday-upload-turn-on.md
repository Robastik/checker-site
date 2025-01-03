---
type: PostLayout
title: Ежедневная выгрузка ЛК по API
date: '2024-09-21'
excerpt: Включаем ежедневную выгрузку ЛК по API →
featuredImage:
  type: ImageBlock
  url: /images/WhatsApp Image 2024-09-25 at 10.41.38.jpeg
  altText: Ежедневная выгрузка ЛК по API
  elementId: ''
  styles:
    self:
      padding:
        - pt-0
        - pl-0
        - pb-0
        - pr-0
bottomSections: []
slug: /everyday-upload-turn-on
isFeatured: false
isDraft: false
seo:
  type: Seo
  metaTitle: Тест выгрузки ЛК по API
  metaDescription: Проверка работоспособности системы на первой тестовой выгрузке ЛК по API
  addTitleSuffix: false
  socialImage: /images/BigQuery-integrations-cover.png
  metaTags: []
colors: bg-light-fg-dark
styles:
  self:
    flexDirection: col
---
После проверки всех настроек по [чек-листу](/blog/beginning-of-use/) и [тестовой выгрузки](/blog/first-manual-unloading-bigquery/) для включения ежедневной выгрузки ничего делать не надо - она уже включена при активации чекера.

Если вы выключали ежедневную выгрузку (как это сделать - ниже) то для включения нужно нажать одну кнопку.

Откройте чекер, перейдите на вкладку **Справка** и прокрутите до раздела **Ежедневная выгрузка**, в котором находится кнопка с таким же текстом.

![](/images/everyday-upload-chapter.PNG)

Кликните кнопку **Ежедневная выгрузка**.

При успешном завершении появится сообщение

![](/images/everyday-upload-alert-1.PNG)

Для отключения ежедневной выгрузки перейдите в меню **Расширения → Apps Script**:

![](/images/everyday-upload-menu-appsscript.png)

В левом меню выбрать **Триггеры**:

![](/images/everyday-upload-triggers.png)

Навести курсор на строку с **watchChecker** и кликнуть на появившиеся три точки. В открывшемся меню кликнуть **Удалить триггер:**

\*\*\*\*![](/images/everyday-upload-triggers-delete.png)

##### Дальше

*Панель управления чекера*

##### Назад

[Тест выгрузки ЛК по API](/blog/first-manual-unloading-bigquery/)

[Оглавление](/blog/table-of-contents)
