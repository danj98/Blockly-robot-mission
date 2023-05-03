<template>
  <div id="app">
    <BlocklyComponent id="blockly2" :options="options" ref="foo"></BlocklyComponent>
    <p id="code">
      <button v-on:click="showCode()">Show JSON</button>
      <pre v-html="code"></pre>
    </p>
  </div>
</template>

<script>
import BlocklyComponent from "./components/BlocklyComponent.vue";
import "./blocks/action";
import "./blocks/basic";
import "./blocks/robot";
import "./blocks/flow";
import "./blocks/environment";
import "./prompt";

import BlocklyJS from "blockly/javascript";

export default {
  name: "app",
  components: {
    BlocklyComponent,
  },
  data() {
    return {
      code: "",
      options: {
        media: "media/",
        grid: {
          spacing: 25,
          length: 3,
          colour: "#ccc",
          snap: true,
        },
        toolbox: require("./toolbox.json")
      },
    };
  },
  methods: {
    showCode() {
      this.code = BlocklyJS.workspaceToCode(this.$refs["foo"].workspace);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html,
body {
  margin: 0;
}

#code {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 100%;
  margin: 0;
  background-color: beige;
}

#blockly2 {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50%;
  height: 100%;
}
</style>
