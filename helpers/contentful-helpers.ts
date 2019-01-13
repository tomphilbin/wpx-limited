import * as contentful from 'contentful'
import getConfig from 'next/config'

interface HomeContent {
  title: string
  subtitle: string
  services: contentful.Entry<{ heading: string; serviceList: string[] }>[]
  email: string
}

export const getHomeContent = async () => {
  const { serverRuntimeConfig } = getConfig()
  const { accessToken, homeId, space } = serverRuntimeConfig.contentful
  const client = contentful.createClient({ space, accessToken })

  const entry = await client.getEntry<HomeContent>(homeId)

  return {
    ...entry.fields,
    services: entry.fields.services.map(_ => _.fields),
  }
}
