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

3. 레이아웃 설정

src/components/global-layout

```
import Link from "next/link";
import React, { ReactNode } from "react";
import style from "./global-layout.module.css";

const GlobalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={"/"}>ONEBITE CINEMA</Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default GlobalLayout;
```

src/components/searchable-layout

```

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
      <div className="flex gap-2">
        <input
          className="border border-gray-500 rounded-sm p-2 bg-black w-full text-xs"
          type="text"
          placeholder="검색어를 입력하세요 ..."
          onKeyDown={onKeyDown}
          value={search}
          onChange={onChangeSearch}
        />
        <button
          className="border border-gray-500 rounded-sm px-5 py-3 bg-gray-500 text-xs flex-shrink-0"
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

```
