<template>
  <div class="index">
    <headers />
    <router-view></router-view>
    <footers />
  </div>
</template>

<script>
// @ is an alias to /src
import headers from '@/components/headers.vue'
import footers from '@/components/footers.vue'

export default {
  name: 'index',
  components: {
    headers,
    footers
  }
}
</script>
