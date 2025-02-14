import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/galaxy.jpg')] flex bg-cover bg-center h-[80vh]">
        <div className="flex-1">
          <Image
            src="/planet_galaxy.png"
            alt="planets"
            width={1024}
            height={1024}
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="bg-black bg-opacity-50 p-7 rounded-lg shadow-2xl backdrop-blur-lg ">
            <h1 className="text-white font-bebas text-9xl">ASTROS</h1>
            <h2 className="text-white font-quicksand text-xl">planets e-commerce </h2>
            <p className="text-white font-atkinson text-lg">Travel through this crazy universe and choose your new home</p>
          </div>
        </div>
      </div>
    </>
  );
}
