<template>
    <div class="login">
        <div class="login__box">
            <div class="login__image-box">
                <img src="/svg/login-box-bg.svg" :alt="title" class="login__image" />
            </div>

            <div class="login__form-box">
                <div class="login__title">
                    <img class="login__logo-img" src="/logo.png" alt="logo" />
                    <h1 class="login__app-name">{{ title }}</h1>
                </div>

                <!-- 登录表单 -->
                <login-form></login-form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default { name: 'Login' };
</script>
<script setup lang="ts">
import { ref } from 'vue';
import LoginForm from './login-form.vue';

const title = ref<string | undefined>(import.meta.env.VITE_APP_NAME?.toString());
</script>

<style lang="scss" scoped>
@import '@/styles/breakpoint.scss';

.login {
    height: 100vh;
    padding: 25px;

    &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin-left: -48%;
        content: '';
        background-image: url('/svg/login-bg.svg');
        background-repeat: no-repeat;
        background-position: 100%;
        background-size: auto 100%;

        @media (max-width: $--screen-xl) {
            display: none;
        }
    }

    @media (max-width: $--screen-xl) {
        background-color: #293146;
    }

    &__box {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    &__image-box {
        display: flex;
        flex: 1;
        justify-content: center;

        @media (max-width: $--screen-xl) {
            display: none;
        }
    }

    &__form-box {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    &__title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 432px;
        height: 80px;
        letter-spacing: 2px;
        flex-direction: column;

        @media (max-width: $--screen-xl) {
            color: #fff;
        }
    }

    &__logo-img {
        position: relative;
        top: 2px;
        width: 40%;
        // height: 100%;
    }

    &__image {
        z-index: 9;
        display: block;
        width: 50%;
        margin-top: -4rem;
        transform: translate(-50px);
        animation: enter-x-animation 0.4s ease-in-out 0.3s;
        animation-delay: 0.1s;
        animation-fill-mode: forwards;
    }
    .login__app-name {
        font-size: 23px;
    }
}
</style>
