import { motion } from "framer-motion";

export const Tile = () => {
  return (
    <motion.div
      className="flex w-36 h-36 bg-slate-600 rounded-md"
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.5 },
      }}
    ></motion.div>
  );
};
