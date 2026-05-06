import { buildMeta } from "$lib/seo/meta";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ url }) => ({
  meta: buildMeta({
    pathname: url.pathname,
    title: "Usage",
    description: "Daily and monthly Shamwari AI token usage broken down per API key.",
    noindex: true,
  }),
});
