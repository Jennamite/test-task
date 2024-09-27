<script setup lang="ts">
import closeIcon from "@/assets/icons/close.svg";
const emits = defineEmits<{
  (e: "close", value: void): void;
}>();
</script>

<template>
  <div class="modal" @click.self="emits('close')">
    <div class="modal__container">
      <button class="modal__close" @click="emits('close')">
        <closeIcon />
      </button>
      <img class="modal__img" src="@/assets/images/swen.webp" alt="swen" />
      <span class="modal__title">Profit goes to SWEN</span>
      <span class="modal__info">By leaving a tip, you take care of nature</span>
      <button class="modal__button" @click="emits('close')">
        Learn more about SWEN
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  &__container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 12px;
    border-radius: 24px;
    width: 320px;
    background-color: $color-white;
  }
  &__close {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: $color-white;
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    & svg {
      width: 12px;
      height: 12px;
    }
  }
  &__img {
    width: 100%;
  }
  &__title {
    @include font(18px, 500, 24px, $color-black, Manrope);
    text-align: center;
  }
  &__info {
    @include font(17px, 500, 24px, $color-gray-1, Manrope);
    text-align: center;
  }
  &__button {
    width: 100%;
    border-radius: 40px;
    padding: 10px;
    background-color: $color-black;
    @include font(16px, 500, 24px, $color-white, Manrope);
  }
}
</style>
