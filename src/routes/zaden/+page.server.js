import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {
	let query = gql`
		query MyQuery {
			heroHeaders {
				id
				createdAt
				heading1
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

			overviewPages {
				titel
				product {
					... on Zaden {
						id
						aanmelddatum
						beschrijving
						categorie {
							naam
						}
						fotos {
							url
						}
						giftig
						naam
						landvanherkomst
						onderhoud
						slug
						stage
						stekken
						projectnaam
						temperatuur
						voeding
						watergeven
						zonlicht
					}
				}
			}
		}
	`;

	return await hygraph.request(query);
}
