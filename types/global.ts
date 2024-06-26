import { ComponentWithAs, IconProps } from "@chakra-ui/react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { IconType } from "react-icons/lib";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
