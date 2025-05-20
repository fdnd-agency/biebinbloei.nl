import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {
	let query = gql`
		query MyQuery {
			heroHeaders {
				heading1
				title
				description
				image {
					url
				}
			}

			groenebiebs {
				createdAt
				description
				id
			}
		}
	`;

	return await hygraph.request(query);
}
