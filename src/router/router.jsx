import { createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import Layout from "../components/layouts/Layout";
import Homepage from "../views/Homepage";
import { getAllGamesLoader, getAllGenres, getFilteredByGenreGames, getSearchedGames } from "./loaders";
import SearchPage from "../views/SearchPage";
import GenrePage from "../views/GenrePage";

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
    }

]);

export default router;

