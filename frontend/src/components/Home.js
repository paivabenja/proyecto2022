import React, { useContext, useEffect, useState } from "react";
import { context } from "../context/context";
import CardComp from "./CardComp";
import Item from "./Item";

const Home = ({ section }) => {
  const createExampleArray = () => {
    let exampleArray = [];
    for (let i = 0; i < 100; i++) {
      exampleArray.push({
        node: {
          content: {
            title: "",
            posterUrl: loadingGif,
          },
          watchNowOffer: {
            standardWebUrl: "",
          },
        },
      });
    }
    return exampleArray;
  };

  const loadingGif =
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921";
  const posterDomain = "https://images.justwatch.com";

  const [prevRoute, setPrevRoute] = useState("/");
  const { searchUrl, setSearchUrl, route } = useContext(context);
  const [data, setData] = useState(createExampleArray());
  const [toggler, setToggler] = useState(true);
  const [title, setTitle] = useState("");

  const callApi = () => {
    fetch(searchUrl)
      .then((res) => res.json())
      .then(setData);
  };

  const filterData = () => {
    if (prevRoute === route) {
      return;
    }
    setPrevRoute(route);
    if (route === "/series") {
      setData(data.filter((i) => i.node.content.__typename === "ShowContent"));
    }

    if (route === "/movies") {
      setData(data.filter((i) => i.node.content.__typename === "MovieContent"));
    }
  };

  const formatPosterUrl = () => {
    if (data[0].node.content.posterUrl === loadingGif) {
      return;
    }

    if (data[0].node.content.posterUrl.slice(0, 4) === "http") {
      return;
    }

    let array = data;

    for (let i = 0; i < data.length; i++) {
      array[i].node.content.posterUrl = array[i].node.content.posterUrl.replace(
        ".{format}",
        ""
      );
      array[i].node.content.posterUrl = array[i].node.content.posterUrl.replace(
        "{profile}",
        "s166"
      );
      array[i].node.content.posterUrl = posterDomain.concat(
        array[i].node.content.posterUrl
      );
    }
    setData(array);
    setToggler(!toggler);
    console.log(data[3]);
  };

  const changeContentByGenre = () => {
    console.log(route);
    if (route === "/") {
      setSearchUrl("http://localhost:5000/buscar");
    }
    if (route === "/action") {
      setSearchUrl("http://localhost:5000/buscar?gnr=act");
    }
    if (route === "/drama") {
      setSearchUrl("http://localhost:5000/buscar?gnr=drm");
    }
    if (route === "/comedy") {
      setSearchUrl("http://localhost:5000/buscar?gnr=cdy");
    }
    if (route === "/movies") {
      setSearchUrl("http://localhost:5000/buscar");
    }
    if (route === "/series") {
      setSearchUrl("http://localhost:5000/buscar");
    }
  };

  const updateTitle = () => {
    if (route === "/") {
      setTitle("Home");
    }
    if (route === "/movies") {
      setTitle("Movies");
    }
    if (route === "/series") {
      setTitle("Series");
    }
    if (route === "/action") {
      setTitle("Action");
    }
    if (route === "/drama") {
      setTitle("Drama");
    }
    if (route === "/comedy") {
      setTitle("Comedy");
    }
  };

  useEffect(callApi, [searchUrl]);
  useEffect(formatPosterUrl, [data]);
  useEffect(filterData, [data]);
  useEffect(changeContentByGenre, [route]);
  useEffect(updateTitle, [route]);

  return (
    <div className="home">
      <Item>{title}</Item>
      {data.map((d, i) => {
        return (
          <CardComp
            key={i}
            cardTitle={data[i].node.content.title}
            cardImg={data[i].node.content.posterUrl}
            link={
              data[i].node.watchNowOffer
                ? data[i].node.watchNowOffer.standardWebURL
                : "/"
            }
          ></CardComp>
        );
      })}
    </div>
  );
};

export { Home };
