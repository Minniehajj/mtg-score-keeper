import type { NextPage } from "next";
import Head from "next/head";

import React, { useEffect } from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import { styled } from "../stitches.config";

const Strong = styled("strong", {
  fontSize: 50,
  color: "#fff",
  fontWeight: "700",
  textAlign: "center",
  marginRight: ".5rem",
});

const Main = styled("main", {
  width: "800px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const Page: NextPage = () => {
  const [gameScoreOne, setGameScoreOne] = React.useState<string>("");
  const [gameScoreTwo, setGameScoreTwo] = React.useState<string>("");
  const { data } = useSWR("/api/player-one", fetcher, {
    refreshInterval: 1000,
  });
  const playerTwoData = useSWR("/api/player-two", fetcher, {
    refreshInterval: 1000,
  });
  useEffect(() => {
    if (data) {
      setGameScoreOne(data.gameScore);
    }
    if (playerTwoData.data) {
      setGameScoreTwo(playerTwoData.data.gameScore);
    }
  }, [data]);
  return (
    <div>
      <Head>
        <title>MTG Score Keeper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Strong>{gameScoreOne + " - "}</Strong>
        <Strong>{gameScoreTwo}</Strong>
      </Main>
    </div>
  );
};

export default Page;
