<script setup lang="ts">
import applePay from "@/assets/icons/apple_pay.svg";

const props = defineProps<{ value: number; fee: boolean; disable: boolean }>();
const emits = defineEmits<{
  (e: "pay", value: void): void;
}>();
</script>

<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer-container">
        <span class="footer-value">To pay {{ props.value }}€</span>
        <span class="footer-fee"
          >Service fees
          {{ props.fee ? (props.value / 90).toFixed(props.value ? 2 : 0) : 0 }}€</span
        >
      </div>
      <div class="footer__buttons">
        <button :disabled="props.disable" class="btn-pay-apple" @click="emits('pay')">
          <span>Pay with</span>
          <applePay />
        </button>
        <button :disabled="props.disable" class="btn-pay-card" @click="emits('pay')">
          Pay with debit card
        </button>
      </div>
      <p class="footer__info">
        By clicking the button, you agree to our <a href="/">Terms of Use</a> and
        <a href="/">Privacy Policy</a>, and <a href="/">authorize payment</a> and
        <a href="/">data processing</a>.
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  margin-top: auto;
  &__wrapper {
    margin-top: 40px;
    background-color: $color-white;
    border-radius: 20px 20px 0 0;
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  &-container {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding: 0 0 12px 0;
    border-bottom: 1px solid $color-gray;
    &-value {
      @include font(15px, 500, 24px, $color-black, Manrope);
    }
    &-fee {
      @include font(14px, 500, 20px, $color-gray-1, Manrope);
    }
  }
  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 8px;
    & .btn-pay-apple,
    .btn-pay-card {
      width: 100%;
      border-radius: 40px;
      padding: 10px 20px;
      @include font(16px, 500, 24px, $color-white, Manrope);
      &:disabled {
        background: $color-gray;
        color: $color-white;
      }
      &:focus {
        outline: none;
      }
    }
    & .btn-pay-apple {
      background: $color-black;
      display: flex;
      gap: 4px;
      align-items: center;
      justify-content: center;
    }
    & .btn-pay-card {
      background: $color-violet;
      font-weight: 400;
    }
  }
  &__info {
    text-align: center;
    @include font(11px, 500, 15px, $color-gray-1, Manrope);
    & a {
      color: $color-violet;
    }
  }
}
</style>
