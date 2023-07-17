<template>
  <div class="body">
    <div class="container">
      <div class="tit">登录</div>
      <el-form>
        <el-form-item>
          <el-input
            v-model="loginUser.username"
            :prefix-icon="User"
            type="text"
            placeholder="账号"
          />
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="loginUser.password"
            :prefix-icon="Lock"
            type="password"
            autocomplete="off"
            placeholder="密码"
          />
        </el-form-item>
      </el-form>
      <el-form-item>
        <button>登录</button>
      </el-form-item>
      <span>
        没有账号？
        <a href="#">去注册</a>
      </span>
    </div>
    <div class="square">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="circle">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Lock, User } from '@element-plus/icons-vue'

let loginUser = reactive({
  username: '',
  password: '',
})
</script>

<style scoped lang="scss">
* {
  padding: 0;

  /* 初始化 */
  margin: 0;
}

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

.container input {
  width: 280px;
  height: 30px;
  margin: 12px auto;
  text-indent: 8px;
  border: none;
  border-bottom: 1px solid #ddd;
  outline: none;
}

.container button {
  width: 280px;
  height: 40px;
  margin: 35px auto 40px;
  font-weight: bold;
  color: #fff;
  letter-spacing: 8px;
  cursor: pointer;
  background: linear-gradient(-200deg, #fac0e7, #aac2ee);
  border: none;
  border-radius: 10px;

  /* 动画过渡 */
  transition: 0.5s;
}

.container button:hover {
  background: linear-gradient(-200deg, #aac2ee, #fac0e7);
  background-position-x: -280px;
}

.container span {
  font-size: 14px;
}

.container a {
  color: plum;
  text-decoration: none;
}

ul li {
  position: absolute;
  width: 30px;
  height: 30px;
  list-style: none;
  background-color: #fff;
  border: 1px solid #fff;
  opacity: 0;
}

.square li {
  top: 40vh;
  left: 60vw;
  animation: square 10s linear infinite;
}

.square li:nth-child(2) {
  top: 80vh;
  left: 10vw;

  /* 动画延时时间 */
  animation-delay: 2s;
}

.square li:nth-child(3) {
  top: 80vh;
  left: 85vw;

  /* 动画延时时间 */
  animation-delay: 4s;
}

.square li:nth-child(4) {
  top: 10vh;
  left: 70vw;

  /* 动画延时时间 */
  animation-delay: 6s;
}

.square li:nth-child(5) {
  top: 10vh;
  left: 10vw;

  /* 动画延时时间 */
  animation-delay: 8s;
}

.circle li {
  bottom: 0;
  left: 15vw;
  animation: circle 10s linear infinite;
}

.circle li:nth-child(2) {
  left: 35vw;
  animation-delay: 2s;
}

.circle li:nth-child(3) {
  left: 55vw;
  animation-delay: 4s;
}

.circle li:nth-child(4) {
  left: 75vw;
  animation-delay: 6s;
}

.circle li:nth-child(5) {
  left: 90vw;
  animation-delay: 8s;
}

@keyframes square {
  0% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }

  100% {
    opacity: 0;
    transform: scale(0) rotate(1000deg);
  }
}
@keyframes circle {
  0% {
    bottom: 0;
    border-radius: 0;
    opacity: 1;
    transform: scale(0) rotate(0deg);
  }

  100% {
    bottom: 90vh;
    border-radius: 50%;
    opacity: 0;
    transform: scale(0) rotate(1000deg);
  }
}
</style>
