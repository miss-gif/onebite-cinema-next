import SearchableLayout from "@/components/searchable-layout";
import React, { ReactNode } from "react";
import dummy from "@/mock/dummy.json";
import MovieItem from "@/components/movie-item";

const Home = () => {
  return (
    <div className="flex flex-col gap-20">
      <section className="flex flex-col gap-3">
        <h3 className="text-lg font-bold">지금 가장 추천하는 영화</h3>
        <div className="grid grid-cols-3 gap-1">
          {dummy.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="text-lg font-bold">등록된 모든 영화</h3>
        <div className="grid grid-cols-5 gap-1">
          {dummy.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
