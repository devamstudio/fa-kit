# Управление медиаобъектами

Медиа представляет из себя:
1. Изображения
2. Видео
3. Канвасы

## Изображения

И для изображений мы сделали специальный класс-модификатор для того, чтобы ограничить его в рамках вписанной области. Это `.g-image__fluid`. Изображение с таким классом займет место ограничиваясь область, например:

```html
<div class="g-container">
	<div class="g-row">
		<div class="g-cols__xs-4"><img src="" alt="" class="g-image__fluid"></div>
		<div class="g-cols__xs-4"><img src="" alt="" class="g-image__fluid"></div>
		<div class="g-cols__xs-4"><img src="" alt="" class="g-image__fluid"></div>
	</div>
</div>
```