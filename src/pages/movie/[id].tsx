import { useRouter } from "next/router";
import React from "react";

const Page = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div className="text-2xl font-bold"> {id} 영화 상세페이지</div>;
};

export default Page;
