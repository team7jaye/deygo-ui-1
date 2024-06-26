// import BusinessDetails from "@/components/Details/BusinessDetails";
import BusinessDetails from "@/components/Details/BusinessDetails";
import DescriptionSection from "@/components/Details/DescriptionSection";
import TimeContact from "@/components/Details/TimeContact";
import BusinessLayout from "@/components/global/Layout/BusinessLayout";
import Map from "@/components/Map";
import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {};

const DGDetailsContainer = (props: Props) => {
  return (
    <Box>
      <BusinessDetails />
    </Box>
  );
};

export default DGDetailsContainer;
