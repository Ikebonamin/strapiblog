export const load = async ({ params, fetch }) => {
	try {
		const res = await fetch(`http://localhost:1337/api/posts/${params?.postId}?populate=*`);
		const data = await res.json();
		return { post: data?.data };
	} catch (error) {
		console.log(`Error: ${error}`);
	}
};
