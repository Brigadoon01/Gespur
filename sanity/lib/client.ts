import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: 
  "skKUBhBnJgJid42tBeXc7oOlMgQ5SYdL2MHw5B4dcy8PdfKyDOw7BlX9MDHfq4bcdLmsOXPQtEh73ZaEtjcrLNG3yAg7cmoyO4wCaASBLScqeYT4kUHdIHCcqs4WjjvBbfq5Oi43EYbplkzyyc83R4fXDZs8lExUUAqRpFSjJuSMQcG0eeeP"
})
