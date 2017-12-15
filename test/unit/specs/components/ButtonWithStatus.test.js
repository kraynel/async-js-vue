import Vue from 'vue'
import ButtonWithStatus from '@/components/ButtonWithStatus'

describe('ButtonWithStatus.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(ButtonWithStatus)
    const propsData = {
      buttonText: 'Hello Button',
      toggleCall: jest.fn(),
      strangerStatus: 'Status'
    }
    const vm = new Constructor({ propsData }).$mount()
    expect(vm.$el.querySelector('.buttonWithStatus span').textContent).toEqual(
      'Status'
    )
    expect(
      vm.$el.querySelector('.buttonWithStatus button').textContent.trim()
    ).toEqual('Hello Button')
    vm.$el.querySelector('button').click()
    expect(propsData.toggleCall).toHaveBeenCalledTimes(1)
  })
})
