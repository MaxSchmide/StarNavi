import { createContext, useMemo, useState } from "react";
import { getGridPosition } from "../utils";

interface IGameContext {
  mode: number;
  cols: number;
  isStarted: boolean;
  selectedCeils: ICeil[];
  handleStartGame: (fields: number) => void;
  handleSelectCeil: (index: number) => void;
}
interface ICeil {
  id: number;
  row: number;
  col: number;
}

export const GameContext = createContext({} as IGameContext);

export const GameContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mode, setMode] = useState<number>(0);
  const [isStarted, setIsStarted] = useState(false);
  const [selectedCeils, setSelectedCeils] = useState<ICeil[]>([]);

  const cols = useMemo(() => Math.round(Math.sqrt(mode!)), [mode]);

  const handleStartGame = (fields: number) => {
    setMode(fields);
    setIsStarted(true);
    setSelectedCeils([]);
  };

  const handleSelectCeil = (index: number) => {
    const { row, col } = getGridPosition(index, cols);
    if (selectedCeils.some((el) => el.id === index)) {
      setSelectedCeils(selectedCeils.filter((ceil) => ceil.id !== index));
    } else setSelectedCeils((prev) => [...prev, { id: index, row, col }]);
  };

  const providedValue = {
    cols,
    isStarted,
    mode,
    selectedCeils,
    handleStartGame,
    handleSelectCeil,
  };

  return (
    <GameContext.Provider value={providedValue}>
      {children}
    </GameContext.Provider>
  );
};
