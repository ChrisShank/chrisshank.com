<template>
	<div class="min-h-screen flex flex-col p-4 bg-gray-200">
		<header class="mb-12">
			<h1 class="font-medium text-4xl">
				<span id="logo" class="relative px-1 py-1">
					<div
						class="logo-box absolute top-0 left-0 bottom-0 right-0 z-10 border-4 border-red-500 border-opacity-50 rounded-sm transform transition-transform duration-200 ease-out"
						style="--transform-translate-x: -0.15rem; --transform-translate-y: -0.5rem"
					></div>
					<div
						class="logo-box absolute top-0 left-0 bottom-0 right-0 z-10 border-4 border-indigo-400 border-opacity-50 rounded-sm transform transition-transform duration-200 ease-out"
						style="--transform-translate-x: 0.25rem; --transform-translate-y: 0.5rem"
					></div>
					<a class="relative z-20 hide-underline" href="/">Chris Shank</a>
				</span>
			</h1>
		</header>

		<div class="prose flex-1 mx-auto flex flex-col">
			<main class="flex-1">
				<Content />
			</main>

			<footer class="pt-1 border-t-2 border-gray-400 text-right">
				©<span class="font-light">ChrisShank</span><span class="font-extrabold">2020</span>
			</footer>
		</div>
	</div>
</template>
