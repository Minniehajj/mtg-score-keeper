import type { NextPage } from "next";
import Head from "next/head";

import React, { useEffect } from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import { styled } from "../stitches.config";

const Strong = styled("strong", {
  fontSize: 32,
  color: "#fff",
  fontWeight: "700",
  textAlign: "center",
  width: "100%",
});

const Main = styled("main", {
  width: "800px",
  display: "flex",
});
const Page: NextPage = () => {
  const [text, setText] = React.useState<string>("");
  const { data } = useSWR("/api/player-two", fetcher, {
    refreshInterval: 1000,
  });

  useEffect(() => {
    if (data) {
      setText(data.name);
    }
  }, [data]);
  return (
    <div>
      <Head>
        <title>MTG Score Keeper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Strong>{text}</Strong>
      </Main>
    </div>
  );
};

export default Page;
