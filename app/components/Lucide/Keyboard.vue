<script setup lang="ts">
import { motion } from 'motion-v';
import { ref, watch } from 'vue';

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

const KEYBOARD_PATHS = [
  { id: 'key1', d: 'M10 8h.01' },
  { id: 'key2', d: 'M12 12h.01' },
  { id: 'key3', d: 'M14 8h.01' },
  { id: 'key4', d: 'M16 12h.01' },
  { id: 'key5', d: 'M18 8h.01' },
  { id: 'key6', d: 'M6 8h.01' },
  { id: 'key7', d: 'M7 16h10' },
  { id: 'key8', d: 'M8 12h.01' },
];

const isControlled = ref(false);
const isHovered = ref(false);
const keyStates = ref(KEYBOARD_PATHS.map(() => 'normal'));

watch(isHovered, (value) => {
  if (value) {
    animateKeys();
  } else {
    keyStates.value = keyStates.value.map(() => 'normal');
  }
});

const animateKeys = () => {
  if (!isHovered.value) return;
  
  KEYBOARD_PATHS.forEach((_, index) => {
    const delay = index * 0.2 * Math.random() * 1000;
    
    setTimeout(() => {
      if (!isHovered.value) return;
      keyStates.value[index] = 'highlight';
      
      setTimeout(() => {
        if (!isHovered.value) return;
        keyStates.value[index] = 'normal';
        
        setTimeout(() => {
          if (!isHovered.value) return;
          keyStates.value[index] = 'highlight';
          
          setTimeout(() => {
            if (!isHovered.value) return;
            keyStates.value[index] = 'normal';
          }, 750);
        }, 750);
      }, 750);
    }, delay);
  });
};

const startAnimation = () => {
  isHovered.value = true;
};

const stopAnimation = () => {
  isHovered.value = false;
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <motion.path
        v-for="(path, index) in KEYBOARD_PATHS"
        :key="path.id"
        :d="path.d"
        :variants="{
          normal: { opacity: 1 },
          highlight: { opacity: 0.2 }
        }"
        :animate="keyStates[index]"
        :transition="{
          duration: 0.75,
          ease: 'easeInOut',
        }"
      />
    </svg>
  </div>
</template> 