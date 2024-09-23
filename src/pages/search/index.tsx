import MovieItem from "@/components/movie-item";
import SearchableLayout from "@/components/searchable-layout";
import dummy from "@/mock/dummy.json";
import { useRouter } from "next/router";
import React from "react";

const Page = () => {
  const router = useRouter();

  const { q } = router.query;

  return (
    <div>
      <div className="text-sm font-bold mb-5">검색결과 : {q}</div>
      <div className="grid grid-cols-3 gap-1">
        {dummy.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default Page;

Page.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
