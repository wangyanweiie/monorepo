import { defineStore } from 'pinia';
import { saveUserToken, getUserToken, saveUserInfo, getUserInfo } from '@/utils/storage';
import store from 'store2';
import router from '@/router';
import { usePermissionStore } from '@/store/permission';
import RequestAPI from '@/api/login';

/**
 * 权限缓存状态
 */
export const useUserStore = defineStore('userInfo', () => {
    const permissionStore = usePermissionStore();

    /**
     * token
     */
    const token = ref<string | undefined | null>('');
    const getToken = computed(() => token.value || getUserToken());

    function setToken(info?: string | null) {
        token.value = info;
        saveUserToken(info);
    }

    /**
     * user-info
     */
    const userInfo = ref<any>(null);
    const getInfo = computed(() => userInfo.value || getUserInfo());

    function setUserInfo(info?: any) {
        userInfo.value = info;
        saveUserInfo(info);
        setLastUpdateTime(info ? new Date().getTime() : 0);
    }

    /**
     * last-update-time
     */
    const lastUpdateTime = ref<number>(0);
    const getLastUpdateTime = computed(() => lastUpdateTime.value);

    function setLastUpdateTime(info: number) {
        lastUpdateTime.value = info;
    }

    /**
     * 登录
     */
    async function handleLogin(params: Record<string, string>) {
        const res = await RequestAPI.login(params);

        if (!res) {
            return;
        }

        const { token, userInfo } = res;

        setToken(token);
        setUserInfo(userInfo);

        permissionStore.setPermission(userInfo?.pcPerms);
        permissionStore.setActiveRouteList();

        return userInfo;
    }

    /**
     * 退出登录
     */
    async function handleLogout() {
        if (!getToken.value) {
            return;
        }

        const res = await RequestAPI.logout();

        if (res) {
            clearCache();
            router.push(`/login`);
        }
    }

    /**
     * 清空 token 与 userInfo
     */
    function clearCache() {
        setToken(null);
        setUserInfo(null);
        store.local.clear();
    }

    return {
        getToken,
        getInfo,
        getLastUpdateTime,
        handleLogin,
        handleLogout,
    };
});
