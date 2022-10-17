import React from "react";

import NextNProgress from "nextjs-progressbar";

import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import { Invitation } from "../context/invitation";
import { Report } from "../context/report";

function MyApp({ Component, pageProps }) {
  return (
      <Invitation>
        <Report>
          <NextNProgress
            color="hsl(197, 37%, 24%)"
            startPosition={0.3}
            stopDelayMs={100}
            height={3}
            showOnShallow={true}
          />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Report>
      </Invitation>
  );
}

export default MyApp;
