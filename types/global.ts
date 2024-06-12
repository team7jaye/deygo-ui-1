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

export interface IAdminPageLevel {
  label: string;
  href: string;
}

export interface IAdminTopBar {
  isDashboard?: boolean;
  isDetailsPage?: boolean;
  isEditPage?: boolean;
  title: string;
  subTitle?: string;
  pageLevel?: IAdminPageLevel[];
  CTA?: React.ReactNode;
}

export interface IAdminSidebarNavs {
  label: string;
  icon: IconType | ComponentWithAs<"svg", IconProps>;
  href?: string;
}

export interface IPaginationConfig {
  // total_items: number;
  // next_cursor: string;
  // prev_cursor: string;

  current_page: number;
  first_page_url: string;
  from: null;
  last_page: number;
  last_page_url: string;
  links: {
    url: string;
    label: string;
    active: boolean;
  }[];
  next_page_url: null;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: null;
  total: number;
}

export interface IPaymentType {
  label: string;
  value: string;
  isDisabled?: boolean;
}

export type PaymentProcessTabs = "MAKE_PAYMENT" | "CONFIRM_PAYMENT";