<template>
  <div class="main">
      <div class="title">这是Contact组件</div>
      <div class="info">
        <span>联系人：{{ mobile }}</span>
        <span>用户：{{ user }}</span>
      </div>
      <el-button type="primary" round @click="handleButtonEvent">发送请求</el-button>
      <el-button type="primary" round @click="toHomePage">返回主页</el-button>
      <router-view></router-view>
  </div>
</template>

<script>
import api from '/@/api'
import  { defineComponent, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
export default {
  name: 'contact',
  setup() {
    const state = reactive({
      mobile: '18142019877',
      code: '0',
      user: ''
    })

    // 实例化路由和 vuex 需要全局定义，不能写在方法里面
    const store = useStore();
    const router = useRouter();
    
    state.user = store.state.username;

    const handleButtonEvent = () => {
      let data = {
        'contact_person_mobile': state.mobile,
        'need_pic_code': state.code
      }
      api.shortMessages.send(data)
        .then(res => {
          console.log(res)
          ElMessage.success(res.msg)
        })
        .catch(e => {
          console.log(e)
        })
    }
    const toHomePage = () => {
      router.push('/')
    }
    
    return {
      ...toRefs(state),
      handleButtonEvent,
      toHomePage
    }
  }
}
</script>

<style>

</style>