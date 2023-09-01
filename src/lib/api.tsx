import { getPayloadClient } from "../payload/payloadClient";

export async function fetchAPI(query: any, options: { variables?: any } = {}) {
  const { variables } = options;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error("Failed to fetch API Error:", json.errors);
  }
  return json.data;
}

export async function fetchAPIRest(
  path: any,
  options: { variables?: any } = {}
) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error("Failed to fetch API Error:", json.errors);
  }

  return json;
}

export async function getArticles() {
  const payload = await getPayloadClient();
  const pages = await payload.find({
    collection: "pages",
    limit: 0,
  });

  return pages;
  /* const data = await fetchAPIRest(`pages`);
  return data;*/
}

export async function getArticle(slug: string) {
  /* const data = await fetchAPI(
    `query Pages($slug: String!) {
      Pages(where: {slug:{ equals: $slug}}) {
      docs {id}
      }
    }`,
    { variables: { slug } }
  );

  console.log("getArticle", data);

  return data.Pages;
*/

  const payload = await getPayloadClient();
  const pages = await payload.find({
    collection: "pages",
    limit: 1,
    depth: 5,
    showHiddenFields: true,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  //const data = await fetchAPIRest(`pages`);

  const page = pages.docs.find((doc: any) => doc.slug === slug);
  return page;
}

export async function getOptions() {
  const data = await fetchAPIRest(`globals/header`);
  return data;
}

export async function getImage(id: string) {
  const data = await fetchAPI(
    `query file($id: ID!) {
      file(where: {id:  $id}) {
        id
        title
        file {
           filename
           publicUrl
           mimetype
        }
      }
    }`,
    { variables: { id } }
  );
  return data.file;
}
