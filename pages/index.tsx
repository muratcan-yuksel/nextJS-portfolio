import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
// import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen">
      <Head>
        <title>NextJS Portfolio</title>
      </Head>
      <Header />

      {/*Hero  */}
      <section id="hero">
        <Hero />
      </section>
      {/*About */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
    </div>
  );
}
