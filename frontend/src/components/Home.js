import React, { useEffect, useState } from "react";
import CardComp from "./CardComp";
import Item from "./Item";

const Home = () => {
  const loadingGif =
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921";
  const posterDomain = "https://images.justwatch.com";

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
    console.log(data);
    setToggler(!toggler);
  };

  const [data, setData] = useState(createExampleArray());
  const [toggler, setToggler] = useState(true);

  const callApi = () => {
    fetch("http://localhost:5000/buscar")
      .then((res) => res.json())
      .then(setData);
  };

  useEffect(callApi, []);
  useEffect(formatPosterUrl, [data, toggler]);

  return (
    <div className="home">
      {[0, 1, 2, 3, 4].map((i) => {
        return (
          <Item key={i} texto="Peliculas">
            {[0, 1, 2, 3].map((h) => {
              let num = +(i * 10) + h;
              return (
                <CardComp
                  key={h}
                  cardTitle={data[num].node.content.title}
                  cardImg={data[num].node.content.posterUrl}
                  link={
                    data[num].node.watchNowOffer
                      ? data[num].node.watchNowOffer.standardWebURL
                      : "/"
                  }
                ></CardComp>
              );
            })}
          </Item>
        );
      })}
    </div>
  );
};

export { Home };
