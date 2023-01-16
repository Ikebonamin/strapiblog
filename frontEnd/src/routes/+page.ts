export async function load({ fetch }: any) {
	try {
		const response = await fetch('http://localhost:1337/api/posts');
		const data = await response.json();
		// console.log('data from fetch: ', data);

		return { posts: data?.data };
	} catch (err) {
		console.log(`Error: ${err}`);
	}
}
// fetch do Lucas //

// export async function load({ fetch }: any) {
// 	try {
// 		let response = await fetch('http://localhost:1337/api/posts');
// 		response = await response.json();
// 		return { posts: response.data, meta: response.meta };
// 	} catch (err) {
// 		console.log(`Error: ${err}`);
// 	}
// }

// }
// console.log(data.data[0].attributes['Titulo']);
///////////////////////////////
// bkp fetch do kevin//
// export async function load({ fetch }: any) {
// 	try {
// 		const response = await fetch('http://localhost:1337/api/posts');
// 		const data = await response.json();
// 		return { posts: data?.data };
// 	} catch (err) {
// 		console.log(`Error: ${err}`);
// 	}
// }
