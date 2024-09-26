"use client";
import Head from "next/head";
import ProfessorLandingPage from "../components/ProfessorLandingPage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Personal Portfolio</title>
        <meta
          name="description"
          content="Personal portfolio website of Assistant Professor Auqib Hamid Lone"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProfessorLandingPage />
    </div>
  );
}
