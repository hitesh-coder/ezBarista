<template>
    <div class="chatPage">
        <div>
            <div class="inputs">
                    <img src="https://e7.pngegg.com/pngimages/117/435/png-clipart-human-figure-icon-illustration-user-silhouette-my-account-icon-animals-black.png" alt="your input">
                    <div class="texts">
                        Show me some radio button
                    </div>
                </div>
                <div class="outputs">
                    <img src="https://w1.pngwing.com/pngs/278/853/png-transparent-line-art-nose-chatbot-internet-bot-artificial-intelligence-snout-head-smile-black-and-white.png" alt="your input">
                    <div class="texts">
                        <p>Select your favorite color:</p>
                        <vscode-radio-group orientation="vertical">
                            <vscode-radio>red</vscode-radio>
                            <vscode-radio>green</vscode-radio>
                            <vscode-radio>blue</vscode-radio>
                        </vscode-radio-group>
                    </div>
                </div>
        </div>
        <div>
            <div class="inputs">
                    <img src="https://e7.pngegg.com/pngimages/117/435/png-clipart-human-figure-icon-illustration-user-silhouette-my-account-icon-animals-black.png" alt="your input">
                    <div class="texts">
                        Show me some dropdown
                    </div>
                </div>
                <div class="outputs">
                    <img src="https://w1.pngwing.com/pngs/278/853/png-transparent-line-art-nose-chatbot-internet-bot-artificial-intelligence-snout-head-smile-black-and-white.png" alt="your input">
                    <div class="texts">
                        <div class="dropdown-container">
                            <label for="my-dropdown">Choose an option:</label>
                            <vscode-dropdown id="my-dropdown">
                                <vscode-option>Option Label #1</vscode-option>
                                <vscode-option>Option Label #2</vscode-option>
                                <vscode-option>Option Label #3</vscode-option>
                            </vscode-dropdown>
                        </div>
                    </div>
                </div>
        </div>
        <div>
            <div class="inputs">
                    <img src="https://e7.pngegg.com/pngimages/117/435/png-clipart-human-figure-icon-illustration-user-silhouette-my-account-icon-animals-black.png" alt="your input">
                    <div class="texts">
                        Show me some checkbox
                    </div>
                </div>
                <div class="outputs">
                    <img src="https://w1.pngwing.com/pngs/278/853/png-transparent-line-art-nose-chatbot-internet-bot-artificial-intelligence-snout-head-smile-black-and-white.png" alt="your input">
                    <div class="texts">
                        <vscode-checkbox checked required>Checked + Required</vscode-checkbox>
                        <vscode-checkbox checked readonly>Checked + Readonly</vscode-checkbox>
                        <vscode-checkbox autofocus>Autofocus</vscode-checkbox>
                        <vscode-checkbox disabled>Disabled</vscode-checkbox>
                        <vscode-checkbox value="baz">Value Set To "baz"</vscode-checkbox>
                    </div>
                </div>
        </div>
        <div v-for="(prompt, index) in inputPrompt" :key="{index}+prompt">
            <div class="inputs">
                <img src="https://e7.pngegg.com/pngimages/117/435/png-clipart-human-figure-icon-illustration-user-silhouette-my-account-icon-animals-black.png" alt="your input">
                <div class="texts">
                    {{ prompt }}
                </div>
            </div>
            <div class="outputs">
                <img src="https://w1.pngwing.com/pngs/278/853/png-transparent-line-art-nose-chatbot-internet-bot-artificial-intelligence-snout-head-smile-black-and-white.png" alt="your input">
                <div class="texts">
                    {{ botOutputs[index] }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: "chats",
    computed: {
        ...mapState([ 'inputPrompt', 'botOutputs' ]),
    },
    methods: {
        ...mapActions([ 'incrementAction', 'decrementAction' ]),
    },
};
</script>

<style>
.chatPage {
    display: flex;
    flex-direction: column;
    background: rgba(78, 78, 78, 0.453);
    border-radius: 5px;
    padding: 5px;
    max-height: 93vh;
    overflow-y: scroll;
}
.texts {
    align-items: center;
    text-align: left;
}
.inputs, .outputs{
    background: black;
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;
    color: white;
    padding: 10px;
}

.outputs {
    background: none;
}
img {
    margin-right: 10px;
    height: 20px;
}

label {
    display: flex;
    flex-direction: row;
}
</style>