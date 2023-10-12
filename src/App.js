import Headline from "./components/Headline";
import HotelList from "./components/HotelList";

function App() {
  return (
    <div className="w-full container mx-auto px-[200px] flex mt-10 bg-white">
      <div className="w-full">
        <Headline />
        <HotelList />
      </div>
    </div>
  );
}

export default App;
