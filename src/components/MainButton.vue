<template>
  <button class="mainbtn" :class="isActive ? 'active' : ''" @click="btnClicked">
    <svg v-if="isActive" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_21232_57)">
        <path d="M16.5315 4.80937L7.63341 14.237L3.34814 10.1924" stroke="#F4F6F9" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_21232_57">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <span v-if="isActive">В корзине</span>

    <span class="loading" v-else-if="isLoading">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <radialGradient id="a12" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)">
          <stop offset="0" stop-color="#F4F6F9"></stop>
          <stop offset=".3" stop-color="#F4F6F9" stop-opacity=".9"></stop>
          <stop offset=".6" stop-color="#F4F6F9" stop-opacity=".6"></stop>
          <stop offset=".8" stop-color="#F4F6F9" stop-opacity=".3"></stop>
          <stop offset="1" stop-color="#F4F6F9" stop-opacity="0"></stop>
        </radialGradient>
        <circle transform-origin="center" fill="none" stroke="url(#a12)" stroke-width="15" stroke-linecap="round"
          stroke-dasharray="200 1000" stroke-dashoffset="0" cx="100" cy="100" r="70">
          <animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0"
            keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform>
        </circle>
        <circle transform-origin="center" fill="none" opacity=".2" stroke="#F4F6F9" stroke-width="15"
          stroke-linecap="round" cx="100" cy="100" r="70"></circle>
      </svg>
    </span>
    <span v-else>Купить</span>

  </button>
</template>

<script>
export default {
  name: 'MainButton',
  props: ['pictureId'],
  data() {
    return {
      isActive: false,
      isLoading: false,
    }
  },
  methods: {
    btnClicked() {
      if (this.isActive)
        return

      this.isLoading = true;

      setTimeout(() => {
        let allPictures = JSON.parse(localStorage.getItem("pictureBasket"));
        if (!allPictures) {
          allPictures = [];
        }

        if (allPictures.indexOf(this.pictureId) === -1)
          allPictures.push(this.pictureId);

        this.$basket = allPictures;
        console.log(this.$basket)

        localStorage.setItem("pictureBasket", JSON.stringify(allPictures));
        this.isActive = true;
        this.isLoading = false;
      }, 2000);
    }
  },
  created() {
    if (!this.$basket)
      return

    if (this.$basket.indexOf(this.pictureId) !== -1)
      this.isActive = true;
  },
  components: {

  }
}

</script>

<style>
.mainbtn {
  color: #F4F6F9;
  padding: 13px;
  width: 118px;
  display: flex;
  align-items: center;
  background: #382E2B;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  transition: background 0.3s;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 700;
  white-space: nowrap;
}

.mainbtn.active {
  background: #5B3A32;
}

.mainbtn>svg {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
}

.mainbtn:hover {
  background: #776763;
}

.mainbtn:disabled {
  background: #C1B4B1;
  pointer-events: none;
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading svg {
  width: 21px;
  height: 21px;
}
</style>