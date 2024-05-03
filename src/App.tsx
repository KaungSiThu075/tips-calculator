import { useState } from "react";
import "./App.css";
import Logo from "../src/assets/logo.svg";

function App() {
  const [bill, setBill] = useState("");

  const [tipPercent, setTipPercent] = useState("");

  const [numberOfPeople, setNumberOfPeople] = useState("");

  const [error, setError] = useState(false);

  const customBill = (e: React.ChangeEvent<HTMLInputElement>): void => {
    +e.target.value >= 0 && setBill(e.target.value);
  };

  const customTipPercent = (e: React.ChangeEvent<HTMLInputElement>): void => {
    +e.target.value < 100 && setTipPercent(e.target.value);
  };

  const customPeople = (e: React.ChangeEvent<HTMLInputElement>): void => {
    +e.target.value >= 0 && setNumberOfPeople(e.target.value);
    +e.target.value === 0 ? setError(true) : setError(false);
  };

  const tipPer = (+bill / +numberOfPeople) * (+tipPercent / 100);

  const totalPer =
    +bill / +numberOfPeople + (+bill / +numberOfPeople) * (+tipPercent / 100);

  const resetAll = () => {
    setBill("");
    setTipPercent("");
    setNumberOfPeople("");
    setError(false);
  };
  return (
    <div className="sm:px-10 md:px-20 lg:px-32">
      <div className=" flex items-center justify-center my-14">
        <img src={Logo} alt="logo" />
      </div>
      <div
        className=" space-mono-bold p-10 bg-white rounded-2xl flex flex-col gap-5
      sm:gap-10 md:flex md:justify-between md:flex-row"
      >
        <form>
          <div className=" flex flex-col justify-center gap-5">
            <div>
              <p>Bill</p>
              <input
                className=" w-full outline-none rounded-md bg-dollar-sign bg-no-repeat bg-left py-1 text-right
              bg-slate-100 p-1 text-2xl"
                value={bill}
                onChange={customBill}
                type="text"
                id="bill"
                placeholder="0"
              />
            </div>

            <div>
              <p>Select Tip %</p>

              <div className=" text-white xs: grid grid-cols-2 gap-2">
                <button
                  className="bg-Very-dark-cyan hover:bg-teal-600 p-1 rounded-md "
                  type="button"
                  onClick={() => setTipPercent("5")}
                >
                  5%
                </button>
                <button
                  className=" bg-Very-dark-cyan hover:bg-teal-600 p-1 rounded-md"
                  type="button"
                  onClick={() => setTipPercent("10")}
                >
                  10%
                </button>
                <button
                  className=" bg-Very-dark-cyan hover:bg-teal-600 p-1 rounded-md"
                  type="button"
                  onClick={() => setTipPercent("15")}
                >
                  15%
                </button>

                <button
                  className=" bg-Very-dark-cyan hover:bg-teal-600 p-1 rounded-md"
                  type="button"
                  onClick={() => setTipPercent("25")}
                >
                  25%
                </button>
                <button
                  className=" bg-Very-dark-cyan hover:bg-teal-600 p-1  rounded-md"
                  type="button"
                  onClick={() => setTipPercent("30")}
                >
                  30%
                </button>
                <input
                  className=" hover:cursor-pointer p-1 rounded-md text-black border border-slate-500"
                  value={tipPercent}
                  onChange={customTipPercent}
                  type="text"
                  placeholder="custom"
                />
              </div>
            </div>

            <div>
              <div className=" flex items-center justify-between">
                <p>Number of people</p>
                {error && <p className=" text-red-500">Can't be zero</p>}
              </div>
              <div>
                <input
                  className=" w-full outline-none bg-slate-100 rounded-md bg-person-icon bg-left bg-no-repeat text-right
              p-1 text-2xl"
                  value={numberOfPeople}
                  type="text"
                  onChange={customPeople}
                  placeholder="0"
                />
              </div>
            </div>
          </div>
        </form>

        <div className=" flex flex-col justify-between gap-10 bg-Very-dark-cyan p-4 rounded-xl ">
          <div>
            <div className=" flex justify-between items-center">
              <div>
                <p className=" text-white">Tip Amount</p>
                <small>/ person</small>
              </div>

              <div className=" flex">
                <img src="../src/assets/icon-dollar.svg" alt="" />
                <p className=" text-4xl">
                  {numberOfPeople === "0" || numberOfPeople === ""
                    ? "0.00"
                    : tipPer.toFixed(2)}
                </p>
              </div>
            </div>

            <div className=" flex justify-between items-center">
              <div>
                <p className=" text-white">Total</p>
                <small>/ person</small>
              </div>

              <div className=" flex">
                <img src="../src/assets/icon-dollar.svg" alt="" />
                <p className="  text-4xl">
                  {numberOfPeople === "0" || numberOfPeople === ""
                    ? "0.00"
                    : totalPer.toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          <button
            className=" bg-Grayish-cyan py-2 rounded-md hover:bg-gray-500"
            type="button"
            onClick={resetAll}
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
