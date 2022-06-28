import { gql, useMutation, useQuery } from "@apollo/client";
import { createContext, useContext, useEffect, useState } from "react";

const GET_ME = gql`
  query getMe {
    getMe {
      id
      email
    }
  }
`;

const SIGNIN = gql`
  mutation Signin(
    $validAccountToken: String!
    $password: String!
    $email: String!
  ) {
    signin(
      validAccountToken: $validAccountToken
      password: $password
      email: $email
    ) {
      token
      errorMessage
    }
  }
`;

const SIGNUP = gql`
  mutation Signup(
    $email: String!
    $password: String!
    $pseudo: String!
    $validAccountToken: String!
  ) {
    signup(
      email: $email
      password: $password
      pseudo: $pseudo
      validAccountToken: $validAccountToken
    ) {
      id
      email
      pseudo
      validAccountToken
    }
  }
`;

export const AuthContext = createContext<{
  isConnected: boolean;
  user: { id: number; email: string } | null;
  signin: (
    email: string,
    password: string,
    validAccountToken: string
  ) => Promise<boolean>;
  signup: (
    email: string,
    password: string,
    pseudo: string,
    validAccountToken: string
  ) => Promise<boolean>;
  signout: () => Promise<void>;
  error: string;
} | null>(null);

export function AuthProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element {
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState("");
  const [doSignin] = useMutation(SIGNIN);
  const [doSignUp] = useMutation(SIGNUP);
  const { data: getMeData, refetch } = useQuery(GET_ME);

  useEffect(() => {
    //console.log('Connection status changed: ', !!getMeData);
    //console.log('User data is: ', getMeData?.getMe);
    if (getMeData) {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, [getMeData]);
  // should add signin, signup and signout here
  const signin = async (
    email: string,
    password: string,
    validAccountToken: string
  ): Promise<boolean> => {
    try {
      const result = await doSignin({
        variables: {
          email: email,
          password: password,
          validAccountToken: validAccountToken,
        },
      });
      if (result.data.signin.token !== null) {
        // success
        localStorage.setItem("token", result.data.signin.token);
        await refetch();

        return true;
      } else {
        if (result.data.signin.errorMessage === "validation_to_be_done") {
          setError("validation_to_be_done");
        } else if (
          result.data.signin.errorMessage === "validation_token_expired"
        ) {
          setError("validation_token_expired");
        } else if (result.data.signin.errorMessage === "server_error") {
          setError("server_error");
        }
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const signup = async (
    email: string,
    password: string,
    pseudo: string,
    validAccountToken: string
  ): Promise<boolean> => {
    try {
      await doSignUp({
        variables: {
          email: email,
          password: password,
          pseudo: pseudo,
          validAccountToken: validAccountToken,
        },
      });
      return true;
    } catch {
      return false;
    }
  };

  const signout = async (): Promise<void> => {
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        isConnected,
        user: getMeData?.getMe,
        signin,
        signup,
        signout,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  const authContext = useContext(AuthContext);
  if (authContext) {
    return authContext;
  } else {
    throw new Error("auth_context_not_set");
  }
}
