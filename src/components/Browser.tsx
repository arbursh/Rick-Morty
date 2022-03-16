import { useEffect, FC, useState } from "react";

import { CharacterContainer } from "./CharacterContainer";
import { LoadingSpinner } from "./reusable/CharCard/LoadingSpinner";
import { SearchBar } from "./SearchBar";
import { StatusRadio } from "./StatusRadio";

import { IDataTypes, IFiltredArray, IFilteredDataTypes } from "../type";

export const Browser: FC<{}> = () => {
  const [dataFromApi, setDataFromApi] = useState<IDataTypes | null>(null);
  const [charName, setCharName] = useState("");
  const [statusRadio, setStatusRadio] = useState("");
  const [filteredChar, setFilteredChar] = useState<IFilteredDataTypes[] | null>(
    null
  );
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/`
      );
      if (!response) {
        throw new Error("Error");
      }
      const json = await response.json();
      setDataFromApi(json);
      setLoading(true);
    } catch (error) {
      console.error("Could not get characters" + error);
    }
  };

  const loadMoreCharacters = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
      );
      if (!response) {
        throw new Error("Error");
      }
      const json = await response.json();
      if (pageNumber > 1) {
        let modifiedResults = dataFromApi?.results.concat(json?.results);
        setDataFromApi(
          (prevState) =>
            ({
              ...prevState,
              info: json.info,
              results: modifiedResults,
            } as IDataTypes)
        );
        setLoading(true);
      }
    } catch (error) {
      console.error("Could not get characters" + error);
    }
  };

  const handleLoadMore = () => {
    if (dataFromApi?.info?.next !== null) {
      setPageNumber((prevState: number) => prevState + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    loadMoreCharacters();
  }, [pageNumber]);

  useEffect(() => {
    let filteredChar =
      dataFromApi &&
      dataFromApi?.results?.filter(
        (e) =>
          e.name.toLowerCase().includes(charName) &&
          e.status.includes(statusRadio)
      );
    setFilteredChar(filteredChar);
  }, [charName, statusRadio, dataFromApi]);

  return (
    <>
      <div className="bg-white">
        <div className="max-w-none mt-5">
          <SearchBar setCharName={setCharName} />
          {loading ? (
            <div className="bg-gray-200">
              <StatusRadio setStatusRadio={setStatusRadio} />
              <CharacterContainer
                data={dataFromApi}
                handleLoadMore={handleLoadMore}
                filteredChar={filteredChar}
              />
            </div>
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </div>
    </>
  );
};
