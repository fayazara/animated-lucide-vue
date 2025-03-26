<script setup lang="ts">
import { motion } from 'motion-v';

interface Props {
  size?: number;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 28,
  class: '',
});

const emit = defineEmits<{
  startAnimation: [];
  stopAnimation: [];
}>();

const defaultTransition = {
  type: 'spring',
  stiffness: 250,
  damping: 25,
};

const topRightVariants = {
  normal: { translateX: '0%', translateY: '0%' },
  animate: { translateX: '2px', translateY: '2px' },
};

const bottomLeftVariants = {
  normal: { translateX: '0%', translateY: '0%' },
  animate: { translateX: '-2px', translateY: '2px' },
};

const topLeftVariants = {
  normal: { translateX: '0%', translateY: '0%' },
  animate: { translateX: '2px', translateY: '-2px' },
};

const bottomRightVariants = {
  normal: { translateX: '0%', translateY: '0%' },
  animate: { translateX: '-2px', translateY: '-2px' },
};

const isControlled = ref(false);
const currentState = ref('normal');

const startAnimation = () => {
  currentState.value = 'animate';
};

const stopAnimation = () => {
  currentState.value = 'normal';
};

const handleMouseEnter = () => {
  if (!isControlled.value) {
    startAnimation();
  } else {
    emit('startAnimation');
  }
};

const handleMouseLeave = () => {
  if (!isControlled.value) {
    stopAnimation();
  } else {
    emit('stopAnimation');
  }
};

defineExpose({
  startAnimation,
  stopAnimation,
});
</script>

<template>
  <div
    :class="[
      'cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center',
      props.class,
    ]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <motion.path
        d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"
        :transition="defaultTransition"
        :variants="topRightVariants"
        :animate="currentState"
      />
      <motion.path
        d="M3 16.2V21m0 0h4.8M3 21l6-6"
        :transition="defaultTransition"
        :variants="bottomLeftVariants"
        :animate="currentState"
      />
      <motion.path
        d="M21 7.8V3m0 0h-4.8M21 3l-6 6"
        :transition="defaultTransition"
        :variants="topLeftVariants"
        :animate="currentState"
      />
      <motion.path
        d="M3 7.8V3m0 0h4.8M3 3l6 6"
        :transition="defaultTransition"
        :variants="bottomRightVariants"
        :animate="currentState"
      />
    </svg>
  </div>
</template> 