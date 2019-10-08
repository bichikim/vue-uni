import Index from '@/index.vue'
import {
  mount,
} from '@vue/test-utils'

describe('vue', function test() {
  it('should render', function test() {
    const wrapper = mount(Index)
    const dataText = wrapper.find('.text').text()
    expect(dataText).to.equal('foo')
  })
})
