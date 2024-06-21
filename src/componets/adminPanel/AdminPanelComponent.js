// import React, { useState } from 'react';
// import AdminPanelService from '../../services/adminPanelService'; // Импортируйте ваш сервис для создания комиксов

// const AdminPanelComponent = () => {
//     const [comixData, setComixData] = useState({
//         title: '',
//         description: '',
//         genre: '',
//         year: '',
//         publisher: '',
//         status: 'ONGOING',
//         coverImage: null,
//         additionalImages: [],
//         inTop: false,
//         tags: [],
//         translations: [],
//         similarComix: []
//     });



//     const handleChange = (event) => {
//         const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
//         setComixData({ ...comixData, [event.target.name]: value });
//     };

//     const handleCoverImageChange = (event) => {
//         setComixData({ ...comixData, coverImage: event.target.files[0] });
//     };

//     const handleAdditionalImagesChange = (event) => {
//         setComixData({ ...comixData, additionalImages: [...comixData.additionalImages, ...event.target.files] });
//     };

//     const handleTagsChange = (event) => {
//         setComixData({ ...comixData, tags: event.target.value.split(',') });
//     };

//     const handleTranslationsChange = (event) => {
//         setComixData({ ...comixData, translations: event.target.value.split(',') });
//     };

//     const handleSimilarComixChange = (event) => {
//         setComixData({ ...comixData, similarComix: event.target.value.split(',') });
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const formData = new FormData();
//         formData.append('title', comixData.title);
//         formData.append('description', comixData.description);
//         formData.append('genre', comixData.genre);
//         formData.append('year', comixData.year);
//         formData.append('publisher', comixData.publisher);
//         formData.append('inTop', comixData.inTop);
//         formData.append('status', comixData.status);
//         formData.append('similarComix', comixData.similarComix);
//         formData.append('file', comixData.coverImage);
//         for (let i = 0; i < comixData.additionalImages.length; i++) {
//             formData.append('files', comixData.additionalImages[i]);
//         }
//         comixData.tags.forEach(tag => {
//             formData.append('tags', tag);
//         });
//         comixData.translations.forEach(translation => {
//             formData.append('translations', translation);
//         });
//         comixData.similarComix.forEach(similar => {
//             formData.append('similarComix', similar);
//         });
//         try {
//             await AdminPanelService(formData);
//             alert('Комикс успешно создан');
//         } catch (error) {
//             console.error('Ошибка при создании комикса:', error);
//             alert('При создании комикса произошла ошибка');
//         }
//     };

//     const handleAddImageField = () => {
//         const input = document.createElement('input');
//         input.type = 'file';
//         input.name = 'additionalImages';
//         input.multiple = true;
//         input.onchange = handleAdditionalImagesChange;
//         document.getElementById('additional-images-container').appendChild(input);
//     };

//     return (
//         <div className='adminPanelContent'>
//             <form onSubmit={handleSubmit} className="admin-panel-form">
//                 <label>Название:</label>
//                 <input type="text" name="title" value={comixData.title} onChange={handleChange} />

//                 <label>Описание:</label>
//                 <textarea value={comixData.description} onChange={handleChange} name="description"></textarea>

//                 <label>Жанр:</label>
//                 <input type="text" value={comixData.genre} onChange={handleChange} name="genre" placeholder="Значения через запятую" />

//                 <label>Год:</label>
//                 <input type="number" value={comixData.year} onChange={handleChange} name="year" />

//                 <label>Издатель:</label>
//                 <input type="text" value={comixData.publisher} onChange={handleChange} name="publisher" />

//                 <label>
//                     В топе:
//                     <input type="checkbox" name="inTop" checked={comixData.inTop} onChange={handleChange} />
//                 </label>

//                 <label>Статус:</label>
//                 <select value={comixData.status} onChange={handleChange} name="status">
//                     <option value="ONGOING">Продолжается</option>
//                     <option value="CLOSED">Закрыт</option>
//                     <option value="ETC">Прочее</option>
//                 </select>

//                 <label>Обложка:</label>
//                 <input type="file" name="coverImage" onChange={handleCoverImageChange} />

//                 <label>Дополнительные изображения:</label>
//                 <div id="additional-images-container">
//                     <input type="file" name="additionalImages" multiple onChange={handleAdditionalImagesChange} />
//                 </div>
//                 <button type="button" onClick={handleAddImageField}>Добавить изображение</button>

//                 <label>Теги:</label>
//                 <input type="text" value={comixData.tags.join(',')} onChange={handleTagsChange} />

//                 <label>Переводы:</label>
//                 <input type="text" value={comixData.translations.join(',')} onChange={handleTranslationsChange} />

//                 {/* Добавим поле для похожих комиксов */}
//                 <label>Похожие комиксы:</label>
//                 <input type="text" value={comixData.similarComix.join(',')} onChange={handleSimilarComixChange} />

//                 <button type="submit">Добавить</button>
//             </form>
//         </div>
//     );
// };

// export default AdminPanelComponent;


import React, { useState } from 'react';
import axios from 'axios';
import "./AdminPanelComponent.css"

const AdminPanelComponent = () => {
    const [comixData, setComixData] = useState({
        title: '',
        description: '',
        genre: '',
        year: '',
        publisher: '',
        status: 'ONGOING',
        coverImage: null,
        additionalImages: [],
        inTop: false,
        tags: [],
        translations: [],
        similarComix: []
    });

    const handleChange = (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setComixData({ ...comixData, [event.target.name]: value });
    };

    const handleCoverImageChange = (event) => {
        setComixData({ ...comixData, coverImage: event.target.files[0] });
    };

    const handleAdditionalImagesChange = (event) => {
        setComixData({ ...comixData, additionalImages: [...comixData.additionalImages, ...event.target.files] });
    };

    const handleTagsChange = (event) => {
        setComixData({ ...comixData, tags: event.target.value.split(',') });
    };

    const handleTranslationsChange = (event) => {
        setComixData({ ...comixData, translations: event.target.value.split(',') });
    };

    const handleSimilarComixChange = (event) => {
        setComixData({ ...comixData, similarComix: event.target.value.split(',') });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', comixData.title);
        formData.append('description', comixData.description);
        formData.append('genre', comixData.genre);
        formData.append('year', comixData.year);
        formData.append('publisher', comixData.publisher);
        formData.append('inTop', comixData.inTop);
        formData.append('status', comixData.status);
        formData.append('file', comixData.coverImage);
        for (let i = 0; i < comixData.additionalImages.length; i++) {
            formData.append('files', comixData.additionalImages[i]);
        }
        comixData.tags.forEach(tag => {
            formData.append('tags', tag);
        });
        comixData.translations.forEach(translation => {
            formData.append('translations', translation);
        });
        comixData.similarComix.forEach(similar => {
            formData.append('similarComix', similar);
        });

        const token = localStorage.getItem('token');

        try {
            await axios.post('/api/comix/createComix', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            });
            alert('Комикс успешно создан');
        } catch (error) {
            console.error('Ошибка при создании комикса:', error);
            alert('При создании комикса произошла ошибка');
        }
    };

    const handleAddImageField = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.name = 'additionalImages';
        input.multiple = true;
        input.onchange = handleAdditionalImagesChange;
        document.getElementById('additional-images-container').appendChild(input);
    };

    return (
        <div className='adminPanelContent'>
            <form onSubmit={handleSubmit} className="admin-panel-form">
                <label>Название:</label>
                <input type="text" name="title" value={comixData.title} onChange={handleChange} />

                <label>Описание:</label>
                <textarea value={comixData.description} onChange={handleChange} name="description"></textarea>

                <label>Жанр:</label>
                <input type="text" value={comixData.genre} onChange={handleChange} name="genre" placeholder="Значения через запятую" />

                <label>Год:</label>
                <input type="text" value={comixData.year} onChange={handleChange} name="year" />

                <label>Издатель:</label>
                <input type="text" value={comixData.publisher} onChange={handleChange} name="publisher" />

                <label>
                    В топе:
                    <input type="checkbox" name="inTop" checked={comixData.inTop} onChange={handleChange} />
                </label>

                <label>Статус:</label>
                <select value={comixData.status} onChange={handleChange} name="status">
                    <option value="ONGOING">Продолжается</option>
                    <option value="CLOSED">Закрыт</option>
                    <option value="ETC">Прочее</option>
                </select>

                <label>Обложка:</label>
                <input type="file" name="coverImage" onChange={handleCoverImageChange} />

                <label>Дополнительные изображения:</label>
                <div id="additional-images-container">
                    <input type="file" name="additionalImages" multiple onChange={handleAdditionalImagesChange} />
                </div>
                <button type="button" onClick={handleAddImageField}>Добавить изображение</button>

                <label>Теги:</label>
                <input type="text" value={comixData.tags.join(',')} onChange={handleTagsChange} />

                <label>Переводы:</label>
                <input type="text" value={comixData.translations.join(',')} onChange={handleTranslationsChange} />

                <label>Похожие комиксы:</label>
                <input type="text" value={comixData.similarComix.join(',')} onChange={handleSimilarComixChange} />

                <button type="submit">Добавить</button>
            </form>
        </div>
    );
};

export default AdminPanelComponent;
