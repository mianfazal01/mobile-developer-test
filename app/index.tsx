import { persistor, store } from "@/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Redirect } from "expo-router";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient();
const Index = () => {
  const token = useSelector((state) => state.user.accessToken);
  console.log("token :>>----> ", token);

  if (!token) {
    return <Redirect href="/auth/login" />;
  } else {
    return <Redirect href="/tabs/home" />;
  }

  //
};

export default function AppWrapper() {
  return <Index />;
}
