import { useEffect, useState } from "react";
import Card from "./components/Card";
import { useFetch } from "./hooks/useFetch";

export default function App() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/bulbasaur");
  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    return () => {};
  }, []);

  const handleOnChange = (event) => {
    const textTyped = event.target.value;
    const textToSend = textTyped.toLowerCase();

    if (textTyped === "") {
      setUrl(`https://pokeapi.co/api/v2/pokemon/1`);
    }
    setUrl(`https://pokeapi.co/api/v2/pokemon/${textToSend}`);
  };

  return (
    <div className="py-4 flex flex-col items-center justify-center">
      <form className=" flex justify-between items-center  w-80 h-16  border-[1px] rounded-xl border-gray-600 ">
        <input
          onChange={handleOnChange}
          className="outline-none pl-4"
          placeholder="Buscar pokemon"
        ></input>
        <button
          className="h-16 rounded-tr-xl rounded-r-xl text-white   bg-gray-600 w-20"
          type="submit"
        >
          <p className="hover:scale-110 active:scale-90">Buscar</p>
        </button>
      </form>
      <div className="flex items-center h-80">
        {(loading || error) && (
          <img
            className="w-10 animate-spin"
            src="https://i.pinimg.com/originals/a7/73/64/a773645c4ef8e7c77eee0f70e3e9e5a4.jpg"
          ></img>
        )}
        {data && <Card data={data}></Card>}
      </div>
    </div>
  );
}
