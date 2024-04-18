<template>
    <a-layout style="min-height: 100vh">
        <a-layout-header style='background-color: #fff;'>
            <hedaer />
        </a-layout-header>
        <a-layout>
            <a-layout-sider v-model:collapsed="sys.collapsed" theme="light" :trigger="null" collapsible>
                <side />
            </a-layout-sider>
            <a-layout-content>
                <router-view></router-view>
            </a-layout-content>
        </a-layout>
        <!-- <a-layout-footer :style="footerStyle">

        </a-layout-footer> -->
    </a-layout>
</template>

<script lang='ts' setup>
import hedaer from '@/components/header.vue'
import side from '@/components/side.vue'

import useStore from "@/store";
const { sys } = useStore()



</script>

<style lang='scss' scoped></style>
