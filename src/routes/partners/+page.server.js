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

			partners {
				createdAt
				id
				title
				subhead
				description
				description2
				image {
					url
				}
			}
		}
	`;

	return await hygraph.request(query);
}
