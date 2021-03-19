try {
	require('./bootstrap');
} catch (e) {}
// jQuery should work here xD
console.log('mint-tailwind init()');

// window.Fortawesome = require('@fortawesome/fontawesome-pro/js/all');

// import Vue
// import { createApp } from 'vue';
const Vue = require('vue');
window.Vue = Vue;

import Root from './Root.vue';

const App = Vue.createApp({
	components: {
		Root
	}
});

App.mount('#app');

App.config.globalProperties.$filters = {
	fullDate(date) {
		return moment(date).format("Do MMM YY");
	}
};
