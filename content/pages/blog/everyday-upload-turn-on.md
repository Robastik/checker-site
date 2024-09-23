---
type: PostLayout
title: Тест выгрузки ЛК по API
date: '2024-09-04'
author: content/data/person1.json
excerpt: Делаем первую тестовую выгрузку ЛК по API →
featuredImage:
  type: ImageBlock
  url: /images/first-unload-api.svg
  altText: Тестовая выгрузка ЛК по API
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
Это завершающий пункт в [чек-листе проверки настроек чекера](/blog/beginning-of-use/). Всё уже проверено и настроено, сейчас мы только протестируем работоспособность системы, чтобы затем можно было включить ежедневную автоматическую выгрузку ЛК селлера по API.

Откройте чекер.

Лист **Ключи API** заполнен на предудущих шагах и например для ВБ выглядит примерно так:

![](/images/test-unload-api-keys.png)

Также на предыдущих шагах была выполнена [активация чекера](/blog/google-script-authorization/).

Перейдите на лист **Параметры** и прокрутите в конец раздела ВБ до выгрузки **Поставки → Список складов**:

![](/images/test-unload-row-getwarehouse.PNG)

Поставки - это [раздел API ВБ](https://openapi.wildberries.ru/supplies/api/ru/). Список складов - [метод этого раздела ](https://openapi.wildberries.ru/supplies/api/ru/#tag/Informaciya-dlya-formirovaniya-postavok/paths/~1api~1v1~1warehouses/get)для выгрузки списка складов ВБ. getListWarehouse - функция реализующая метод **Список складов**. Функция getListWarehouse находится в проекте гугл-скриптов **4eker**, который открывается в меню **Расширения → Apps Script**:

![](/images/test-unload-menu-appsscript.png)

Сделаем тестовую выгрузку списка складов ВБ.

Для запуска выгрузки кликните на чекбокс в ячейке слева от getListWarehouse. При этом в чекбоксе появится галка:

![](/images/test-unload-chekbox-on.png)

Выгрузка начнется со всплывающего уведомления в правом нижнем углу и закончится таким же уведомлением:

![](/images/test-unload-end-process.png)

Теперь перейдем в BigQuery за результатом выгрузки. Для этого переходим по адресу [console.cloud.google.com](https://console.cloud.google.com/), в левом верхнем углу в выпадающем списке выбираем название проекта, ID которого указан на листе чекера Ключи API:

![](/images/test-unload-choose-project.png)

и кликаем BigQuery:

![](/images/test-unload-goto-BQ.png)

В открывшейся консоли BiqQuery находятся данные проекта, ID которого находится на панели навигации:

![](/images/test-unload-project-view.png)

Клик на треугольнике откроет структуру проекта данных:

![](/images/test-unload-bq-navigation-panel.PNG)

Здесь создана папка *wb\_api\_supply* (ВБ-API-Поставки), в которую выгружаются все данные раздела API ВБ Поставки. В папке находится таблица *Список складов\_2024-09-12* со списком складов, выгруженным 13.09.2024 и датированым 12.09.2024 вследствие разницы часовых поясов.

Клик на таблице *Список складов\_2024-09-12* открывает таблицу для просмотра по кнопке PREVIEW в правом меню навигации:

![](/images/test-unload-bq-full-panel.PNG)

Открыть таблицу в гугл-таблице можно в меню **EXPORT → Explore with Sheets**:

![](/images/test-unload-explore-with-sheets.png)

##### Дальше

*Включить ежедневную автоматическую выгрузку всех даннных.*

*Панель управления чекера.*

##### Назад

[Начало работы](/blog/beginning-of-use/)





