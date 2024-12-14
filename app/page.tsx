// app/page.tsx
"use client";

import dynamic from "next/dynamic";

// 动态导入 ExcalidrawWrapper 组件，禁用 SSR
const ExcalidrawWrapper = dynamic(
  () => import("./excalidrawWrapper"),
  {
    ssr: false,
    loading: () => <div>Loading editor...</div>
  }
);

export default function Page() {
  return (
    <div className="w-full h-screen">
      <ExcalidrawWrapper />
    </div>
  );
}