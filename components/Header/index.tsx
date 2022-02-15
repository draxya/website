import type { FC } from "react";
import Head from "next/head";
interface IProps {
  title: string
}
export const Header:FC<IProps> = function({title}){
    return (
    <Head>
        <title>{title} | draxya.</title>
        <meta name="description" content="I'm a full stack developer with over 2 years of experience, 17 y/o, from Ankara." />
        <link rel="icon" href="/icontopchamber.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <meta name="title" content="draxya."/>
        <meta name="description" content="I'm a full stack developer with over 2 years of experience, 17 y/o, from Ankara."/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.draxya.cf"/>
        <meta property="og:title" content="draxya."/>
        <meta property="og:description" content="I'm a full stack developer with over 2 years of experience, 17 y/o, from Ankara."/>
        <meta property="og:image" content="https://www.draxya.cf/icon.png"/>
        <meta property="theme-color" content="#9932CC"/>

        <meta property="twitter:url" content="https://www.draxya.cf"/>
        <meta property="twitter:title" content="www.draxya.cf"/>
        <meta property="twitter:description" content="I'm a full stack developer with over 2 years of experience, 17 y/o, from Ankara."/>
        <meta property="twitter:image" content="https://www.draxya.cf/icon.png"/>
        <meta property="twitter:domain" content="www.draxya.cf"/>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

      </Head>
    );
};
