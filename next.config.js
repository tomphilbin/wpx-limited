const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? {}
    : !process.env.NOW_REGION
    ? require('next/constants') // Get values from `next` package when building locally
    : require('next-server/constants') // Get values from `next-server` package when building on now v2

const config = {
  serverRuntimeConfig: {
    contentful: {
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      homeId: process.env.CONTENTFUL_HOME_ID,
      space: process.env.CONTENTFUL_SPACE_ID,
    },
  },
}

module.exports = (phase, { defaultConfig }) => {
  if (phase !== PHASE_PRODUCTION_SERVER) {
    const withTypescript = require('@zeit/next-typescript')

    return { ...config, ...withTypescript() }
  }

  return config
}
