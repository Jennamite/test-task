<script setup lang="ts">
import { ref, watch } from "vue";
import { Experience, Likes } from "@types";
import StarRating from "@/components/StarRating.vue";
import Like from "@/components/Like.vue";

const emits = defineEmits<{
  (e: "update", value: Experience): Experience;
}>();

const experience = ref<Experience>({
  experience: 0,
  service: 0,
  likes: [],
  message: "",
});

watch(
  experience.value,
  () => {
    if (experience.value.service !== 0 && experience.value.experience !== 0)
      emits("update", experience.value);
  },
  {
    deep: true,
  }
);
</script>

<template>
  <div class="experience">
    <StarRating
      :title="'Rate your experience'"
      @update="(e: number) => {experience.experience = e}"
    />
    <transition name="appear" mode="out-in" type="transition">
      <StarRating
        v-show="experience.experience > 0"
        :title="'Rate Service'"
        @update="(e: number) => {experience.service = e}"
      />
    </transition>
    <transition name="appear" mode="out-in" type="transition">
      <Like
        v-show="experience.service > 0"
        @update="(e: Array<Likes>) => {experience.likes = e}"
      />
    </transition>
    <transition name="appear" mode="out-in" type="transition">
      <div v-show="experience.service > 0" class="experience__inner">
        <span class="experience__title">Share your feedback</span>
        <textarea
          v-model.lazy="experience.message"
          class="experience__area"
          placeholder="Describe your own"
        />
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.experience {
  &__inner {
    padding: 20px 20px 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  &__title {
    margin: 0 auto;
    @include font(15px, 600, 24px, $color-black, Manrope);
  }
  &__area {
    min-height: 105px;
    width: 100%;
    padding: 20px;
    border-radius: 20px;
    background: $color-white;
    resize: none;
    @include font(17px, 400, 24px, $color-black, Manrope);
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: $color-gray-1;
    }
  }
}

.appear-enter-active,
.lang-leave-active {
  transition: all 0.3s ease-in;
}

.appear-enter-from,
.appear-leave-to {
  opacity: 0;
  height: 0;
  transform: translateY(-20px);
}
</style>
