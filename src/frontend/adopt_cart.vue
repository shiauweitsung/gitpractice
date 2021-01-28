<template>
  <div class="adopt_cart">
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
    <alert />
    <div class="adopt_cart-wrap" v-if="cartLength > 0">
      <div
        class="adopt_cart-wrap-item"
        v-for="(item, key) in cart.carts"
        :key="key"
      >
        <div class="adopt_cart-wrap-item-img">
          <img :src="item.product.image" alt="" />
        </div>
        <div class="adopt_cart-wrap-item-info">
          <p>姓名/品種 : {{ item.product.title }}</p>
          <p>分類 : {{ item.product.category }}</p>
          <p>性別 : {{ item.product.unit }}</p>
        </div>
        <div class="adopt_cart-wrap-item-remove">
          <button
            class="btn-remove"
            @click.prevent="delCart(item.id)"
            title="刪除"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="-48 0 407 407"
              width="24px"
            >
              <path
                d="m89.199219 37c0-12.132812 9.46875-21 21.601562-21h88.800781c12.128907 0 21.597657 8.867188 21.597657 21v23h16v-23c0-20.953125-16.644531-37-37.597657-37h-88.800781c-20.953125 0-37.601562 16.046875-37.601562 37v23h16zm0 0"
              />
              <path
                d="m60.601562 407h189.199219c18.242188 0 32.398438-16.046875 32.398438-36v-247h-254v247c0 19.953125 14.15625 36 32.402343 36zm145.597657-244.800781c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v189c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8zm-59 0c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v189c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8zm-59 0c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v189c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8zm0 0"
              />
              <path
                d="m20 108h270.398438c11.046874 0 20-8.953125 20-20s-8.953126-20-20-20h-270.398438c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20zm0 0"
              />
            </svg>
          </button>
        </div>
      </div>
      <h4 class="text-center">填寫預約表單</h4>
      <div class="adopt_cart-wrap-input">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(onSubmit)">
            <ValidationProvider v-slot="{ errors, classes }" rules="required">
              <div :class="classes" class="adopt_cart-wrap-input-info">
                <label for="adopt_name">姓名</label>
                <input type="text" id="adopt_name" v-model="form.user.name" />
                <p class="error-msg">{{ errors[0] }}</p>
              </div>
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors, classes }" rules="required">
              <div :class="classes" class="adopt_cart-wrap-input-info">
                <label for="adopt_num">手機號碼</label>
                <input
                  type="number"
                  onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"
                  id="adopt_num"
                  v-model="form.user.tel"
                />
                <p class="error-msg">{{ errors[0] }}</p>
              </div>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors, classes }"
              rules="required|email"
            >
              <div :class="classes" class="adopt_cart-wrap-input-info">
                <label for="adopt_email">Email</label>
                <input
                  type="text"
                  id="adopt_email"
                  name="email"
                  v-model="form.user.email"
                />
                <p class="error-msg">{{ errors[0] }}</p>
              </div>
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors, classes }" rules="required">
              <div :class="classes" class="adopt_cart-wrap-input-info">
                <label for="adopt_day">請選擇預約抵達時間</label>
                <select name="" id="adopt_day" v-model="form.user.arrivetime">
                  <option value="" disabled>---請選擇---</option>
                  <option
                    :value="item"
                    v-for="(item, key) in getTime"
                    :key="key"
                  >
                    {{ item }}
                  </option>
                </select>
                <p class="error-msg">{{ errors[0] }}</p>
              </div>
            </ValidationProvider>
            <div class="adopt_cart-wrap-input-info">
              <label for="adopt_note">備註:</label>
              <textarea
                name=""
                id="adopt_note"
                cols="30"
                rows="10"
                v-model="form.message"
              ></textarea>
            </div>
            <div class="d-flex justify-content-center">
              <a
                href=""
                class="btn-second mr-3"
                @click.prevent="$router.back(-1)"
                >返回</a
              >
              <button type="submit" class="btn-second">送出</button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
    <div class="noCart" v-else>
      <h4>opps 目前沒有預約領養資訊喔</h4>
      <img src="~@/assets/images/adopt/error.gif" alt="" />
    </div>
  </div>
</template>
<script>
import alert from '@/components/AlertMessage'
export default {
  name: 'adopt_cart',
  components: {
    alert
  },
  data () {
    return {
      cart: [],
      cartLength: 0,
      isLoading: false,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
          arrivetime: ''
        },
        message: ''
      },
      time: {
        1: '9:00 ~ 10:00',
        2: '10:00 ~ 11:00',
        3: '11:00 ~ 12:00',
        4: '12:00 ~ 13:00',
        5: '14:30 ~ 15:30',
        6: '15:30 ~ 16:30',
        7: '16:30 ~ 17:30',
        8: '17:30 ~ 18:30'
      }
    }
  },
  methods: {
    getCart: function () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const vm = this
      vm.isLoading = true
      vm.$http.get(url).then(function (res) {
        vm.isLoading = false
        vm.cart = res.data.data
        vm.cartLength = vm.cart.carts.length
        vm.$bus.$emit('cartVal', vm.cartLength)
      })
    },
    delCart: function (id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      const vm = this
      vm.isLoading = true
      vm.$http.delete(url).then(function (res) {
        if (res.data.success) {
          vm.getCart()
          vm.$bus.$emit('message', '取消預約', 'error')
        } else {
          console.log('error')
        }
        vm.isLoading = false
      })
    },
    onSubmit () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/order`
      const vm = this
      vm.isLoading = true
      // vm.$set(vm.form, 'time', vm.arrivetime)
      vm.$http.post(url, { data: vm.form }).then(function (res) {
        if (res.data.success) {
          vm.$router.push(`/adopt_check/${res.data.orderId}`)
        } else {
          console.log('error')
        }
        vm.isLoading = false
      })
    }
  },
  computed: {
    getTime: function () {
      const vm = this
      Object.keys(vm.time).forEach(function (item) {
        return vm.time[item]
      })
      return vm.time
    }
  },
  created () {
    const vm = this
    vm.getCart()
  }
}
</script>
