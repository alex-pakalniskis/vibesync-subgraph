import { NFT, Collection } from "../generated/schema"
import { Minted } from "../generated/templates/NFTCollection/NFTCollection"

export function handleMinted(event: Minted): void {
    let nftId = event.params.tokenId.toString()
    let nft = new NFT(nftId)
  
    nft.collection = event.address.toHex()
    nft.tokenId = event.params.tokenId
    nft.minter = event.params.minter
    nft.data = event.params.data
  
    nft.save()
  }
