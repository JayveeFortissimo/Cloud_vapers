import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Outlets from "@/Outlets";
import Home from "@/page/Home";
import About from "@/page/About";
import Products from "@/page/Products";
import Contact from "@/page/Contact";
import Login from "@/page/auth/Login";
import Register from "@/page/auth/Register";
import User from "@/page/user-profile/User";
// import Admin from "@/page/Admin/Admin";
import SearchPage from "./page/SearchPage";
import RequiredAuth from "./RequiredAuth";

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
					element: <RequiredAuth/>,
					children: [
						{
							index: true,
							element: <User />,
						},
					],
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
