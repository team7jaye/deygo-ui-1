"use client";
import { DGBusinessPageContainer } from "@/container";
import React from "react";

type Props = {
  title: string | string[];
};

const page = ({ title }: Props) => {
  return (
    <main>
      <DGBusinessPageContainer title={title} />
    </main>
  );
};

export default page;
