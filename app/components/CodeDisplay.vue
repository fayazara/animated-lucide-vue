<script lang="ts" setup>
import Prism from "prismjs";
import "prismjs/themes/prism-twilight.css";

const { code, name = "Component" } = defineProps<{
  code: string;
  name?: string;
}>();

const copySuccess = ref<boolean>(false);

const handleCopyCode = async () => {
  if (code) {
    await navigator.clipboard.writeText(code);
    copySuccess.value = true;
  }
};

onMounted(() => {
  Prism.highlightAll();
});
</script>

<template>
  <div class="rounded-xl flex flex-col gap-4 w-full">
    <div class="w-full justify-between flex">
      <p class="text-gray-400">{{ name + ".vue" }}</p>
      <UPopover>
        <UButton
          :icon="
            copySuccess ? 'i-ph-check-square-offset-duotone' : 'i-ph-clipboard'
          "
          variant="soft"
          @click="handleCopyCode"
        />
        <template #content>
          <div class="flex flex-row justify-between p-2">
            <p class="text-(--ui-primary) text-xs">Code Copied to Clipboard!</p>
          </div>
        </template>
      </UPopover>
    </div>
    <pre
      class="bg-slate-600/20 rounded-xl p-2 text-wrap language-typescript"
    ><code ref="codeElement" class="language-typescript text-wrap">{{ code }}</code></pre>
  </div>
</template>

<style></style>
