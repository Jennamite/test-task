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
    <div class="rate_title-container">
      <div class="rate-line" />
      <span class="rate_title">{{ props.title }}</span>
      <div class="rate-line" />
    </div>
    <div class="rate__stars">
      <button
        v-for="e in [1, 2, 3, 4, 5]"
        class="rate__star"
        :class="{ active: rate >= e }"
        @click="
          rate = e;
          emits('update', rate);
        "
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
  &_title {
    @include font(15px, 600, 24px, $color-black, Manrope);
    min-width: max-content;
    &-container {
      display: flex;
      gap: 8px;
      align-items: center;
    }
  }
  &-line {
    width: 100%;
    height: 2px;
    background-color: $color-violet;
  }
  &__stars {
    display: flex;
    padding: 16px;
    gap: 16px;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: $color-white;
  }
  &__star {
    background-color: transparent;
    height: fit-content;
    width: fit-content;
    &.active svg {
      fill: $color-violet;
    }
    & svg {
      width: 36px;
      height: 36px;
      transition: fill 0.3s ease-in;
      fill: #cbd1d7;
    }
  }
}
</style>
