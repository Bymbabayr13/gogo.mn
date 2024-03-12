import "@/styles/globals.css";
import { ThemeProvider } from "@/provider/ThemeProvider";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
