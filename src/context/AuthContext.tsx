// react imports
import { createContext, useEffect, ReactNode, FC } from "react";

// next imports
import { useRouter } from "next/router";

const AuthContext = createContext(null);

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const initAuth = async () => {
      try {
        // get token from local storage
        const token = window.localStorage.getItem("token")!;

        // check if there is token and route is login
        if (token && router.pathname === "/login") {
          router.back();
        }

        // else clear local storage and redirect user to login
        if (!token) {
          localStorage.clear();
          router.replace("/login");
        }
      } catch (error) {
        console.log(error);
      }
    };

    initAuth();
  }, []);

  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
