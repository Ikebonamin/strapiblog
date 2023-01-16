export async function load({ fetch }: any) {
	try {
		//Busca dados de posts do Strapi. Await espera resposta
		let response = await fetch('http://localhost:1337/api/posts');
		//Transforma resposta em json
		response = await response.json();
		//Retorna dados de posts. Criando um objeto com os dados de posts e metadados
		return { posts: response.data, meta: response.meta };
	} catch (err) {
		console.log(`Error: ${err}`);
	}
}

// }
// console.log(data.data[0].attributes['Titulo']);
///////////////////////////////
// bkp funcionando abaixo do Kevin
// export async function load({ fetch }: any) {
// 	try {
// 		const response = await fetch('http://localhost:1337/api/posts');
// 		const data = await response.json();
// 		return { posts: data?.data };
// 	} catch (err) {
// 		console.log(`Error: ${err}`);
// 	}
// }
