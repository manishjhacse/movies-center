import React, { useState } from "react";
import ContentWrapper from "../../../components/contentwrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

function Popular() {
  const [endPoint, setEndPoint] = useState("movie");
  const { data, loading } = useFetch(`/${endPoint}/popular`);
  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className=" text-white text-[16px] md:text-[24px]">Whats Popular</span>
        <SwitchTabs onTabChange={onTabChange} data={["Movies", "TV shows"]} />
      </ContentWrapper>
      <Carousel  data={data?.results} loading={loading} endPoint={endPoint} />
    </div>
  );
}

export default Popular;
