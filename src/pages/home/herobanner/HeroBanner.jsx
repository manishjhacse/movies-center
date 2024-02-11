import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyloadimage/Img";
import ContentWrapper from "../../../components/contentwrapper/ContentWrapper";
export default function HeroBanner() {
  const { url } = useSelector((state) => state.home);
  const [background, setBackground] = useState("");
  const navigate = useNavigate();
  const { data, loading } = useFetch("/movie/upcoming");
  const [query, setQuery] = useState("");
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results[Math.floor(Math.random() * 20)].backdrop_path;
    setBackground(bg);
  }, [data]);
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
          <div className="heroBannerContent">
            <span className="title">Welcome</span>
            <span className="subTitle">
              Millions of movies, TV shows and people to discover. Explore now.
            </span>
            <div className="searchInput">
              <input
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
                type="text"
                placeholder="Search for a movie or TV show..."
              />
              <button>Search</button>
            </div>
          </div>
      </ContentWrapper>
    </div>
  );
}
