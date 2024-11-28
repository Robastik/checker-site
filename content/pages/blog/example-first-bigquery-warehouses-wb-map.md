---
type: PostLayout
title: Склады ВБ на карте
date: '2024-11-28'
author: content/data/person1.json
excerpt: Инструкция для копирования файла гугл-таблицы →
featuredImage:
  type: ImageBlock
  url: /images/duplication-spreadsheets-schema.svg
  altText: копирование таблицы гугл
  elementId: ''
  styles:
    self:
      padding:
        - pt-0
        - pl-0
        - pb-0
        - pr-0
bottomSections: []
slug: /example-first-bigquery-warehouses-WB-map
isFeatured: false
isDraft: false
seo:
  type: Seo
  metaTitle: Инструкция для копирования файла гугл-таблицы
  metaDescription: Инструкция для копирования файла гугл-таблицы
  addTitleSuffix: false
  metaTags: []
colors: bg-light-fg-dark
styles:
  self:
    flexDirection: col
---
В этом примере приведена основная схема подготовки расчета в BigQuery для последующего открытия уже готовых данных в гугл-таблице.

Операции с данными в BigQuery пишутся на [языке SQL](https://cloud.google.com/bigquery/docs/introduction-sql). SQL - это аббревиатура от англ. **S**tructured **Q**uery **L**anguage («язык структурированных запросов»). SQL проще и понятнее, чем многоэтажные формулы гугл-таблиц, и расчет таблицы в SQL практически никогда не зависает.

В качестве данных используем выгрузку [**ВБ →Заказы FBS → Склады → Получить список складов WB**](https://dev.wildberries.ru/openapi/orders-fbs#tag/Sklady/paths/~1api~1v3~1offices/get). На листе чекера **Параметры** находим, что данные выгружаются в таблицу BigQuery с названием **Список складов ВБ** в датасет **wb\_api\_ordersFBS**.

Посмотрим эту таблицу в BigQuery: в адресной строке баузера вставляем <https://console.cloud.google.com/> и в открывшейся странице кликаем BigQuery:![](/images/BQ.PNG)

В открывшейся консоли BQ проверяем, что находимся в том проекте BigQuery, ID которого указан в чекере:![](/images/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82.PNG)

В поле поиска вводим название таблицы:![](/images/%D0%9E%D0%BA%D0%BD%D0%BE%20%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0.PNG)

Нажимаем Enter и получаем выгруженные таблицы:![](/images/%D0%9F%D0%BE%D0%B8%D1%81%D0%BA.PNG)

В папке wb\_api\_supply выгружены склады для ФБО. Наши таблицы находятся в папке *wb\_api\_ordersFBS*. Можно кликнуть на любую таблицу *Список складов ВБ* и посмотреть ее содержимое.

Сделаем запрос для получения данных из таблицы. Для этого нажмем **+** в правой панели:![](/images/%D0%97%D0%B0%D0%BF%D1%80%D0%BE%D1%81.PNG)

и создадим новый пустой запрос:![](/images/empty-query.PNG)

Вставим текст запроса:![](/images/first-query-1.PNG)

Запустим выполнение запроса кнопкой **▶️RUN** и получим содержимое всех таблиц за все даты:![](/images/first-query-result-1.PNG)В таблице есть географические координаты складов. Используем их для того, чтобы показать отметки складов на географической карте: где располагаются обычные склады, где СГТ и КГТ.

Для этого создадим колонку с надписями для меток складов: пусто для обычных, **С** для СГТ и **К** для КГТ:

```
CASE    
 WHEN cargoType = 1 THEN ''
 WHEN cargoType = 2 THEN 'С' 
 WHEN cargoType = 3 THEN 'К' 
 ELSE '?'  
END AS glyph
```

Создадим колонку с разными цветами для меток складов:

```
CASE    
 WHEN cargoType = 1 THEN '#0ACF00' --оранж на зеленом    
 WHEN cargoType = 2 THEN '#04859D' --песочный на сером    
 WHEN cargoType = 3 THEN '#5A0DAC' --салат на фиолет    
 ELSE '#FFFFFF'  
END AS background
```

Сделаем колонку с текстом для всплывающей надписи, в которой объединим название склада и его адрес:

```
CONCAT(name,'\n',address) as title
```

Выгружать будем данные не за все даты, а только за последнюю выгруженную дату. Для этого отбираем таблицы выгруженные за последние 7 дней:

```
SELECT   
 *, _TABLE_SUFFIX  
FROM   
 `imposing-timer-422110-h5.wb_api_ordersFBS.Список складов ВБ_*`  
WHERE  
 DATE(_TABLE_SUFFIX) > DATE_ADD(CURRENT_DATE(), INTERVAL -7 DAY)
```

и из них выбираем самую свежую:

```
SELECT 
 *  
FROM 
 RecentTablesFBS  
WHERE 
 _TABLE_SUFFIX = (
   SELECT 
    MAX(_TABLE_SUFFIX)     
   FROM 
    RecentTablesFBS  
 )
```

Запрос готов, теперь откроем его в гугл-таблице.

Для этого выполняем запрос кнпкой **▶️RUN** и в выпадающем списке выбираем сохранение в Google Sheets:

![](/images/save-query-results-google-sheets.PNG)

Во всплывающем окне получаем название созданной гугл-таблицы кликаем на ссылку и открываем ее:![](/images/name-saved-sheet-result-query.PNG)

Текст запроса полностью находится в **Настройке подключения**:



Для отображения полученных данных на карте добавляем код в Apps Script и 

Карта отрисовывается в гугл-таблице справа при ее открытии.
