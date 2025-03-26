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
  normal: { opacity: 1, pathLength: 1, pathOffset: 0 },
  animate: { 
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
  },
};

const pathTransitions = [
  {
    opacity: { duration: 0.01, delay: 0 },
    pathLength: {
      type: 'spring',
      duration: 0.5,
      bounce: 0,
      delay: 0,
    },
  },
  {
    opacity: { duration: 0.01, delay: 0.1 },
    pathLength: {
      type: 'spring',
      duration: 0.5,
      bounce: 0,
      delay: 0.1,
    },
  },
  {
    opacity: { duration: 0.01, delay: 0.2 },
    pathLength: {
      type: 'spring',
      duration: 0.5,
      bounce: 0,
      delay: 0.2,
    },
  },
  {
    opacity: { duration: 0.01, delay: 0.3 },
    pathLength: {
      type: 'spring',
      duration: 0.5,
      bounce: 0,
      delay: 0.3,
    },
  },
];

const isControlled = ref(false);
const pathStates = ref(['normal', 'normal', 'normal', 'normal', 'normal', 'normal']);

const startAnimation = () => {
  pathStates.value = pathStates.value.map(() => 'animate');
};

const stopAnimation = () => {
  pathStates.value = pathStates.value.map(() => 'normal');
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
        d="m5 8 6 6"
        :variants="pathVariants"
        :animate="pathStates[0]"
        :transition="pathTransitions[3]"
      />
      <motion.path
        d="m4 14 6-6 3-3"
        :variants="pathVariants"
        :animate="pathStates[1]"
        :transition="pathTransitions[2]"
      />
      <motion.path
        d="M2 5h12"
        :variants="pathVariants"
        :animate="pathStates[2]"
        :transition="pathTransitions[1]"
      />
      <motion.path
        d="M7 2h1"
        :variants="pathVariants"
        :animate="pathStates[3]"
        :transition="pathTransitions[0]"
      />
      <motion.path
        d="m22 22-5-10-5 10"
        :variants="pathVariants"
        :animate="pathStates[4]"
        :transition="pathTransitions[3]"
      />
      <motion.path
        d="M14 18h6"
        :variants="pathVariants"
        :animate="pathStates[5]"
        :transition="pathTransitions[3]"
      />
    </svg>
  </div>
</template> 