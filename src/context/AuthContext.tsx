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
        const token = window.localStorage.getItem("token")!;

        if (token && router.pathname === "/login") {
          router.back();
        }

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
