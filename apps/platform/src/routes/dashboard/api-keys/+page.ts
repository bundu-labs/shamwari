import { buildMeta } from "$lib/seo/meta";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ url }) => ({
  meta: buildMeta({
    pathname: url.pathname,
    title: "API keys",
    description: "Issue, rotate, and revoke Shamwari AI API keys.",
    noindex: true,
  }),
});
