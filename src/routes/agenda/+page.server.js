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
			agendas(orderBy: createdAt_DESC) {
				cardImage {
					url
				}
				date
				description
				event
				time
				price
				address
				buttonText
				agendaParagraph1
				agendaParagraph2
				agendaParagraph3
			}
			agendaTexts {
				title
				agendaParagraph1
				agendaParagraph2
				agendaParagraph3
			}
		}
	`;
	return await hygraph.request(query);
}
