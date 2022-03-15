import react, { FC } from "react";

interface BarProps {
  setCharName: any;
}

export const SearchBar: FC<BarProps> = ({ setCharName }) => {
  return (
    <>
      <div className="flex justify-end">
        <div className="mb-3 mr-8 lg:w-42 ">
          <input
            type="search"
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleSearch"
            placeholder="Type query"
            onChange={(e) => setCharName(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};
