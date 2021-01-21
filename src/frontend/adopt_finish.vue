<template>
  <div class="adopt_finish">
    <loading :active.sync="isLoading">
      <div class="loadingio-spinner-spin-vr67c069ls">
        <div class="ldio-i4ihhev39wf">
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
        </div>
      </div>
    </loading>
    <div class="adopt_finish-wrap">
      <h4>您已預約完成</h4>
      <div class="adopt_finish-wrap-content">
        <p>姓名 : {{ data.name }}</p>
        <p>電話 : {{ data.tel }}</p>
        <p>時間 : {{ data.arrivetime }}</p>
        <p>備註 : {{ message }}</p>
        <p class="adopt_finish-wrap-content-note">
          請您準時抵達，方便作業流程，若有事情無法抵達，請務必電話告知取消
        </p>
      </div>
      <div class="text-center">
        <router-link to="/" class="btn-main mt-4">返回首頁</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'adopt_finish',
  data () {
    return {
      isLoading: false,
      payId: '',
      message: '',
      data: {
        name: '',
        tel: '',
        arrivetime: ''
      }
    }
  },
  methods: {
    getOrder: function () {
      const vm = this
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.payId}`
      vm.isLoading = true
      vm.$http.get(url).then(function (res) {
        console.log(res)
        vm.data = res.data.order.user
        vm.message = res.data.order.message
        vm.isLoading = false
      })
    }
  },
  created () {
    const vm = this
    vm.payId = vm.$route.params.payId
    vm.getOrder()
  }
}
</script>
