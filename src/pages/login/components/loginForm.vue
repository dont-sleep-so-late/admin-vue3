<template>
    <a-form name="basic" autocomplete class="login-form" @finish="submit()" ref="loginRef" :model="loginParam"
        :rules="loginRules">
        <h1 class="login-title">登录</h1>
        <a-form-item name="username">
            <a-input placeholder="请输入账号" has-feedback v-model:value="loginParam.username" size="large"><template
                    #prefix>
                    <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </template></a-input>
        </a-form-item>
        <a-form-item name="password">
            <a-input-password placeholder="请输入密码" has-feedback v-model:value="loginParam.password" size="large">
                <template #prefix>
                    <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </template>
            </a-input-password>
        </a-form-item>
        <a-form-item>
            <a-button type="primary" class="login-btn" size="large" html-type="submit">登录</a-button>
        </a-form-item>
    </a-form>
</template>

<script setup lang="ts">
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { LoginReq } from '@/types/user';
import { reactive, ref, toRaw } from 'vue'
import { Rule } from 'ant-design-vue/es/form';
const loginParam: LoginReq = reactive({
    username: "",
    password: ""
})

const loginRef = ref()
const loginRules: Record<string, Rule[]> = {
    username: [{ required: true, message: "账号不能为空", trigger: 'blur' }],
    password: [{ required: true, message: "密码不能为空", trigger: 'blur' }]
}
const submit = () => {
    loginRef.value
        .validate()
        .then(() => {
            console.log('values', loginParam, toRaw(loginParam));
        })
        .catch((error: any) => {
            console.log('error', error);
        });
}

</script>

<style scoped>
.login-form {
    grid-column: 1;
    grid-row: 1;
    opacity: 1;
    transition: 1s ease-in-out;
    transition-delay: 0.5s;
    /* 上下 | 左右 */
    padding: 1% 25%;
    z-index: 1;
}

.login-form.sign-up-model {
    opacity: 0;
    transition: 1s ease-in-out;
    z-index: 0;
}

.login-title {
    text-align: center;
    color: #444;
}

.login-btn {
    width: 100%;
    font-size: 18px;
}
</style>
