<template>
  <div class="backAdopt">
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
    <div class="backAdopt-wrap">
      <div class="backAdopt-wrap-add">
        <button
          type="button"
          class="btn-second"
          data-toggle="modal"
          data-target="#AdoptModal"
          @click.prevent="openModal((isNew = true))"
        >
          新增動物
        </button>
      </div>
      <div class="backAdopt-wrap-content">
        <div
          class="backAdopt-wrap-content-item"
          v-for="(item, key) in data"
          :key="key"
        >
          <div>
            <img :src="item.image" alt="" style="height: 170px" />
            <div class="backAdopt-wrap-content-item-info">
              <p>名字 : {{ item.title }}</p>
              <p>種類 : {{ item.category }}</p>
              <p>性別 : {{ item.unit }}</p>
              <p>價錢 : {{ item.price }}</p>
              <div class="text-center">
                <button
                  class="btn-main"
                  data-toggle="modal"
                  data-target="#delModal"
                  @click.prevent="openDelmodal(item)"
                >
                  刪除
                </button>
                <button
                  class="btn-second"
                  @click.prevent="openModal((isNew = false), item)"
                >
                  修改
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center mb-3">
      <pagination
        :pages="pagination"
        @emitPage="getAdopt"
        v-if="paginShow"
      ></pagination>
    </div>
    <!-- adopt Modal -->
    <div
      class="modal fade"
      id="AdoptModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="AdoptModal"
      aria-hidden="true"
    >
      <div class="modal-dialog adopt-modal" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="AdoptModal">新增領養動物資訊</h5>
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
              <label for="back_name">動物性名 : </label>
              <input type="text" id="back_name" v-model="modalData.title" />
            </div>
            <div>
              <label for="back_category">分類 : </label>
              <input
                type="text"
                id="back_category"
                v-model="modalData.category"
              />
            </div>
            <div>
              <label for="back_unit">性別 : </label>
              <input type="text" id="back_unit" v-model="modalData.unit" />
            </div>
            <div>
              <label for="back_price">原價 : </label>
              <input type="text" id="back_price" v-model="modalData.price" />
            </div>
            <div>
              <label for="back_origin_price">售價 : </label>
              <input
                type="text"
                id="back_origin_price"
                v-model="modalData.origin_price"
              />
            </div>
            <div>
              <label for="back_description">詳細說明 : </label>
              <textarea
                name=""
                id="back_description"
                cols="30"
                rows="10"
                v-model="modalData.description"
              ></textarea>
            </div>
            <div>
              <label for="back_content">備註 : </label>
              <textarea
                name=""
                id="back_content"
                cols="30"
                rows="10"
                v-model="modalData.content"
              ></textarea>
            </div>
            <div class="flex-column">
              <div>
                <label for="back_images">上傳圖片 : </label>
                <input
                  type="file"
                  id="back_images"
                  ref="files"
                  @change="uploadfile"
                />
                <div class="d-flex align-items-center mb-3 mt-2">
                  <label for="back_imageUrl">圖片網址 : </label>
                  <input
                    type="text"
                    id="back_imageUrl"
                    v-model="modalData.image"
                  />
                </div>

                <img :src="modalData.image" alt="" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn-main"
              @click.prevent="updateAdopt(modalData.id)"
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
            請問你是否要刪除 <span>{{ modalData.title }}</span> ?
          </div>
          <div class="del-modal-content-btn">
            <button type="button" class="btn-main" data-dismiss="modal">
              取消
            </button>
            <button
              type="button"
              class="btn-second mt-0"
              @click.prevent="delAdopt(modalData.id)"
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
  name: 'backendAdopt',
  components: {
    pagination
  },
  data () {
    return {
      data: [],
      modalData: [],
      isNew: false,
      isLoading: false,
      pagination: {},
      paginShow: false
    }
  },
  methods: {
    getAdopt: function (page = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`
      const vm = this
      vm.isLoading = true
      vm.$http.get(url).then(function (res) {
        vm.pagination = res.data.pagination
        vm.data = res.data.products
        vm.isLoading = false
        console.log(res)
        if (res.data.success) {
          vm.paginShow = true
        }
      })
    },
    openModal: function (isNew, item) {
      const vm = this
      if (isNew) {
        vm.modalData = {}
        vm.isNew = true
      } else {
        vm.modalData = Object.assign({}, item)
        vm.isNew = false
      }
      $('#AdoptModal').modal('show')
    },
    updateAdopt: function () {
      const vm = this
      vm.isLoading = true
      if (vm.isNew) {
        const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/`
        vm.$http.post(url, { data: vm.modalData }).then(function (res) {
          if (res.data.success) {
            vm.getAdopt()
          }
          vm.isLoading = false
          $('#AdoptModal').modal('hide')
        })
      } else {
        const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.modalData.id}`
        vm.$http.put(url, { data: vm.modalData }).then(function (res) {
          if (res.data.success) {
            vm.getAdopt()
          }
          vm.isLoading = false
          $('#AdoptModal').modal('hide')
        })
      }
    },
    uploadfile: function () {
      const uploadedfile = this.$refs.files.files[0]
      const vm = this
      const formData = new FormData()
      formData.append('file-to-upload', uploadedfile)
      vm.isLoading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`
      vm.$http.post(url, formData, {
        header: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (res) {
        if (res.data.success) {
          vm.$set(vm.modalData, 'image', res.data.imageUrl)
        } else {
          console.log('error')
        }
        vm.isLoading = false
      })
    },
    openDelmodal: function (item) {
      const vm = this
      vm.modalData = Object.assign({}, item)
      $('#delModal').modal('show')
    },
    delAdopt: function () {
      const vm = this
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.modalData.id}`
      vm.isLoading = true
      vm.$http.delete(url).then(function (res) {
        if (res.data.success) {
          vm.getAdopt()
        } else {
          console.log('error')
        }
        $('#delModal').modal('hide')
        vm.isLoading = false
      })
    }
  },
  created () {
    const vm = this
    vm.getAdopt()
  }
}
</script>
