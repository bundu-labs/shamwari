import { buildMeta } from "$lib/seo/meta";
import type { LayoutLoad } from "./$types";

/**
 * Dashboard auth guard placeholder. Once the Stytch integration lands,
 * this load function will redirect unauthenticated users to /login.
 * For now we keep the route surface so the UI work is reviewable.
 */
export const load: LayoutLoad = ({ url }) => ({
  meta: buildMeta({
    pathname: url.pathname,
    title: "Dashboard",
    description: "Your Shamwari AI developer dashboard.",
    noindex: true,
  }),
});
