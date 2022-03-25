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
});
const Page: NextPage = () => {
  const [text, setText] = React.useState<string>("");
  const { data } = useSWR("/api/event", fetcher, { refreshInterval: 1000 });

  useEffect(() => {
    if (data) {
      setText(data.roundInformation);
    }
  }, [data]);
  return (
    <div>
      <Head>
        <title>MTG Score Keeper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="api-response">
        <Strong>{text}</Strong>
      </main>
    </div>
  );
};

export default Page;
