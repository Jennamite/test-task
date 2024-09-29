<script setup lang="ts">
import { ref } from "vue";

const tipsAmount = ref<number>();

const emits = defineEmits<{
  (e: "update", value: number): number;
}>();
</script>

<template>
  <div class="tips">
    <div class="tips__main">
      <label for="tips-input" class="tips__text">Enter amount of tips</label>
      <input
        id="tips-input"
        class="tips__input"
        type="text"
        v-model="tipsAmount"
        placeholder="0 €"
      />
    </div>
    <div class="tips__container">
      <button
        v-for="e in [2, 5, 100]"
        class="tips__button"
        @click="emits('update', (tipsAmount = e))"
        :class="{ 'tips__button--active': tipsAmount === e }"
      >
        {{ e }}
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tips {
  padding: 20px 20px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  &__main {
    background: $color-white;
    border-radius: 20px;
    height: 96px;
    gap: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__text {
    @include font(15px, 500, 24px, $color-black, Manrope);
  }
  &__container {
    display: flex;
    gap: 4px;
  }
  &__button {
    border-radius: 12px;
    background: $color-white;
    width: 100%;
    @include font(13px, 600, 18px, $color-black, Manrope);
    padding: 8px 0;
    &:focus {
      outline: none;
    }
    &--active {
      background: $color-violet;
      color: $color-white;
    }
  }
  &__input {
    border: 0;
    height: 30px;
    text-align: center;
    outline: none;
  }
}
</style>
