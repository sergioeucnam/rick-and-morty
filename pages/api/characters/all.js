import axios from 'axios';

export default async function handler(req, res) {
	const page = req.query.page || 1;
	const baseUrl = 'https://rickandmortyapi.com/graphql';
	try {
		const response = await axios.post(baseUrl, {
			query: `
query {
  characters(page: ${page}) {
    info {
      count
    }
    results {
      name
      image
    }
  }
}
`,
		});
		const data = await response?.data?.data;
		res.status(200).json(data);
	} catch (error) {}
}
