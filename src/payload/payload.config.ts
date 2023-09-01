import path from "path";
import { buildConfig } from "payload/config";

import { cloudinaryAdapter } from "@wirewire/plugin-cloud-storage/cloudinary";

import { cloudStorage } from "@wirewire/plugin-cloud-storage";
//import FormBuilder from "@payloadcms/plugin-form-builder";
//import nestedDocs from "@payloadcms/plugin-nested-docs";
//import redirects from "@payloadcms/plugin-redirects";
import seo from "@payloadcms/plugin-seo";
import type { GenerateTitle } from "@payloadcms/plugin-seo/types";

import { Media } from "./collections/Media";
import { Pages } from "./collections/Pages";

import Users from "./collections/Users";
import BeforeDashboard from "./components/BeforeDashboard";
import { Footer } from "./globals/Footer";
import { Header } from "./globals/Header";
import { Logo } from "./Logo";

const generateTitle: GenerateTitle = () => {
  return "Lumalenscape";
};

const adapter = cloudinaryAdapter({
  config: {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  },
});

export default buildConfig({
  // user: Users.slug,
  /*components: {
    // The BeforeDashboard component renders the 'welcome' block that you see after logging into your admin panel.
    // Feel free to delete this at any time. Simply remove the line below and the import BeforeDashboard statement on line 15.
    beforeDashboard: [BeforeDashboard],
    graphics: {
      Logo,
      Icon: Logo,
    },
  },*/
  collections: [Users, Pages, Media],
  globals: [Header, Footer],
  typescript: {
    outputFile: path.resolve(__dirname, "../payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  ...(process.env.PAYLOAD_PUBLIC_SITE_URL
    ? {
        cors: [process.env.PAYLOAD_PUBLIC_SITE_URL].filter(Boolean),
        csrf: [process.env.PAYLOAD_PUBLIC_SITE_URL].filter(Boolean),
      }
    : {}),
  plugins: [
    /* FormBuilder({
      fields: {
        payment: true,
      },
    }),*/
    cloudStorage({
      collections: {
        media: {
          adapter,
          disableLocalStorage: true,
          disablePayloadAccessControl: true,
        },
      },
    }),
    // nestedDocs({
    //  collections: ["pages"],
    // }),
    // redirects({
    //  collections: ['pages'],
    // }),
    seo({
      collections: ["pages"],
      generateTitle,
      uploadsCollection: "media",
    }),
  ],
});
