<template>
    <div class="nav" :class="placement === 'footer' ? 'nav--footer' : ''">
        <ul class="nav__list">
            <li class="nav__item">
                <a href="#" class="nav__link opacity">Каталог</a>
            </li>
            <li class="nav__item">
                <a href="#" class="nav__link opacity">Доставка</a>
            </li>
            <li class="nav__item">
                <a href="#" class="nav__link opacity">Оплата</a>
            </li>
            <li class="nav__item">
                <a href="#" class="nav__link opacity">Контакты</a>
            </li>
            <li class="nav__item">
                <a href="#" class="nav__link opacity">О компании</a>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
  name: 'NavMain',
  props: ['placement'],
  data() {
    return {
    }
  },
}
</script>