import SearchableLayout from "@/components/searchable-layout";
import React, { ReactNode } from "react";
import dummy from "@/mock/dummy.json";
import MovieItem from "@/components/movie-item";

const Home = () => {
  return (
    <div className="flex flex-col gap-20">
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        {dummy.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        {dummy.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </section>
    </div>
  );
};

export default Home;

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
