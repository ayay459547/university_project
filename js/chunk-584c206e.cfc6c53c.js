(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-584c206e"],{"3d20":function(t,i,e){"use strict";e.d(i,"a",(function(){return a}));var n=e("1bab"),s=e("90b9");function a(t,i){return Object(n["a"])({url:"/",params:{key:s["a"],q:t,per_page:i}})}},"5b1c":function(t,i,e){"use strict";e("7049")},7049:function(t,i,e){},b389:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"con-swiper",style:{backgroundImage:"url( "+t.imgList[t.currentImgIndex]+" )"}},[e("div",{staticClass:"wrap-swiper"},[e("div",{staticClass:"swiper-pagination"}),e("div",{staticClass:"swiper-text"},[t._v(" 這裡的圖片使用Vuex與Focus連動背景圖"),e("br"),e("button",{staticClass:"autopaly",on:{click:t.autoPlay}},[t._v("自動播放")]),e("button",{staticClass:"autopaly",on:{click:t.stopPlay}},[t._v("停止播放")])]),e("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions},on:{swiper:t.onSwiper,click:t.clickimg,slideChange:t.onSlideChange}},t._l(t.imgList,(function(i,n){return e("swiper-slide",{key:n},[e("img",{attrs:{src:i,alt:i},on:{load:t.imgLoad}})])})),1),e("div",{staticClass:"swiper-button-prev"}),e("div",{staticClass:"swiper-button-next"})],1)])},s=[],a=(e("159b"),e("3d20")),r=e("90b9"),o=(e("e25d"),e("7212")),c=e("6d3b"),u=e("8343"),p=e("d17a"),l=e("75ac"),d=e("5dc8");c["a"].use([u["a"],p["a"],l["a"],d["a"]]);var g={data:function(){return{imgList:[],currentImgIndex:0,swiperOptions:{direction:"horizontal",effect:"coverflow",slidesPerView:3,grabCursor:!0,spaceBetween:30,centeredSlides:!0,initalSlide:3,observer:!0,speed:500,autoplay:{delay:500,disableOnInteraction:!1},loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},components:{Swiper:o["Swiper"],SwiperSlide:o["SwiperSlide"]},computed:{swiper:function(){return this.$refs.mySwiper.$swiper},imgLength:function(){return this.imgList.length}},methods:{onSwiper:function(){},onSlideChange:function(){var t=this.swiper.activeIndex-3;0==t||t>=this.imgLength?this.currentImgIndex=0:this.currentImgIndex=t,t<0&&(this.currentImgIndex=this.imgLength-1),this.changeVuexImg()},imgLoad:function(){Object(r["b"])(this.changeVuexImg,500)},changeVuexImg:function(){this.$store.commit("changeImgUrl",this.imgList[this.currentImgIndex])},clickimg:function(){},autoPlay:function(){this.swiper.autoplay.start()},stopPlay:function(){this.swiper.autoplay.stop()}},mounted:function(){var t=this;this.swiper.slideTo(3,1e3,!1),Object(a["a"])("snow",5).then((function(i){i.hits.forEach((function(i){t.imgList.push(i.largeImageURL)}))}))}},w=g,h=(e("5b1c"),e("2877")),m=Object(h["a"])(w,n,s,!1,null,"5ac523c6",null);i["default"]=m.exports},e25d:function(t,i,e){}}]);
//# sourceMappingURL=chunk-584c206e.cfc6c53c.js.map