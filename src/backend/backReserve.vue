<template>
  <div class="back-reserve">
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
    <div class="back-reserve-wrap">
      <div class="back-reserve-wrap-content">
        <div class="back-reserve-wrap-content-item">
          <table>
            <thead>
              <tr>
                <th>訂單編號</th>
                <th>姓名</th>
                <th>電話</th>
                <th>預計抵達時間</th>
                <th>總金額</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, key) in OrderData" :key="key">
                <td>{{ item.id }}</td>
                <td>{{ item.user.name }}</td>
                <td>{{ item.user.tel }}</td>
                <td>{{ item.user.arrivetime }}</td>
                <td>{{ item.total }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center mb-3">
      <pagination :pages="pagination" @emitPage="getRserve"></pagination>
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
      OrderData: [],
      OrderAdoptData: [],
      pagination: [],
      isLoading: false,
      orderId: ''
    }
  },
  methods: {
    getRserve: function (page = 1) {
      const vm = this
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`
      vm.isLoading = true
      vm.$http.get(url).then(function (res) {
        vm.pagination = res.data.pagination
        vm.OrderData = res.data.orders
        vm.isLoading = false
      })
    }
  },
  created () {
    const vm = this
    vm.getRserve()
  }
}
</script>
