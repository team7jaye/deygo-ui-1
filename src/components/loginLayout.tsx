"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { classNames } from "@/utils/functions";
import { useScreenWidth } from "@/hooks/useScreenWidth";
import Header from "./Header";

const LoginLayout = ({ children }: { children: ReactNode }) => {
  const [showMain, setShowMain] = useState(false);
  const [classnames, setClassName] = useState("");
  const [classNames2, setClassName2] = useState("");

  const screenWidth = useScreenWidth();
  const pathname = usePathname();
  const paths = pathname.split("/");

  useEffect(() => {
    console.log("entered", screenWidth);
    const updatedClassName =
      screenWidth < 768 && !showMain ? "block" : "hidden md:block";
    const updatedClassName2 =
      screenWidth < 768 && showMain ? "block" : "hidden md:block";
    setClassName(updatedClassName);
    setClassName2(updatedClassName2);
    console.log({ updatedClassName, updatedClassName2 });
  }, [screenWidth, showMain]);

  return (
    <>
      <Header setShowMain={setShowMain} showMain={showMain} />
      <main className="flex justify-center items-center min-h-screen bg-gray-100">
        {children}
      </main>
    </>
  );
};

export default LoginLayout;
