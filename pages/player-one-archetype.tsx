import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import { styled } from "../stitches.config";

const Strong = styled("strong", {
  fontSize: 50,
  color: "#fff",
});
const PlayerOneArchetype: NextPage = () => {
  const [playerOneArchetype, setPlayerOneArchetype] =
    React.useState<string>("");
  const loadData = async () => {
    const playerOneResponse = await fetch("/api/player-one");
    const playerOneData = playerOneResponse.json();
    const playerOne = await playerOneData;
    setPlayerOneArchetype(playerOne.archetype);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Strong>{playerOneArchetype}</Strong>
      </main>
    </div>
  );
};

export default PlayerOneArchetype;
