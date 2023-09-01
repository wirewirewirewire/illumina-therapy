# README

This is the Illumina Therapy website for Ladan. It was created as a playground for building a performant small website on a more modern stack.

It is based on [next.js](https://nextjs.org) The backend is using the [Payload CMS](https://payloadcms.com) and is placed inside the next.js application.

This allows you to host the whole website in a single [Vercel](https://vercel.com/) or [AWS Amplify](https://aws.amazon.com/de/amplify) instance.

It is Code-first by design and all tools used are Open-Source and free. This is useful since any Squarespace or Webflow project will cost you at least 300 € a year.

### Features

- Simple TypeScript based CMS (Payload)
- Advanced media hosting and resizing (Cloudinary)
- Fast database (MongoDB Atlas)
- 100% free! 🔥

### Local setup

Clone the repository

```
yarn install
```

Copy the `.env.example` to `.env` and fill all the missing environment variables by setting up the following services.

### MongoDB (our database)

We use MongoDB as our database.

- Visit [www.mongodb.com](https://www.mongodb.com/) and create a new account.
- Select the `Shared M0` free cluster
- After creating the database cluster copy the connection string.
- Allow all access through all IP adresses (1/1/1/1\*1) or use this integration: https://vercel.com/integrations/mongodbatlas

### Cloudinary (for file hosting and media resizing)

- Visit [cloudinary.com](https://cloudinary.com/) and create a new account.
- Copy the credentials

Run the application locally by using `yarn dev`.

### Start the development environment

```
yarn dev
```

### Deploying your website to Vercel

- Visit [www.vercel.com](https://www.vercel.com/) and create a new account.
- Download and install the [Vercel CLI](https://vercel.com/docs/cli)
- Make sure all your environment variables are setup correctly inside your [Vercel project](https://vercel.com/guides/how-to-add-vercel-environment-variables).
- Inside your main directory (where the `package.json` is) run `vercel --prod`
- Now your website should be online!
