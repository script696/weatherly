<br/>

  <h1 align="center">Проект Weatherly</h3>

  <p align="center">
    Приложение 'Прогноз погоды'
    <br/>
    <br/>
   
  </p>


<table >
  <tr >
    <td width="33%">
      <a align="center" href="https://script696.github.io/weatherly/" target="_blank">Посмотреть этот проект</a>
    </td>
  </tr>
</table>

# О проекте
<p >
    <br/>
</p>

![Screen Shot](https://github.com/script696/weatherly/blob/master/src/img/gh-pages/weatherlyMainImg.png)

<a align="center" href="https://www.figma.com/file/uWNXHOHYuJ4PVz2Gw9v4RX/Weatherly---Weather-forecast-application-design-by-Sairaj-Mane-(Community)" target="_blank">Посмотреть макет</a>

Прогноз погоды - приложение, 
    в котором реализован суточный и недельный проноз погоды с возможностью выбора города.
    Для изучения технологий Style Components и Redux Toolkit мною была выбрана идея разработчки небольшого приложения,
    в которое бы хорошо вписалось применение данных концепций.
    В качестве сервиса предоставления погоды был выбран "Open-Meteo" с открытым API. 


## Использованные технологии

- React 
- TypeScript
- Styled Components 
- Redux Toolkit
- Figma
- Синтаксис ES6
- REST API
- Webpack
- Проект подключен к серверу и размещен в интернете с использованием GitHub Pages

## Установка

## 1. Клонируйте репозиторий командой:

### `git@github.com:script696/weatherly.git`

## 2. Установите пакеты командой:

### `npm i`

## 3. Доступные скрипты:

### `npm start`

Запуск приложения в режиме разработки.\
Откройте [http://localhost:3000](http://localhost:3000) чтобы увидеть результат в браузере.

Страница обновится автоматически при внесении изменений.


## Как это можно использовать

1. При нажатии на кнопку меню в верхнем правом углу экрана появится список с жоступным списком городов. Выберите город для отображения погоды в интересующем вас месте
2. В верхней части экрана находится информация о текущем городе, а так же о времени последнего обновления с индикатором. Во время обновления данных или в случае неудачного запроса индикатор становится красным. Время обновляется с каждым новым запросом при переключении города или автоматически каждые 2 минуты.
3. В нижней части экрана находится слайдер с погодой на 24 часа начиная с текущего. Вы можете пролистывать слайдер свайпами влево/вправо
4. В левой части находится вертикальный слайдер для масштабирования экрана приложения. В дефолту масштаб == 50%
5. На странице недельного прогноза погоды отображается информация о погоде на неделю начиная с текущего дня. 
6. В средней части экрана находится кнопка 'Today' для перехода на главную страницу

## Что планируется улучшить

Сделать форму для ввода произвольного названия города с автокомплиттером.

## Авторы

* **Никита Семенов** - *Web Developer* - [Никита Семенов](http://niksemenov.ru/) - **


