import { createApp } from "vue";
import App from "./App.vue";
/// tornando o componente NavBar global
import NavBar from "./components/NavBar.vue";

/// ao fazer isso assim que a aplicação for iniciada o componente ja será importado
/// isso pode trazer um peso a mais
const app = createApp(App);
app.component("NavBar", NavBar);
app.mount("#app");
