import classNames from "classnames";
import { useGameContext } from "../hooks/useGameContext";

type Props = {
  index: number;
};

const Ceil = ({ index }: Props) => {
  const { handleSelectCeil, selectedCeils } = useGameContext();
  const handleSelect = () => {
    handleSelectCeil(index);
  };
  return (
    <div
      className={classNames("w-24 h-24 border col-span-1 row-span-1", {
        "bg-blue-500": selectedCeils.some((item) => item.id === index),
      })}
      onMouseEnter={handleSelect}
    />
  );
};

export default Ceil;
