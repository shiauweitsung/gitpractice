(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-586143d7"],{"451a":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"back-coupons"},[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[e("div",{staticClass:"loadingio-spinner-spin-vr67c069ls"},[e("div",{staticClass:"ldio-i4ihhev39wf"},[e("div",[e("div")]),e("div",[e("div")]),e("div",[e("div")]),e("div",[e("div")]),e("div",[e("div")]),e("div",[e("div")]),e("div",[e("div")])])])]),e("div",{staticClass:"back-coupons-wrap"},[e("div",{staticClass:"back-coupons-wrap-content"},[e("div",{staticClass:"back-coupons-wrap-content-item"},[e("div",{staticClass:"text-right mr-3"},[e("button",{staticClass:"btn-second",attrs:{"data-target":"#CouponModal","data-toggle":"modal"},on:{click:function(a){a.preventDefault(),t.openModal(t.isNew=!0)}}},[t._v(" 新增優惠券 ")])]),e("table",[t._m(0),e("tbody",t._l(t.CouponsData,(function(a,o){return e("tr",{key:o},[e("td",[t._v(t._s(a.title))]),e("td",[t._v(t._s(a.percent))]),e("td",[t._v(t._s(a.due_date))]),e("td",[t._v(t._s(a.code))]),e("td",[e("button",{staticClass:"btn-second mt-0 mr-2",attrs:{"data-target":"#CouponModal","data-toggle":"modal"},on:{click:function(e){e.preventDefault(),t.openModal(t.isNew=!1,a)}}},[t._v(" 修改 ")]),e("button",{staticClass:"btn-main",attrs:{"data-target":"#delModal","data-toggle":"modal"},on:{click:function(e){return e.preventDefault(),t.openDelmodal(a)}}},[t._v(" 刪除 ")])])])})),0)])])])]),e("div",{staticClass:"d-flex justify-content-center mb-3"},[e("pagination",{attrs:{pages:t.pagination},on:{emitPage:t.getCoupons}})],1),e("div",{staticClass:"modal fade",attrs:{id:"CouponModal",tabindex:"-1",role:"dialog","aria-labelledby":"CouponModal","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog adopt-modal",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(1),e("div",{staticClass:"modal-body adopt-modal-content"},[e("div",[e("label",{attrs:{for:"back_coupon_title"}},[t._v("優惠名稱 : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.title,expression:"tempCoupon.title"}],attrs:{type:"text",id:"back_coupon_title"},domProps:{value:t.tempCoupon.title},on:{input:function(a){a.target.composing||t.$set(t.tempCoupon,"title",a.target.value)}}})]),e("div",[e("label",{attrs:{for:"back_coupons_percent"}},[t._v("折扣數 : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.percent,expression:"tempCoupon.percent"}],attrs:{type:"text",id:"back_coupons_percent"},domProps:{value:t.tempCoupon.percent},on:{input:function(a){a.target.composing||t.$set(t.tempCoupon,"percent",a.target.value)}}})]),e("div",[e("label",{attrs:{for:"back_coupons_date"}},[t._v("到期日 : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.due_date,expression:"tempCoupon.due_date"}],attrs:{type:"text",id:"back_coupons_date"},domProps:{value:t.tempCoupon.due_date},on:{input:function(a){a.target.composing||t.$set(t.tempCoupon,"due_date",a.target.value)}}})]),e("div",[e("label",{attrs:{for:"back_coupons_code"}},[t._v("優惠代碼 : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.code,expression:"tempCoupon.code"}],attrs:{type:"text",id:"back_coupons_code"},domProps:{value:t.tempCoupon.code},on:{input:function(a){a.target.composing||t.$set(t.tempCoupon,"code",a.target.value)}}})])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn-main",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.updateCoupons(a)}}},[t._v(" 確定 ")])])])])]),e("div",{staticClass:"modal fade",attrs:{id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"delModal","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog del-modal",attrs:{role:"document"}},[e("div",{staticClass:"modal-content del-modal-content"},[e("div",{staticClass:"modal-body del-modal-body"},[t._v(" 請問你是否要刪除 "),e("span",[t._v(t._s(t.tempCoupon.title))]),t._v(" ? ")]),e("div",{staticClass:"del-modal-content-btn"},[e("button",{staticClass:"btn-main",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 取消 ")]),e("button",{staticClass:"btn-second mt-0",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.delCoupons(t.tempCoupon.id)}}},[t._v(" 確定 ")])])])])])],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("優惠名稱")]),e("th",[t._v("折扣數")]),e("th",[t._v("到期日")]),e("th",[t._v("優惠代碼")]),e("th")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"CouponModal"}},[t._v("新增優惠券")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],s=e("d845"),i=s["a"],l=e("2877"),d=Object(l["a"])(i,o,n,!1,null,null,null);a["default"]=d.exports},6407:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:!t.pages.has_pre},on:{click:function(a){return a.preventDefault(),t.updatePage(t.pages.current_page-1)}}},[t._m(0)]),t._l(t.pages.total_pages,(function(a){return e("li",{key:a,staticClass:"page-item",class:{active:t.pages.current_page===a},on:{click:function(e){return e.preventDefault(),t.updatePage(a)}}},[e("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:!t.pages.has_next},on:{click:function(a){return a.preventDefault(),t.updatePage(t.pages.current_page+1)}}},[t._m(1)])],2)])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])}],s={name:"page",props:["pages"],methods:{updatePage:function(t){this.$emit("emitPage",t)}}},i=s,l=e("2877"),d=Object(l["a"])(i,o,n,!1,null,null,null);a["a"]=d.exports},d845:function(t,a,e){"use strict";(function(t){e("99af");var o=e("6407");a["a"]={name:"backReserve",components:{pagination:o["a"]},data:function(){return{CouponsData:[],tempCoupon:[],pagination:[],isNew:!1,isLoading:!1,api:"",meht:""}},methods:{getCoupons:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("shiauanimal","/admin/coupons?page=").concat(t);a.isLoading=!0,a.$http.get(e).then((function(t){a.pagination=t.data.pagination,a.CouponsData=t.data.coupons,a.isLoading=!1}))},openModal:function(a,e){var o=this;a?(o.tempCoupon={},o.isNew=!0):(o.tempCoupon=Object.assign({},e),o.isNew=!1),t("#CouponModal").modal("show")},updateCoupons:function(){var a=this;if(a.isLoading=!0,a.isNew){var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("shiauanimal","/admin/coupon");a.$http.post(e,{data:a.tempCoupon}).then((function(e){console.log(e),e.data.success&&(console.log("success"),a.getCoupons()),a.isLoading=!1,t("#CouponModal").modal("hide")}))}else{var o="".concat("https://vue-course-api.hexschool.io","/api/").concat("shiauanimal","/admin/coupon/").concat(a.tempCoupon.id);a.$http.put(o,{data:a.tempCoupon}).then((function(e){console.log(e),e.data.success&&(console.log("success"),a.getCoupons()),a.isLoading=!1,t("#CouponModal").modal("hide")}))}},openDelmodal:function(a){var e=this;e.tempCoupon=Object.assign({},a),t("#delModal").modal("show")},delCoupons:function(){var a=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("shiauanimal","/admin/coupon/").concat(a.tempCoupon.id);a.isLoading=!0,a.$http.delete(e).then((function(e){console.log(e),e.data.success&&(console.log("success"),a.getCoupons()),a.isLoading=!1,t("#delModal").modal("hide")}))}},created:function(){var t=this;t.getCoupons()}}}).call(this,e("1157"))}}]);
//# sourceMappingURL=chunk-586143d7.395dae62.js.map