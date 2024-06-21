import React, { useState, useEffect } from 'react';
import { searchComix, getComixByPage, getComix, updateComixViews } from '../../services/comixService'; // Импорт сервиса
import Comix from './comix/ComixComponent';
import styles from "./Comix.module.css"; // Импорт модульного файла стилей
import { useNavigate, useParams, useLocation } from 'react-router-dom'; // Импорт хука useParams
import Pagination from '../pagination/PaginationComponent';

const ComixList = () => {
    const [comixList, setComixList] = useState([]);
    const [totalComix, setTotalComix] = useState(0);
    const navigate = useNavigate();
    const { keyword } = useParams();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const pageNumber = searchParams.get('pageNumber');

    useEffect(() => {
        const fetchData = async () => {
            let comixData;

            const allComix = await getComix(); // Предположим, что getComix возвращает все комиксы
            setTotalComix(allComix.length);

            if (keyword) {
                comixData = await searchComix(keyword); // Вызываем searchComix, если keyword не пустой
            } else {
                const currentPageNumber = pageNumber ? parseInt(pageNumber) - 1 : 0; // Переводим номер страницы в число и уменьшаем на 1
                comixData = await getComixByPage(currentPageNumber, 12); // Получаем страницу комиксов

            }
            setComixList(comixData);
        };

        fetchData();
    }, [keyword, pageNumber]); // Добавляем keyword и pageNumber в зависимости useEffect

    const handleComixClick = async (id, views) => {
        try {
            // Increase the views by 1
            const newViews = views + 1;

            // Update the views in the backend
            await updateComixViews(id, newViews);

            // Navigate to the detailed view of the comic
            navigate(`/comix/${id}`);
        } catch (error) {
            console.error('Error updating comix views:', error);
        }
    };

    const onPageChange = (page) => {
        navigate(`/ComixList?pageNumber=${page}`);
    };

    return (
        <div className={styles.content}>
            <ul className={styles.ComixList}>
                {comixList.map(comix => (
                    <li key={comix.id} onClick={() => handleComixClick(comix.id, comix.views)}>
                        <Comix comix={comix} />
                    </li>
                ))}
            </ul>
            <div className={styles.peginationClass}>
                <Pagination
                    currentPage={pageNumber || 1}
                    totalComics={totalComix}
                    comicsPerPage={12}
                    onPageChange={onPageChange}
                />
            </div>
        </div>
    );
};

export default ComixList;