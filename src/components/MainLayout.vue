<script setup lang="ts">
import { computed, ref } from "vue";
import { Waiter, Experience } from "@/types";
import Modal from "@/components/modals/Modal.vue";

import AppHeader from "./app/AppHeader.vue";
import AppFooter from "./app/AppFooter.vue";
import Announce from "./Announce.vue";
import StaffSwiper from "./WaitersSwiper.vue";
import Tips from "./Tips.vue";
import RateGroup from "./RateGroup.vue";
import ServiceFee from "./ServiceFee.vue";

const modal = ref<boolean>(false);

const waiter = ref<Waiter>();
const tips = ref<number>(0);
const experience = ref<Experience>();
const fee = ref<boolean>(false);

const disabled = computed(() => {
  return !!(waiter.value && tips.value !== 0 && experience.value);
});

function showModal() {
  modal.value = true;
}

function hideModal() {
  modal.value = false;
}
</script>

<template>
  <div class="main-container">
    <AppHeader />
    <Announce />
    <StaffSwiper @update="(e: Waiter) => {waiter = e}" />
    <Tips @update="(e: number) => {tips = e}" />
    <RateGroup @update="(e: Experience) => {experience = e}" />
    <ServiceFee :name="waiter?.name" :tip="tips" @update="(e: boolean) => {fee = e}" />
    <AppFooter :value="tips" :fee="fee" :disable="!disabled" @pay="showModal" />
  </div>
  <Modal v-show="modal" @close="hideModal" />
</template>

<style scoped lang="scss">
.main-container {
  width: 375px;
  background: #f8f9fd;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
