import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import Vuex from 'vuex'
import router from "./router.js"
import stores from "./store";

//import msgContainer from "@/components/msgContainer";

Vue.use(Vuex)
Vue.use(ElementUI);

const store = new Vuex.Store(stores)

Vue.config.productionTip = false

// Vue.component(
//     msgContainer.name,
//     msgContainer
// )

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')


