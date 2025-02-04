<template>
  <form action="" class="search">
    <input type="text" class="search__input" placeholder="Поиск по названию картины" @input="searchInput">
    <button class="search__send">Найти</button>
  </form>
</template>

<script>
import { EventBus } from '@/event-bus';

export default {
  name: 'SearchForm',
  components: {
  },
  methods: {
    searchInput(e) {
      EventBus.$emit('searchEvent', e.target.value);
    }
  }
}
</script>

<style scoped>
.search__input {
  padding: 0 60px 0 16px;
  width: calc(416px - 122px);
  box-sizing: border-box;
  border: 1px solid #E1E1E1;
  font-size: 14px;
  outline: none;
  line-height: 1.5;
  background: none;
  color: #343030;
}

.search__input::placeholder {
  color: #9F9F9F;
}

.search__send {
  padding: 13px 36px 14px;
  color: #FFFFFF;
  background: #403432;
  font-size: 14px;
  line-height: 1.5;
  font-weight: bold;
}

@media (max-width: 620px) {
  .search__input {
    width: 100%;
    padding: 0 16px;
  }
}
</style>