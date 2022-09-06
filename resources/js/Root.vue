<template>
  <div id="nav" class="flex justify-center text-black">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
		<DarkModeToggler />
  </div>
  <router-view/>
</template>

<script setup>
	// import { VueRouter } from 'vue-router';

	import DarkModeToggler from './ui/DarkModeToggler.vue';

</script>
