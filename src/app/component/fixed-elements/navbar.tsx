import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <ul className="flex font-bold text-right justify-end py-5 px-14 text-white bg-black bg-[url('/galaxy_navbar.svg')]">
        <li className="px-2 hover:text-violet-600">
          <Link href="/">Início</Link>
        </li>
        <li className="px-2 hover:text-violet-600">
          <Link href="/planets">Planetas</Link>
        </li>
        <li className="px-2 hover:text-violet-600">
          <Link href="/about">Sobre</Link>
        </li>
        <li className="px-2 hover:text-violet-600">
          <Link href="/contact">Contato</Link>
        </li>
      </ul>
    </>
  );
}
