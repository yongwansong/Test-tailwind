import { appendParameter} from "@/alpine/mixins/global.append-parameter";
import { submit } from "@/alpine/mixins/global.submit";

export default () => ({
  global: {
    submit,
    appendParameter
  }
})
