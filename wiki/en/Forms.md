# Формы и поля ввода

## Формы и группы форм

Класс формы задает оформление сборки и fieldset-а. Без обертки с классом `.b-form` не будет использоваться оформление для `b-form_fieldset`.

Класс `b-form_fieldset` по своей сути описывает поведение тега `<fieldset>` с ним или без него. Иными словами, разумно будет использовать конструкцию:

```html
<form class="b-form g-cols__md g-block__background-light g-padding__yy-2 g-margin__bottom-2">
    <fieldset class="b-form_fieldset">
        <legend>Контактные данные</legend>
        ...
    </fieldset>
</form>
```

Так и без родных тегов:

```html
<div class="b-form g-cols__md g-block__background-light g-padding__yy-2 g-margin__bottom-2">
    <div class="b-form_fieldset">
        <div>Контактные данные</div>
        ...
    </div>
</div>
```

С разницей в том, что `<div>Контактные данные</div>` не смогут стать таким же навершием блока формы, как legend. Если вы хотите полного соответствия дизайну, используйте родные теги.

***

Исключение оформления формы составляет класс `.b-form__dark`. Его задача изменить оформление формы и полей внутри нее таким образом, чтобы они подстроились под цветную или темную подложку. Эдакий аналог `.g-text__white`:

<form class="b-form b-form__dark g-block__background-alert g-text__white">
    <fieldset class="b-form_fieldset">
        <legend>Контактные данные</legend>
        <div class="b-field">
            <label class="b-field_label" for="select">Select</label>
            <select class="b-field_input" id="select" type="text">
                <option>Привет мир</option>
                <option>Привет Фармир</option>
                <option disabled="disabled">Привет Тандыр</option>
            </select><span class="b-field_helper">Помощь утопающего</span>
        </div>
        ...
    </fieldset>
</form>

## Поля ввода

Речь, собственно, о полях ввода, такие как input, textarea и select.

### Обычные поля ввода

Под обычными подразумевается `<input type="text">` и `<textarea>`.

Для них собрана структура по логике:

1. Поле
    1. Label
    1. Ввод
    1. Подсказка

Что на примере выглядит так:

```html
<div class="b-field">
    <label class="b-field_label" for="name">ФИО</label>
    <input class="b-field_input" id="name" type="text"/>
</div>

<div class="b-field">
    <label class="b-field_label" for="select">Select</label>
    <select class="b-field_input" id="select" type="text">
        <option>Привет мир</option>
        <option>Привет Фармир</option>
        <option disabled="disabled">Привет Тандыр</option>
    </select>
    <span class="b-field_helper">Помощь утопающего</span>
</div>
```

### Частные случаи

К ним относятся такие поля, как *checkbox* и *radio*

Специально для них предусмотрена возможность использовать, как вертикальным списком, так и инлайновым. Для этого достаточно обернуть их одним из следующих образов:

```html
<!-- Строчный fieldset -->
<div class="b-form_fieldset b-form_fieldset__row">
	<div class="b-field b-field__inline">
		<input class="b-field_input" type="radio" name="impgroup2"/>
	</div>
	<div class="b-field b-field__inline">
		<input class="b-field_input" type="radio" name="impgroup2"/>
	</div>
</div>
<!-- Обычный fieldset с инлайновыми полями -->
<div class="b-form_fieldset b-form_fieldset">
	<div class="b-field b-field__inline">
		<input class="b-field_input" type="radio" name="impgroup3"/>
	</div>
	<div class="b-field b-field__inline">
		<input class="b-field_input" type="radio" name="impgroup3"/>
	</div>
</div>
<!-- Инлайновое поле с label -->
<div class="b-field b-field__inline">
	<input class="b-field_input" id="checkbox" type="checkbox" name="impgroup1"/>
	<label class="b-field_label" for="checkbox">Checkbox inline</label>
</div>
```