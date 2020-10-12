import React from 'react';
import "./styles/syles.scss";
import Curso from './Curso';
import Cabecera from './Cabecera'


const cursos = [
  {
      "title": "react native",
      "image": "https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png",
      "price": 30,
      "profesor": "beto quiroga1"

  }, {
    "title": "css",
    "image": "https://soydigital.com/wp-content/uploads/2020/05/CSS3.jpg",
    "price": 30,
    "profesor": "beto quiroga 2"
  }, {
    "title": "java script",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
      "price":40,
      "profesor": "beto quiroga 3"
  },{
    "title": "html",
      "image": "https://p.kindpng.com/picc/s/23-237381_java-html-language-logo-png-transparent-png.png",
      "price": 50,
      "profesor": "beto quiroga 4"
  }
]


const App = () => (
<>
<div className="redimension">
    <Cabecera />
</div>

<div className="ed-grid  m-grid-3"> 
      {
        cursos.map( c => <Curso title={c.titulo} image={c.image} price={c.price} profesor={c.profesor} /> )
      }
</div>
</>
)
export default App;