<template>
  <div id="app">
    <Header />

    <section class="pictures">
      <div class="container">
        <h1 class="pictures__header">Картины эпохи Возрождения</h1>
        <ul class="pictures__list">
          <PictureCard :item="item" v-for="item in filteredItems" :key="item.id" @openModal="openModal" />
        </ul>
      </div>
    </section>

    <ModalWindow :activePicture="activePicture" :modalOpen="modalOpen" @closeModal="closeModal" />

    <Footer />
  </div>
</template>

<script>
import Vue from 'vue';
import { EventBus } from '@/event-bus';


import PictureCard from './components/PictureCard.vue';
import Header from './components/HeaderMain.vue'
import Footer from './components/FooterMain.vue';
import ModalWindow from './components/ModalWindow.vue';


Vue.prototype.$basket = JSON.parse(localStorage.getItem("pictureBasket"));

export default {
  name: 'App',
  data() {
    return {
      items: [
        {
          id: 1,
          image: '/img/image0.jpg',
          slides: ["/img/image0/image0_1.jpeg", "/img/image0/image0_2.jpg"],
          desc: "«Рождение Венеры» — это картина итальянского художника Сандро Боттичелли, которую он завершил приблизительно к 1485 году.",
          header: '«Рождение Венеры» Сандро Боттичелли',
          price: 1000000,
          isSale: true,
          oldPrice: 2000000,
          active: true,
        },
        {
          id: 2,
          image: '/img/image1.jpg',
          slides: ["/img/image1/image1_1.jpeg", "/img/image1/image1_2.jpg"],
          desc: "«Тайная вечеря» — монументальная роспись Леонардо да Винчи, изображающая последнюю трапезу Христа с учениками.",
          header: '«Тайная вечеря»  Леонардо да Винчи',
          price: 3000000,
          isSale: false,
          active: true,
        },
        {
          id: 3,
          image: '/img/image2.jpg',
          slides: ['/img/image2.jpg', "/img/image2/image2_0.jpg", "/img/image2/image2_1.webp", "/img/image2/image2_2.jpg"],
          desc: "«Сотворение Адама» — фреска Микеланджело, написанная около 1511 года.",
          header: '«Сотворение Адама» Микеланджело',
          price: 5000000,
          isSale: true,
          oldPrice: 6000000,
          active: true,
        },
        {
          id: 4,
          image: '/img/image3.jpg',
          slides: ["/img/image3/image3_0.jpeg", "/img/image3/image3_1.jpg",],
          desc: "Урок анатомии доктора Тульпа» — картина выдающегося голландского живописца Рембрандта ван Рейна, написанная в 1632 году.",
          header: '«Урок анатомии» Рембрандт',
          price: 3000000,
          isSale: false,
          active: false,
        }
      ],
      activePicture: {
        slides: ["/img/image0.jpg", "/img/image1.jpg", "/img/image2.jpg", "/img/image3.jpg",],
        desc: "«Урок анатомии»  Рембрандт «Урок анатомии»  Рембрандт «Урок анатомии»  Рембрандт «Урок анатомии»  Рембрандт «Урок анатомии»  Рембрандт «Урок анатомии»  Рембрандт",
        title: "«Урок анатомии»  Рембрандт",
        price: 3000000,
        oldPrice: 0,
      },
      modalOpen: false,
      searchString: "",
    }
  },
  computed: {
    filteredItems() {
      let newArr = this.items;

      if (this.searchString) {
        newArr = this.items.filter(el => el.header.toLowerCase().indexOf(this.searchString.toLowerCase()) !== -1)
      }

      return newArr;
    }
  },
  created() {
    EventBus.$on('searchEvent', value => {
      this.searchString = value;
    });
    // localStorage.setItem("pictureBasket", null);
  },
  methods: {
    openModal(id) {
      const selectedPicture = this.items.filter(el => el.id === id)[0]

      this.activePicture = {
        slides: selectedPicture.slides,
        desc: selectedPicture.desc,
        title: selectedPicture.header,
        price: selectedPicture.price,
        oldPrice: selectedPicture.oldPrice,
      }

      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    }
  },
  components: {
    Header,
    PictureCard,
    Footer,
    ModalWindow
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');

@import url('./assets/css/normalize.css');
@import url('./assets/css/main.css');

#app {
  font-family: Merriweather, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  width: calc(1216px + 44px);
  padding: 0 22px;
  max-width: 100%;
  margin: 0 auto;
}


.pictures {
  padding: 45px 0 320px;
}

.pictures__header {
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 39px;
}

.pictures__list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 32px;
}

@media (max-width: 1275px) {
  .pictures {
    padding-bottom: 100px;
  }

  .pictures__list {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
  }
}

@media (max-width: 1040px) {
  .pictures__list {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 620px) {
  .pictures__list {
    grid-template-columns: 1fr;
  }
}
</style>
