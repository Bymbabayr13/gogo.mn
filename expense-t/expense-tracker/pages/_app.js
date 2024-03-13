import "@/styles/globals.css";
import { ThemeProvider } from "@/provider/ThemeProvider";
import { AuthProvider } from "../provider/AuthProvider";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}
