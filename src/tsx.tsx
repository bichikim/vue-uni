import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      foo: 'foo',
    }
  },
  render() {
    return <div class={{text: true}}>{this.foo}</div>
  },
})
