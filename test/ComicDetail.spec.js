import { shallowMount } from '@vue/test-utils'
import ComicDetail from '@/components/ComicDetail.vue'

describe('ComicDetail', () => {
    test('is a Vue instance', () => {
        const wrapper = shallowMount(ComicDetail)
        expect(wrapper.vm).toBeTruthy()
    })
})
