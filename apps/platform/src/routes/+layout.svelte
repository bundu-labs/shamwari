<script lang="ts">
  import "../app.css";
  import { ModeWatcher } from "mode-watcher";
  import {
    JsonLd,
    buildOrganization,
    buildWebSite,
  } from "@shamwari/ui";

  const { children } = $props();

  const nyuchiOrg = buildOrganization({
    name: "Nyuchi Africa",
    url: "https://nyuchi.africa",
    description:
      "Zimbabwean tech company building open source, community-based platforms for Africa.",
    founder: { name: "Bryan Fawcett" },
  });

  const platformSite = buildWebSite({
    name: "Shamwari AI Platform",
    url: "https://platform.shamwari.ai",
    description:
      "Developer and business portal — API keys, usage dashboards, billing, and documentation for Shamwari AI.",
    publisher: { name: "Nyuchi Africa", url: "https://nyuchi.africa" },
    inLanguage: ["en"],
  });
</script>

<svelte:head>
  <title>Shamwari AI Platform</title>
  <meta
    name="description"
    content="Developer and business portal — API keys, usage dashboards, billing, and documentation for Shamwari AI."
  />
  <link rel="canonical" href="https://platform.shamwari.ai" />
  <meta name="robots" content="noindex, nofollow" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Shamwari AI Platform" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:title" content="Shamwari AI Platform" />
  <meta
    property="og:description"
    content="Developer and business portal — API keys, usage dashboards, billing, and documentation for Shamwari AI."
  />
  <meta property="og:url" content="https://platform.shamwari.ai" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Shamwari AI Platform" />
  <meta
    name="twitter:description"
    content="Developer and business portal — API keys, usage dashboards, billing, and documentation for Shamwari AI."
  />
</svelte:head>

<ModeWatcher defaultMode="system" />
<JsonLd data={nyuchiOrg} />
<JsonLd data={platformSite} />

{@render children()}
