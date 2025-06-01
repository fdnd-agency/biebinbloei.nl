import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';
import { data } from '../+layout.svelte';

export async function load() {
	let query = gql`
		query MyQuery {
			heroHeaders {
				id
				createdAt
				heading1
				title
				description
				image {
					url
				}

				carouselImage {
					images {
						url
					}
				}
			}

			facadeGardenActions {
				id
				createdAt
				title
				description
				image {
					url
				}
				bulletText1
			}
		}
	`;

	return await hygraph.request(query);
}
