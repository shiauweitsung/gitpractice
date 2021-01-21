<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li
          class="page-item"
          @click.prevent="updatePage(pages.current_page - 1)"
          :class="{ disabled: !pages.has_pre }"
        >
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="page in pages.total_pages"
          :key="page"
          @click.prevent="updatePage(page)"
          :class="{ active: pages.current_page === page }"
        >
          <a class="page-link" href="#">{{ page }}</a>
        </li>
        <li
          class="page-item"
          @click.prevent="updatePage(pages.current_page + 1)"
          :class="{ disabled: !pages.has_next }"
        >
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'page',
  // pages 是傳出去的物件
  // emitPage 是傳出去的事件
  props: ['pages'],
  methods: {
    updatePage (page) {
      this.$emit('emitPage', page)
    }
  }
}
</script>
