<script lang="ts">
	export let data: any;
</script>

{#if Array.isArray(data.posts)}
	{#each data.posts as post}
		<h1>{post.attributes.Titulo}</h1>
	{/each}
{:else}
	<h1>Carregando...</h1>
{/if}
