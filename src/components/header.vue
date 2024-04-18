<template>
    <div class="header">
        <a-row justify="space-between">
            <a-col :span="2">
                <menu-unfold-outlined v-if="sys.collapsed" class="trigger" @click="() => sys.switchCollapsed()" />
                <menu-fold-outlined v-else class="trigger" @click="() => sys.switchCollapsed()" />
            </a-col>
            <a-col :span="10"></a-col>
            <a-col :span="2">
                <a-dropdown :trigger="['click']">
                    <a class="ant-dropdown-link" @click.prevent>
                        用户
                        <DownOutlined />
                    </a>
                    <template #overlay>
                        <a-menu>
                            <a-menu-item key="0">
                                <a href="http://www.alipay.com/">1st menu item</a>
                            </a-menu-item>
                            <a-menu-item key="1">
                                <a href="http://www.taobao.com/">2nd menu item</a>
                            </a-menu-item>
                            <a-menu-divider />
                            <a-menu-item key="3" @click="logout">退出登录</a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
            </a-col>
        </a-row>
    </div>
</template>

<script lang='ts' setup>
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DownOutlined,
} from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import useStore from "@/store";
const { sys } = useStore()

const router = useRouter()


const logout = () => {
    router.push('/login')
}

</script>

<style lang='scss' scoped></style>