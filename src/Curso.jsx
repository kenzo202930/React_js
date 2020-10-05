import React from 'react';


const curso  = {
    "title": "React desde cero",
    "image": "https://img.blogs.es/smartcitylab/wp-content/uploads/2020/01/ciudades-con-empleo-y-trabajo-densidad-poblacional-1920x960.jpg",
    "price": "100uds"
}

const Curso = () => (
    <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <img src={curso.image} alt={curso.tile} />
    
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="center">{curso.title}</h3>   
        <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="#">{ `$ ${curso.price}`}</a>
        </div>
    </div>
    </article>  
)
export default Curso;