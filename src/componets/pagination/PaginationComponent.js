import React, { useEffect } from 'react';
import './PaginationComponent.css';

const Pagination = ({ currentPage, totalComics, comicsPerPage, onPageChange }) => {
    const totalPages = Math.ceil(totalComics / comicsPerPage);
    const pageRange = 3; // Количество страниц, отображаемых вокруг текущей

    useEffect(() => {
        // Проверка на первую загрузку
        if (currentPage == 1) onPageChange(1);
    }, []); // Пустой массив зависимостей означает, что эффект будет запускаться только при монтировании компонента

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
            window.scrollTo(0, 0); // Прокрутка страницы вверх
        }
    };
    const handleLast = () => {
        onPageChange(totalPages);
        window.scrollTo(0, 0); // Прокрутка страницы вверх
    };

    const handleFirst = () => {
        onPageChange(1);
        window.scrollTo(0, 0); // Прокрутка страницы вверх
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(parseInt(currentPage) + 1);
            window.scrollTo(0, 0); // Прокрутка страницы вверх
        }
    };

    const handlePageClick = (page) => {
        onPageChange(page);
        window.scrollTo(0, 0); // Прокрутка страницы вверх
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const startPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
        const endPage = Math.min(totalPages, startPage + pageRange - 1);

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    className={`page-number ${i == currentPage ? 'active' : ''}`}
                    onClick={() => handlePageClick(i)}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div className="pagination">
            <button onClick={handleFirst} className={currentPage == 1 ? 'hidden' : ''}>
                1
            </button>
            <button onClick={handlePrevious} disabled={currentPage == 1}>
                {"<-"}
            </button>
            {renderPageNumbers()}
            <button onClick={handleNext} disabled={currentPage == totalPages}>
                {"->"}
            </button>
            <button onClick={handleLast} className={currentPage == totalPages ? 'hidden' : ''}>
                {totalPages}
            </button>
        </div>
    );
};

export default Pagination;
