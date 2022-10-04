import React, { useContext, useEffect, useState } from 'react';
import { context } from '../context/context';
import CardComp from './CardComp';
import Item from './Item';

const Home = ({ section }) => {
  const createExampleArray = () => {
    let exampleArray = [];
    for (let i = 0; i < 100; i++) {
      exampleArray.push({
        node: {
          content: {
            title: '',
            posterUrl: loadingGif,
          },
          watchNowOffer: {
            standardWebUrl: '',
          },
        },
      });
    }
    return exampleArray;
  };

  const loadingGif =
    'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921';
  const posterDomain = 'https://images.justwatch.com';

  const { searchUrl, setSearchUrl, genre } = useContext(context);
  const [data, setData] = useState(createExampleArray());
  const [toggler, setToggler] = useState(true);

  const checkURL = () => {
    if (section === 'home') {
      return;
    } else if (section === 'action') {
      setSearchUrl(...searchUrl, '?gnr=act');
    } else if (section === 'comedy') {
      setSearchUrl(...searchUrl, '?gnr=cmy');
    }
  };

  const callApi = () => {
    fetch(searchUrl)
      .then((res) => res.json())
      .then(setData);
  };

  const formatPosterUrl = () => {
    if (data[0].node.content.posterUrl === loadingGif) {
      return;
    }

    if (data[0].node.content.posterUrl.slice(0, 4) === 'http') {
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
  useEffect(callApi, []);
  useEffect(checkURL, [genre]);
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
                      ? data[num].node.watchNowOffer.standardWebUrl
                      : '/'
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
