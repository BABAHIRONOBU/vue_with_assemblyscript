<template>
  <div>
    <button
      :disabled="!loaded"
      @click="runWasm"
    >
      wasm 실행
    </button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue';
import { useWasm } from '@/hooks';

export default defineComponent({
  name: 'Comp',
  setup() {
    const { source, loaded } = useWasm();

    const runWasm = () => {
      const { func } = source.value.instance.exports as any;
      func();
    };

    return {
      loaded,
      runWasm,
    };
  },
});
</script>

<style>

</style>
