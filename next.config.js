/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fsbx.com",
      "avatars.githubusercontent.com",
    ],
  },
};
