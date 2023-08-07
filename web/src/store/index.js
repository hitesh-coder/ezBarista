import { createStore } from 'vuex'

export default createStore({
  state: {
    inputPrompt: [ ],
    botOutputs: ["hitesh", "21" ]
  },
  mutations: {
  },
  actions: {
    updateInputContent(state, payload) {
      // console.log("newnewd", payload);
      this.state.inputPrompt.push(payload)
      this.state.botOutputs.push("Got something new")
    }
  },
  modules: {
  }
})
