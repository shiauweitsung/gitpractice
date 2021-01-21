<template>
  <div class="index">
    <div class="index-banner">
      <div class="banner1"></div>
      <div class="banner1"></div>
    </div>
  </div>
</template>
<script>
// $(function () {
//   $('.index-banner').slick({
//     // dots: true
//   })
// })
export default {
  name: 'slick',
  data () {
    return {}
  },
  methods: {
  },
  mounted () {
    $('.index-banner').slick({
      // dots: true
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            slidesToShow: 1
          }
        }
      ]
    })
  }
}
</script>
