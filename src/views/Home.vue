<template>
  <div class="home">
    <p>{{messageNoToolRes.data}} via original axios</p>
    <p>{{messageByToolRes.data}} via axios binding with vuex</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { mapGetters, mapActions, mapMutations } from "vuex";
export default Vue.extend({
  name: "home",
  components: {
    HelloWorld
  },
  mounted() {
    this.getMessageNoTool();
    this.getMessageByTool();
  },
  computed: {
    ...mapGetters(["messageNoToolRes", "messageByToolRes"])
  },
  methods: {
    ...mapActions(["getMessageNoTool", "getMessageByTool"])
  }
});
</script>
