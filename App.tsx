import { ThemeProvider } from "styled-components/native";

import theme from '@theme/index';

import Home from '@screens/Home';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
