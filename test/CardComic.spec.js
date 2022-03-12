import { shallowMount } from '@vue/test-utils'
import CardComic from '@/components/cardComic.vue'

let wrapper;
beforeEach(() => {
    wrapper = shallowMount(CardComic);
});

describe('CardComic component', () => {
    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })
})

test('mount a vue component', () => {
    const element = wrapper.findComponent(CardComic)
    expect(element.exists()).toBe(true)
})

test('is visible', () => {
    expect(wrapper.isVisible()).toBe(true)
})