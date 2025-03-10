import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {
    let query = gql`
        query Footer {
          footers {
            titleAdres
            location
            adres
            postalCode
            titleContact
            email
            number
            titleCollaborate
            collaborateParagraph
          }
        }
      `
      ;

    return await hygraph.request(query);
}
