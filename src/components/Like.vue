<script setup lang="ts">
import like_atmosphere from "@/assets/images/likes/atmosphere.webp";
import like_food from "@/assets/images/likes/food.webp";
import like_service from "@/assets/images/likes/service.webp";
import like_cleanliness from "@/assets/images/likes/cleanliness.webp";
import { ref } from "vue";

import { Likes } from "@types";

const buttons: Array<{ img: string; text: Likes }> = [
  {
    img: like_service,
    text: "Service",
  },
  {
    img: like_cleanliness,
    text: "Cleanliness",
  },
  {
    img: like_atmosphere,
    text: "Atmosphere",
  },
  {
    img: like_food,
    text: "Food quality",
  },
];

const likes = ref<Likes[]>([]);

function toggle_like(item: Likes) {
  if (likes.value.includes(item)) {
    likes.value = likes.value.filter((el) => el !== item);
  } else {
    likes.value.push(item);
  }
}

const emits = defineEmits<{
  (e: "update", value: Likes[]): Likes[];
}>();
</script>

<template>
  <div class="like">
    <span class="like__title">What did you like?</span>
    <div class="like__buttons">
      <button
        v-for="el in buttons"
        class="like__button"
        :class="{ active: likes.includes(el.text) }"
        @click="
          toggle_like(el.text);
          emits('update', likes);
        "
      >
        <span class="like__button_bg">
          <img :src="el.img" alt="Rate icon" />
        </span>
        <span class="like__button_text">{{ el.text }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.like {
  padding: 20px 20px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  &__title {
    margin: 0 auto;
    @include font(15px, 600, 24px, $color-black, Manrope);
  }
  &__buttons {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__button {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
    &:focus {
      outline: none;
    }
    &.active {
      & .like__button_text {
        color: $color-violet;
      }
      & .like__button_bg {
        background-color: $color-violet;
      }
    }
    &_bg {
      width: 75px;
      height: 75px;
      background: url("@/assets/images/likes/background.webp") #ffffff;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      & img {
        width: 48px;
        height: 48px;
        box-sizing: content-box;
        padding: 13px;
        transition: background-color 0.3s ease-in;
      }
    }
    &_text {
      transition: color 0.3s ease-in;
      @include font(12px, 500, 20px, $color-gray-1, Manrope);
    }
  }
}
</style>
