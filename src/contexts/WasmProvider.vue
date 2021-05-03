<template>
  <slot/>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  ref,
  toRefs,
  computed,
  provide,
  onMounted,
} from 'vue';
import {
  WasmSrcSym,
  WasmLoadedSym,
  WasmErrorSym,
} from './symbol';

export default defineComponent({
  name: 'WasmProvider',
  props: {
    url: {
      type: String,
      required: true,
    },
    imports: {
      type: Object as PropType<WebAssembly.Imports>,
      required: true,
    },
  },
  setup(props) {
    const { url, imports } = toRefs(props);

    const source = ref<WebAssembly.WebAssemblyInstantiatedSource | null>(null);
    const loaded = computed(() => source.value !== null);
    const error = ref(false);

    provide(WasmSrcSym, source);
    provide(WasmLoadedSym, loaded);
    provide(WasmErrorSym, error);

    onMounted(async () => {
      const response = await fetch(url.value);

      // for Chrome, Firefox
      if (WebAssembly.instantiateStreaming !== undefined) {
        source.value = await WebAssembly.instantiateStreaming(
          response,
          imports.value,
        );
      // for Safari
      } else {
        const buffer = await response.arrayBuffer();

        source.value = await WebAssembly.instantiate(
          buffer,
          imports.value,
        );
      }
    });
  },
});
</script>

<style>

</style>
