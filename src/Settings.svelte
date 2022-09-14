<script lang="ts">
    import { getContent, getTitle } from "./state";
    const title = getTitle()
    const content = getContent()
</script>

<div class="form-control p-2">
    <label class="label">
        <span class="label-text text-lg">Title font size</span>
    </label>
    <input
        type="number"
        class="input flex-grow"
        bind:value={$title.size}
    />
    <label class="label">
        <span class="label-text text-lg">Content font size</span>
    </label>
    <input
        type="number"
        class="input flex-grow"
        bind:value={$content.size}
    />
</div>
