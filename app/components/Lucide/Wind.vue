<script setup lang="ts">
import { motion } from 'motion-v';
import { ref } from 'vue';

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

const createPathVariants = (delay: number) => ({
  normal: {
    pathLength: 1,
    opacity: 1,
    pathOffset: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      delay: delay,
    },
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    pathOffset: [1, 0],
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      delay: delay,
    },
  },
});

const pathVariants1 = createPathVariants(0.2);
const pathVariants2 = createPathVariants(0);
const pathVariants3 = createPathVariants(0.4);

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
        d="M12.8 19.6A2 2 0 1 0 14 16H2"
        :variants="pathVariants1"
        :animate="currentState"
      />
      <motion.path
        d="M17.5 8a2.5 2.5 0 1 1 2 4H2"
        :variants="pathVariants2"
        :animate="currentState"
      />
      <motion.path
        d="M9.8 4.4A2 2 0 1 1 11 8H2"
        :variants="pathVariants3"
        :animate="currentState"
      />
    </svg>
  </div>
</template> 