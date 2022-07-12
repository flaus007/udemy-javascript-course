let numberOfFilms = prompt('Сколько фильмов вы уже просмотрели?', '')

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let oneFilm, howOneFilm

for (let i = 1; i <= personalMovieDB.count; i++) {
    oneFilm = prompt('Один из последних просмотренных фильмов?', '')
    howOneFilm = prompt('На сколько оцените его?', '')
    if (oneFilm.length < 50 && oneFilm != null && howOneFilm != null && oneFilm != '' && howOneFilm != '') {
        personalMovieDB.movies[oneFilm] = howOneFilm
    } else {
        i--
    }
}

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов!')
} else if (personalMovieDB.count <= 30) {
    alert('Вы классический зритель!')
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман!')
} else {
    alert('Произошла ошибка')
}

let i = 0;

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