import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import { styled } from "../stitches.config";

const Strong = styled("strong", {
  fontSize: 50,
  color: "#fff",
  fontWeight: "700",
});
const Page: NextPage = () => {
  const [data, setData] = React.useState<string>("");
  const loadData = async () => {
    const playerOneResponse = await fetch("/api/player-one");
    const playerOneData = playerOneResponse.json();
    const playerOne = await playerOneData;
    setData(playerOne.archetype);
  };
  useEffect(() => {
    loadData();
    const interval = setInterval(() => {
      loadData();
    }, 1000);
    return () => clearInterval(interval);
  }, [loadData()]);
  return (
    <div>
      <Head>
        <title>MTG Score Keeper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Strong>{data}</Strong>
      </main>
    </div>
  );
};

export default Page;
