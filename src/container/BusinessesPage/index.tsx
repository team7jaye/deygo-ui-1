import { useParams } from "next/navigation";
import React from "react";
import DGDetailsContainer from "../DetailsPage";
import { BusinessLayout } from "@/components/global/Layout";

type Props = {
  title: string | string[];
};

const DGBusinessPageContainer = ({ title }: Props) => {
  const params = useParams();

  console.log(params);
  return (
    <BusinessLayout
      title={title}
      backText={params.category}
      categoryId={params.business}
    >
      <DGDetailsContainer />
    </BusinessLayout>
  );
};

export default DGBusinessPageContainer;
