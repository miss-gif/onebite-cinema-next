import React from "react";
import type { MovieData } from "@/types";
import Link from "next/link";

const MovieItem = ({
  id,
  title,
  releaseDate,
  company,
  genres,
  subTitle,
  description,
  runtime,
  posterImgUrl,
}: MovieData) => {
  return (
    <Link href={`/book/${id}`} className="flex">
      <img src={posterImgUrl} alt={title} />
    </Link>
  );
};

export default MovieItem;
