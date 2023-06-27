import { createClient } from "next-sanity"

export const client = createClient({
   apiVersion: "2023-06-22",
   dataset: "production",
   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
   useCdn: true,
   token: process.env.SANITY_ACCESS_TOKEN
}
)