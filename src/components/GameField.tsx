import { useGameContext } from "../hooks/useGameContext";
import Ceil from "./Ceil";

const GameField = () => {
  const { mode, cols, selectedCeils } = useGameContext();

  const field = Array.from({ length: Math.pow(cols, 2) }, (_, i) => i + 1);

  return (
    <>
      <div
        key={mode}
        className='grid w-fit'
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        }}
      >
        {field.map((i) => (
          <Ceil
            key={i}
            index={i}
          />
        ))}
      </div>
      <div>
        <h2 className='text-3xl font-bold mb-4'>Hover squares</h2>
        {selectedCeils.length > 0 && (
          <ul>
            {selectedCeils.map((ceil) => (
              <li
                key={ceil.id}
                className='px-8 py-4 rounded bg-orange-300 text-orange-900 mb-2'
              >
                row {ceil.row} col {ceil.col}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default GameField;
