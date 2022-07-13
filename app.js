let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = prompt('Сколько фильмов вы уже просмотрели?', '')
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже просмотрели?', '')
        }
    },
    rememberMyFilms: () => {
        for (let i = 1; i <= 2; i++) {
            let oneFilm = prompt('Один из последних просмотренных фильмов?', '')
            let howOneFilm = prompt('На сколько оцените его?', '')
            if (oneFilm.length < 50 && oneFilm != null && howOneFilm != null && oneFilm != '' && howOneFilm != '') {
                personalMovieDB.movies[oneFilm] = howOneFilm
            } else {
                i--
            }
        }
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов!')
        } else if (personalMovieDB.count <= 30) {
            alert('Вы классический зритель!')
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман!')
        } else {
            alert('Произошла ошибка')
        }
    },
    showMyDB: (privat) => {
        if (!privat) {
            console.log(personalMovieDB)
        }
    },
    writeYourGenders: () => {
        for (let i = 1; i < 4; i++) {
            let answer = prompt(`Ваш любимый жанр под номером ${i}`, '')
            if (answer === '' || answer === null) {
                i--
                console.log('Попробуйте еще раз')
            } else {
                personalMovieDB.genres.push(answer)
            }
        }
        personalMovieDB.genres.forEach((genr, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${genr}`)
        })
    },
    toggleVisibleMyDB: () => {
        personalMovieDB.privat !== false ? personalMovieDB.privat = false : personalMovieDB.privat = true
    }
}