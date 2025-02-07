import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { CollectionCreated } from "../generated/ERC721Factory/ERC721Factory"

export function createCollectionCreatedEvent(
  collectionAddress: Address,
  owner: Address,
  name: string,
  symbol: string,
  genre: string,
  showTitle: string,
  location: string,
  date: string,
  startTime: string,
  djName: string
): CollectionCreated {
  let collectionCreatedEvent = changetype<CollectionCreated>(newMockEvent())

  collectionCreatedEvent.parameters = new Array()

  collectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "collectionAddress",
      ethereum.Value.fromAddress(collectionAddress)
    )
  )
  collectionCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  collectionCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  collectionCreatedEvent.parameters.push(
    new ethereum.EventParam("symbol", ethereum.Value.fromString(symbol))
  )
  collectionCreatedEvent.parameters.push(
    new ethereum.EventParam("genre", ethereum.Value.fromString(genre))
  )
  collectionCreatedEvent.parameters.push(
    new ethereum.EventParam("showTitle", ethereum.Value.fromString(showTitle))
  )
  collectionCreatedEvent.parameters.push(
    new ethereum.EventParam("location", ethereum.Value.fromString(location))
  )
  collectionCreatedEvent.parameters.push(
    new ethereum.EventParam("date", ethereum.Value.fromString(date))
  )
  collectionCreatedEvent.parameters.push(
    new ethereum.EventParam("startTime", ethereum.Value.fromString(startTime))
  )
  collectionCreatedEvent.parameters.push(
    new ethereum.EventParam("djName", ethereum.Value.fromString(djName))
  )

  return collectionCreatedEvent
}
