<template>
  <div id="app">
    <Control :data="this.button" />
    <Control :data="this.div" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Control from "./components/Control.vue";

@Component({
  components: {
    Control
  },

  data: function() {
    return {
      button: {
        type: "button",
        text: "button of the beast",
        click: { arguments: "a", body: "alert('666');" }
      },
      div: {
        type: "div",
        text: "div of the beast"
      }
    }
  },

  methods: {
    yeah() {
      alert("yeah");
    }
  }
})
export default class App extends Vue {}
</script>
