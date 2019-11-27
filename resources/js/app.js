/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('app-component', require('./components/ApplicationDesireBodyComponent.vue').default);
Vue.component('header-component', require('./components/HeaderShowIO.vue').default);
Vue.component('first-component', require('./components/FirstComponent.vue').default);
Vue.component('second-component', require('./components/SecondComponent.vue').default);
Vue.component('third-component', require('./components/ThirdComponent.vue').default);
Vue.component('fourth-component', require('./components/FourthComponent.vue').default);
Vue.component('footer-component', require('./components/FooterShowIOFixed.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
