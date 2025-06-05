import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export const load = async ({ params }) => {
	let query = gql`
		query Assets($slug: String!) {
			agenda(where: { slug: $slug }) {
				event
				date
				time
				address
			}
		}
	`;

	const slug = params.slug;
	let result = await hygraph.request(query, { slug });

	return {
		agenda: result.agenda
	};
};

