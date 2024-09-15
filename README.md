# 한 입 크기로 잘라먹는 Next.js(15+) 챌린지

1. 프로젝트 생성

```
$ npx create-next-app@14 ./
√ Would you like to use TypeScript? ... No / Yes
√ Would you like to use ESLint? ... No / Yes
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like to use `src/` directory? ... No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
√ Would you like to customize the default import alias (@/*)? ... No / Yes
```

2. 라우터 설정

src/pages/index.tsx

```
import React from "react";

const index = () => {
  return <div className="text-xl font-bold">ONEBITE CINEMA</div>;
};

export default index;
```

src/pages/search/index.tsx

```
import { useRouter } from "next/router";
import React from "react";

const Page = () => {
  const router = useRouter();
  const { q } = router.query;

  return <div className="text-2xl font-bold">검색결과 : {q}</div>;
};

export default Page;
```

src/pages/movie/[id].tsx

```
import { useRouter } from "next/router";
import React from "react";

const Page = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div className="text-2xl font-bold"> {id} 영화 상세페이지</div>;
};

export default Page;
```
