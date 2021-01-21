<template>
  <div class="login">
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
    <div class="login-wrap">
      <div class="login-wrap-content">
        <div class="login-wrap-content-bg"></div>
        <div class="login-wrap-content-info">
          <div>
            <img
              src="~@/assets/images/login/title.png"
              alt=""
              class="login-title"
            />
          </div>
          <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(onSubmit)">
              <div>
                <label for="login-account"
                  ><img src="~@/assets/images/header/login.png" alt=""
                /></label>
                <input
                  type="text"
                  id="login-account"
                  placeholder="帳號"
                  v-model="user.username"
                />
              </div>
              <div>
                <label for="login-pwd">
                  <img src="~@/assets/images/login/padlock.png" alt="" />
                </label>
                <input
                  type="password"
                  id="login-pwd"
                  placeholder="密碼"
                  v-model="user.password"
                />
                <div class="pwd" @click.prevent="pwdshow">
                  <img
                    src="~@/assets/images/login/visibility.png"
                    alt=""
                    class="pwd-hide"
                  />
                  <img
                    src="~@/assets/images/login/visibility (hide).png"
                    alt=""
                    class="pwd-show"
                  />
                </div>
              </div>
              <div>
                <button class="btn-main" type="submit">登入</button>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      data: [],
      user: {
        username: '',
        password: ''
      },
      isLoading: false
    }
  },
  methods: {
    onSubmit () {
      const vm = this
      const url = `${process.env.VUE_APP_API}/admin/signin`
      vm.isLoading = true
      vm.$http.post(url, vm.user).then(function (res) {
        if (res.data.success) {
          const token = res.data.token
          const expired = res.data.expired
          document.cookie = `hextoken=${token};expired=${new Date(expired)};`
          vm.$router.push('/admin')
        } else {
          console.log('error')
        }
        vm.isLoading = false
      })
    },
    pwdshow: function () {
      const pwd = $('#login-pwd')
      const show = $('.pwd-show')
      const hide = $('.pwd-hide')
      if (pwd.attr('type') === 'password') {
        pwd.attr('type', 'text')
        show.show()
        hide.hide()
      } else if (pwd.attr('type') === 'text') {
        pwd.attr('type', 'password')
        show.hide()
        hide.show()
      }
    }
  },
  created () {
    const vm = this
    const cookietoken = document.cookie.replace(/(?:(?:^|.*;\s*)hextoken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    vm.$http.defaults.headers.common.Authorization = cookietoken
  }
}
</script>
