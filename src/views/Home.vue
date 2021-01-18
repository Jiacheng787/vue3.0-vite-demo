<template>
  <div class="main">
      这是Home组件
      <div class="main-wrap">
          <div class="item">测试内容</div>
          <div class="item">测试内容</div>
          <div class="item">测试内容</div>
          <div class="item">测试内容</div>
      </div>
      <div class="count">{{ count }}</div>
      <el-button type="primary" round @click="handleButtonEvent">测试按钮</el-button>
  </div>
</template>

<script>
import api from '/@/api'
import { mapState } from 'vuex'
export default {
    name: "home",
    data() {
        return {
            count: 1
        }
    },
    computed: {
        ...mapState(['username'])
    },
    methods: {
        handleButtonEvent() {
            this.count++;
            // this.$message.success(this.$store.state.username)
            this.$message.success(this.username);
        }
    }
}
</script>

<style lang="less" scoped>
.main-wrap {
    display: flex;
    justify-content: center;
    .item {
        margin-right: 10px;
    }
}
</style>