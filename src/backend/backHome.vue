<template>
  <div class="backHome">
    <backHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import backHeader from '@/backend/backHeader.vue'
export default {
  name: 'backHome',
  components: {
    backHeader
  }
}
</script>
