import useAppStore from "./modules/user";

const useStore = () => ({
  app: useAppStore(),
});

export default useStore;
