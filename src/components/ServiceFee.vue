<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{ tip: number; name: string }>();
const emits = defineEmits<{
  (e: "update", value: boolean): boolean;
}>();

const fee = ref<boolean>(false);
</script>

<template>
  <div class="fee__container">
    <div class="fee__content">
      <p class="fee__title">I want {{ name }} to receive the full amount</p>
      <p class="fee__text">
        You compensate service fee of {{ (props.tip / 83).toFixed(2) }}€, which will be
        applied to your payment.
      </p>
    </div>
    <label for="fee" class="fee__label">
      <input
        id="fee"
        v-model="fee"
        type="checkbox"
        class="fee__toggle"
        @input="emits('update', !fee)"
      />
      <p class="fee__slider"></p>
    </label>
  </div>
</template>

<style scoped lang="scss">
.fee {
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin: 12px 20px 0;
    padding: 16px;
    background: $color-white;
    border-radius: 20px;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  &__title {
    @include font(14px, 500, 20px, $color-black, Manrope);
    max-width: 150px;
  }
  &__text {
    @include font(12px, 400, 14px, $color-gray-1, Manrope);
    max-width: 215px;
  }
  &__label {
    position: relative;
    display: inline-block;
    width: 54px;
    height: 30px;
  }
  &__toggle {
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + .fee__slider {
      background: $color-violet;
      &:before {
        transform: translateX(24px);
      }
    }
    &:focus + .fee__slider {
      outline: none;
    }
  }
  &__slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: $color-violet-1;
    transition: 0.3s background ease-in;
    border-radius: 34px;
    &:before {
      position: absolute;
      content: "";
      height: 24px;
      width: 24px;
      left: 3px;
      bottom: 3px;
      background: white;
      transition: 0.3s transform ease-in;
      border-radius: 50%;
    }
  }
}
</style>
