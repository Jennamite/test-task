<template>
  <div class="marquee">
    <div class="marquee__container">
        <span class="marquee_item">
          Part of the profit goes to swen
          <marquee />
          By leaving a tip, you take care of nature
        </span>
        <span class="marquee_item">
          Part of the profit goes to swen
          <marquee />
          By leaving a tip, you take care of nature
        </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import marquee from "@/assets/icons/marquee.svg";
</script>

<style lang="scss" scoped>
.marquee {
  height: 44px;
  width: 100%;
  overflow: hidden;
  position: relative;
  &__container {
    display: block;
    width: 200%;
    height: 44px;
    position: absolute;
    overflow: hidden;
    animation: marquee 5s linear infinite;
    background: linear-gradient(
      59deg,
      #f5cfc8 3%,
      #ddfed5 37%,
      #c5edf8 72%,
      #dac8f9 100%
    );
  }
  &_item {
    height: 44px;
    float: left;
    position: relative;
    width: 50%;
  }
}
@keyframes marquee {
  0% {
    left: 0;
  }
  100% {
    left: -100%;
  }
}
</style>
