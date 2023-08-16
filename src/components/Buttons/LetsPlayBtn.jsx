import Link from "next/link";

const LetsPlayButton = () => {
  return (
    <button className="bg-pink mx-4 shadow-md px-8 min-h-[40px] min-w-[140px] hover:bg-[#EBC2AF] rounded-lg">
      <Link className="text-lg" href="/play">
        Start the game
      </Link>
    </button>
  );
};

export default LetsPlayButton;
