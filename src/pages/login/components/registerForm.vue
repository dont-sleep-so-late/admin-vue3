<template>
    <a-form autocomplete class="register-form" @finish="submit()" ref="registerRef" :model="registerParam"
        :rules="registerRules">
        <h1 class="login-title">登录</h1>
        <a-form-item name="username">
            <a-input placeholder="请输入账号" has-feedback v-model:value="registerParam.username" size="large"><template
                    #prefix>
                    <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </template></a-input>
        </a-form-item>
        <a-form-item name="password">
            <a-input-password placeholder="请输入密码" has-feedback v-model:value="registerParam.password" size="large">
                <template #prefix>
                    <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </template>
            </a-input-password>
        </a-form-item>
        <a-form-item name="email">
            <a-input placeholder="请输入邮箱" v-model:value="registerParam.email" size="large">
                <template #prefix>
                    <MailOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </template>
            </a-input>
        </a-form-item>
        <a-form-item>
            <a-button type="primary" class="login-btn" size="large" html-type="submit">注册</a-button>
        </a-form-item>
    </a-form>
</template>

<script setup lang="ts">
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons-vue';
import { RegisterReq } from '@/types/user';
import { reactive, ref, toRaw } from 'vue'
import { Rule } from 'ant-design-vue/es/form';
const registerParam: RegisterReq = reactive({
    username: "",
    password: "",
    email: ""
})
const registerRef = ref()
const registerRules: Record<string, Rule[]> = {
    username: [{ required: true, message: "账号不能为空", trigger: 'blur' }],
    password: [{ required: true, message: "密码不能为空", trigger: 'blur' }
        , { required: true, message: "密码是6~20位", min: 6, max: 20, trigger: 'blur' }],
    email: [{ required: true, message: "邮箱不能为空", trigger: 'blur' }]
}
const submit = () => {
    registerRef.value
        .validate()
        .then(() => {
            console.log('values', registerParam, toRaw(registerParam));
        })
        .catch((error: any) => {
            console.log('error', error);
        });
}
</script>

<style scoped>
.register-form {
    grid-row: 1;
    grid-column: 1;
    opacity: 0;
    transition: 1s ease-in-out;
    /* 上下 | 左右 */
    padding: 1% 25%;
    z-index: 0;
}

.register-form.sign-up-model {
    opacity: 1;
    transition: 1s ease-in-out;
    transition-delay: 0.5s;
    z-index: 1;
}

.register-title {
    text-align: center;
    color: #444;
}

.register-btn {
    width: 100%;
    font-size: 18px;
}
</style>
