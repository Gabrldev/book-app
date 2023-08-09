"use client";
import Coment from "./Coment";
import { Comentents } from "./SiglePost";

interface ComentsProps {
  comentents: Comentents[];
}

const Coments: React.FC<ComentsProps> = ({ comentents }) => {
  return (
    <div className="flex flex-col gap-5 mt-4 min-w-[448px]">
      {comentents?.map((coment) => (
        <Coment key={coment.id} coment={coment} />
      ))}
    </div>
  );
};
export default Coments;
