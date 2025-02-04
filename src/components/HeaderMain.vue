<template>
    <header class="header">
        <div class="container header__container">
            <NavMain />

            <SearchForm class="search"/>
        </div>
    </header>
</template>

<script>
import SearchForm from './SearchForm.vue'
import NavMain from './NavMain.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        SearchForm,
        NavMain
    }
}

</script>

<style>
.header {
    padding: 23px 0 24px;
    border-bottom: 1px solid #E1E1E1;
}

.header__container {
    display: flex;
    align-items: center;
}

.nav {
    padding-left: 96px;
    font-size: 14px;
    line-height: 150%;
}

.nav__list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 48px;
}

.search {
  display: flex;
  align-items: stretch;
  margin-left: auto;
}

@media (max-width: 1275px) {
    .nav {
        padding-left: 0;
    }
    .nav__list { 
        gap: 18px;
    }
}

@media (max-width: 1040px) {
    .header__container {
        flex-direction: column-reverse;
        align-items: flex-start;
        gap: 20px;
    }

    .search {
        margin-left: 0;
    }
}

@media (max-width: 620px) {
    .search {
       width: 100%;
    }
}
</style>