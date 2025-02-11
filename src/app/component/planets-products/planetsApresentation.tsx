import Image from "next/image";
import { Planets } from "../planets-type/type";

export default function PlanetsProducts({ planets }: { planets: Planets[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {planets.map((planet) => (
        <div key={planet.id} className="border rounded p-2">
          <div className="mt-2">
            <Image
              src={planet.image.mainImage}
              alt={planet.title}
              width={285}
              height={301}
              unoptimized
              className="object-contain w-full h-full cursor-pointer rounded"
            />
            <h3 className="font-bold text-lg">{planet.title}</h3>
            <p>{planet.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
