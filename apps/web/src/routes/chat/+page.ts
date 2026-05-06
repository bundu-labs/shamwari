import { buildMeta } from "$lib/seo/meta";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ url }) => ({
  meta: buildMeta({
    pathname: url.pathname,
    title: "Chat",
    description:
      "Chat with Shamwari AI in English, Shona, or Ndebele. Free tier with sensible rate limits, no credit card required.",
  }),
});
