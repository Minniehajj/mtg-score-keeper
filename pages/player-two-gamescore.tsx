import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import { styled } from "../stitches.config";

const Strong = styled("strong", {
  fontSize: 50,
  color: "#fff",
});
const Page: NextPage = () => {
  const [data, setData] = React.useState<string>("");
  const loadData = async () => {
    const playerTwoResponse = await fetch("/api/player-two");
    const playerTwoData = playerTwoResponse.json();
    const playerTwo = await playerTwoData;
    setData(playerTwo.gameScore);
  };
  useEffect(() => {
    loadData();
    const interval = setInterval(() => {
      loadData();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
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
