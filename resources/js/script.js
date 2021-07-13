try {
	require('./bootstrap');
} catch (e) {}
// jQuery should work here xD
console.log('mint-tailwind init()');

// window.Fortawesome = require('@fortawesome/fontawesome-pro/js/all');
import moment from 'moment';
window.moment = moment;

// import Vue
import { createApp } from 'vue';
// const Vue = require('vue');
// window.Vue = Vue;

import Root from './Root.vue';

const App = createApp({
	components: {
		Root
	}
});

App.mount('#app');
