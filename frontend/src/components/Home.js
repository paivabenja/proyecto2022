import React, { useEffect, useState } from 'react';
import CardComp from './CardComp';
import Item from './Item';

const Home = () => {
  const loadingGif =
    'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921';
  const posterDomain = 'https://images.justwatch.com';

  const createExampleArray = () => {
    let exampleArray = [];
    for (let i = 0; i < 100; i++) {
      exampleArray.push({
        node: {
          content: {
            title: '',
            posterUrl: loadingGif,
          },
        },
      });
    }
    return exampleArray;
  };

  const formatPosterUrl = () => {
    if (data[0].node.content.posterUrl == loadingGif) {
      return;
    }

    if (data[0].node.content.posterUrl.slice(0, 5) == 'https') {
      return;
    }

    let array = data;

    for (let i = 0; i < data.length; i++) {
      array[i].node.content.posterUrl = array[i].node.content.posterUrl.replace(
        '.{format}',
        '',
      );
      array[i].node.content.posterUrl = array[i].node.content.posterUrl.replace(
        '{profile}',
        's166',
      );
      array[i].node.content.posterUrl = posterDomain.concat(
        array[i].node.content.posterUrl,
      );
    }
    setData(array);
    console.log(data);
    setToggler(!toggler);
  };

  const [data, setData] = useState(createExampleArray());
  const [toggler, setToggler] = useState(true);

  const callApi = () => {
    fetch('http://localhost:5000/buscar?plt=hbm&gnr=act,cmy')
      .then((res) => res.json())
      .then(setData);
  };

  // will need to change this to add the pictures
  // from this: https://images.justwatch.com/poster/298192485/s166/house-of-the-dragon
  // to this: /poster/298192485/{profile}/house-of-the-dragon.{format}

  useEffect(callApi, []);
  useEffect(formatPosterUrl, [data]);

  useEffect(formatPosterUrl, [toggler]);

  return (
    <div className="home">
      {[0, 1, 2, 3, 4].map((i) => {
        return (
          <Item key={i} texto="texto">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((h) => {
              let num = +(i * 10) + h;
              return (
                <CardComp
                  key={h}
                  cardText=""
                  cardTitle={data[num].node.content.title}
                  cardSubTitle=""
                  cardImg={data[num].node.content.posterUrl}
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
