<template>
  <WasmProvider
    :url="url"
    :imports="imports"
  >
    <Comp/>
  </WasmProvider>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
} from 'vue';
import { Comp } from '@/components';
import { WasmProvider } from '@/contexts';

export default defineComponent({
  name: 'App',
  components: {
    WasmProvider,
    Comp,
  },
  setup() {
    const url = ref('/build/optimized.wasm');
    const imports = reactive({
      console: {
        logi(int: number): void {
          console.log(int);
        },
        logf(float: number): void {
          console.log(float);
        },
        logs(str: string):void {
          console.log(str);
        },
      },
      env: {
        abort(): void {
          console.log('');
        },
      },
    });

    return {
      url,
      imports,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
