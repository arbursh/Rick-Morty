import react, { FC, ChangeEvent } from "react";

interface BarProps {
  setStatusRadio?: any;
}

export const StatusRadio: FC<BarProps> = ({ setStatusRadio }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStatusRadio(event.target.value);
  };
  return (
    <>
      <div className="flex flex-row pt-2">
        <p className="pl-10 ">Character status:</p>

        <div className="form-check ml-5">
          <input
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            value="Alive"
            onChange={handleChange}
          />
          <label className="form-check-label inline-block text-gray-800">
            Alive
          </label>
        </div>
        <div className="form-check ml-5">
          <input
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            value="Dead"
            onChange={handleChange}
          />
          <label className="form-check-label inline-block text-gray-800">
            Dead
          </label>
        </div>
        <div className="form-check ml-5">
          <input
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault3"
            value="unknown"
            onChange={handleChange}
          />
          <label className="form-check-label inline-block text-gray-800">
            Unknown
          </label>
        </div>
        <div className="form-check ml-5">
          <input
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault4"
            value=""
            onChange={handleChange}
          />
          <label className="form-check-label inline-block text-gray-800">
            Any
          </label>
        </div>
      </div>
    </>
  );
};
