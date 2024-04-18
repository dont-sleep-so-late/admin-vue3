<template>
    <a-layout>
        <a-layout-header :style="headerStyle">
            <hedaer />
        </a-layout-header>
        <a-layout>
            <a-layout-sider :style="siderStyle">
                <side />
            </a-layout-sider>
            <a-layout-content :style="contentStyle">

            </a-layout-content>
        </a-layout>
        <!-- <a-layout-footer :style="footerStyle">

        </a-layout-footer> -->
    </a-layout>
</template>

<script lang='ts' setup>
import hedaer from '@/components/header.vue'
import side from '@/components/side.vue'

import type { CSSProperties } from 'vue';
const headerStyle: CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
};

const contentStyle: CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
};

const siderStyle: CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',
};

const footerStyle: CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
};
</script>

<style lang='scss' scoped></style>
