<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ControlData } from "@/types";
import { SetupContext } from "@vue/composition-api";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const YAML = require("yaml");

@Component({
  setup(props: any, ctx: SetupContext) {
    const { root } = ctx;

    if (props.searchUrl) {
      (root as any).$axios.get(props.searchUrl).then(function(response: any) {
        const searchUrlParsedContent = YAML.parse(response.data);
        console.log(searchUrlParsedContent);
      });
    }
  }
})
export default class Control extends Vue {
  @Prop() private data?: ControlData;
  @Prop() private searchUrl?: string;

  render(createElement: Function) {
    const on: any = {};
    if (this.data) {
      if (this.data.click) {
        on.click = new Function(
          this.data.click.arguments,
          this.data.click.body
        );
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
}
</script>
