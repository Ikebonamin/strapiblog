<script lang="ts">
	export let data;
</script>

<div class="container mx-auto mt-4">
	{#each data?.posts ?? [] as post}
		<h1>{post.attributes.Titulo}</h1>
	{:else}
		<h1>No posts yet</h1>
	{/each}
</div>

<!-- <div class="container mx-auto mt-4">
	{#each data?.posts ?? [] as post}
		<div class="hover:bg-gray-200 cursor-pointer px-6 py-2 border-b border-gray-500">
			<h4 class="font-bold">{post.attributes.Titulo}</h4>
			<h3 class="mt-2 text-gray-800">{post.attributes.Conteudo}</h3>
		</div>
	{/each}
</div> -->
