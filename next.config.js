if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `)
}

module.exports = {
  images: {
    domains: [
      process.env.WORDPRESS_API_URL.match(/(http(?:s)?:\/\/)(.*)/)[2], // Valid WP Image domain.
      '2.gravatar.com',
      'secure.gravatar.com',
      'www.bwallpaperhd.com',
      'i0.wp.com',
      'jpc4aux4c3ufmszw4fedao6gym4nouj7jdxxto6cm7dqxr7h.arweave.net',
    ],
  },
}
