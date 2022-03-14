import { shallowMount } from '@vue/test-utils'
import CardComponent from '~/components/cardComponent.vue'

let wrapper;
beforeEach(() => {
    wrapper = shallowMount(CardComponent);
});

describe('CardComponent component', () => {
    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })
})

test('mount a vue component', () => {
    const element = wrapper.findComponent(CardComponent)
    expect(element.exists()).toBe(true)
})

test('is visible', () => {
    expect(wrapper.isVisible()).toBe(true)
})