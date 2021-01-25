<template>
  <div class="index">
    <slick />
    <section>
      <div><img src="../assets/images/index/content.png" alt="" /></div>
      <div></div>
      <div class="index-content">
        <div class="index-content-title">
          <h2>領養專區</h2>
          <router-link to="/adopt" class="color-link-main index-content-adopt"
            >前往領養</router-link
          >
        </div>
        <div class="index-content-item">
          <div class="index-content-item-1">
            <a href=""><div class="index-content-item-adopt"></div></a>
          </div>
          <div class="index-content-item-2">
            <a href=""><div class="index-content-item-unadopt"></div></a>
          </div>
        </div>
        <div class="index-content-goadopt">
          <router-link to="/adopt" class="go-adopt"
            ><span><img src="../assets/images/index/onlydog.png" alt="" /></span
            ><span>尋找專屬汪汪</span></router-link
          >
          <router-link to="/adopt" class="go-adopt"
            ><span
              ><img src="../assets/images/index/luckydog.png" alt="" /></span
            ><span>查看幸運汪汪</span></router-link
          >
        </div>
        <div><img src="../assets/images/index/content2.png" alt="" /></div>
      </div>
      <div class="index-content-savedog">
        <div class="index-content-savedog-title">
          <div>
            <img src="" alt="" />
            <h2>領養動物須知</h2>
          </div>
        </div>
        <div class="index-content-savedog-item">
          <div>
            <p>溫暖的心</p>
            <span
              ><img src="../assets/images/index/dogheart.png" alt=""
            /></span>
          </div>
          <div>
            <p>絕不棄養</p>
            <span
              ><img src="../assets/images/index/giveupdog.png" alt=""
            /></span>
          </div>
          <div>
            <p>視如己出</p>
            <span
              ><img src="../assets/images/index/dogfamily.png" alt=""
            /></span>
          </div>
          <div>
            <p>溫馨的家</p>
            <span><img src="../assets/images/index/doghome.png" alt="" /></span>
          </div>
          <div>
            <p>共創回憶</p>
            <span
              ><img src="../assets/images/index/dogmember.png" alt=""
            /></span>
          </div>
          <span class="index-content-savedog-item-animation">
            <img
              src="../assets/images/index/pawprint.png"
              alt=""
              style="width: 32px"
            />
          </span>
        </div>
      </div>
      <div class="index-line">
        <img src="../assets/images/index/line.png" alt="" />
      </div>
      <div class="index-content-note">
        <div class="index-content-note-list">
          <div class="index-content-note-list-header">
            <h3>
              <span class="note-title"
                ><img
                  src="../assets/images/index/announcement.png"
                  alt="" /></span
              >浪浪公告
            </h3>
            <a href="" class="note-more"
              ><img
                src="../assets/images/index/right-arrow.png"
                alt=""
                style="width: 16px"
            /></a>
          </div>
          <div class="index-content-note-list-content">
            <ul>
              <li>
                <span class="note-day">12月1日</span
                ><span class="note-new">NEW</span
                ><a
                  href="javascript:void(0)"
                  class="note-modal-title"
                  data-toggle="modal"
                  data-target="#notelist1"
                  >號外號外!! 信義區超可愛汪星人</a
                >
              </li>
              <li>
                <span class="note-day">12月1日</span><span></span
                ><a
                  href="javascript:void(0)"
                  class="note-modal-title"
                  data-toggle="modal"
                  data-target="#notelist1"
                  >南港地區救援成功</a
                >
              </li>
              <li>
                <span class="note-day">12月1日</span><span></span
                ><a
                  href="javascript:void(0)"
                  class="note-modal-title"
                  data-toggle="modal"
                  data-target="#notelist1"
                  >中永和送養活動</a
                >
              </li>
              <li>
                <span class="note-day">12月1日</span><span></span
                ><a
                  href="javascript:void(0)"
                  class="note-modal-title"
                  data-toggle="modal"
                  data-target="#notelist1"
                  >2020全國領養大會</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="index-content-note-pic"></div>
      </div>
    </section>
    <!-- modal 視窗 -->
    <div
      class="modal fade"
      id="notelist1"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <span class="mr-3"
              ><img src="../assets/images/index/announcement.png" alt=""
            /></span>
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body note-modal-body">...</div>
          <div class="modal-footer">
            <button type="button" class="btn-main" data-dismiss="modal">
              關閉
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import slick from '@/components/slick.vue'
// @ is an alias to /src

export default {
  name: 'index',
  components: {
    slick
  },
  mounted () {
    $('.note-modal-title').click(function () {
      const modalTitleVal = $(this).text()
      $('#exampleModalLabel').text(modalTitleVal)
      switch (modalTitleVal) {
        case '南港地區救援成功':
          $('.note-modal-body').text('南港地區救援成功')
          break
        case '號外號外!! 信義區超可愛汪星人':
          $('.note-modal-body').text('信義區超可愛汪星人')
          break
        case '中永和送養活動':
          $('.note-modal-body').text('中永和送養大會 快來領養')
          break
        case '2020全國領養大會':
          $('.note-modal-body').text('2020全國領養大會 一年一次 把握機會喔')
          break
      }
    })
  }
}
</script>
