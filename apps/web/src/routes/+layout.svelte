<script lang="ts">
  import "../app.css";
  import { ModeWatcher } from "mode-watcher";
  import {
    JsonLd,
    buildOrganization,
    buildWebApplication,
  } from "@shamwari/ui";

  const { children } = $props();

  const nyuchiOrg = buildOrganization({
    name: "Nyuchi Africa",
    url: "https://nyuchi.africa",
    description:
      "Zimbabwean tech company building open source, community-based platforms for Africa.",
    founder: { name: "Bryan Fawcett" },
  });

  const shamwariApp = buildWebApplication({
    name: "Shamwari AI",
    url: "https://shamwari.ai",
    description:
      "AI that actually works for Africa — small enough to run locally, smart enough to be useful, culturally grounded.",
    applicationCategory: "Artificial Intelligence",
    operatingSystem: "Web, Android, iOS",
    inLanguage: ["en", "sn", "nd"],
    provider: { name: "Nyuchi Africa", url: "https://nyuchi.africa" },
  });
</script>

<svelte:head>
  <title>Shamwari AI</title>
  <meta
    name="description"
    content="AI that actually works for Africa — small enough to run locally, smart enough to be useful, culturally grounded."
  />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Shamwari AI" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:title" content="Shamwari AI" />
  <meta
    property="og:description"
    content="AI that actually works for Africa — small enough to run locally, smart enough to be useful, culturally grounded."
  />
  <meta property="og:url" content="https://shamwari.ai" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Shamwari AI" />
  <meta
    name="twitter:description"
    content="AI that actually works for Africa — small enough to run locally, smart enough to be useful, culturally grounded."
  />
</svelte:head>

<ModeWatcher defaultMode="system" />
<JsonLd data={nyuchiOrg} />
<JsonLd data={shamwariApp} />

{@render children()}
