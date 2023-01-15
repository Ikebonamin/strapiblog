<script lang="ts">
	export let data: any;
</script>

<div class="container mx-auto mt-4">
	{#each data?.posts ?? [] as post}
		<h1>{post.attributes.Titulo}</h1>
	{:else}
		<h1>No posts yet</h1>
	{/each}
</div>
