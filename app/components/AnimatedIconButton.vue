<script setup lang="ts">
const { getComponentSource } = useComponentSource();

interface Props {
  class?: string;
}

const props = defineProps<Props>();

const iconRef = ref();

const componentName = ref<string>();

const componentCode = ref<string>("");

const startAnimation = () => {
  iconRef.value?.startAnimation();
};

const stopAnimation = () => {
  iconRef.value?.stopAnimation();
};

const handleButtonEnter = () => {
  startAnimation();
};

const handleButtonLeave = () => {
  stopAnimation();
};

const handleCopyClicked = async () => {
  if (componentName.value) {
    const source = await getComponentSource(`${componentName.value}.vue`);

    if (source) {
      await navigator.clipboard.writeText(source);
      console.log("Component Source Copied!", componentName.value);
    } else {
      console.warn("Could not find source for component:", componentName.value);
    }
  } else {
    console.log("No compname:", componentName.value);
  }
};

const handleViewClicked = async () => {
  if (componentName.value) {
    const source = await getComponentSource(`${componentName.value}.vue`);

    if (source) componentCode.value = source;
  }
};

// Expose the ref so parent can access it if needed
defineExpose({
  iconRef,
  handleCopyClicked,
});
</script>

<template>
  <CodeContextMenu
    :comp-code="componentCode"
    :comp-name="componentName || ''"
    @copy-clicked="handleCopyClicked"
    @view-clicked="handleViewClicked"
  >
    <button
      :class="[
        'h-full w-full aspect-square bg-neutral-50 hover:bg-neutral-100 dark:bg-white/10 dark:hover:bg-white/20 rounded-xl cursor-pointer',
        props.class,
      ]"
      @mouseenter="handleButtonEnter"
      @mouseleave="handleButtonLeave"
    >
      <slot
        :ref="(el: any) => (iconRef = el)"
        :controlled="true"
        :compname="(name: string) => componentName = name"
      />
    </button>
  </CodeContextMenu>
</template>
