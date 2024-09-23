import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";

const SearchableLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const q = router.query.q as string;

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div>
      <div className="flex gap-2 pt-3 pb-8">
        <input
          className="border border-gray-500 rounded-sm p-2 bg-black w-full text-xs"
          type="text"
          placeholder="검색어를 입력하세요 ..."
          onKeyDown={onKeyDown}
          value={search}
          onChange={onChangeSearch}
        />
        <button
          className="border border-gray-700 rounded-sm px-5 py-3 bg-gray-700 text-xs flex-shrink-0"
          onClick={onSubmit}
        >
          검색
        </button>
      </div>
      {children}
    </div>
  );
};

export default SearchableLayout;
