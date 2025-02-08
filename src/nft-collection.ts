import { NFT, Collection } from "../generated/schema"
import { Minted } from "../generated/templates/NFTCollection/NFTCollection"
import { Bytes } from "@graphprotocol/graph-ts"

export function handleMinted(event: Minted): void {
    let nftId = event.address.toHex() + "-" + event.params.tokenId.toString() // Unique ID per collection
    let collectionId = event.address.toHex() // Use contract address as collection ID

    // Load existing Collection or create a new one
    let collection = Collection.load(collectionId)
    if (!collection) {
        // collection = new Collection(collectionId)
        // collection.collectionAddress = event.address
        // collection.owner = event.transaction.from
        // collection.save()
        return;
    }

    // Create NFT and assign it to Collection
    let nft = new NFT(nftId)
    nft.collection = collection.id // Correctly linking to Collection
    nft.tokenId = event.params.tokenId
    nft.minter = event.params.minter
    nft.data = event.params.data
    nft.tokenURI = event.params.tokenURI
    nft.save()
}