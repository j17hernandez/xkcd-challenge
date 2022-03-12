import Vue from "vue";
import Vuetify from "vuetify";
import { config } from '@vue/test-utils'
import GlobalMixin from '~/mixins/GlobalMixin'
const $router = {
    push: jest.fn(),
}

const $store = {
    state: jest.fn(),
}
const $axios = {
    get: jest.fn()
}
config.mocks.$t = llave => llave
config.mocks.$store = $store
config.mocks.$router = $router
config.mocks.$axios = $axios
config.mocks.$vuetify = llave => llave
Vue.use(GlobalMixin)
Vue.config.productionTip = false;

Vue.use(Vuetify);