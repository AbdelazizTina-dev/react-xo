import { Tile } from "./Tile";

const tilePositions = [...Array(9).keys()];

export const Board = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {tilePositions.map(() => (
        <Tile />
      ))}
    </div>
  );
};
