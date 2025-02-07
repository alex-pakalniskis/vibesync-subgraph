import { CollectionCreated as CollectionCreatedEvent } from "../generated/ERC721Factory/ERC721Factory"
import { Collection } from "../generated/schema"
import { NFTCollection } from "../generated/templates"

export function handleCollectionCreated(event: CollectionCreatedEvent): void {
  let entity = new Collection(
    (event.transaction.hash.concatI32(event.logIndex.toI32())).toHexString()
  )
  // entity.contractAddress = event.params.collectionAddress
  entity.collectionAddress = event.params.collectionAddress
  entity.owner = event.params.owner
  entity.name = event.params.name
  entity.symbol = event.params.symbol
  entity.genre = event.params.genre
  entity.showTitle = event.params.showTitle
  entity.location = event.params.location
  entity.date = event.params.date
  entity.startTime = event.params.startTime
  entity.djName = event.params.djName

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  entity.save()

  NFTCollection.create(event.params.collectionAddress)
}
