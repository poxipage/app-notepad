import { state, type State } from "poxi";
// Defines the variables you wait available in the store.
type Schema = { title: {text: string, size:number}, content: {text: string, size:number} };

// The state function returns a svelte store that allows you to edit the state
export const getState = () => state<Schema>();
export const getTitle = () => getState().get("title")
export const getContent = () => getState().get("content")

//Initialize the counter variable with value 0
export function onCreate(state: State<Schema>) {
  state.set({ title: {text: "Title", size: 24}, content: {text: "", size: 16} });
}
