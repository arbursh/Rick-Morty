import { FC } from "react";

type CardProps = {
  name: string;
  status: string;
  imageUrl: string;
};

export const CharCard: FC<CardProps> = ({ name, status, imageUrl }) => {
  return (
    <>
      <a href="#" className="group">
        <div className="bg-white  rounded-lg flex flex-col ">
          <img
            src={imageUrl}
            alt={name}
            className="bg-center group-hover:opacity-75 rounded-t-lg"
          />
          <p className="mt-4 pl-3 pb-2 text-lg text-gray-900">Name: {name}</p>
          <p className="mt-1 pl-3 pb-2 text-sm font-medium text-gray-700">
            Status: {status}
          </p>
        </div>
      </a>
    </>
  );
};
