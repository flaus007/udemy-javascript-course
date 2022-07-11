let numberOfFilms = prompt('Сколько фильмов вы уже просмотрели?', '')

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let oneFilm = prompt('Один из последних просмотренных фильмов?', ''),
    howFilm = prompt('На сколько оцените его?', '')

personalMovieDB.movies.oneFilm = howFilm

console.log(personalMovieDB)