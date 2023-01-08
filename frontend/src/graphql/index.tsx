import { gql } from "@apollo/client";

export const getUser = gql`
  {
    getUser {
      discordId
      username
      avatar
      discriminator
      guilds {
        id
        name
        icon
        banner
        description
      }
    }
  }
`;