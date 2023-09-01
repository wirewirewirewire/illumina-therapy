import React from "react";

export default function InlineCss({ css }: any) {
  if (!css) return null;
  return (
    <style>
      {`
   ${css}`}
    </style>
  );
}
