<template>
    <div id="container">
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        <router-view /> -->
        <chats/>
        <div class="inputSection">
            <input type="text" v-model="inputFieldValue" autofocus/>
            <vscode-button @click="giveOutput">click</vscode-button>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Chats from '@/components/chats.vue'
import { provideVSCodeDesignSystem, vsCodeDropdown, vsCodeRadio, vsCodeRadioGroup, vsCodeTextField, vsCodeButton, vsCodeCheckbox } from "@vscode/webview-ui-toolkit";

export default {
    name: 'App',
    mounted() {
        provideVSCodeDesignSystem().register(vsCodeDropdown(), vsCodeRadio(), vsCodeRadioGroup(), vsCodeTextField(), vsCodeButton(), vsCodeCheckbox());
    },
    data() {
        return {
            inputFieldValue: '',
        };
    },
    methods: {
        giveOutput() {
            // Dispatch an action to update the store's state with the current value from the text field\
            console.log("HEHEH", this.inputFieldValue)
            this.$store.dispatch('updateInputContent', this.inputFieldValue);
            this.inputFieldValue = "";
            console.log("HEHEH", this.inputFieldValue)
        },
    },
    components: {
        Chats
    }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    // background: white;
}

#container {
    // padding: 20px;
    display: flex;
    flex-direction: column;
    position: relative;
    height: 98vh;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

.inputSection{
    position: sticky;
    top: 95%;
    width: 100%;
    display: flex;
    flex-direction: row;

    input{
        margin-right: 5px;
        width: fit-content;
        flex:1;
    }

    vscode-button {
        white-space: nowrap;
    }
}
</style>
