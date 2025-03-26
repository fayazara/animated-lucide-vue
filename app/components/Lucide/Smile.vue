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

const faceVariants = {
  normal: { 
    scale: 1,
    rotate: 0,
    strokeWidth: 2,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  animate: {
    scale: [1, 1.15, 1.05, 1.1],
    rotate: [0, -3, 3, 0],
    strokeWidth: [2, 2.5, 2.5, 2.5],
    transition: { 
      duration: 0.8,
      times: [0, 0.3, 0.6, 1],
      ease: "easeInOut"
    }
  },
};

const mouthVariants = {
  normal: { 
    d: "M8 14s1.5 2 4 2 4-2 4-2",
    pathLength: 1,
    pathOffset: 0,
    strokeWidth: 2,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  animate: {
    d: "M7 13.5s2.5 3.5 5 3.5 5-3.5 5-3.5",
    pathLength: [0.3, 1, 1],
    pathOffset: [0, 0, 0],
    strokeWidth: 2.5,
    transition: { 
      d: { duration: 0.4, ease: "easeOut" },
      pathLength: { 
        duration: 0.5, 
        times: [0, 0.5, 1],
        ease: "easeInOut"
      },
      delay: 0.1
    }
  },
};

const eyeVariants = {
  normal: { 
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  animate: {
    scale: [1, 1.5, 0.8, 1.2],
    opacity: [1, 1, 1, 1],
    transition: { 
      duration: 0.5,
      times: [0, 0.3, 0.6, 1],
      ease: "easeInOut"
    }
  }
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
      <motion.circle 
        cx="12" 
        cy="12" 
        r="10"
        :animate="currentState"
        :variants="faceVariants"
      />
      <motion.path
        :variants="mouthVariants"
        :animate="currentState"
        d="M8 14s1.5 2 4 2 4-2 4-2"
      />
      <motion.line 
        x1="9" 
        x2="9.01" 
        y1="9" 
        y2="9"
        :variants="eyeVariants"
        :animate="currentState"
      />
      <motion.line 
        x1="15" 
        x2="15.01" 
        y1="9" 
        y2="9"
        :variants="eyeVariants"
        :animate="currentState"
      />
    </svg>
  </div>
</template> 