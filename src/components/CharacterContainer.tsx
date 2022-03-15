import React, { FC } from "react";
import { CharCard } from "./reusable/CharCard/CharCard";
import InfiniteScroll from "react-infinite-scroll-component";

import { IDataBrowserTypes } from "../type";
import { IDataTypes } from "../type";

export interface IProps {
  data: IDataTypes | null;
  handleLoadMore: () => void;
}

export const CharacterContainer: FC<IProps> = ({ data, handleLoadMore }) => {
  return (
    <>
      {data?.results ? (
        <InfiniteScroll
          dataLength={data.results.length}
          next={handleLoadMore}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {data &&
            data.results?.map((element, key, array) => (
              <CharCard
                name={element.name}
                status={element.status}
                imageUrl={element.image}
                key={key}
              />
            ))}
        </InfiniteScroll>
      ) : (
        <h1 className="text-center">No results</h1>
      )}
    </>
  );
};
