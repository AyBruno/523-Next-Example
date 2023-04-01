migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nlkk0jootgucs1k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rzzrqstv",
    "name": "picture",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 30000,
      "mimeTypes": [
        "image/png"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nlkk0jootgucs1k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rzzrqstv",
    "name": "picture",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 10000,
      "mimeTypes": [
        "image/png"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
})
