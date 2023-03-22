import Link from "next/link";

const ConjugaisonButton = () => {
  return (
    <button className="bg-greenish w-[150px] mx-4 shadow-md mt-4 px-8 min-h-[40px] min-w-[140px] rounded-lg hover:bg-[#ABC8B6] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <Link className="text-lg" href="/conjugaison">Verb tenses</Link>
    </button>
  );
};

export default ConjugaisonButton;
