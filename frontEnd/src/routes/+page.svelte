<script lang="ts">
	export let data: any;
</script>

<div class="container mx-auto mt-4">
	<h1 class="text-center text-4xl font-bold">Meu Super Blog</h1>
	{#each data?.posts ?? [] as post}
		<div class=" p-8 ">
			<h1 class="border-b-2 border-b-indigo-600 py-2 font-bold">{post.attributes.Titulo}</h1>
			<h2 class="mt-8">{post.attributes.Conteudo}</h2>
		</div>
	{:else}
		<h1>No posts yet</h1>
	{/each}
</div>
