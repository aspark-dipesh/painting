import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const SearchBox = () => {
  const searchParams = useSearchParams();
  useEffect(() => {
    setSearch(searchParams.get("search") || "");
  }, [searchParams]);
  const router = useRouter();
  const [search, setSearch] = React.useState("");
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/collection/?search=${search}`);
  };
  return (
    <div>
      <form className="relative hidden md:block" onSubmit={handleSearch}>
        <label htmlFor="Search" className="sr-only">
          Search
        </label>

        <input
          type="text"
          id="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for..."
          className="w-full rounded-md border-gray-200 py-1.5 pe-10 shadow-sm sm:text-sm px-2"
        />

        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button type="button" className="text-gray-600 hover:text-gray-700">
            <span className="sr-only">Search</span>

            <Search className="w-5 h-5 text-rose-600 " />
          </button>
        </span>
      </form>
    </div>
  );
};

export default SearchBox;
