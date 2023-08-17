class Movie{
    constructor(title, releasedYear, gender, durationInMinutes){
        this._title = title;
        this._releseadYear = releasedYear;
        this._gender = gender;
        this._durationInMinutes = durationInMinutes;
        this._watched = false;
        this._score = 0.0;
    }

    printSelf(){
        /*
            Show object info based on properties
        */
        console.log(`\nTitle: ${this._title}`);
        console.log(`Released: ${this._releseadYear}`);
        console.log(`Gender: ${this._gender}`);
        console.log(`Duration: ${this._durationInMinutes} minutes`);
        console.log(`Watched: ${this._watched ? "Yes" : "No"}`);
        console.log(`Score: ${this._score}\n`);
    }

    setWatched(){
        /*
            Set watched propertie of movie
        */
        this._watched = true;
    }

    rateMovie(score){
        /*
            Set score propertie of movie
        */
        this._score = score;
    }
}

const movie1 = new Movie('Avengers: End Game', 2019, 'Action/Sci-Fi', 182);
const movie2 = new Movie('Fast and Furious 9', 2021, 'Action/Adventure', 143);
const movie3 = new Movie('The Lion King', 2019, 'Kids/Adventure', 120);

movie1.rateMovie(4.8);
movie2.rateMovie(4.9);
movie3.rateMovie(4.3);

movie1.setWatched();
movie3.setWatched();

movie1.printSelf();
movie2.printSelf();
movie3.printSelf();