import HistoryCard from "../shared/HistoryCard";

const History = () => {
  return (
    <div className="lg:w-1/2 w-full ">
      <h3 className="text-lg font-bold">History</h3>

      <div className="flex flex-col gap-y-2">
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
      </div>
    </div>
  );
};

export default History;
