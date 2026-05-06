<script lang="ts">
  const range = $state({ value: "30d" });
  const ranges = [
    { value: "7d", label: "Last 7 days" },
    { value: "30d", label: "Last 30 days" },
    { value: "90d", label: "Last 90 days" },
  ];
</script>

<div class="flex items-center justify-between">
  <div>
    <h1 class="text-3xl font-bold tracking-tight">Usage</h1>
    <p class="mt-2 text-muted-foreground">
      Tokens, request count, and latency, sliced by key.
    </p>
  </div>
  <label class="text-sm">
    <span class="sr-only">Date range</span>
    <select
      bind:value={range.value}
      class="rounded-md border border-border bg-background px-3 py-2"
    >
      {#each ranges as opt}
        <option value={opt.value}>{opt.label}</option>
      {/each}
    </select>
  </label>
</div>

<div class="mt-8 grid gap-4 md:grid-cols-3">
  {#each [
    { label: "Tokens", value: "0", help: "vs. 1M / mo limit" },
    { label: "Requests", value: "0", help: "p95 latency 0 ms" },
    { label: "Errors", value: "0%", help: "of total requests" },
  ] as stat}
    <div class="rounded-lg border border-border bg-card p-6">
      <p class="text-sm text-muted-foreground">{stat.label}</p>
      <p class="mt-2 text-3xl font-semibold tracking-tight">{stat.value}</p>
      <p class="mt-1 text-xs text-muted-foreground">{stat.help}</p>
    </div>
  {/each}
</div>

<div class="mt-8 rounded-lg border border-border bg-card p-6">
  <h2 class="font-semibold">Activity</h2>
  <div
    class="mt-6 flex h-48 items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground"
  >
    Charts populate once your first request is recorded.
  </div>
</div>
