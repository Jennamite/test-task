<script setup lang="ts">
import { ref } from "vue";
import { Likes } from "@types";

import service from "@/assets/images/likes/service.webp";
import cleanliness from "@/assets/images/likes/cleanliness.webp";
import atmosphere from "@/assets/images/likes/atmosphere.webp";
import food from "@/assets/images/likes/food.webp";

const buttons: Array<{ icon: string; label: Likes }> = [
  {
    icon: service,
    label: "Service",
  },
  {
    icon: cleanliness,
    label: "Cleanliness",
  },
  {
    icon: atmosphere,
    label: "Atmosphere",
  },
  {
    icon: food,
    label: "Food quality",
  },
];

const likes = ref<Likes[]>([]);

function selectLike(item: Likes) {
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
        :class="{ active: likes.includes(el.label) }"
        @click="
        selectLike(el.label);
          emits('update', likes);
        "
      >
        <span class="like__button_bg">
          <img :src="el.icon" />
        </span>
        <span class="like__button_label">{{ el.label }}</span>
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
    justify-content: space-between;
  }
  &__button {
    background: transparent;
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
    padding: 0;
    &:focus {
      outline: none;
    }
    &.active {
      & .like__button_label {
        color: $color-violet;
      }
      & .like__button_bg {
        background: $color-violet;
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
        transition: background 0.3s ease-in;
      }
    }
    &_label {
      transition: color 0.3s ease-in;
      @include font(12px, 500, 20px, $color-gray-1, Manrope);
    }
  }
}
</style>
