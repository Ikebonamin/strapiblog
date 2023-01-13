export async function load({ fetch }: any) {
	try {
		const res = await fetch('http://localhost:1337/api/posts?populate=*');
		const data = await res.json();
		console.log(data);
		return { body: data };
	} catch (err) {
		console.log(`Error: ${err}`);
	}
}
