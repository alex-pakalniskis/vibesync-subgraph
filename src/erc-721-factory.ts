import { CollectionCreated as CollectionCreatedEvent } from "../generated/ERC721Factory/ERC721Factory"
import { CollectionCreated } from "../generated/schema"

export function handleCollectionCreated(event: CollectionCreatedEvent): void {
  let entity = new CollectionCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
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

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
