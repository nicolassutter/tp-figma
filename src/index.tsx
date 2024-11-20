/* @refresh reload */
import { render } from "solid-js/web";
import App from "./App.tsx";

// @ts-expect-error no types
import "@fontsource/poppins";

const root = document.getElementById("root");

render(() => <App />, root!);
