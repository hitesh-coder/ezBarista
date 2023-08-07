import { createApp } from "vue";
import Sidebar from "../components/Sidebar.vue";
import VueCodeHighlight from 'vue-code-highlight';

createApp(Sidebar).use(VueCodeHighlight).mount("#app");