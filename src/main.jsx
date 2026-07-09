import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";

import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { store } from "./redux/store";
import { ToastProvider } from './context/ToastContext.jsx'
createRoot(document.getElementById("root")).render(
 <ThemeProvider>
    <ToastProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ToastProvider>
  </ThemeProvider>
);