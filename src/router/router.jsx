import { createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import Layout from "../components/layouts/Layout";
import Homepage from "../views/Homepage";
import { getAllGamesLoader, getAllGenres, getFilteredByGenreGames, getGameDetails, getSearchedGames } from "./loaders";
import SearchPage from "../views/SearchPage";
import GenrePage from "../views/GenrePage";
import AuthenticationLayout from "../components/layouts/AuthenticationLayout";
import RegisterPage from "../views/auth/RegisterPage";
import LoginPage from "../views/auth/LoginPage";
import ProfilePage from "../views/auth/ProfilePage";
import ProfileSettingPage from "../views/auth/ProfileSettingsPage";
import ProfileSettingsPage from "../views/auth/ProfileSettingsPage";
import DetailPage from "../views/DetailPage";

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
            },
        ]
    },
       {
                path: routes.detail,
                Component: DetailPage,
                loader: getGameDetails
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
            },
            {
                path: routes.profile,
                Component: ProfilePage
            },
            {
                path: routes.profile_settings,
                Component: ProfileSettingsPage
            },
        ]

    }

]);

export default router;

