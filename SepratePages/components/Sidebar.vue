<template>
  <div id="container">
    <!-- chats -->
    <div id="chatPage" ref="chatPage">
      <!-- 1 -->
      <div>
        <div class="inputs" v-show="this.inputs.length > 0">
          <div class="headingSection">
            <img
              src="https://e7.pngegg.com/pngimages/117/435/png-clipart-human-figure-icon-illustration-user-silhouette-my-account-icon-animals-black.png"
              alt="your input">
            <h3>You</h3>
          </div>
          <div class="texts">
            {{ this.inputs[ 0 ] }}
          </div>
        </div>
        <div class="outputs" v-show="this.output > 0">
          <div class="headingSection">
            <img
              src="https://w1.pngwing.com/pngs/278/853/png-transparent-line-art-nose-chatbot-internet-bot-artificial-intelligence-snout-head-smile-black-and-white.png"
              alt="your input">
            <h3>ezBarista</h3>
          </div>
          <div class="texts">
            A profile consists of targets, and a specified default target. Each target specifies the type of warehouse you
            are connecting to, the credentials to connect to the warehouse, and some dbt-specific configurations. The
            credentials you need to provide in your target varies across warehouses — sample profiles for each supported
            warehouse are available in the Supported Data Platforms section.
          </div>
        </div>
      </div>
      <!-- 2 -->
      <div>
        <div class="inputs" v-show="this.inputs.length > 1">
          <div class="headingSection">
            <img
              src="https://e7.pngegg.com/pngimages/117/435/png-clipart-human-figure-icon-illustration-user-silhouette-my-account-icon-animals-black.png"
              alt="your input">
            <h3>You</h3>
          </div>
          <div class="texts">
            <!-- Ingest data from Postgres and load into s3 -->
            {{ this.inputs[ 1 ] }}
          </div>
        </div>
        <div class="outputs" v-show="this.output > 1">
          <div class="headingSection">
            <img
              src="https://w1.pngwing.com/pngs/278/853/png-transparent-line-art-nose-chatbot-internet-bot-artificial-intelligence-snout-head-smile-black-and-white.png"
              alt="your input">
            <h3>ezBarista</h3>
          </div>
          <div class="texts">
            Your account has 2 Postgres connections. Select the one you are interested in from the list below.
            <vscode-radio-group>
              <vscode-radio @click="radioSelected('Sales')" value="Sales">Sales</vscode-radio>
              <vscode-radio @click="radioSelected('Customer')" values="Customer">Customer</vscode-radio>
            </vscode-radio-group>
          </div>
        </div>
      </div>
      <!-- 3 -->
      <div>
        <div class="inputs" v-show="this.inputs.length > 2">
            <div class="headingSection">
              <img
                src="https://e7.pngegg.com/pngimages/117/435/png-clipart-human-figure-icon-illustration-user-silhouette-my-account-icon-animals-black.png"
                alt="your input">
              <h3>You</h3>
            </div>
            <div class="texts">
              <!-- Ingest data from Postgres and load into s3 -->
              {{ this.inputs[ 2 ] }}
            </div>
          </div>
        <div class="outputs" v-show="this.output > 2">
          <div class="headingSection">
            <img
              src="https://w1.pngwing.com/pngs/278/853/png-transparent-line-art-nose-chatbot-internet-bot-artificial-intelligence-snout-head-smile-black-and-white.png"
              alt="your input">
            <h3>ezBarista</h3>
          </div>
          <div class="texts">
            We don’t have any s3 connections established on your ezBrew account. Let us create one by answering a few
            simple questions.
          </div>
        </div>
      </div>
      <!-- 4 -->
      <div v-show="this.output > 2">
        <div class="outputs">
          <div class="headingSection">
            <img
              src="https://w1.pngwing.com/pngs/278/853/png-transparent-line-art-nose-chatbot-internet-bot-artificial-intelligence-snout-head-smile-black-and-white.png"
              alt="your input">
            <h3>ezBarista</h3>
          </div>
          <div class="texts">
            Bucket Name
          </div>
        </div>
      </div>
      <!-- 5 -->
      <div>
        <div class="inputs" v-show="this.inputs.length > 3">
          <div class="headingSection">
            <img
              src="https://e7.pngegg.com/pngimages/117/435/png-clipart-human-figure-icon-illustration-user-silhouette-my-account-icon-animals-black.png"
              alt="your input">
            <h3>You</h3>
          </div>
          <div class="texts">
            <!-- User bucket Name -->
            {{ this.inputs[ 3 ] }}
          </div>
        </div>
        <div class="outputs" v-show="this.output > 3">
          <div class="headingSection">
            <img
              src="https://w1.pngwing.com/pngs/278/853/png-transparent-line-art-nose-chatbot-internet-bot-artificial-intelligence-snout-head-smile-black-and-white.png"
              alt="your input">
            <h3>ezBarista</h3>
          </div>
          <div class="texts">
            AWS Access Key ID
          </div>
        </div>
      </div>
      <!-- 6 -->
      <div>
        <div class="inputs" v-show="this.inputs.length > 4">
          <div class="headingSection">
            <img
              src="https://e7.pngegg.com/pngimages/117/435/png-clipart-human-figure-icon-illustration-user-silhouette-my-account-icon-animals-black.png"
              alt="your input">
            <h3>You</h3>
          </div>
          <div class="texts">
            <!-- User Aws key -->
            {{ this.inputs[ 4 ] }}
          </div>
        </div>
        <div class="outputs" v-show="this.output > 4">
          <div class="headingSection">
            <img
              src="https://w1.pngwing.com/pngs/278/853/png-transparent-line-art-nose-chatbot-internet-bot-artificial-intelligence-snout-head-smile-black-and-white.png"
              alt="your input">
            <h3>ezBarista</h3>
          </div>
          <div class="texts">
            Path Prefix
          </div>
        </div>
      </div>
      <!-- 7 -->
      <div>
        <div class="inputs" v-show="this.inputs.length > 5">
          <div class="headingSection">
            <img
              src="https://e7.pngegg.com/pngimages/117/435/png-clipart-human-figure-icon-illustration-user-silhouette-my-account-icon-animals-black.png"
              alt="your input">
            <h3>You</h3>
          </div>
          <div class="texts">
            <!-- User Path prefix -->
            {{ this.inputs[ 5 ] }}
          </div>
        </div>
        <div class="outputs" v-show="this.output > 5">
          <div class="headingSection">
            <img
              src="https://w1.pngwing.com/pngs/278/853/png-transparent-line-art-nose-chatbot-internet-bot-artificial-intelligence-snout-head-smile-black-and-white.png"
              alt="your input">
            <h3>ezBarista</h3>
          </div>
          <div class="texts">
            Done. We have created a project ezSales, pipeline ezSalesPipeline, and a task ezSalesPipelineTask. You can
            review the pipeline ezSalesPipeline or modify it by using the “Modify pipeline ezSalesPipeline” command.
            <br>
            <div v-highlight>
              <pre class="language-javascript">
                  <code>
        const express = require('express')
        const app = express()
        const port = 3000

        app.get('/', (req, res) => {
          res.send('Hello World!')
        })

        app.listen(port, () => {
          console.log(`Example app listening on port ${port}`)
        })
                  </code>
                </pre>
            </div>
          </div>
        </div>
      </div>
      <!-- 8 -->
      <div>
        <div class="outputs" v-show="this.output > 5">
          <div class="headingSection">
            <img
              src="https://w1.pngwing.com/pngs/278/853/png-transparent-line-art-nose-chatbot-internet-bot-artificial-intelligence-snout-head-smile-black-and-white.png"
              alt="your input">
            <h3>ezBarista</h3>
          </div>
          <div class="texts">
            If you’re ready to run the pipeline, just say “Run pipeline ezSalesPipeline” and we’ll take care of the rest.
            We will use some default parameters when we execute this pipeline. If you would like to view the parameters,
            type the command “Modify pipeline ezSalesPipeline parameters”
          </div>
        </div>
      </div>
      <!-- 9 -->
      <div>
        <div class="inputs" v-show="this.inputs.length > 6">
          <div class="headingSection">
            <img
              src="https://e7.pngegg.com/pngimages/117/435/png-clipart-human-figure-icon-illustration-user-silhouette-my-account-icon-animals-black.png"
              alt="your input">
            <h3>You</h3>
          </div>
          <div class="texts">
            <!-- Modify ezSalesPipeline parameteres -->
            {{ this.inputs[ 6 ] }}
          </div>
        </div>
        <div class="outputs" v-show="this.output > 6">
          <div class="headingSection">
            <img
              src="https://w1.pngwing.com/pngs/278/853/png-transparent-line-art-nose-chatbot-internet-bot-artificial-intelligence-snout-head-smile-black-and-white.png"
              alt="your input">
            <h3>ezBarista</h3>
          </div>
          <div class="texts">
            Records to sync
            <div style="display: flex; margin-top: 5px;">
              <vscode-text-area placeholder="Select"></vscode-text-area>
            </div>
          </div>
          <br>
          <div class="texts">
            Sync mode
            <div style="display: flex; margin-top: 5px;">
              <p style="margin: 0px; margin-right: 4px;">
                Overwrite (Overwrite, Append, Incremental Sync) :
              </p>
              <vscode-dropdown>
                <vscode-option>Option Label #1</vscode-option>
                <vscode-option>Option Label #2</vscode-option>
                <vscode-option>Option Label #3</vscode-option>
              </vscode-dropdown>
            </div>
          </div>
          <br>
          <div class="texts">
            Schedule
            <div style="display: flex; margin-top: 5px;">
              <p style="margin: 0px; margin-right: 4px;">
                Manual (Continuously, On Schedule) :
              </p>
              <vscode-dropdown>
                <vscode-option>Option Label #1</vscode-option>
                <vscode-option>Option Label #2</vscode-option>
                <vscode-option>Option Label #3</vscode-option>
              </vscode-dropdown>
            </div>
          </div>
        </div>
      </div>
      <!-- <div v-for="(prompt, index) in inputPrompt" :key="{ index } + prompt">
        <div class="inputs">
          <img
            src="https://e7.pngegg.com/pngimages/117/435/png-clipart-human-figure-icon-illustration-user-silhouette-my-account-icon-animals-black.png"
            alt="your input">
          <div class="texts">
            {{ prompt }}
          </div>
        </div>
        <div class="outputs">
          <img
            src="https://w1.pngwing.com/pngs/278/853/png-transparent-line-art-nose-chatbot-internet-bot-artificial-intelligence-snout-head-smile-black-and-white.png"
            alt="your input">
          <div class="texts">
            {{ botOutputs[ index ] }}
          </div>
        </div>
      </div> -->
      <vscode-progress-ring v-show="this.progress"></vscode-progress-ring>
    </div>
    <!-- input section -->
    <div class="inputSection">
      <input type="text" v-model="inputFieldValue" v-on:keyup.enter="inputGiven" autofocus />
      <vscode-button @click="inputGiven">
        <img src="@/media/send.png" alt="" style="filter: invert(1); margin: 0;">
      </vscode-button>
    </div>
  </div>
</template>

<script>
import { provideVSCodeDesignSystem, vsCodeDropdown, vsCodeRadio, vsCodeRadioGroup, vsCodeTextField, vsCodeButton, vsCodeCheckbox, vsCodeTextArea, vsCodeProgressRing } from "@vscode/webview-ui-toolkit";

export default {
  name: "Siderbar",
  data() {
    return {
      inputFieldValue: "",
      inputs: [],
      progress: false,
      output: 0
    }
  },
  components: {
  },
  beforeMount() {
    this.inputs = []
  },
  mounted() {
    provideVSCodeDesignSystem().register(vsCodeDropdown(), vsCodeRadio(), vsCodeRadioGroup(), vsCodeTextField(), vsCodeButton(), vsCodeCheckbox(), vsCodeTextArea(), vsCodeProgressRing());
  },
  methods: {
    radioSelected(option) {
      console.log(option)
      this.inputs.push(option)
      this.progress = true;
      setTimeout(() => {
        this.output++;
        this.progress = false
      }, 1000);
    },
    inputGiven() {
      if (this.inputFieldValue == "") return
      this.inputs.push(this.inputFieldValue)
      this.inputFieldValue = ""
      this.progress = true;

      // fetch('https://jsonplaceholder.typicode.com/todos/1')
      //   .then(response => response.json())
      //   .then(json => console.log(json))
      this.$nextTick(() => {
        this.scrollToBottom();
      });
      setTimeout(() => {
        this.output++;
        this.progress = false
        this.$nextTick(() => {
          this.scrollToBottom();
        });
      }, 1000);
    },
    scrollToBottom() {
      const container = this.$refs.chatPage;
      container.scrollTop = container.scrollHeight;
    }
  }
}
</script>

<style></style>