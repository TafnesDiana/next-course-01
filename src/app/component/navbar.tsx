import Link from "next/link";

export default function NavBar() {
    return (
      <>
        <ul className="flex font-bold text-center justify-center py-5 bg-slate-100 text-black ">
          <li className="px-20 hover:text-sky-700">
            <Link href="/">Home</Link>
          </li>
          <li className="px-20 hover:text-sky-700">
            <Link href="/products">Products</Link>
          </li>
          <li className="px-20 hover:text-sky-700">
            <Link href="/about">About</Link>
          </li>
          <li className="px-20 hover:text-sky-700">
            <Link href="/contact">Contato</Link>
          </li>
        </ul>
      </>
    );
  }
  