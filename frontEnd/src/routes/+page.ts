export async function load({ fetch }: any) {
	try {
		const response = await fetch('http://localhost:1337/api/posts');
		const data = await response.json();
		console.log(data.data);

		return { posts: data?.data };
	} catch (err) {
		console.log(`Error: ${err}`);
	}
}

// export async function load() {
// 	// The deep param is from the plugin https://market.strapi.io/plugins/strapi-plugin-populate-deep
// 	// Normally you would use ?populate=* or other crazy option but could not get it working in short time
// 	const response = await fetch('http://localhost:1337/api/landingpage?populate=deep', {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		}
// 	});
// 	const data = await response.json();
// 	return data?.data;
// }
