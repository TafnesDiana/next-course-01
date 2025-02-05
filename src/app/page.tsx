import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
        <title>Meu Site - Página Inicial</title>
        <meta name="description" content="Descrição da minha página" />
      </Head>
      <h1 className="font-bold text-5xl text-center justify-center pt-3">Home</h1>
    </>
  );
}
