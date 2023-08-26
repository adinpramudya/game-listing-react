import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import GamesByGenresId from "../Components/GamesByGenresId";
import GenreList from "../Components/GenreList";
import TrendingGame from "../Components/TrendingGame";
import GlobalApi from "../Services/GlobalApi";
function Home() {
  const [gameList, setGameList] = useState([]);
  const [gameListByGenre, setGameListByGenre] = useState([]);

  useEffect(() => {
    getAllGameList();
    getGameListByGenresId();
  }, []);

  const getAllGameList = () => {
    GlobalApi.getAllGame.then((resp) => {
      setGameList(resp.data.results);
    });
  };

  const getGameListByGenresId = (id) => {
    console.log("GENRE ID", id);
    GlobalApi.getGameListByGenreId(id).then((resp) => {
      setGameListByGenre(resp.data.results);
      console.log("Gamelist By genre id:", resp.data.results);
    });
  };

  return (
    <div className="grid grid-cols-4 p-2 px-8">
      <div className="hidden md:block mr-5">
        <GenreList genreId={(genreId) => getGameListByGenresId(genreId)} />
      </div>
      <div className="col-span-4 md:col-span-3">
        {gameList.length > 0 ? <Banner gameBanner={gameList[0]} /> : null}
        <TrendingGame gameTrending={gameList} />
        <GamesByGenresId gameList={gameListByGenre} />
      </div>
    </div>
  );
}

export default Home;
