import type { XFormItemSchema, XFormInstance } from '@custom/components';
import { OPERATION_NOTICE } from '@custom/utils/src/index';
import { ElMessage } from 'element-plus';
import { getUserInfo } from '@/utils/storage';
import { confirmExitMessage } from '@/utils/confirm-message';
import { useUserStore } from '@/store/user-info';
import RequestAPI from '@/api/login';

export function useConf() {
    const userInfo = getUserInfo();
    const dropdownItems = [
        { title: '修改密码', onClick: openDialog },
        { title: '注销', onClick: logout },
    ];

    const { handleLogout } = useUserStore();

    /**
     * 退出登录
     */
    async function logout() {
        const confirm = await confirmExitMessage();
        if (!confirm) return;
        await handleLogout();
    }

    /**
     * 表单配置
     */
    const baseSchemas: XFormItemSchema[] = [
        {
            label: '旧密码',
            prop: 'oldPassword',
            components: 'el-input',
            colProps: { span: 24 },
            elFormItemProps: {
                rules: [{ required: true, message: '请输入旧密码' }],
            },
        },
        {
            label: '新密码',
            prop: 'newPassword',
            components: 'el-input',
            colProps: { span: 24 },
            elFormItemProps: {
                rules: [{ required: true, message: '请输入新密码' }],
            },
        },
    ];

    /**
     * form ref
     */
    const passwordFormRef = ref<XFormInstance>();

    /**
     * form
     */
    const passwordFormData = ref<Record<string, string>>({
        newPassword: '',
        oldPassword: '',
        userId: '',
    });

    /**
     * 弹窗是否展示
     */
    const passwordVisible = ref<boolean>(false);

    /**
     * 打开弹窗
     */
    function openDialog() {
        passwordFormData.value.userId = userInfo.id as string;
        passwordVisible.value = true;
    }

    /**
     * loading
     */
    const passwordLoading = ref<boolean>(false);

    /**
     * 修改密码
     */
    async function handleChangePassword(): Promise<void> {
        // 表单校验
        const valid = await passwordFormRef.value?.validate();

        if (!valid) {
            return;
        }

        passwordLoading.value = true;
        const res = await RequestAPI.updatePassword(passwordFormData.value);

        if (!res) {
            passwordLoading.value = false;
            ElMessage.error(OPERATION_NOTICE.OPERATE_ERROR);
            return;
        }

        ElMessage.success(OPERATION_NOTICE.OPERATE_SUCCESS);
        passwordLoading.value = false;
        passwordVisible.value = false;
        await handleLogout();
    }

    return {
        userInfo,
        dropdownItems,
        baseSchemas,
        passwordVisible,
        passwordFormRef,
        passwordLoading,
        passwordFormData,
        handleChangePassword,
    };
}
