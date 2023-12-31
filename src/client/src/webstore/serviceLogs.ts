import WebStoreClient from "../webstoreClient"

const WebStoreServices {
  client: WebStoreClient

  constructor(client: WebStoreClient) {
    client = client
  }

  list(serviceId: string) {
    return client.get(`/services/${serviceId}/logs`)
  }
}

export default WebStoreServices
