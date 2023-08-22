import { computed, getCurrentInstance, nextTick, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

interface UseRefreshOption {
    /**
     * route matched array index
     */
    matchedIndex: number;
}

/**
 * refresh
 */
export function useRefresh(option: UseRefreshOption) {
    const componentKey = ref<string>();

    const excludeSets = ref<Set<string>>(new Set());

    const excludeList = computed<string[]>(() => {
        return Array.from<string>(excludeSets.value);
    });

    const route = useRoute();

    watchEffect(() => {
        componentKey.value = route.matched.at(option.matchedIndex)?.path;
    });

    const proxy = getCurrentInstance()?.proxy;

    // refresh
    proxy?.$bus.on('refresh', ({ path, name }: { path: string; name: string }) => {
        if (componentKey.value !== path) {
            return;
        }

        componentKey.value = '';
        excludeSets.value.add(name);

        nextTick(() => {
            excludeSets.value.delete(name);
            componentKey.value = route.matched.at(option.matchedIndex)?.path;
        });
    });

    return {
        componentKey,
        excludeList,
    };
}
