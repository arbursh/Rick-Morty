import React, { FC } from "react";
import { CharCard } from "./reusable/CharCard/CharCard";
import InfiniteScroll from "react-infinite-scroll-component";

import { IDataTypes, IFilteredDataTypes, IFiltredArray } from "../type";

export interface IProps {
  data: IDataTypes | null;
  handleLoadMore: () => void;
  filteredChar?: IFilteredDataTypes[] | null;
}

export const CharacterContainer: FC<IProps> = ({
  data,
  handleLoadMore,
  filteredChar,
}) => {
  return (
    <>
      {filteredChar ? (
        <InfiniteScroll
          dataLength={filteredChar.length}
          next={handleLoadMore}
          hasMore={!data?.info.next}
          loader={<h4>Loading...</h4>}
        >
          <div className="bg-gray-200 grid grid-cols-1 gap-y-10 sm:grid-cols-3 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 py-8 sm:py-12 px-4 sm:px-6 lg:max-w-8xl lg:px-8">
            {filteredChar &&
              filteredChar?.map((element, key) => (
                <CharCard
                  name={element.name}
                  status={element.status}
                  imageUrl={element.image}
                  key={key}
                />
              ))}
          </div>
        </InfiniteScroll>
      ) : (
        <h1 className="text-center">No results</h1>
      )}
    </>
  );
};
