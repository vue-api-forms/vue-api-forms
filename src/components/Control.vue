<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Control extends Vue {
  @Prop() private type!: string;
  @Prop() private text!: string;
  @Prop() private click!: Function;

  render(createElement: any) {
    return createElement(
      this.type,
      {
        on: {
          click: this.click
        }
      },
      this.text
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
