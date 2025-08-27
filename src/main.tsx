import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./index.css";
import { ThemeProvider } from "@/components/theme-provider";
import NoRoutes from "./pages/NoRoutes";
import Paws from "./pages/Products/Pets/Paws";

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
	<BrowserRouter>
		<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
			<Navbar />
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="" element={<Home />} />
				<Route path="*" element={<NoRoutes />} />
				<Route path="/products/pets/paws" element={<Paws />} />
			</Routes>
		</ThemeProvider>
	</BrowserRouter>
);
