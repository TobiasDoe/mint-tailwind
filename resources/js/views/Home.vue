<template>
	<!-- component -->
	<div class="bg-image w-full min-h-screen flex flex-wrap justify-center items-center gap-3 py-5">
		<div class="header w-full">
			<h1 class="text-6xl text-center text-blue-900">mint-tailwind</h1>
			<h2 class="text-lg text-center text-red-500">{{ fullDate }}</h2>
		</div>
		<div class="backdrop w-10/12 md:w-1/4 bg-white bg-opacity-10 rounded p-3 text-white border border-gray-300 shadow-lg">
			<!-- header -->
			<div class="w-full mb-3 pb-3 border-b border-1 border-white">
				<h3 class="text-xl font-semibold text-shadow">mint-tailwind</h3>
			</div>
			<!-- body -->
			<div>
				<img src="https://images.unsplash.com/photo-1582556135623-653b87486f21?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=682&q=80" alt="image1" class="w-full h-48 object-cover object-center mb-2">
				<p class="mb-3 tracking-wide text-base text-shadow">
					webpack starter kit with tailwindcss & vue3
				</p>
				<a target="_blank" href="https://github.com/TobiasDoe/mint-tailwind" class="backdrop bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg">
					GitHub
				</a>
			</div>
		</div>
		<div class="backdrop w-10/12 md:w-1/4 bg-white bg-opacity-10 rounded p-3 text-white border border-white shadow-lg">
			<!-- header -->
			<div class="w-full mb-3 pb-3 border-b border-1 border-white">
				<h3 class="text-xl font-semibold text-shadow">tailwindcss</h3>
			</div>
			<!-- body -->
			<div>
				<svg viewBox="0 0 247 31" class="my-10 w-auto h-7 sm:h-8"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="#06B6D4"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z" fill="#fff"></path></svg>
				<p class="mb-3 tracking-wide text-base text-shadow">
					Rapidly build modern websites without ever leaving your HTML.
				</p>
				<a target="_blank" href="https://tailwindcss.com/" class="backdrop bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg">
					TailwindCss.com
				</a>
			</div>
		</div>
		<div class="backdrop w-10/12 md:w-1/4 bg-white bg-opacity-10 rounded p-3 text-white border border-white shadow-lg">
			<!-- header -->
			<div class="w-full mb-3 pb-3 border-b border-1 border-white">
				<h3 class="text-xl font-semibold text-shadow">Vue3</h3>
			</div>
			<!-- body -->
			<div>
				<img src="https://vuejs.org/images/logo.png" alt="Vue" class="w-full h-48 object-contain mb-2">
				<p class="mb-3 tracking-wide text-base text-shadow">
					The Progressive JavaScript Framework
				</p>
				<a target="_blank" href="https://vuejs.org/" class="backdrop bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg">
					VueJs.org
				</a>
			</div>
		</div>
		<div class="font-test">
			<p class="font-sans italic">The quick brown fox</p>
			<p class="font-serif not-italic">The quick brown fox</p>
			<p class="font-mono font-black">The quick brown fox</p>
			<p class="font-sans italic">The quick brown fox</p>
			<p class="font-serif not-italic">The quick brown fox</p>
			<p class="font-mono font-thin">The quick brown fox</p>
			<p class="font-sans font-semibold italic">The quick brown fox</p>
			<p class="font-serif not-italic">The quick brown fox</p>
			<p class="font-mono font-thin">The quick brown fox</p>
		</div>
	</div>
</template>


<script>
export default {
	data() {
		return {
			currentdate: new Date()
		}
	},
	methods: {
		updateDate() {
			this.currentdate = new Date();
		}
	},
	computed: {
		fullDate() {
			return moment(this.currentdate).format("Do MMM YY - H:mm:ss")
		}
	},
	created() {
		let self = this;
		setInterval(function () {
			self.updateDate();
		}, 1000);
	}
}
</script>

<style lang="scss" scoped>
	a {
		@apply cursor-pointer;
	}
	.bg-image {
		background-image: url(https://images.unsplash.com/photo-1615529328331-f8917597711f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
		background-size: cover;
		background-position: center;
	}
	.backdrop {
		background-color: theme('colors.secondary');

		@supports (backdrop-filter: blur(5px)) {
			background-color: transparent;
			backdrop-filter: blur(10px) brightness(90%);
		}
	}
	.text-shadow {
		text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
	}
</style>
