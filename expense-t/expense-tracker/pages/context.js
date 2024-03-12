import { useContext } from "react";
import { Themecontext } from "@/provider/ThemeProvider";

export default function context() {
  const { toggleTheme, theme } = useContext(Themecontext);
  console.log(theme);
  return (
    <div>
      <p>{theme}</p>
      <button onClick={toggleTheme}>toggle Theme</button>
    </div>
  );
}
