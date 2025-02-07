import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { CollectionCreated } from "../generated/schema"
import { CollectionCreated as CollectionCreatedEvent } from "../generated/ERC721Factory/ERC721Factory"
import { handleCollectionCreated } from "../src/erc-721-factory"
import { createCollectionCreatedEvent } from "./erc-721-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let collectionAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let name = "Example string value"
    let symbol = "Example string value"
    let genre = "Example string value"
    let showTitle = "Example string value"
    let location = "Example string value"
    let date = "Example string value"
    let startTime = "Example string value"
    let djName = "Example string value"
    let newCollectionCreatedEvent = createCollectionCreatedEvent(
      collectionAddress,
      owner,
      name,
      symbol,
      genre,
      showTitle,
      location,
      date,
      startTime,
      djName
    )
    handleCollectionCreated(newCollectionCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CollectionCreated created and stored", () => {
    assert.entityCount("CollectionCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CollectionCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "collectionAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CollectionCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CollectionCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )
    assert.fieldEquals(
      "CollectionCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "symbol",
      "Example string value"
    )
    assert.fieldEquals(
      "CollectionCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "genre",
      "Example string value"
    )
    assert.fieldEquals(
      "CollectionCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "showTitle",
      "Example string value"
    )
    assert.fieldEquals(
      "CollectionCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "location",
      "Example string value"
    )
    assert.fieldEquals(
      "CollectionCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "date",
      "Example string value"
    )
    assert.fieldEquals(
      "CollectionCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "startTime",
      "Example string value"
    )
    assert.fieldEquals(
      "CollectionCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "djName",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
