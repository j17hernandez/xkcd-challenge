import { shallowMount, createLocalVue } from '@vue/test-utils'
import ComicDetail from '@/components/ComicDetail.vue'
import axios from '@nuxtjs/axios'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

let actions;
let store;
let wrapper;
beforeEach(() => {
    actions = {
        addItem: jest.fn(),
        addItemRating: jest.fn(),
        setNumberMaxComic: jest.fn(),
        addNumberMaxComic: jest.fn(),
    }
    store = new Vuex.Store({
        actions
    })
    wrapper = shallowMount(ComicDetail, {
        store, localVue,
        mocks: {
            $axios: axios
        }
    });
});

describe('ComicDetail component', () => {
    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })
})
test('snapshot match', () => {
    expect(wrapper.html()).toMatchSnapshot()
})

test("getRandomComic", () => {
    wrapper.vm.getRandomComic().then(() => {
        expect(wrapper.vm.getList).toBeTruthy()
    })
})

test("getList function", () => {
    wrapper.vm.getList(300)
    wrapper.vm.itemComic = {
        id: 19,
        num: 1090,
        title: 'VueJs Comic',
        img: 'https://imgs.xkcd.com/comics/wikifriends.png',
        alt: 'Imagen'
    }
    expect(wrapper.vm.itemComic).not.toEqual(null)
    wrapper.vm.addComicRating()
    expect(actions.addItem).toHaveBeenCalled()
})

test("getList function", () => {
    wrapper.vm.getDataComic()
    wrapper.vm.setNumberMaxComic(4000)
    expect(actions.addNumberMaxComic).not.toHaveBeenCalled()
})