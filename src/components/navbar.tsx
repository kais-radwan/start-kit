import { Button, Link } from "@nextui-org/react";
import ThemeToggle from "./theme-toggle";
import { IconBrandGithub } from "@tabler/icons-react";

export default function Navbar() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-screen h-14 flex items-center gap-3 z-40 pl-5 pr-5">
        <h1 className="text-xl min-w-max text-green-400">Startkit</h1>
        <div
          className="absolute top-0 left-0 inset-0 blur-xl w-10"
          style={{
            boxShadow: "0px 0px 130px 0px #4ade80",
          }}
        ></div>
        <div className="w-full flex items-center justify-end gap-3">
          <ThemeToggle />
          <Button
            size="sm"
            color="primary"
            startContent={<IconBrandGithub size={18} />}
            className="font-semibold"
            as={Link}
            href="https://github.com/kais-radwan/start-kit"
            target="_blank"
          >
            Github
          </Button>
        </div>
      </div>
    </div>
  );
}
