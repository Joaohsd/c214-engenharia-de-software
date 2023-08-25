export default class Movie{
    constructor(title, releasedYear, genre, durationInMinutes){
        this._title = title;
        this._releseadYear = releasedYear;
        this._genre = genre;
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
        console.log(`Genre: ${this._genre}`);
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