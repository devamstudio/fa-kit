# Поля ввода

Речь, собственно, о полях ввода, такие как input, textarea и select.

## Обычные поля ввода

Под обычными подразумевается `<input type="text">` и `<textarea>`.

Для них собрана структура по логике:

1. Поле
    1. Label
    1. Ввод
    1. Подсказка

Что на примере выглядит так:

```html
<div class="field">
    <label class="field__label" for="name">ФИО</label>
    <input class="field__input" id="name" type="text"/>
</div>

<div class="field">
    <label class="field__label" for="select">Select</label>
    <select class="field__input" id="select" type="text">
        <option>Привет мир</option>
        <option>Привет Фармир</option>
        <option disabled="disabled">Привет Тандыр</option>
    </select>
    <span class="field__helper">Помощь утопающего</span>
</div>
```

## Частные случаи

К ним относятся такие поля, как *checkbox* и *radio*

Специально для них предусмотрена возможность использовать соответствующий модификатор:

```html
<div class="field field--checkbox">
    <input class="field__input" type="radio" name="impgroup2"/>
    <span class="field__label">Label</span>
</div>
<div class="field field--radio">
    <input class="field__input" type="radio" name="impgroup2"/>
    <span class="field__label">Label</span>
</div>
```

Сейчас эти модификаторы идентичные, в будущем возможно мы разделим их логику.

### Поле в тексте

Буквально можно вывести поле в тексте и выглядеть это будет так:

```html
<p class="paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam<span class="field field--inline"><label for="i10" class="field__label">Щщщ</label><input type="text" id="i10" class="field__input field__input--no-inset" placeholder="felis"><span class="field__helper">Olofo</span></span>, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
```

Свойства отступов и другие сбрасываются для того, чтобы корректно вывести и не сильно раздвигать строку, где находится поле ввода. Подсказка будет обернута в скобки (). Регулировать порядок можно за счет смену порядка во вложенности, но в этом мало смысла.
