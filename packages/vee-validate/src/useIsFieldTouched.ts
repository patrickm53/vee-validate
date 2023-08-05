import { MaybeRefOrGetter, computed } from 'vue';
import { resolveFieldOrPathState } from './utils';

/**
 * If a field is touched or not
 */
export function useIsFieldTouched(path?: MaybeRefOrGetter<string>) {
  const fieldOrPath = resolveFieldOrPathState(path);

  return computed(() => {
    if (!fieldOrPath) {
      return false;
    }

    return ('meta' in fieldOrPath ? fieldOrPath.meta.touched : fieldOrPath?.value?.touched) ?? false;
  });
}
