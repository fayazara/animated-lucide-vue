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

const pathVariants = {
  normal: { pathLength: 1, opacity: 1 },
  animate: {
    opacity: [0, 0, 1, 1, 1],
    pathLength: [0.1, 0.3, 0.5, 0.7, 0.9, 1],
    transition: {
      opacity: { duration: 0.5 },
      pathLength: {
        duration: 2,
      },
    },
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
      <path
        d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"
        stroke-opacity="0.4"
        stroke-width="2"
        fill="none"
      />
      <motion.path
        d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"
        :variants="pathVariants"
        :animate="currentState"
      />

      <path
        d="M14 13.12c0 2.38 0 6.38-1 8.88"
        stroke-opacity="0.4"
        stroke-width="2"
        fill="none"
      />
      <motion.path
        d="M14 13.12c0 2.38 0 6.38-1 8.88"
        :variants="pathVariants"
        :animate="currentState"
      />

      <path
        d="M17.29 21.02c.12-.6.43-2.3.5-3.02"
        stroke-opacity="0.4"
        stroke-width="2"
        fill="none"
      />
      <motion.path
        d="M17.29 21.02c.12-.6.43-2.3.5-3.02"
        :variants="pathVariants"
        :animate="currentState"
      />

      <path
        d="M2 12a10 10 0 0 1 18-6"
        stroke-opacity="0.4"
        stroke-width="2"
        fill="none"
      />
      <motion.path
        d="M2 12a10 10 0 0 1 18-6"
        :variants="pathVariants"
        :animate="currentState"
      />

      <path d="M2 16h.01" stroke-opacity="0.4" stroke-width="2" fill="none" />
      <motion.path
        d="M2 16h.01"
        :variants="pathVariants"
        :animate="currentState"
      />

      <path
        d="M21.8 16c.2-2 .131-5.354 0-6"
        stroke-opacity="0.4"
        stroke-width="2"
        fill="none"
      />
      <motion.path
        d="M21.8 16c.2-2 .131-5.354 0-6"
        :variants="pathVariants"
        :animate="currentState"
      />

      <path
        d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"
        stroke-opacity="0.4"
        stroke-width="2"
        fill="none"
      />
      <motion.path
        d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"
        :variants="pathVariants"
        :animate="currentState"
      />

      <path
        d="M8.65 22c.21-.66.45-1.32.57-2"
        stroke-opacity="0.4"
        stroke-width="2"
        fill="none"
      />
      <motion.path
        d="M8.65 22c.21-.66.45-1.32.57-2"
        :variants="pathVariants"
        :animate="currentState"
      />

      <path
        d="M9 6.8a6 6 0 0 1 9 5.2v2"
        stroke-opacity="0.4"
        stroke-width="2"
        fill="none"
      />
      <motion.path
        d="M9 6.8a6 6 0 0 1 9 5.2v2"
        :variants="pathVariants"
        :animate="currentState"
      />
    </svg>
  </div>
</template> 