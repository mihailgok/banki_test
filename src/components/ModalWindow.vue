<template>
    <div class="modal" @click.self="closeModal" v-show="modalOpen">
        <div class="modal__container">
            <Splide :key="activePicture.title" :options="{ rewind: true, perPage: 1 }" aria-label="My Favorite Images"
                class="modal__swiper">
                <SplideSlide class="modal__slide" v-for="slide in activePicture.slides" :key="slide">
                    <img :src="slide" alt="Sample 1" class="modal__slide__img">
                </SplideSlide>
            </Splide>
            <h3 class="modal__header">{{ activePicture.title }}</h3>
            <p class="modal__price">
                <span v-if="activePicture.oldPrice" class="modal__price__old">{{ activePicture.oldPrice.toLocaleString()
                    }} $</span>
                <span>{{ activePicture.price.toLocaleString() }} $</span>
            </p>
            <p class="modal__desc">{{ activePicture.desc }}</p>
        </div>
    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';


import '@splidejs/splide/dist/css/splide.min.css';
export default {
    props: ['activePicture', 'modalOpen'],
    data() {
        return {

        }
    },
    methods: {
        closeModal() {
            this.$emit('closeModal');
        },
    },
    components: {
        Splide,
        SplideSlide,
    }
}
</script>

<style>
.modal {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.modal__container {
    background: #F6F3F3;
    padding: 50px;
    width: 60%;
}

.modal__swiper {
    margin-bottom: 25px;
}

.modal__slide__img {
    width: 100%;
    height: 400px;
    object-fit: cover;
}

.modal__header {
    font-size: 22px;
    margin-bottom: 15px;
}

.modal__price {
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
}

.modal__price__old {
    text-decoration: line-through;
    font-size: 15px;
}


@media (max-width: 1275px) {
    .modal__container {
        width: 75%;
        padding: 20px;
    }
}

@media (max-width: 620px) {
    .modal__slide__img {
        height: 250px;
    }
    .modal__container {
        width: 85%;
        padding: 15px;
    }
}
</style>