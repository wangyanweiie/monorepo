<template>
    <div>
        <el-menu mode="horizontal" router>
            <el-menu-item index="/form/demo1">DEMO1</el-menu-item>
            <el-menu-item index="/form/demo2">DEMO2</el-menu-item>
        </el-menu>
        <router-view v-slot="{ Component }">
            <transition name="el-fade-in-linear" mode="out-in">
                <keep-alive>
                    <component :is="Component"></component>
                </keep-alive>
            </transition>
        </router-view>
    </div>
</template>

<style scoped>
.scale-enter-active,
a.scale-leave-active {
    transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
    opacity: 0;
    transform: scale(0.9);
}
</style>
