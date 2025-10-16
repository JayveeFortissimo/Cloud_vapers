import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Outlets from "@/Outlets";
import Home from "@/page/Home";
import About from "@/page/About";
import Products from "@/page/Products";
import Contact from "@/page/Contact";
import Login from "@/page/Login";
import Register from "@/page/Register";
import User from "@/page/userProfile/User";
// import Admin from "@/page/Admin/Admin";
import SearchPage from "./page/SearchPage";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Outlets />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: "about",
					element: <About />,
				},
				{
					path: "contact",
					element: <Contact />,
				},
				{
					path: "products",
					element: <Products />,
				},
				{
					path: "login",
					element: <Login />,
				},
				{
					path: "register",
					element: <Register />,
				},
				{
					path: "user",
					element: <User />,
				},
				{
					path: "searchpage",
					element: <SearchPage />,
				},
			],
		},
	]);

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
