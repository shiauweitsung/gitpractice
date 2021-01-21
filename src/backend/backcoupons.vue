<template>
  <div class="back-coupons">
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
    <div class="back-coupons-wrap">
      <div class="back-coupons-wrap-content">
        <div class="back-coupons-wrap-content-item">
          <div class="text-right mr-3">
            <button
              class="btn-second"
              data-target="#CouponModal"
              data-toggle="modal"
              @click.prevent="openModal((isNew = true))"
            >
              新增優惠券
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>優惠名稱</th>
                <th>折扣數</th>
                <th>到期日</th>
                <th>優惠代碼</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, key) in CouponsData" :key="key">
                <td>{{ item.title }}</td>
                <td>{{ item.percent }}</td>
                <td>{{ item.due_date }}</td>
                <td>{{ item.code }}</td>
                <td>
                  <button
                    class="btn-second mt-0 mr-2"
                    @click.prevent="openModal((isNew = false), item)"
                    data-target="#CouponModal"
                    data-toggle="modal"
                  >
                    修改
                  </button>
                  <button
                    class="btn-main"
                    data-target="#delModal"
                    data-toggle="modal"
                    @click.prevent="openDelmodal(item)"
                  >
                    刪除
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center mb-3">
      <pagination :pages="pagination" @emitPage="getCoupons"></pagination>
    </div>
    <!-- 新增與修改優惠券 使用同一個modal -->
    <div
      class="modal fade"
      id="CouponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="CouponModal"
      aria-hidden="true"
    >
      <div class="modal-dialog adopt-modal" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="CouponModal">新增優惠券</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body adopt-modal-content">
            <div>
              <label for="back_coupon_title">優惠名稱 : </label>
              <input
                type="text"
                id="back_coupon_title"
                v-model="tempCoupon.title"
              />
            </div>
            <div>
              <label for="back_coupons_percent">折扣數 : </label>
              <input
                type="text"
                id="back_coupons_percent"
                v-model="tempCoupon.percent"
              />
            </div>
            <div>
              <label for="back_coupons_date">到期日 : </label>
              <input
                type="text"
                id="back_coupons_date"
                v-model="tempCoupon.due_date"
              />
            </div>
            <div>
              <label for="back_coupons_code">優惠代碼 : </label>
              <input
                type="text"
                id="back_coupons_code"
                v-model="tempCoupon.code"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn-main"
              @click.prevent="updateCoupons"
            >
              確定
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- del modal -->
    <div
      class="modal fade"
      id="delModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="delModal"
      aria-hidden="true"
    >
      <div class="modal-dialog del-modal" role="document">
        <div class="modal-content del-modal-content">
          <div class="modal-body del-modal-body">
            請問你是否要刪除 <span>{{ tempCoupon.title }}</span> ?
          </div>
          <div class="del-modal-content-btn">
            <button type="button" class="btn-main" data-dismiss="modal">
              取消
            </button>
            <button
              type="button"
              class="btn-second mt-0"
              @click.prevent="delCoupons(tempCoupon.id)"
            >
              確定
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import pagination from '@/components/pagination'
export default {
  name: 'backReserve',
  components: {
    pagination
  },
  data () {
    return {
      CouponsData: [],
      tempCoupon: [],
      pagination: [],
      isNew: false,
      isLoading: false,
      api: '',
      meht: ''
    }
  },
  methods: {
    getCoupons: function (page = 1) {
      const vm = this
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`
      vm.isLoading = true
      vm.$http.get(url).then(function (res) {
        vm.pagination = res.data.pagination
        vm.CouponsData = res.data.coupons
        vm.isLoading = false
      })
    },
    openModal: function (isNew, item) {
      const vm = this
      if (isNew) {
        vm.tempCoupon = {}
        vm.isNew = true
      } else {
        vm.tempCoupon = Object.assign({}, item)
        vm.isNew = false
      }
      $('#CouponModal').modal('show')
    },
    updateCoupons: function () {
      // const vm = this
      // let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`
      // let httpMethod = 'post'
      // vm.isLoading = true
      // if (!vm.isNew) {
      //   let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`
      //   let httpMethod = 'put'
      // }
      // console.log(url, httpMethod)
      // vm.$http[httpMethod](url, { data: vm.tempCoupon }).then((res) => {
      //   if (res.data.success) {
      //     vm.getCoupons()
      //   } else {
      //     console.log('error')
      //   }
      //   $('#CouponModal').modal('hide')
      //   vm.isLoading = false
      // })
      const vm = this
      vm.isLoading = true
      if (vm.isNew) {
        const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`
        vm.$http.post(url, { data: vm.tempCoupon }).then(function (res) {
          console.log(res)
          if (res.data.success) {
            console.log('success')
            vm.getCoupons()
          }
          vm.isLoading = false
          $('#CouponModal').modal('hide')
        })
      } else {
        const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`
        vm.$http.put(url, { data: vm.tempCoupon }).then(function (res) {
          console.log(res)
          if (res.data.success) {
            console.log('success')
            vm.getCoupons()
          }
          vm.isLoading = false
          $('#CouponModal').modal('hide')
        })
      }
    },
    openDelmodal: function (item) {
      const vm = this
      vm.tempCoupon = Object.assign({}, item)
      $('#delModal').modal('show')
    },
    delCoupons: function () {
      const vm = this
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`
      vm.isLoading = true
      vm.$http.delete(url).then(function (res) {
        console.log(res)
        if (res.data.success) {
          console.log('success')
          vm.getCoupons()
        }
        vm.isLoading = false
        $('#delModal').modal('hide')
      })
    }
  },
  created () {
    const vm = this
    vm.getCoupons()
  }
}
</script>
