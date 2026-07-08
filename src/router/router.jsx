import { createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import Layout from "../components/layouts/Layout";
import Homepage from "../views/Homepage";
import { getAllGamesLoader, getAllGenres, getFilteredByGenreGames, getSearchedGames } from "./loaders";
import SearchPage from "../views/SearchPage";
import GenrePage from "../views/GenrePage";
import AuthenticationLayout from "../components/layouts/AuthenticationLayout";
import RegisterPage from "../views/auth/RegisterPage";
import LoginPage from "../views/auth/LoginPage";

const router = createBrowserRouter([
    {
        path: routes.home,
        Component: Layout,
        loader: getAllGenres,
        children: [
            {
                path: routes.home,
                Component: Homepage,
                loader: getAllGamesLoader
            },
            {
                path:routes.search,
                Component: SearchPage,
                loader: getSearchedGames
            },
               {
                path:routes.genre,
                Component: GenrePage,
                loader: getFilteredByGenreGames
            }
        ]
    },
    {
        path: '/auth',
        Component: AuthenticationLayout,
        children: [
            {
                path: routes.register,
                Component: RegisterPage
            },
              {
                path: routes.login,
                Component: LoginPage
            }
        ]

    }

]);

export default router;

