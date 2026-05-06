<script lang="ts">
  let keys = $state<{ id: string; label: string; lastUsed: string }[]>([]);
  let newLabel = $state("");

  function createKey(e: Event) {
    e.preventDefault();
    if (!newLabel) return;
    keys = [
      ...keys,
      {
        id: `sk_live_${Math.random().toString(36).slice(2, 10)}`,
        label: newLabel,
        lastUsed: "Never",
      },
    ];
    newLabel = "";
  }

  function revoke(id: string) {
    keys = keys.filter((key) => key.id !== id);
  }
</script>

<h1 class="text-3xl font-bold tracking-tight">API keys</h1>
<p class="mt-2 text-muted-foreground">
  One key per environment is the safest pattern. Keys are shown once at
  creation; we hash and store only the prefix.
</p>

<form
  onsubmit={createKey}
  class="mt-8 flex gap-3 rounded-lg border border-border bg-card p-4"
>
  <label class="flex-1">
    <span class="block text-sm font-medium">Key label</span>
    <input
      type="text"
      bind:value={newLabel}
      placeholder="e.g. production-web"
      class="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
    />
  </label>
  <button
    type="submit"
    class="self-end rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-90"
  >
    Issue key
  </button>
</form>

<div class="mt-8 overflow-hidden rounded-lg border border-border">
  <table class="w-full text-sm">
    <thead class="bg-muted text-left">
      <tr>
        <th class="px-4 py-2 font-medium">Label</th>
        <th class="px-4 py-2 font-medium">Key prefix</th>
        <th class="px-4 py-2 font-medium">Last used</th>
        <th class="px-4 py-2"></th>
      </tr>
    </thead>
    <tbody>
      {#each keys as key (key.id)}
        <tr class="border-t border-border">
          <td class="px-4 py-3">{key.label}</td>
          <td class="px-4 py-3 font-mono text-xs">{key.id.slice(0, 12)}…</td>
          <td class="px-4 py-3 text-muted-foreground">{key.lastUsed}</td>
          <td class="px-4 py-3 text-right">
            <button
              onclick={() => revoke(key.id)}
              class="text-sm text-destructive hover:underline"
            >
              Revoke
            </button>
          </td>
        </tr>
      {:else}
        <tr>
          <td colspan="4" class="px-4 py-10 text-center text-muted-foreground">
            No keys yet. Issue your first key above.
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
