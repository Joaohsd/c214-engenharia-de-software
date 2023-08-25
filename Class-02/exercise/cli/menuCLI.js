import Movie from "../entity/movie.js";
import readline from "readline";

const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export default class MenuCLI{
    constructor(){
        this._moviesList = [];
    }

    showHeader(){
        console.log("Welcome to the Menu!");
        console.log("Enter a valid option and enjoy the application!");
        console.log("Options:");
        console.log("1. Add a movie to the list.");
        console.log("2. Set a movie as watched.");
        console.log("3. Rate a movie.");
        console.log("4. Show the list of movies.");
        console.log("5. Left from the menu.");
    }

    async run(){
        let option = -1;

        while(true){
            this.showHeader();
            
            option = await this.question("Enter one option (1-5): ");
            if(option === "5"){
                console.log("Bye!");
                readLine.close();
                break;
            }
            else{
                this.processOption(option);
            }
        }
    }

    question(inputText){
        return new Promise((resolve) => {
            readLine.question(inputText, (ans) => {
                resolve(ans);
            });
        });
    }

    processOption(option){
        switch (option) {
            case "1":
                this.addMovie();
                break;
            case "2":
                this.setMovieAsWatched();
                break;
            case "3":
                this.rateMovie();
                break;
            case "4":
                this.showMovies();
                break;
            default:
                console.log("Wrong entry. Type a valid option!");
                break;
        }
    }

    async addMovie(){
        try{
            let title = await this.question('Enter the movie title:');
            let releasedYear = await this.question('Enter the year it was released:');
            releasedYear = parseInt(releasedYear);
            let genre = await this.question('Enter the genre: (male/female)').toLowerCase();
            let durationInMinutes = await this.question('Enter the duration in minutes:');
            durationInMinutes = parseInt(durationInMinutes);
        }
        catch(error){
            console.log("You've typed something wrong!");
            return;
        }
        const movie = Movie(title, releasedYear, genre, durationInMinutes);
        this._moviesList.push(movie);
        console.log(`Movie ${title} added to the list!`);
    }

    async setMovieAsWatched(){
        const title = await this.question('Enter the movie title: ');
        const movie = await this.searchForMovie(title);

        if(movie){
            movie.setWatched();
            console.log(`${title} has been marked as watched.`);
        } else {
            console.log(`${title} not found in the List.`);
        }
    }

    async rateMovie(){
        const title = await this.question('Enter the movie title: ');
        const movie = await this.searchForMovie(title);

        if(movie){
            const score = await this.question('Score of the movie: ');
            movie.rateMovie(score);
            console.log(`${title} has been marked as watched.`);
        } else {
            console.log(`${title} not found in the List.`);
        }
    }

    showMovies(){
        if(this._moviesList.length === 0){
            console.log("There are not movies present in the List.");
        } else{
            this._moviesList.forEach((element)=>{
                element.printSelf();
            })
        }
    }

    searchForMovie(title){
        return this._moviesList.find(element => element.title === title);
    }
}