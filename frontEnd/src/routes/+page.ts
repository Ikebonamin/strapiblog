export async function load({ fetch }: any) {
	try {
		const response = await fetch('http://localhost:1337/api/posts');
		const data = await response.json();
		return { posts: data?.data };
	} catch (err) {
		console.log(`Error: ${err}`);
	}
}

// }
// console.log(data.data[0].attributes['Titulo']);
///////////////////////////////
// bkp funcionando abaixo
// export async function load({ fetch }: any) {
// 	try {
// 		const response = await fetch('http://localhost:1337/api/posts');
// 		const data = await response.json();
// 		return { posts: data?.data };
// 	} catch (err) {
// 		console.log(`Error: ${err}`);
// 	}
// }
