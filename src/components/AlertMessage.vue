<template>
  <div>
    <transition-group name="fade">
      <div
        class="message"
        v-for="(item, key) in message"
        :key="key"
        :class="item.status"
      >
        <img src="~@/assets/images/icon/dog2.png" alt="" style="width: 32px" />
        <p>{{ item.message }}</p>
        <button
          type="button"
          @click="removeMessageNow(key)"
          aria-label="Close"
          class="close-btn"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: 'alertMessage',
  data () {
    return {
      message: []
    }
  },
  methods: {
    updateMessage: function (message, status) {
      const vm = this
      const timestemp = Math.floor(new Date() / 1000)
      this.message.push({
        message,
        status,
        timestemp
      })
      vm.removeMessage(timestemp)
    },
    removeMessage: function (timestemp) {
      const vm = this
      setTimeout(function () {
        vm.message.forEach(function (item, i) {
          if (item.timestemp === timestemp) {
            vm.message.splice(i, 1)
          }
        })
      }, 5000)
    },
    removeMessageNow: function (num) {
      this.message.splice(num, 1)
    }
  },
  created () {
    const vm = this
    vm.$bus.$on('message', (message, status) => {
      vm.updateMessage(message, status)
    })
  }
}
</script>
<style lang="scss" scope>
.message {
  position: fixed;
  right: 0px;
  top: 100px;
  padding: 10px 15px;
  text-align: center;
  transition: all 0.5s;
  color: white;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > p {
    margin-left: 15px;
    margin-right: 15px;
  }
}
.close-btn {
  text-align: right;
}
.success {
  background-color: #ff9a9e;
}
.error {
  background-color: red;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
