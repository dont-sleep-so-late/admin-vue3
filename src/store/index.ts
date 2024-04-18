import useUserStore from "./modules/user";
import useSysStore from "./modules/sys";

const useStore = () => ({
  user: useUserStore(),
  sys: useSysStore(),
});

export default useStore;
