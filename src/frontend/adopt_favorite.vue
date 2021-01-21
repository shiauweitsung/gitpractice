<template>
  <div class="adopt_favorite">
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
    <div class="adopt_favorite-wrap" v-if="favoriteData.length > 0">
      <div class="adopt_favorite-wrap-content">
        <div
          class="adopt_favorite-wrap-content-item"
          v-for="(item, key) in favoriteData"
          :key="key"
        >
          <div class="adopt_favorite-wrap-content-item-img">
            <img :src="item.image" alt="" />
          </div>
          <div class="adopt_favorite-wrap-content-item-info">
            <p>姓名 : {{ item.title }}</p>
            <p>種類 : {{ item.category }}</p>
            <p>性別 : {{ item.unit }}</p>
            <p class="more-content">敘述 : {{ item.content }}</p>
            <button href="#" class="read-more">查看更多</button>
            <p class="more-description">備註 : {{ item.description }}</p>
            <button href="#" class="read-more-des">查看更多</button>
          </div>
          <div class="adopt_favorite-wrap-content-item-btn">
            <button class="btn-second" @click.prevent="addCart(item.id)">
              預約領養
            </button>
            <button class="btn-second" @click.prevent="delFavorite(item)">
              取消關注
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="noCart" v-else>
      <h4>opps 目前沒有關注資訊喔</h4>
      <img src="~@/assets/images/adopt/error.gif" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'adopt_favorite',
  data () {
    return {
      favorite: JSON.parse(localStorage.getItem('addfav')) || [],
      favoriteData: [],
      isLoading: false
    }
  },
  methods: {
    getFavorite: function () {
      const vm = this
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      vm.isLoading = true
      vm.$http.get(url).then(function (res) {
        vm.favoriteData = res.data.products.filter(function (item) {
          vm.isLoading = false
          return vm.favorite.indexOf(item.id) !== -1
        })
      })
    },
    delFavorite: function (item) {
      const vm = this
      const num = vm.favorite.indexOf(item.id)
      if (num !== -1) {
        vm.favorite.splice(num, 1)
      }
      localStorage.setItem('addfav', JSON.stringify(vm.favorite))
      vm.$bus.$emit('favnum', vm.favorite.length)
      vm.getFavorite()
    },
    addCart: function (id, qty = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const vm = this
      vm.isLoading = true
      const cart = {
        product_id: id,
        qty
      }
      vm.$http.post(url, { data: cart }).then(function (res) {
        console.log(res)
        if (res.data.success) {
          vm.getCart()
        } else {
          console.log('error')
        }
        vm.isLoading = false
      })
    },
    getCart: function () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const vm = this
      vm.isLoading = true
      vm.$http.get(url).then(function (res) {
        vm.isLoading = false
        vm.$bus.$emit('cartVal', res.data.data.carts.length)
      })
    },
    getMorecontent: function () {
      $('.more-content').each(function (item, i) {
        const one = $(this).css('-webkit-line-clamp')
        const height = $(this).height()
        if (height >= 105) {
          $(this).siblings('.read-more').show()
        } else {
          $(this).siblings('.read-more').hide()
        }
      })
      $('.more-description').each(function (item, i) {
        const one = $(this).css('-webkit-line-clamp')
        const height = $(this).height()
        if (height >= 105) {
          $(this).siblings('.read-more-des').show()
        } else {
          $(this).siblings('.read-more-des').hide()
        }
      })
    }
  },
  created () {
    const vm = this
    vm.getFavorite()
    vm.getCart()
  },
  updated () {
    $('.read-more').click(function () {
      const display = $(this).siblings('.more-content').css('display')
      const content = $(this).siblings('.more-content')
      const text = display === 'block' ? '查看更多' : '隱藏'
      $(this).text(text)
      display === '-webkit-box' ? content.css('display', 'block') : content.css('display', '-webkit-box')
    })
    $('.read-more-des').click(function () {
      const display = $(this).siblings('.more-description').css('display')
      const content = $(this).siblings('.more-description')
      const text = display === 'block' ? '查看更多' : '隱藏'
      $(this).text(text)
      display === '-webkit-box' ? content.css('display', 'block') : content.css('display', '-webkit-box')
    })
    this.getMorecontent()
  }
}
</script>
