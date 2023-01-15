<script lang="ts">
	export let data: any;
	console.log('post =>', data);
	console.log('post data?.post?.attributes=>', data?.post?.attributes);
</script>

<h2 class="mt-8">{data?.post?.attributes.Titulo ?? []}</h2>

<!-- You can also wrap it into a reactive variable on top like this
$: title = data?.post?.attributes?.Titulo ?? ""
And in your template you use it like this
<h2 class="mt-8">{title}</h2> -->
