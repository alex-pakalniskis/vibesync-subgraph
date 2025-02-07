dumping old code

"""

type NFTMetadata @entity {
  id: ID!
  image: String!
  externalURL: String!
  name: String!
  description: String!
  playlistLink: String
  setlist: [Track!]
}


type Track @entity {
  id: ID!
  artist: String!
  title: String!
}
"""