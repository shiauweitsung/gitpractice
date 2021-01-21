<template>
  <div class="adopt_check">
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
    <div class="adopt_check-wrap">
      <h4 class="text-center">預約確認表</h4>
      <div class="adopt_check-wrap-content">
        <div class="adopt_check-wrap-content-info">
          <div v-for="(item, key) in productData" :key="key">
            <div class="adopt_check-wrap-content-info-header">
              <img :src="item.product.image" alt="" />
            </div>
            <div class="adopt_check-wrap-content-info-cont">
              <p>名字 : {{ item.product.title }}</p>
              <p>種類 : {{ item.product.category }}</p>
              <p>性別 : {{ item.product.unit }}</p>
            </div>
          </div>
        </div>
        <div class="adopt_check-wrap-content-user">
          <div>
            <p>
              姓名 : <span>{{ userData.user.name }}</span>
            </p>
            <p>
              電話 : <span>{{ userData.user.tel }}</span>
            </p>
            <p>
              信箱 : <span>{{ userData.user.email }}</span>
            </p>
            <p>
              地址 : <span>{{ userData.user.address }}</span>
            </p>
            <p>
              預計抵達時間 : <span>{{ userData.user.arrivetime }}</span>
            </p>
            <p>
              備註 : <span>{{ userData.message }}</span>
            </p>
            <div>
              <a href="" class="btn-main" @click.prevent="payOrder()"
                >確定預約</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'adopt_check',
  data () {
    return {
      userData: {
        user: {
          name: '',
          tel: '',
          email: '',
          address: '',
          arrivetime: ''
        }
      },
      productData: [],
      orderId: '',
      isLoading: false
    }
  },
  methods: {
    getOrder: function () {
      const vm = this
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`
      vm.isLoading = true
      vm.$http.get(url).then(function (res) {
        console.log(res)
        vm.userData = res.data.order
        vm.productData = res.data.order.products
        vm.isLoading = false
      })
    },
    getCart: function () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const vm = this
      vm.isLoading = true
      vm.$http.get(url).then(function (res) {
        vm.$bus.$emit('cartVal', res.data.data.carts.length)
        vm.isLoading = false
      })
    },
    payOrder: function () {
      const vm = this
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`
      vm.isLoading = true
      vm.$http.post(url).then(function (res) {
        if (res.data.success) {
          vm.$router.push(`/adopt_finish/${vm.orderId}`)
        } else {
          console.log('error')
        }
        vm.isLoading = false
      })
    }
  },
  created () {
    const vm = this
    vm.orderId = vm.$route.params.orderId
    vm.getOrder()
    vm.getCart()
  }
}
</script>
