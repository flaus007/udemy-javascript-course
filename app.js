let numberOfFilms

const start = () => {
    numberOfFilms = prompt('Сколько фильмов вы уже просмотрели?', '')

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже просмотрели?', '')
    }
}

start()

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let oneFilm, howOneFilm

const rememberMyFilms = () => {
    for (let i = 1; i <= 2; i++) {
        oneFilm = prompt('Один из последних просмотренных фильмов?', '')
        howOneFilm = prompt('На сколько оцените его?', '')
        if (oneFilm.length < 50 && oneFilm != null && howOneFilm != null && oneFilm != '' && howOneFilm != '') {
            personalMovieDB.movies[oneFilm] = howOneFilm
        } else {
            i--
        }
    }
}

rememberMyFilms()

const detectPersonalLevel = () => {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов!')
    } else if (personalMovieDB.count <= 30) {
        alert('Вы классический зритель!')
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман!')
    } else {
        alert('Произошла ошибка')
    }
}

detectPersonalLevel()

const showMyDB = () => {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB)
    }
}

showMyDB()

const writeyourGenres = () => {
    for (let i = 1; i < 4; i++) {
        let answer = prompt(`Ваш любимый жанр под номером ${i}`, '')
        personalMovieDB.genres.push(answer)
    }
}

writeyourGenres()
// -------------

// let i = 0;

// do {
//     oneFilm = prompt('Один из последних просмотренных фильмов?', '')
//     howOneFilm = prompt('На сколько оцените его?', '')
//     if (oneFilm.length < 50 && oneFilm != null && howOneFilm != null && oneFilm != '' && howOneFilm != '') {
//         personalMovieDB.movies[oneFilm] = howOneFilm
//     } else {
//         i--
//     }
//     i++
// } while (i < personalMovieDB.count)

// while (i < personalMovieDB.count) {
//     oneFilm = prompt('Один из последних просмотренных фильмов?', '')
//     howOneFilm = prompt('На сколько оцените его?', '')
//     if (oneFilm.length < 50 && oneFilm != null && howOneFilm != null && oneFilm != '' && howOneFilm != '') {
//         personalMovieDB.movies[oneFilm] = howOneFilm
//     } else {
//         i--
//     }
//     i++
// }

console.log(personalMovieDB)