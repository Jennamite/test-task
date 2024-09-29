<script setup lang="ts">
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/vue";
import waiter from "@/assets/images/waiter.png";

type Waiter = {
  name: string;
  avatar: string;
  role: string;
  id: number;
};

const waiters: Waiter[] = [
  {
    id: 1,
    name: "Jack",
    avatar: waiter,
    role: "waiter",
  },
  {
    id: 2,
    name: "Joe",
    avatar: waiter,
    role: "waiter",
  },
  {
    id: 3,
    name: "Jade",
    avatar: waiter,
    role: "waiter",
  },
];

const onSlideChange = (e: { realIndex: number }) => emits("update", waiters[e.realIndex]);

const emits = defineEmits<{
  (e: "update", value: Waiter): Waiter;
}>();

emits("update", waiters[0]);
</script>

<template>
  <div class="waiters__container">
    <swiper
      class="waiters__swiper"
      :slides-per-view="3"
      :space-between="0"
      :centered-slides="true"
      :initial-slide="1"
      @slide-change="onSlideChange($event)"
    >
      <swiper-slide
        v-for="waiter in waiters"
        :key="waiter.id"
        v-slot="{ isActive }"
        class="waiters__slide"
      >
        <img
          class="waiters__avatar"
          :src="waiter.avatar"
          :alt="`${waiter.name}'s avatar`"
        />
        <transition name="slide" type="transition" mode="out-in">
          <div v-show="isActive" class="waiters__info">
            <span class="waiters__name">{{ waiter.name }}</span>
            <span class="waiters__role">{{ waiter.role }}</span>
          </div>
        </transition>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped lang="scss">
.waiters {
  &__container {
    display: flex;
    width: 100%;
    height: fit-content;
    margin-top: 20px;
  }
  &__swiper {
    margin: 0;
    height: 92px;
    width: 100%;
  }
  &__slide {
    display: flex;
    align-items: center;
    min-width: fit-content;
    gap: 12px;
    padding: 0 20px;
    transition: all 0.3s ease-in;
    &.swiper-slide-active {
      padding: 0;
      & .waiters__avatar {
        width: 92px;
        height: 92px;
        filter: none;
      }
    }
  }
  &__avatar {
    width: 52px;
    height: 52px;
    filter: grayscale(0.4) contrast(0.3) brightness(1.7);
    border-radius: 100%;
    display: block;
    max-width: 100%;
    transition: all 0.3s ease-in;
  }
  &__info {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: center;
  }
  &__name {
    @include font(22px, 600, 22px, $color-black, Manrope);
  }
  &__role {
    @include font(16px, 600, 20px, $color-violet, Manrope);
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-in;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  width: 1px;
}
</style>
