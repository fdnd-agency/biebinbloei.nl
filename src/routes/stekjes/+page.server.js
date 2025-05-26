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
			
			sectionInfos {
				createdAt
				id
				title
				description
			}

			overviewPages {
				titel
				product(first: 100) {
					... on Stekje {
						id
						aanmelddatum
						beschrijving
						createdAt
						categories {
							naam
						}
						giftig
						slug
						stekken
						temperatuur
						absoluteTemperatuur
						verpotten
						projectnaam
						voeding
						watergeven
						zonlicht
						onderhoud
						landvanherkomst
						naam
						activeStekje
						fotos {
							url
							width
							height
						}
					}
				}
			}
		}
	`;

	return await hygraph.request(query);
}
