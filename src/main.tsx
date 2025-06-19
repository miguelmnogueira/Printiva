import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./index.css";
import { ThemeProvider } from "@/components/theme-provider";
import NoRoutes from "./pages/NoRoutes";
import Catalog from "./pages/Catalog";
import { SpeedInsights } from "@vercel/speed-insights/next";

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
	<BrowserRouter>
		<SpeedInsights />
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<Navbar />
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/catalog" element={<Catalog />} />
				<Route path="*" element={<NoRoutes />} />
			</Routes>
		</ThemeProvider>
	</BrowserRouter>
);
