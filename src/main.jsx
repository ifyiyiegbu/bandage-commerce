import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux"
import App from "./App"
import ProductDetail from "./pages/ProductDetail";
import { store } from "./app/store"
import "./index.css"
import ShoppingCart from "./pages/ShoppingCart";

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
          </Routes>
        </Router>
      </Provider>
    </React.StrictMode>
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
