import { Link } from "react-router-dom";
import { Button } from "../../../components/shadcn-ui/button";
import { ShadcnCarousel } from "../../../components/ShadcnCarousel";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-start bg-transparent">
        <ShadcnCarousel></ShadcnCarousel>
        <div className="mb-8 mt-8 max-w-5xl items-center justify-center px-8 text-center">
          <h1 className="mb-4 text-4xl font-bold">
            Welcome to the Star Wars App
          </h1>
          <p className="text-lg">
            Explore the vast universe of Star Wars. Discover characters,
            planets, starships, and more from the iconic saga. Dive into the
            adventures and relive the epic moments from a galaxy far, far away.
          </p>
        </div>
        <Link to="/starships">
          <Button className="secondary bg-zinc-800 hover:bg-orange-700">
            Explore
          </Button>
        </Link>
      </div>
    </>
  );
}
