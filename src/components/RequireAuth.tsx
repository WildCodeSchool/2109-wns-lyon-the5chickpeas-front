import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";

export function RequireAuth({ children }: { children: JSX.Element }) {
  let { isConnected } = useAuth();
  let location = useLocation();

  if (!isConnected) {
    return <Navigate to="/" state={{ from: location }} />;
  } else {
    return children;
  }
}