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
  marginRight: "1.25rem",
});

const Main = styled("main", {
  width: "800px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Page: NextPage = () => {
  const [text, setText] = React.useState<string>("");
  const [record, setRecord] = React.useState<string>("");
  const { data } = useSWR("/api/player-one", fetcher, {
    refreshInterval: 1000,
  });

  useEffect(() => {
    if (data) {
      setText(data.archetype);
      setRecord(data.record);
    }
  }, [data]);
  return (
    <div>
      <Head>
        <title>MTG Score Keeper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Strong>{text + " "}</Strong> <Strong>{record}</Strong>
      </Main>
    </div>
  );
};

export default Page;
