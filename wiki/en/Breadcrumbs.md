# Хлебные крошки

Крошки — стандартный атрибут интерфейса. Он помогает ориентироваться в проекте пользователю.

Для использования в качестве списков (ul\li) убраны их отличительные черты (маркер и отступы). А так как внутри элементы списка типа `inline-block`, то можно использовать выравнивание классом типа `.g-text__center`.

```html
<ul class="b-breadcrumbs">
    <li class="b-breadcrumbs_item b-breadcrumbs_item__link"><a href="#">Ссылка назад</a></li>
    <li class="b-breadcrumbs_item b-breadcrumbs_item__link"><span>Или тут конец</span></li>
    <li class="b-breadcrumbs_item">Тут конец</li>
</ul>
<ul class="b-breadcrumbs g-text__center">
    <li class="b-breadcrumbs_item b-breadcrumbs_item__link"><a href="#">Ссылка назад</a></li>
    <li class="b-breadcrumbs_item b-breadcrumbs_item__link"><span>Или тут конец</span></li>
    <li class="b-breadcrumbs_item">Тут конец</li>
</ul>
```