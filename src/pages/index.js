import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Topo from "@/components/Topo";
import Capa from "@/components/Capa";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topo />
      <Capa />
    </>
  );
}
