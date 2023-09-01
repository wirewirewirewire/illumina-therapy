const path = require("path");
const withPlugins = require("next-compose-plugins");

const { withPayload } = require("@payloadcms/next-payload");

const redirects = {};

module.exports = withPayload(
  {
    transpilePackages: [
      "@payloadcms/plugin-seo",
      //"@wirewire/plugin-cloud-storage",
    ],
    async redirects() {
      return [
        {
          source: "/article/:slug*",
          destination: "/posts/:slug*",
          permanent: true,
        },
      ];
    },
    /*webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      if (!isServer) {
        config.resolve.fallback = { fs: false };
      }
      config.resolve.alias["react"] = path.resolve("./node_modules/react");
      return config;
    },*/
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    env: {
      NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API,
    },
    images: {
      domains: ["res.cloudinary.com", "localhost"],
      //  path: "res.cloudinary.com/wirewire",
      //  loader: "cloudinary",
    },
    experimental: { scrollRestoration: true /* images: { layoutRaw: true }*/ },
  },
  {
    // Point to your Payload config (Required)
    configPath: path.resolve(__dirname, "./src/payload/payload.config.ts"),

    // Point to custom Payload CSS (optional)
    // cssPath: path.resolve(__dirname, "./css/my-custom-payload-styles.css"),

    // Point to your exported, initialized Payload instance (optional, default shown below`)
    payloadPath: path.resolve(process.cwd(), "./src/payload/payloadClient.ts"),

    // Set a custom Payload admin route (optional, default is `/admin`)
    // NOTE: Read the "Set a custom admin route" section in the payload/next-payload README.
    adminRoute: "/admin",
  }
);
