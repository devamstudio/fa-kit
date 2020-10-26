# Уведомления

Данные стили предназначены для того, чтобы несколько упростить задачу при сборке интерфейсов. Поэтому можно без зазрения совести убрать их из проекта и добавить при необходимости.

```html
<div class="notification notification--red">
    <span class="notification__icon">i</span>
    <span class="notification__title">Сообщение</span>
    <p class="notification__message">От <a href="#!" class="link">инопланетян</a></p>
    <button class="notification__close-button">X</button>
</div>
```

Отступы формируются за счет gap-ов, если элементы отсутствуют, например icon или close-button. А в случае их наличия именно у этих элементов формиурются отступы слева и справа.

Компонент имеет жесткую структуру в плане заголовка и сообщения, при этом может быть сверстано различными тегами (например для семантической верстки). Можно сделать, например так:

```html
<div class="notification notification--red">
    <h1 class="notification__icon">i</h1>
    <h1 class="notification__title">Сообщение</h1>
    <p class="notification__message">От <a href="#!" class="link">инопланетян</a></p>
    <h1 class="notification__close-button">X</h1>
</div>
```

И при этом оформление должно отличаться минимально.

Для достижения оптимального результата мы рекомендуем вставлять иконки, соответствующие макету.
