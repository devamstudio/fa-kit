# Пагинация

Элемент, который используется для переключения стека страниц в проекте. Данный блок простой и создан, скорее для развития в будущем.

```html
<ul class="b-pagination">
    <li class="b-pagination_item"><a href="1">1</a></li>
    <li class="b-pagination_item b-pagination__active"><a href="2">2</a></li>
    <li class="b-pagination_item"><a href="next">next</a></li>
</ul>
```

Классы не имеют привязки к тегам, но важная структура. Например для использования в качестве `nav`, необходимо ссылки обернуть в div.

```html
<nav class="b-pagination">
    <div class="b-pagination_item"><a href="1">1</a></div>
    <div class="b-pagination_item b-pagination__active"><a href="2">2</a></div>
    <div class="b-pagination_item"><a href="next">next</a></div>
</nav>
```