import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Navbar />
          <Component {...pageProps} />
        </Provider>
      </QueryClientProvider>
    </>
  );
}
