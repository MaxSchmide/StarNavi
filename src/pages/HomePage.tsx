import { useRef } from "react";
import Loader from "../components/Loader";
import { useFetchModes } from "../hooks/useFetchModes";
import GameField from "../components/GameField";
import { useGameContext } from "../hooks/useGameContext";
import classNames from "classnames";

const HomePage = () => {
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const { handleStartGame, isStarted } = useGameContext();
  const { isLoading, data } = useFetchModes();

  const handleStart = () => {
    handleStartGame(+selectRef.current!.value);
  };

  return (
    <>
      <Loader isLoading={isLoading}>
        {data && (
          <>
            <header className='p-10 flex gap-8'>
              <select
                name='mode'
                className='p-4 border'
                defaultValue='0'
                ref={selectRef}
              >
                <option
                  value='0'
                  disabled
                >
                  Select Mode
                </option>
                {data.map((mode) => (
                  <option
                    key={mode.id}
                    value={mode.field}
                  >
                    {mode.name}
                  </option>
                ))}
              </select>

              <button
                onClick={handleStart}
                className={classNames(
                  "py-4 px-6 border-none rounded bg-blue-500 hover:bg-blue-700 duration-150 text-white",
                  {
                    "bg-red-500 hover:bg-red-700": isStarted,
                  }
                )}
              >
                {isStarted ? "Restart" : "Start"}
              </button>
            </header>
            <main className='flex items-start justify-center gap-10 py-20'>
              {isStarted && <GameField />}
            </main>
          </>
        )}
      </Loader>
    </>
  );
};

export default HomePage;
