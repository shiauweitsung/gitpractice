<template>
  <div class="index">
    <div class="index-banner">
      <div class="banner banner1"></div>
      <div class="banner banner2"></div>
      <div class="banner banner3"></div>
      <div class="banner banner4"></div>
      <div class="banner banner5"></div>
    </div>
  </div>
</template>
<script>
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
      autoplay: true,
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
