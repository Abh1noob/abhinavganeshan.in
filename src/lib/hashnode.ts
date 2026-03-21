import { siteConfig } from "@/config/site";

const GQL_ENDPOINT = siteConfig.integrations.hashnode.graphqlEndpoint;
const PUBLICATION_HOST = siteConfig.integrations.hashnode.publicationHost;

export interface Post {
  id: string;
  title: string;
  slug: string;
  brief: string;
  coverImage?: {
    url: string;
  };
  publishedAt: string;
  readTimeInMinutes: number;
  url: string;
  content: {
    html: string;
    markdown: string;
  };
  tags?: {
    name: string;
  }[]
}

export interface PageInfo {
  endCursor: string;
  hasNextPage: boolean;
}

export interface PostsResponse {
  edges: { node: Post }[];
  pageInfo: PageInfo;
}

export const getPosts = async (first = 10, after = ""): Promise<PostsResponse> => {
  const query = `
    query GetPosts($host: String!, $first: Int!, $after: String) {
      publication(host: $host) {
        posts(first: $first, after: $after) {
          edges {
            node {
              id
              title
              slug
              brief
              publishedAt
              readTimeInMinutes
              url
              coverImage {
                url
              }
              tags {
                name
              }
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    }
  `;

  const variables = {
    host: PUBLICATION_HOST,
    first,
    after: after || null,
  };

  try {
    const res = await fetch(GQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    const { data } = await res.json();

    if (!data?.publication?.posts) {
      console.error("No posts found or error in response", data);
      return { edges: [], pageInfo: { endCursor: "", hasNextPage: false } };
    }

    return data.publication.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return { edges: [], pageInfo: { endCursor: "", hasNextPage: false } };
  }
};

export const getPost = async (slug: string): Promise<Post | null> => {
  const query = `
    query GetPost($host: String!, $slug: String!) {
      publication(host: $host) {
        post(slug: $slug) {
          id
          title
          slug
          brief
          publishedAt
          readTimeInMinutes
          coverImage {
            url
          }
          content {
            html
            markdown
          }
          tags {
            name
          }
          url
        }
      }
    }
  `;

  const variables = {
    host: PUBLICATION_HOST,
    slug,
  };

  try {
    const res = await fetch(GQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 3600 },
    });

    const { data } = await res.json();
    return data?.publication?.post || null;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
};
