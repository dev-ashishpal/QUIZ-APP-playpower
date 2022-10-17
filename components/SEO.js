import React, { Fragment } from "react";
import Head from "next/head";

const SEO = ({ children, title, desc, keywords }) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </Fragment>
  );
};

export default SEO;
