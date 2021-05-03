import {
  Ref,
  ComputedRef,
  inject,
} from 'vue';
import {
  WasmSrcSym,
  WasmLoadedSym,
  WasmErrorSym,
} from '@/contexts/symbol';

export interface WasmValueType {
  source: Ref<WebAssembly.WebAssemblyInstantiatedSource>;
  loaded: ComputedRef<boolean>;
  error: Ref<boolean>;
}

export const useWasm = (): WasmValueType => {
  const source = inject<Ref<WebAssembly.WebAssemblyInstantiatedSource>>(WasmSrcSym);
  const loaded = inject<ComputedRef<boolean>>(WasmLoadedSym);
  const error = inject<Ref<boolean>>(WasmErrorSym);

  if (source === undefined || loaded === undefined || error === undefined) {
    throw new Error();
  }

  return {
    source,
    loaded,
    error,
  };
};
