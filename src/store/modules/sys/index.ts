import { defineStore } from "pinia";

const useSysStore = defineStore("sys", {
  state: (): any => ({
    collapsed: false,
  }),
  actions: {
    switchCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
});

export default useSysStore;
