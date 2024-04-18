import { defineStore } from "pinia";

const useUserStore = defineStore("user", {
  state: (): any => ({
    name: localStorage.getItem("name") || "Small Tools",
    token: localStorage.getItem("token"),
  }),
  actions: {
    setName(name: string) {
      this.name = name;
      localStorage.setItem("name", name);
    },
    setToken(token: string) {
      this.token = token;
      localStorage.setItem("token", token);
    },
  },
});

export default useUserStore;
