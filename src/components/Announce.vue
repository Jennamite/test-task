<script setup lang="ts">
import marquee from "@/assets/icons/marquee.svg";
</script>

<template>
  <div class="marquee">
    <div class="track">
      <div class="content">
        &nbsp; Part of the profit goes to swen
        <marquee />
        By leaving a tip, you take care of nature
        <marquee />
        Part of the profit goes to swen
        <marquee />
        By leaving a tip, you take care of nature
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.marquee {
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 44px;
  overflow-x: hidden;
}

.track {
  height: 100%;
  position: absolute;
  white-space: nowrap;
  will-change: transform;
  animation: marquee 100s linear infinite;
  background: linear-gradient(59deg, #f5cfc8 3%, #ddfed5 37%, #c5edf8 72%, #dac8f9 100%);
}
.content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 2px 2px gray;
  svg {
    margin: 0 8px;
  }
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
