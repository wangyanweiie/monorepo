interface UseRefreshOption {
    /** route matched array index */
    matchedIndex: number;
}
/**
 * refresh
 */
export declare function useRefresh(option: UseRefreshOption): {
    componentKey: globalThis.Ref<string | undefined>;
    excludeList: globalThis.ComputedRef<string[]>;
};
export {};
