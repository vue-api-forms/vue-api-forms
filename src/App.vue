<template>
  <div id="app">
    <Control type="button" text="text" :click="yeah"/>
    <Control type="div" text="text" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Control from "./components/Control.vue";

@Component({
  components: {
    Control
  },
  methods: {
    yeah() {
      alert("yeah")
    }
  }
})
export default class App extends Vue {}
</script>