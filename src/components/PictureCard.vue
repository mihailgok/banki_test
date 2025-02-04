<template>
  <li class="picture_card" :class="item.active ? '' : 'picture_card--stop'">
    <img :src="item.image" alt="" class="picture_card__img" @click="openModal(item.id)">
    <div class="picture_card__text">
      <h2 class="picture_card__header" @click="openModal(item.id)">{{ item.header }}</h2>
      <div class="picture_card__bottom" v-if="item.active">
        <div class="picture_card__price">
          <span class="picture_card__price__old" v-if="item.isSale">{{ item.oldPrice.toLocaleString() }} $</span>
          <span>{{ item.price.toLocaleString() }} $</span>
        </div>
        <MainButton :pictureId="item.id" />
      </div>
      <div class="picture_card__bottom" v-else>
        <span class="picture_card__sold">Продана на аукционе</span>
      </div>
    </div>
  </li>
</template>


<script>
import MainButton from './MainButton.vue';

export default {
  name: 'PictureCard',
  props: ['item'],
  data() {
    return {
    }
  },
  methods: {
    openModal(id) {
      this.$emit('openModal', id);
    }
  },
  components: {
    MainButton
  }
}
</script>

<style>
.picture_card {
  display: flex;
  flex-direction: column;
  border: 1px solid #E1E1E1;
}

.picture_card--stop {
  opacity: 0.5;
}

.picture_card--stop .picture_card__bottom {
  margin-top: 0;
}

.picture_card__sold {
  font-weight: bold;
  font-size: 16px;
  padding-top: 12px;
}

.picture_card__img {
  height: 160px;
  width: 100%;
  object-fit: cover;
  flex-shrink: 0;
}

.picture_card__header {
  font-size: 18px;
  line-height: 1.5;
  font-weight: 400;
}

.picture_card__text {
  padding: 20px 24px 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.picture_card__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
  margin-top: auto;
  /* gap: 21px; */
}

.picture_card__price {
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 700;
}

.picture_card__price__old {
  text-decoration: line-through;
  color: #A0A0A0;
  font-size: 14px;
  font-weight: 300;
}
</style>