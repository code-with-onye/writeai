import FavoriteCard from "../shared/FavoriteCard";

const Favorite = () => {
  return (
    <div className="lg:w-1/2 w-full">
      <h3 className="text-lg font-bold">Favorite</h3>

      <div className="flex flex-col gap-y-2">
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
      </div>
    </div>
  );
};

export default Favorite;
