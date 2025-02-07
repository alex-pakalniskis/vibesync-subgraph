import { NFT, NFTMetadata, Track } from "../generated/schema"
import { Minted } from "../generated/templates/NFTCollection/NFTCollection"
import { json, Bytes, dataSource } from '@graphprotocol/graph-ts'

export function handleMinted(event: Minted): void {
    let nftId = event.params.tokenId.toString()
    let nft = new NFT(nftId)
  
    nft.collection = event.address.toHex()
    nft.tokenId = event.params.tokenId
    nft.minter = event.params.minter
    nft.data = event.params.data
  
    nft.save()
  }

  export function handleMetadata(content: Bytes): void {
    let nftMetadata = new NFTMetadata(dataSource.stringParam())
    const value = json.fromBytes(content).toObject()
    if (value) {
      const image = value.get('image')
      const name = value.get('name')
      const description = value.get('description')
      const externalURL = value.get('external_url')
      const playlistLink = value.get('playlistLink')
      const setlist = value.get('setlist')

  
      if (name && image && description && externalURL && playlistLink && setlist) {
        nftMetadata.name = name.toString()
        nftMetadata.image = image.toString()
        nftMetadata.externalURL = externalURL.toString()
        nftMetadata.description = description.toString()
        nftMetadata.playlistLink = playlistLink.toString()

        // Parse `setlist` as an array of JSON objects
        let trackArray: Track[] = [];
        let setlistArray = setlist.toArray();

        for (let i = 0; i < setlistArray.length; i++) {
            let trackObj = setlistArray[i].toObject();
            let artist = trackObj.get("artist");
            let title = trackObj.get("title");

            if (artist && title) {
                let trackId = nftMetadata.id + "-" + i.toString();
                let track = new Track(trackId);
                track.artist = artist.toString();
                track.title = title.toString();
                track.save();

                trackArray.push(track);
            }
        }

        nftMetadata.setlist = trackArray.map<string>(track => track.id); // Store track IDs in setlist
      }

      nftMetadata.save()
    }
  }