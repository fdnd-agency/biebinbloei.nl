import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';
// qeury object
export const load = async ({ params }) => {
	let query = gql`
		query Assets($slug: String) {
			stekje(where: { slug: $slug }) {
				beschrijving
				aanmelddatum
				fotos {
					url
					width
					height
				}
				giftig
				landvanherkomst
				naam
				temperatuur
				absoluteTemperatuur
				voeding
				verpotten
				watergeven
				zonlicht
				createdAt
			}
		}
	`;
	// Deze twee zijn qeury objects
	let queryVolgende = gql`
		query volgendStekje($currentCreationDate: DateTime!) {
			stekjes(where: { createdAt_gt: $currentCreationDate }, orderBy: createdAt_ASC, first: 1) {
				slug
			}
		}
	`;

	let queryVorige = gql`
		query vorigStekje($currentCreationDate: DateTime!) {
			stekjes(where: { createdAt_lt: $currentCreationDate }, orderBy: createdAt_DESC, first: 1) {
				slug
			}
		}
	`;

	// hygraph (query request)
	const slug = params.slug;
	let result = await hygraph.request(query, { slug });

	const currentCreationDate = result.stekje.createdAt;
	let resultVolgende = await hygraph.request(queryVolgende, { currentCreationDate });
	
	let resultVorige = await hygraph.request(queryVorige, { currentCreationDate });
	
	if (resultVolgende.stekjes && resultVolgende.stekjes.length > 0) {
		result.volgende = resultVolgende.stekjes[0].slug;
	}

	if (resultVorige.stekjes && resultVorige.stekjes.length > 0) {
		result.vorige = resultVorige.stekjes[0].slug;
	}

	return result;
};
