import React, { useEffect, useState } from "react";
import "../home/styles.scss";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ReactComponent as Arrow } from '../../assets/img/arrow-circle.svg';


export default function API() {
   
  const [dados, setDados] = useState([
      { title: " ", imgUrl: " ", thumb: " "},
      { title: " ", imgUrl: " ", thumb: " "},
      { title: " ", imgUrl: " ", thumb: " "},
      { title: " ", imgUrl: " ", thumb: " "},
  ]);
      
      
    const [indice, setIndice] = useState(0);
    useEffect(() => {
      async function getPhoto() {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const data = await response.json();
  
        setDados(data);
  
        console.log(data);
      }
  
      getPhoto();
    }, []);
  
    return (
      <>
    <Header />
        
        <div className="main">


          <div className="home-left">
            <h2>{dados[indice].title}</h2>
            <a href="https://www.corebiz.ag/pt/" target="_blank" className="veja-mais">
              <span>veja mais</span>
              <Arrow />
            </a>

            <div className="thumbs">
              <button onClick={() => setIndice(0)}>
                <img
                  className={indice === 0 ? "active" : "normal"}
                  src={dados[0].thumbnailUrl}
                  alt="imagem" />
              </button>

              <button onClick={() => setIndice(1)}>
                <img
                  className={indice === 1 ? "active" : "normal"}
                  src={dados[1].thumbnailUrl}
                  alt="imagem" />
              </button>

              <button onClick={() => setIndice(2)}>
                <img
                  className={indice === 2 ? "active" : "normal"}
                  src={dados[2].thumbnailUrl}
                  alt="imagem" />
              </button>

              <button onClick={() => setIndice(3)}>
                <img
                  className={indice === 3 ? "active" : "normal"}
                  src={dados[3].thumbnailUrl}
                  alt="imagem" />
              </button>
            </div>
          </div>

          <div className="home-right">
            <div className="display">
              <img src={dados[indice].thumbnailUrl} alt="banner" className="imagemTab" />
            </div>
          </div>

        </div>

        <Footer />
        </>
);
    }
