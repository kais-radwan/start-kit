import CopyCode from "@/components/copy-code";
import Navbar from "@/components/navbar";
import { GridBackground } from "@/components/ui/backgrounds/grid";
import { Code } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <GridBackground className="min-h-screen">
        <div className="w-full p-10 pt-24 md:pt-36 lg:pt-48 flex flex-col items-center gap-5 z-50">
          <CopyCode code="git clone https://github.com/kais-radwan/start-kit" />
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Next.js Startkit
          </h1>
          <p className="opacity-80 w-[90%] md:w-[80%] lg:w-[75%] text-center mb-14">
            Kickstart your Next.js project with a{" "}
            <Code
              color="success"
              style={{
                boxShadow: "0px 0px 130px 0px #4ade80",
              }}
              className="border border-green-400 backdrop-blur"
            >
              git clone
            </Code>
            <br />
            <br /> Typescript, Tailwindcss, Shadcn, NextUI, Sonner toast notifications, dark & light modes,
            Framer motion, and background patterns.
          </p>

          <div className="text-sm">
            Built with love by{" "}
            <Link
              href="https://x.com/kais_rad"
              target="_blank"
              className="underline"
            >
              @kais_rad
            </Link>
          </div>
        </div>
      </GridBackground>
    </>
  );
}
