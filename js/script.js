/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numOfFilms;

function start() {
    numOfFilms = +prompt('Сколько фильмов ты видел?', '');

    while(numOfFilms == '' || numOfFilms == null || isNaN(numOfFilms)){
        numOfFilms = +prompt('Сколько фильмов ты видел?', '');
    }
}

start();


const personalMovieDB = {
    count: numOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// const a = prompt("Ваш любимый жанр под номером ${номер по порядку}")

// function writeYourGenres(){
//     for ( let i = 0; i < 3; i++ ){
//         personalMovieDB.genres = [a];
//     }
// }



function rememberMyFilms(){

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
}

// rememberMyFilms();

function detectPersonalLevel(){
    if(numOfFilms < 10){
        console.log('Ты смотрел мало фильмов');
    }else if(numOfFilms < 30 && numOfFilms >= 10){
        console.log('Ты классический зритель');
    }else if(numOfFilms > 30){
        console.log('Ты киноман');
    }else{
        console.log('Вышла ошибочка');
    }
}

// detectPersonalLevel();

function showMyDB(hidden){
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();