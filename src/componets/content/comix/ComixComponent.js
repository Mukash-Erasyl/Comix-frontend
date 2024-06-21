import React from 'react';
import './Comix.css'; // Импорт CSS файла

const Comix = ({ comix }) => {
  return (
    <div className="Comix"> {/* Применяем класс для стилизации */}
      <div className="comixImg">
        <img src={comix.coverImage} alt="Cover Image" />
      </div>
      <div className='comixInfo'>
        <div className='comixTitle'>
          <p>{comix.title}</p>
        </div>
        <div className='tags'>
          {comix.tags.map((tag, index) => (
            <div className='tag' key={index}>{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Comix;
