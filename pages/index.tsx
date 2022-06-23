import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="min-w-screen h-screen min-h-screen overflow-hidden bg-blue-500">
      <Head>
        <title>Calculator App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Mobile size constrainer */}
      <div className="mx-auto flex h-screen w-full max-w-sm flex-col justify-end bg-black text-white">
        {/* Output Area */}
        <div className="w-full p-2">
          <h1 className="text-right text-6xl">999,999,999</h1>
        </div>

        {/* Buttons Area */}
        <div className="grid grid-cols-4 gap-2 p-4">
          <button className="inline-block aspect-square h-20 w-20 rounded-full bg-gray-500 text-center align-middle text-4xl font-semibold text-black">
            AC
          </button>
          <button className="inline-block aspect-square h-20 w-20 rounded-full bg-gray-500 text-center align-middle text-4xl font-semibold text-black">
            +/-
          </button>
          <button className="inline-block aspect-square h-20 w-20 rounded-full bg-gray-500 text-center align-middle text-4xl font-bold text-black">
            %
          </button>
          <button className="inline-block aspect-square h-20 w-20 rounded-full bg-orange-500 text-center align-middle text-4xl font-bold">
            ÷
          </button>
          <button className="inline-block aspect-square h-20 rounded-full bg-white bg-opacity-10 text-center align-middle text-4xl font-bold">
            7
          </button>
          <button className="inline-block aspect-square h-20 rounded-full bg-white bg-opacity-10 text-center align-middle text-4xl font-bold">
            8
          </button>
          <button className="inline-block aspect-square h-20 rounded-full bg-white bg-opacity-10 text-center align-middle text-4xl font-bold">
            9
          </button>
          <button className="inline-block aspect-square h-20 rounded-full bg-orange-500 text-center align-middle text-4xl font-bold">
            ×
          </button>
          <button className="inline-block aspect-square h-20 rounded-full bg-white bg-opacity-10 text-center align-middle text-4xl font-bold">
            4
          </button>
          <button className="inline-block aspect-square h-20 rounded-full bg-white bg-opacity-10 text-center align-middle text-4xl font-bold">
            5
          </button>
          <button className="inline-block aspect-square h-20 rounded-full bg-white bg-opacity-10 text-center align-middle text-4xl font-bold">
            6
          </button>
          <button className="inline-block aspect-square h-20 rounded-full bg-orange-500 text-center align-middle text-4xl font-bold">
            -
          </button>
          <button className="inline-block aspect-square h-20 rounded-full bg-white bg-opacity-10 text-center align-middle text-4xl font-bold">
            1
          </button>
          <button className="inline-block aspect-square h-20 rounded-full bg-white bg-opacity-10 text-center align-middle text-4xl font-bold">
            2
          </button>
          <button className="inline-block aspect-square h-20 rounded-full bg-white bg-opacity-10 text-center align-middle text-4xl font-bold">
            3
          </button>
          <button className="inline-block aspect-square h-20 rounded-full bg-orange-500 text-center align-middle text-4xl font-bold">
            +
          </button>
          <button className="col-span-2 inline-block h-20 rounded-full bg-white bg-opacity-10 pl-8 text-left align-middle text-4xl font-bold">
            0
          </button>
          <button className="inline-block  aspect-square h-20 rounded-full bg-white bg-opacity-10 text-center align-middle text-4xl font-bold">
            .
          </button>
          <button className="inline-block aspect-square h-20 rounded-full bg-orange-500 text-center align-middle text-4xl font-bold">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
