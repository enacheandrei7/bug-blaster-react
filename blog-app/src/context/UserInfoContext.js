import { createContext } from "react";

const UserInfoContext = createContext({
  username: "gues",
  isAdmin: "false",
});

export default UserInfoContext;
