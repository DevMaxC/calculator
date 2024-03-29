import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Home: NextPage = () => {
  enum Operation {
    Plus,
    Minus,
    Multiply,
    Divide,
    Null,
  }

  const [number1, setnumber1] = useState<string>("0");
  const [op1, setop1] = useState<Operation>(Operation.Null);
  const [number2, setnumber2] = useState<string>("");
  const [focusFirst, setFocusFirst] = useState<boolean>(true);

  const execute = (first: string, op: Operation, second: string) => {
    if (op == Operation.Divide) {
      return Number(first) / Number(second);
    } else if (op == Operation.Multiply) {
      return Number(first) * Number(second);
    } else if (op == Operation.Plus) {
      return Number(first) + Number(second);
    } else if (op == Operation.Minus) {
      return Number(first) - Number(second);
    } else {
      return 0;
    }
  };

  const clear = () => {
    if (!focusFirst) {
      if (number2 != "0") {
        setnumber2("0");
      } else {
        setop1(Operation.Null);
        setFocusFirst(true);
      }
    } else {
      if (number1 != "0") {
        setnumber1("0");
      } else {
        setop1(Operation.Null);
      }
    }
  };

  const negate = () => {
    if (focusFirst) {
      setnumber1((-1 * Number(number1)).toString());
    } else {
      setnumber2((-1 * Number(number2)).toString());
    }
  };

  const percent = () => {
    if (focusFirst) {
      setnumber1((0.01 * Number(number1)).toString());
    } else {
      setnumber2((0.01 * Number(number2)).toString());
    }
  };

  const setOperation = (newOp: Operation) => {
    console.log(newOp.valueOf());
    if (!focusFirst && op1 != Operation.Null) {
      setnumber1(execute(number1, op1, number2).toString());
      setop1(Operation.Null);
      setFocusFirst(false);
    }
    setop1(newOp);
    setnumber2("0");
    setFocusFirst(false);
  };

  const test = () => {
    console.log(number1, op1, number2);
  };

  const positionNumber = (input: String) => {
    console.log(input);
    if (focusFirst) {
      if (number1 != "0") {
        setnumber1(number1 + input);
      } else {
        setnumber1("" + input);
      }
    } else {
      if (number2 != "0") {
        setnumber2(number2 + input);
      } else {
        setnumber2("" + input);
      }
    }
  };

  const decimalPoint = () => {
    if (focusFirst) {
      if (!number1.includes(".")) {
        setnumber1(number1 + ".");
      }
    } else {
      if (!number2.includes(".")) {
        setnumber2(number2 + ".");
      }
    }
  };

  const equals = () => {
    setnumber1(execute(number1, op1, number2).toString());
    setFocusFirst(true);
  };

  return (
    <div className="min-w-screen relative flex h-screen min-h-screen items-center overflow-hidden bg-slate-500">
      <Head>
        <title>Calculator App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Mobile size constrainer */}
      <Link href="https://portfolio-gusud.vercel.app/">
        <a className="group absolute top-4 right-4 cursor-pointer rounded-md bg-slate-600 p-4 font-thin text-slate-400 transition-colors hover:bg-slate-700 hover:text-slate-300">
          <h1>Made by Max Church</h1>
          <h2>Using:</h2>
          <h2>TypeScript, React, Tailwind, NextJS</h2>
        </a>
      </Link>

      <div className="mx-auto flex h-[70%] min-h-[535px] w-full max-w-sm flex-col justify-end overflow-hidden rounded-2xl bg-black text-white shadow-xl">
        {/* Output Area */}
        <div onClick={() => test()} className="w-full overflow-hidden p-2">
          {(focusFirst && (
            <h1 className="text-right text-6xl">{number1}</h1>
          )) || <h1 className="text-right text-6xl">{number2}</h1>}
        </div>

        {/* Buttons Area */}
        <div className="grid grid-cols-4 gap-2 p-4">
          <button
            onClick={() => clear()}
            className="inline-block aspect-square h-20 w-20 rounded-full bg-gray-500 text-center align-middle text-4xl font-semibold text-black transition hover:bg-gray-400"
          >
            AC
          </button>
          <button
            onClick={() => negate()}
            className="inline-block aspect-square h-20 w-20 rounded-full bg-gray-500 text-center align-middle text-4xl font-semibold text-black transition hover:bg-gray-400"
          >
            +/-
          </button>
          <button
            onClick={() => percent()}
            className="inline-block aspect-square h-20 w-20 rounded-full bg-gray-500 text-center align-middle text-4xl font-bold text-black transition hover:bg-gray-400"
          >
            %
          </button>
          <button
            onClick={() => setOperation(Operation.Divide)}
            className={`inline-block aspect-square h-20 w-20 rounded-full transition ${
              op1 === Operation.Divide
                ? "bg-white text-orange-500 hover:bg-slate-200"
                : "bg-orange-500 hover:bg-orange-400"
            } text-center align-middle text-4xl font-bold`}
          >
            ÷
          </button>
          <button
            onClick={() => positionNumber("7")}
            className="inline-block aspect-square h-20 rounded-full bg-white bg-opacity-10 text-center align-middle text-4xl font-bold transition hover:bg-opacity-5"
          >
            7
          </button>
          <button
            onClick={() => positionNumber("8")}
            className="inline-block aspect-square h-20 rounded-full bg-white bg-opacity-10 text-center align-middle text-4xl font-bold transition hover:bg-opacity-5"
          >
            8
          </button>
          <button
            onClick={() => positionNumber("9")}
            className="inline-block aspect-square h-20 rounded-full bg-white bg-opacity-10 text-center  align-middle text-4xl font-bold transition hover:bg-opacity-5"
          >
            9
          </button>
          <button
            onClick={() => setOperation(Operation.Multiply)}
            className={`inline-block aspect-square h-20 w-20 rounded-full transition ${
              op1 === Operation.Multiply
                ? "bg-white text-orange-500 hover:bg-slate-200"
                : "bg-orange-500 hover:bg-orange-400"
            } text-center align-middle text-4xl font-bold`}
          >
            ×
          </button>
          <button
            onClick={() => positionNumber("4")}
            className="inline-block aspect-square h-20 rounded-full bg-white bg-opacity-10 text-center align-middle text-4xl font-bold transition hover:bg-opacity-5"
          >
            4
          </button>
          <button
            onClick={() => positionNumber("5")}
            className="inline-block aspect-square h-20 rounded-full bg-white bg-opacity-10 text-center align-middle text-4xl font-bold transition hover:bg-opacity-5"
          >
            5
          </button>
          <button
            onClick={() => positionNumber("6")}
            className="inline-block aspect-square h-20 rounded-full bg-white bg-opacity-10 text-center align-middle text-4xl font-bold transition hover:bg-opacity-5"
          >
            6
          </button>
          <button
            onClick={() => setOperation(Operation.Minus)}
            className={`inline-block aspect-square h-20 w-20 rounded-full transition ${
              op1 === Operation.Minus
                ? "bg-white text-orange-500 hover:bg-slate-200"
                : "bg-orange-500 hover:bg-orange-400"
            } text-center align-middle text-4xl font-bold`}
          >
            -
          </button>
          <button
            onClick={() => positionNumber("1")}
            className="inline-block aspect-square h-20 rounded-full bg-white bg-opacity-10 text-center align-middle text-4xl font-bold transition hover:bg-opacity-5"
          >
            1
          </button>
          <button
            onClick={() => positionNumber("2")}
            className="inline-block aspect-square h-20 rounded-full bg-white bg-opacity-10 text-center align-middle text-4xl font-bold transition  hover:bg-opacity-5"
          >
            2
          </button>
          <button
            onClick={() => positionNumber("3")}
            className="inline-block aspect-square h-20 rounded-full bg-white bg-opacity-10 text-center align-middle text-4xl font-bold transition hover:bg-opacity-5"
          >
            3
          </button>
          <button
            onClick={() => setOperation(Operation.Plus)}
            className={`inline-block aspect-square h-20 w-20 rounded-full transition ${
              op1 === Operation.Plus
                ? "bg-white text-orange-500 hover:bg-slate-200"
                : "bg-orange-500 hover:bg-orange-400"
            } text-center align-middle text-4xl font-bold`}
          >
            +
          </button>
          <button
            onClick={() => positionNumber("0")}
            className="col-span-2 inline-block h-20 rounded-full bg-white bg-opacity-10 pl-8 text-left align-middle text-4xl font-bold transition hover:bg-opacity-5"
          >
            0
          </button>
          <button
            onClick={() => decimalPoint()}
            className="inline-block  aspect-square h-20 rounded-full bg-white bg-opacity-10 text-center align-middle text-4xl font-bold transition hover:bg-opacity-5"
          >
            .
          </button>
          <button
            onClick={() => equals()}
            className="inline-block aspect-square h-20 rounded-full bg-orange-500 text-center align-middle text-4xl font-bold transition hover:bg-orange-400"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
