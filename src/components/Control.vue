<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ControlData } from "@/types";

@Component
export default class Control extends Vue {
  @Prop() private data!: ControlData;

  render(createElement: Function) {
    const on = {};
    if (this.data.click) {
      on.click = new Function(this.data.click.arguments, this.data.click.body);
    }
    return createElement(
      this.data.type,
      {
        on: on
      },
      this.data.text
    );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
