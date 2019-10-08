import Tsx from '@/tsx'
import {
  mount,
} from '@vue/test-utils'

describe('tsx', function test() {
  it('should render', function test() {
    const wrapper = mount(Tsx)
    const dataText = wrapper.find('.text').text()
    expect(dataText).to.equal('foo')
  })
})
