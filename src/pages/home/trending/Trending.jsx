import React, { useState } from "react";
import ContentWrapper from "../../../components/contentwrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

function trending() {
  const [endPoint, setEndPoint] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endPoint}`);
  const onTabChange = (tab) => {
    setEndPoint(tab === "Day" ? "day" : "week");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
          <span className=" text-white text-[16px] md:text-[24px]">Trending</span>
          <SwitchTabs onTabChange={onTabChange} data={["Day", "Week"]} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
}

export default trending;
