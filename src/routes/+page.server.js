import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {
	let query = gql`
		query Homepage {
			herosSlider {
				sliderPicture {
					url
				}
				sliderPictureAltText
			}
			
			headerTexts {
				createdAt
				heading1
				id
			}

			cardSlides {
				titleCard
				paragraphCard
				paragraphCard2
				imageCard {
					url
				}
				imageCardAltText
				buttonStyles
				cardStyles
				svgStyles
				leafStyles
			}

			campusInfos {
				title
				title2
				paragraph
				paragraph2
			}

			agendas {
				cardImage {
					url
				}
				date
				event
				time
				price
				address
				buttonText
			}

			agendaTexts {
				title
				agendaParagraph1
				agendaParagraph2
				agendaParagraph3
			}

			partnersInfos {
				title
				paragraph
				paragraph2
			}
		}
	`;

	const data = await hygraph.request(query);

	return data;
}

			