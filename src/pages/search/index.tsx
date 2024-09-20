import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import React from "react";

const Page = () => {
  const router = useRouter();

  const { q } = router.query;

  return <div className="text-2xl font-bold">검색결과 : {q}</div>;
};

export default Page;

Page.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
