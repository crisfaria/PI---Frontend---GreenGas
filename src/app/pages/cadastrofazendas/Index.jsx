// pages/index.js

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Página Inicial</title>
        <meta name="description" content="Esta é a página inicial de um exemplo Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ padding: "20px", textAlign: "center" }}>
        <h1>Bem-vindo ao Next.js!</h1>
        <p>Esta é uma página de exemplo criada com Next.js.</p>

        <button
          onClick={() => alert('Você clicou no botão!')}
          style={{ padding: "10px 20px", fontSize: "16px", marginTop: "20px" }}
        >
          Clique aqui
        </button>
      </main>
    </>
  );
}
