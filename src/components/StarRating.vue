<script setup lang="ts">
import { ref } from "vue";
import star from "@/assets/icons/star.svg";

const props = defineProps<{ title: string }>();
const emits = defineEmits<{
  (e: "update", value: number): number;
}>();

const rate = ref<number>(0);
</script>

<template>
  <div class="rate">
    <h2 class="rate__title-wrapper">
      <span class="rate__title">{{ props.title }}</span>
    </h2>
    <div class="rate__star-container">
      <button
        v-for="e in [1, 2, 3, 4, 5]"
        class="rate__star"
        :class="{ active: rate >= e }"
        @click="emits('update', (rate = e))"
      >
        <star />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.rate {
  padding: 20px 20px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  &__title {
    @include font(15px, 600, 24px, $color-black, Manrope);
    &-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 100%;
      text-align: center;
      border-bottom: 1px solid #000;
      margin: 12px 0 12px;
      span {
        padding: 0 8px;
        position: absolute;
        background: #f8f9fd;
      }
    }
  }

  &__star {
    background: transparent;
    height: fit-content;
    width: fit-content;
    outline: none;
    &-container {
      display: flex;
      padding: 16px;
      gap: 16px;
      align-items: center;
      justify-content: center;
      border-radius: 20px;
      background: $color-white;
    }
    &.active svg {
      fill: $color-violet;
    }
    & svg {
      width: 36px;
      height: 36px;
      transition: fill 0.3s ease-in;
      fill: #cbd1d7;
    }
    &:focus {
      box-shadow: 2px 2px 4px gray;
      border-radius: 12px;
    }
  }
}
</style>
