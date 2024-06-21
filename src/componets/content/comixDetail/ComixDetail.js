import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Используем useNavigate вместо useHistory
import { getComixById } from '../../../services/comixService';
import './ComixDetail.css'; // Импорт CSS файла
import onTopPng from "../../../img/onTop.png"
import viewPng from "../../../img/view.png"

const ComixDetail = () => {
    const { id } = useParams();
    const [comix, setComix] = useState(null);
    const navigate = useNavigate(); // Используем useNavigate

    useEffect(() => {
        const fetchComix = async () => {
            const comixData = await getComixById(id);
            setComix(comixData);
        };

        fetchComix();
    }, [id]);

    if (!comix) return <div>Loading...</div>;

    return (
        <div className="ComixDetail">

            <div className='comixDescription'>
                <div className="comixImg">
                    <img src={comix.coverImage} alt="Comix cover" /> {/* Изменен alt атрибут */}
                </div>

                <div className="comixInfo">
                    <div className='comixTitleDetail'>
                        {comix.title}

                    </div>


                    <div className='metaInfo'>
                        <div className='views contentInfo'><img src={viewPng} width={30} alt="Top Icon" /> <p>{comix.views}</p></div>
                        <div className='dateComix contentInfo'>{comix.year}</div>
                        <div className='status contentInfo'>{comix.status}</div>
                        {comix.inTop && <div className='top'>  <img src={onTopPng} width={30} alt="Top Icon" /></div>}
                    </div>


                </div>

            </div>



            <div className='additionalDesc'>



                <div className='translation detailEl'>
                    <div className='textInfo'>Переводчики</div>
                    <div className='contentInfo'>
                        {comix.translations.map((translation, index) => (
                            <div className="tag" key={index}>{translation}</div>
                        ))}
                    </div>
                </div>


                <div className='publisher detailEl'>
                    <div className='textInfo'>Автор: </div>

                    <div className='contentInfo'>{comix.publisher}</div>


                </div>

                <div className='category detailEl'>
                    <div className='textInfo'>Категроии: </div>
                    <div className='contentInfo'>
                        {comix.genre.map((gen, index) => (
                            <div className="tag" key={index}>{gen}</div>
                        ))}
                    </div>
                </div>
                <div className='detailTags detailEl'>
                    <div className='textInfo'>Теги: </div>
                    <div className='contentInfo'>
                        {comix.tags.map((tag, index) => (
                            <div className="tag" key={index}>{tag}</div>
                        ))}
                    </div>

                </div>
                <div className='desc detailEl'>
                    <div className='textInfo'>Описание: </div>
                    <div className='contentInfo'>{comix.description}</div>
                </div>


            </div>





            <div className='comixContent'>
                {comix.images.map((image, index) => (
                    <div className='imageComix' key={index}>
                        <img src={image} alt={`Comic ${index + 1}`} />
                    </div>
                ))}
            </div>


        </div>
    );
};

export default ComixDetail;
