import MovieItem from "@/components/movie-item";
import SearchableLayout from "@/components/searchable-layout";
import dummy from "@/mock/dummy.json";
import { useRouter } from "next/router";
import React from "react";

const Page = () => {
  const router = useRouter();
  const { q } = router.query;

  // 검색어에 맞는 영화를 필터링
  const filteredMovies = dummy.filter(
    (movie) =>
      movie.title
        .toLowerCase()
        .includes((Array.isArray(q) ? q[0] : q || "").toLowerCase()) // title에 검색어 포함 여부 확인
  );

  return (
    <div>
      <div className="text-sm font-bold mb-5">검색결과 : {q}</div>
      <div className="grid grid-cols-3 gap-1">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => <MovieItem key={movie.id} {...movie} />)
        ) : (
          <div>검색결과가 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default Page;

Page.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
