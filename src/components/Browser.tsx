import react, { useEffect, FC, useState } from "react";
import { StringLiteralLike } from "typescript";

import { CharacterContainer } from "./CharacterContainer";
import { LoadingSpinner } from "./reusable/CharCard/LoadingSpinner";
import { SearchBar } from "./SearchBar";
import { StatusRadio } from "./StatusRadio";

import { IDataTypes } from "../type";

export const Browser: FC<{}> = () => {
  const [dataFromApi, setDataFromApi] = useState<IDataTypes>();
  const [charName, setCharName] = useState("");
  const [statusRadio, setStatusRadio] = useState("");
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${charName}&status=${statusRadio}&page=${pageNumber}`
      );
      console.log(response);
      if (!response) {
        throw new Error("Error");
      }
      const json = await response.json();

      if (json && pageNumber && pageNumber >= 2) {
        const { results } = json;
        // let modifiedRedulst = json.results.concat(results);
        // let modifiedObject = {...json, }
        let modifiedResults = json.results;

        // json.results.push(results);
        // setDataFromApi((prevState) => ({
        //   ...prevState,
        //   results: { ...prevState.results, modifiedResults },
        // }));
      } else {
        setDataFromApi(json);
      }
      setLoading(true);
    } catch (error) {
      console.error("Could not get characters" + error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [charName, statusRadio, pageNumber]);

  const handleLoadMore = () => {
    setPageNumber((prevState) => prevState + 1);
  };

  console.log("i co ty mamy po dodaniu", dataFromApi);

  return (
    <>
      <div className="bg-white">
        <div className="max-w-none mt-5">
          <SearchBar setCharName={setCharName} />
          {loading ? (
            <div className="bg-gray-200">
              <StatusRadio setStatusRadio={setStatusRadio} />
              <div className="bg-gray-200 grid grid-cols-1 gap-y-10 sm:grid-cols-3 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 py-8 sm:py-12 px-4 sm:px-6 lg:max-w-8xl lg:px-8">
                <CharacterContainer
                  data={dataFromApi}
                  handleLoadMore={handleLoadMore}
                />
              </div>
            </div>
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </div>
    </>
  );
};
