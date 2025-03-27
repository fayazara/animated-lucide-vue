<!-- eslint-disable @typescript-eslint/unified-signatures -->
<script lang="ts" setup>
import type { ContextMenuItem } from "@nuxt/ui";
import CodeDisplay from "./CodeDisplay.vue";

const copySuccess = ref<boolean>(false);

const codeOpen = ref<boolean>(false);

const items = ref<ContextMenuItem[][]>([
  [
    {
      label: "Copy Component Code",
      icon: "i-ph-code",
      slot: "copy",
      color: "primary",
      onSelect(e: Event) {
        e.preventDefault();

        emit("copy-clicked");
        copySuccess.value = true;
      },
    },
    {
      label: "Show Component Code",
      icon: "i-ph-file-code-light",
      color: "secondary",
      onSelect(e: Event) {
        e.preventDefault();
        emit("view-clicked");

        codeOpen.value = true;
      },
    },
  ],
]);

const emit = defineEmits<{
  (event: "copy-clicked"): void;
  (event: "view-clicked"): void;
}>();

const { compCode, compName } = defineProps<{
  compCode: string;
  compName: string;
}>();
</script>

<template>
  <UContextMenu :items="items" @update:open="copySuccess = false">
    <template #copy-trailing>
      <div class="w-3.5 h-3.5">
        <UIcon v-if="copySuccess" name="i-ph-check-bold" />
      </div>
    </template>
    <slot />
  </UContextMenu>
  <UDrawer v-model:open="codeOpen" title="Component Code">
    <template #body>
      <div class="w-full flex">
        <CodeDisplay
          :name="compName"
          :code="compCode"
          class="m-0 grow w-full"
        />
      </div>
    </template>
  </UDrawer>
</template>

<style></style>
