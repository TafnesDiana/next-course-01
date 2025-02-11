
import { fechPlanets } from "../../../api/planets";
import PlanetsProducts from "../component/planets-products/planetsApresentation";


export default async function Planets() {
  const planets = await fechPlanets();
  
  return (
    <>
      <h1 className="font-bold text-5xl text-center justify-center pt-3">
        Página dos Planetas
      </h1>
      <PlanetsProducts planets={planets} />
    </>
  );
}

