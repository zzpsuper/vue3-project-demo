<template>
  <div class="body">
    <div class="container">
      <div class="tit">登录</div>
      <el-form ref="loginForm" :model="loginUser" :rules="rules" class="demo-dynamic">
        <el-form-item prop="username" class="form_item">
          <el-input
            v-model="loginUser.username"
            :prefix-icon="User"
            type="text"
            placeholder="账号"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginUser.password"
            :prefix-icon="Lock"
            type="password"
            placeholder="密码"
            show-password
          />
        </el-form-item>
      </el-form>
      <el-form-item>
        <el-button :loading="loading" @click="login">登录</el-button>
      </el-form-item>
      <span>
        没有账号？
        <a href="#">去注册</a>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Lock, User } from '@element-plus/icons-vue'
import useUserStore from '@/store/modules/user.ts'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils/time.ts'

let useStore = useUserStore()
let $router = useRouter()

let loginUser = reactive({
  username: '',
  password: '',
})
let loading = ref(false)
let loginForm = ref()

const login = async () => {
  loading.value = true
  await loginForm.value.validate(async (valid) => {
    if (valid) {
      try {
        await useStore.userLogin(loginUser)
        await $router.push('/')
        ElNotification({
          type: 'success',
          message: '欢迎回来',
          title: `HI,${getTime()}好`,
        })
      } catch (e) {
        loading.value = false
        ElNotification({
          type: 'error',
          message: (e as Error).message,
        })
      }
    } else {
      loading.value = false
    }
  })
}

const rules = reactive({
  // trigger: 'blur'失去焦点时
  username: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur',
    },
  ],
})
</script>

<style scoped lang="scss">
.body {
  /* 弹性布局居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  /* 溢出影藏 */
  overflow: hidden;

  /* 渐变背景 */
  background: linear-gradient(200deg, #e3c5eb, #a9c1ed);
}

.container {
  /* 相对定位 */
  position: relative;
  z-index: 1;
  display: flex;

  /* 垂直配列 */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 500px;
  background-color: #fff;
  border-radius: 15px;

  /* 阴影 */
  box-shadow: 0 5px 20px rgb(0 0 0 / 10%);
}

.container .tit {
  margin: 65px auto 70px;
  font-size: 26px;
}

.container button {
  width: 280px;
  height: 40px;
  margin: 35px auto 40px;
  font-weight: bold;
  color: #fff;
  letter-spacing: 8px;
  cursor: pointer;
  background: linear-gradient(-200deg, #507efc, #aac2ee);
  border: none;
  border-radius: 10px;

  /* 动画过渡 */
  transition: 0.5s;
}

.container button:hover {
  background: linear-gradient(-200deg, #312df1, #994bf8);
  background-position-x: -280px;
}

.container span {
  font-size: 14px;
}

.container a {
  color: plum;
  text-decoration: none;
}

.demo-dynamic {
  width: 80%;

  .form_item {
    margin-bottom: 10px;
  }
}
</style>
