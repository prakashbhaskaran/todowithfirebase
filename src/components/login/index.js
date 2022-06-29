import React, { useContext } from "react";
import { SessionContext } from "../../store/SessionProvider";

const Login = () => {
  const { login } = useContext(SessionContext);
  return (
    <div className="flex flex-col">
      <button onClick={() => login("p64@p64.in", "password")}>Login</button>
    </div>
  );
};

export default Login;
