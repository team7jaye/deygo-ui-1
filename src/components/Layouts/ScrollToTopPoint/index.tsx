import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ScrollToTopPoint() {
  const { pathname } = useRouter();

  // Scroll to the top on page change
  useEffect(() => {
    const parentElement =
      document.querySelector(".top-point")?.nextElementSibling;

    parentElement?.scrollBy({
      top: -parentElement?.scrollHeight,
      left: 0,
    });
  }, [pathname]);

  return <Box className="top-point" />;
}