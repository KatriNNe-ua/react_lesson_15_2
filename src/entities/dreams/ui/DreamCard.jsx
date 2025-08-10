import { Fragment } from "react";

export const DreamCard=({ dream, actions }) =>{
	return (
    <div className="dream__item">
      <div className="dream__description dream__info">
        Моя мрія:
        <span>{dream.description}</span>
      </div>
      <div className="dream__year dream__info">
        Рік досягнення:<span>{dream.year}</span> 
      </div>
      <div className="dream__friend dream__info">
        Друг для мрії:<span>{dream.friend}</span>
      </div>
      <div className="dream__actions">
        {actions &&
          actions.map((action, index) => (
            <Fragment key={index}>{action}</Fragment>
          ))}
      </div>
    </div>
  );
}