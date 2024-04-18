import { defineStore } from "pinia";

const useAppStore = defineStore({
  id: "app",
  state: (): any => ({
    name: localStorage.get("name") || "Small Tools",
  }),
  actions: {
    setName(name: string) {
      this.name = name;
      localStorage.set("name", name);
    },
  },
});

export default useAppStore;
