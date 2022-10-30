// import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import clonex from "../public/clonex.png";
import bluechips from "../public/bluechips.png";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

export default function main() {
  // Auth
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();
  // ---

  return (
    <div>
      <Head>
        <title>NFT Dapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
        {/* Left */}

        <div className="bg-gradient-to-br from-slate-900 to-slate-400 lg:col-span-4">
          <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
            <div className="p-1 rounded-xl bg-purple-700">
              <Image
                className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
                src={clonex}
                alt="CloneX PFP"
              />
            </div>
            <div className="space-y-2 p-5 text-center">
              <h1 className="text-4xl font-bold text-white">RANDO-MINT</h1>
              <h2 className="text-xl text-gray-300">
                A collection of random blue chip NFT's!
              </h2>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="flex flex-1 flex-col p-10 lg:col-span-6">
          {/* Header */}

          <header className="flex items-center justify-between">
            <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
              THE{" "}
              <span className="font-semibold text-gray-800 underline decoration-purple-700/60">
                RANDO-MINT
              </span>{" "}
              MARKET PLACE
            </h1>

            <div></div>

            <button
              onClick={() => (address ? disconnect() : connectWithMetamask())}
              className="rounded-full bg-purple-700 px-4 py-2 text-xs font-bold text-white hover:bg-purple-800 hover:text-gray-200 lg:px-5 lg:py-2 lg:text-base"
            >
              {address ? "Sign Out" : "Sign In"}
            </button>
          </header>

          <hr className="my-2 border"></hr>
          {address && (
            <p className="text-center text-sm text-pink-400/50">
              You're connected with wallet {address.substring(0, 5)}...
              {address.substring(address.length - 5)}{" "}
            </p>
          )}

          {/* Content */}

          <div className="mt-10 flex flex-1 flex-col items-center space-y-4 text-center lg:justify-center lg:space-y-0">
            <h1 className="text-xl text-gray-600 font-mono font-semibold mb-4 lg:mb-10 lg:text-3xl lg:font-semibold">
              WHICH COLLECTION WILL YOU MINT?
            </h1>

            <Image
              className="w-80 object-cover pb-8 lg:w-80"
              src={bluechips}
              alt="Blue Chips"
            />

            {/* <h2 className="text-3xl text-gray-800 font-bold lg:text-5xl lg:font-extrabold">
            What blue chip will you mint?
          </h2> */}

            <p className="pt-4 text-xl text-pink-400/50">
              3 / 10 NFT's claimed!
            </p>
          </div>

          {/* Mint Button */}

          <button className="mt-10 h-12 w-full font-bold bg-purple-700 text-white rounded-full hover:bg-purple-800 hover:text-gray-200">
            Mint NFT (0.01 ETH)
          </button>
        </div>
      </div>
    </div>
  );
}
