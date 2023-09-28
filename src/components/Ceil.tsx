import { useState } from "react";
import classNames from "classnames";
import { useGameContext } from "../hooks/useGameContext";

type Props = {
  index: number;
};

const Ceil = ({ index }: Props) => {
  const { handleSelectCeil } = useGameContext();
  const [selected, setSelected] = useState(false);
  const handleSelect = () => {
    setSelected((prev) => !prev);
    handleSelectCeil(index);
  };
  return (
    <div
      className={classNames("w-24 h-24 border col-span-1 row-span-1", {
        "bg-blue-500": selected,
      })}
      onMouseEnter={handleSelect}
    />
  );
};

export default Ceil;
