import React, { useEffect } from "react";

function GamesByGenresId({ gameList }) {
  useEffect(() => {
    console.log("GameList", gameList);
  });
  return (
    <div className="font-bold text-[30px] dark:text-white mt-5 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 ">
        {gameList.map((item) => (
          <div className="bg-[#76a8f75e] p-2 rounded-lg pb-10 h-full hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer">
            <img src={item.background_image} alt={item.name} className="w-full h-[80%] rounded-xl object-cover" />
            <h2 className="text-[15px] dark:text-white font-bold">
              {item.name}
              <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-700 font-medium">{item.metacritic}</span>
            </h2>
            <h2 className="text-gray-500 dark:text-gray-300 text-sm">
              <span className="mr-2">⭐{item.rating}</span> <span className="mr-2">💬{item.reviews_count}</span>
              <span className="mr-2">🔥{item.suggestions_count}</span>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesByGenresId;
