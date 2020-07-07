/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов ты видел?', '');
    
        while(personalMovieDB.count == '' || numOfFilms == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов ты видел?', '');
        }
    },
    rememberMyFilms: function (){

        for ( let i = 0; i < 2; i++ ){
    
            const a = prompt('Какие фильмы ты смотрел?', ''),
                b = prompt('Какая оценка?', '');
    
            if ( a != null && b != null && a != '' && b != '' && a.length < 50 ){
                personalMovieDB.movies[a] = b;
                console.log('OK');
            }else{
                console.log('Not OK');
                i--;
            }
        }
    },
    detectPersonalLevel: function (){
        if(personalMovieDB.count < 10){
            console.log('Ты смотрел мало фильмов');
        }else if(personalMovieDB.count < 30 && personalMovieDB.count >= 10){
            console.log('Ты классический зритель');
        }else if(personalMovieDB.count > 30){
            console.log('Ты киноман');
        }else{
            console.log('Вышла ошибочка');
        }
    },
    showMyDB: function (hidden){
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
            
        /* 3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
        Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
        при помощи метода forEach вывести в консоль сообщения в таком виде:
        "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

    writeYourGenres: function(){
        for (let i = 1; i < 2; i++ ){
            let genres = prompt(`Введите жанры через запятую`).toLocaleLowerCase();

            if ( genres == '' || genres == null){
                    console.log('Возможно вы не ввели жанр!');
                    i--;
            }else{
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
            });
    
    },



    // Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
    // переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat){
            return personalMovieDB.privat == false;
        }else{
            personalMovieDB.privat = true;
        }

    }

};

// console.log(personalMovieDB.showMyDB);