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
  stiffness: 160,
  damping: 17,
  mass: 1,
};

const topLineVariants = {
  normal: {
    translateX: 0,
    rotate: 0,
    translateY: 0,
  },
  animate: { 
    translateY: -4 
  },
};

const bottomLineVariants = {
  normal: {
    translateX: 0,
    rotate: 0,
    translateY: 0,
  },
  animate: { 
    translateY: 4 
  },
};

const leftLineVariants = {
  normal: {
    translateX: 0,
    rotate: 0,
    translateY: 0,
  },
  animate: { 
    translateX: -4 
  },
};

const rightLineVariants = {
  normal: {
    translateX: 0,
    rotate: 0,
    translateY: 0,
  },
  animate: { 
    translateX: 4 
  },
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
      <motion.line
        :variants="topLineVariants"
        :animate="currentState"
        :transition="defaultTransition"
        x1="22"
        x2="2"
        y1="6"
        y2="6"
      />
      <motion.line
        :variants="bottomLineVariants"
        :animate="currentState"
        :transition="defaultTransition"
        x1="22"
        x2="2"
        y1="18"
        y2="18"
      />
      <motion.line
        :variants="leftLineVariants"
        :animate="currentState"
        :transition="defaultTransition"
        x1="6"
        x2="6"
        y1="2"
        y2="22"
      />
      <motion.line
        :variants="rightLineVariants"
        :animate="currentState"
        :transition="defaultTransition"
        x1="18"
        x2="18"
        y1="2"
        y2="22"
      />
    </svg>
  </div>
</template> 