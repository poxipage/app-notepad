<script lang="ts">
  import { getContent, getTitle } from "./state";
  const title = getTitle()
  const content = getContent()
</script>

<div class="notepad w-full justify-center items-center">
  <input type="text" class="note title" bind:value={$title.text} style="--title-size: {$title.size}px" />
  <textarea class="note content" name="content" id="content" bind:value={$content.text} style="--content-size: {$content.size}px" />
</div>

<style>
  .notepad {
    background-color: wheat;
    border: 1px solid black;
    border-radius: 5px;
    border-bottom: 2px solid black;
    padding: 10px, 10px, 10px, 10px;
    height: calc(100% - 5px);
    overflow: hidden;
  }
  .note {
    width: 100%;
    font-family: cursive;
    align-self: center;
    border: 1px solid black;
    background-color: wheat;
    resize: none;
  }
  .title {
    text-align: center;
    font-size: var(--title-size);
    font-weight: bold;
    padding: 5px;
    word-break: break-all;
    width: 100%;
    display: block;
    overflow-wrap: break-word;
    height: auto;
  }
  .content {
    height: calc(100% - 35px);
    font-size: var(--content-size);
    padding: 5px 5%;
  }
</style>