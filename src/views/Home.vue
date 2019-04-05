<template>
  <div class="home">
    <span>{{}}</span>
    <span></span>
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
  computed:{
    ...mapGetters(["messageNoToolRes"])
  },
  methods:{
    ...mapActions(["getMessageNoTool"])
  }
});
</script>
