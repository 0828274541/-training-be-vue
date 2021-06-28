<template>
  <div id="slide">
    <carousel
      :items="1"
      :loop="true"
      :autoplay="true"
      @translated="translated"
      @initialize="initialize"
      :nav="false"
    >
      <img src="https://placeimg.com/1000/300/any?1" />

      <img src="https://placeimg.com/1000/300/any?2" />

      <img src="https://placeimg.com/1000/300/any?3" />

      <img id="id1" ref="myid" class="mystyle1" src="https://placeimg.com/1000/300/any?4" />
    </carousel>
  </div>
</template>
<script>
import carousel from "vue-owl-carousel";

export default {
  name: "Slide",
  components: { carousel },
  methods: {
    translated() {
      const abc = document.querySelector(".owl-item.active #id1");
      if (abc != null) {
        abc.classList.add("mystyle2");
      } else {
        document.querySelector(".mystyle1.mystyle2").classList.remove("mystyle2");
      }
    }
  }
};
</script>
<style scoped>
.mystyle1 {
  z-index: 0;
  position: absolute;
  -webkit-transition-duration: 0.8s;
  -moz-transition-duration: 0.8s;
  -o-transition-duration: 0.8s;
  transition-duration: 0.8s;

  -webkit-transition-property: -webkit-transform;
  -moz-transition-property: -moz-transform;
  -o-transition-property: -o-transform;
  transition-property: transform;
  overflow: hidden;
}

.mystyle2 {
  transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -o-transform: rotate(360deg);
}
</style>
<style>
.owl-dots {
  position: absolute;
  top: 85%;
  left: 0;
  right: 0;
}

.owl-dot > span {
  width: 15px !important;
  height: 15px !important;
}

.owl-theme .owl-dots .owl-dot.active span,
.owl-theme .owl-dots .owl-dot:hover > span {
  background: black !important;
}
</style>
