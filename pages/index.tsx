import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="min-w-screen min-h-screen bg-blue-500">
      <Head>
        <title>Calculator App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Output Area */}
      <div></div>

      {/* Buttons Area */}
      <div className="grid grid-cols-4"></div>
    </div>
  );
};

export default Home;
