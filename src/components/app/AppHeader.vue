<script setup lang="ts">
import { ref } from "vue";
import logo from "@/assets/icons/logo.svg";
import arrowCheck from "@/assets/icons/arrow_check.svg";

type Language = "En" | "Ru";

const langList: Language[] = ["En", "Ru"];
const selectedLang = ref<Language>("En");
const isLangSelectOpen = ref<boolean>(false);

function selectLang(lang: Language) {
  selectedLang.value = lang;
  toggleLang();
}

function toggleLang() {
  isLangSelectOpen.value = !isLangSelectOpen.value;
}
</script>

<template>
  <header class="header">
    <div></div>
    <div class="header__logo">
      <logo draggable="false" />
    </div>
    <div class="header__lang">
      <button class="header__lang-select" @click="toggleLang">
        <span>{{ selectedLang }}</span>
        <arrowCheck :class="{ '--open': isLangSelectOpen }" />
      </button>
      <transition name="lang" type="transition" mode="out-in">
        <div v-show="isLangSelectOpen" class="header__lang-select_items">
          <button
            v-for="(lang, i) in langList"
            :key="i"
            class="header__select"
            @click="selectLang(lang)"
          >
            {{ lang }}
          </button>
        </div>
      </transition>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  position: relative;
  justify-content: center;
  padding: 12px 20px;
  background: $color-white;
  &__lang {
    justify-content: end;
    display: flex;
    &-select {
      position: relative;
      z-index: 1;
      padding: 0 20px;
      display: flex;
      align-items: center;
      gap: 4px;
      height: 100%;
      background: #ffffff;
      &:focus {
        outline: none;
      }
      & span {
        @include font(16px, 500, 24px, $color-black, Manrope);
      }
      & svg {
        width: 12px;
        height: 8px;
        transition: transform ease-in 0.3s;
        will-change: transform;
        &.--open {
          transform: rotate(180deg);
        }
      }
      &_items {
        position: absolute;
        z-index: 2;
        top: 100%;
        right: 44px;
        display: flex;
        flex-direction: column;
        gap: 4px;
        background: #ffffff;
      }
    }
  }
  &__logo {
    text-align: center;
    svg {
      width: 69px;
      height: 24px;
      user-select: none;
    }
  }
  &__select {
    @include font(16px, 400, 24px, $color-black, Manrope);
    background: transparent;
    padding: 8px 10px;
    border-bottom: 1px $color-black solid;
  }
  > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.lang-enter-active,
.lang-leave-active {
  transition: all 0.3s ease-in;
}

.lang-enter-from,
.lang-leave-to {
  top: 0;
  opacity: 0;
}
</style>
