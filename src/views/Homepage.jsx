import { useLoaderData } from "react-router-dom"
import GameList from "../components/HomeComponents/GameList";
import Layout from "../components/layouts/Layout";
import Footer from "../components/LayoutComponents/Footer";

export default function Homepage() {
    const games = useLoaderData();

    return (
        <>
            <h1 className="font-electrolize text-3xl text-center font-bold">Reactor</h1>
            <GameList>
                {games.map((game) => {
                    return (
                        <GameList.Card key={game.id} game={game} />
                    )
                })}
            </GameList>
        </>
    )
}