import { Observable } from "rxjs";
import { load } from "./loader";

let output = document.getElementById("output");
let button = document.getElementById("button");

let click = Observable.fromEvent(button, "click");

function renderMovies(movies) {
    movies.forEach(m => {
        let div = document.createElement("div");
        div.innerText = m.title;
        output.appendChild(div);
    });
}

let subscription = load("movies.json")
    .subscribe(
    // next
    renderMovies,

    // error
    error => console.log(`error: ${error}`),

    // complete
    () => console.log("complete")
    );

console.log(subscription);
subscription.unsubscribe();

click.flatMap(e => load("movies.json"))
    .subscribe(
    // next
    renderMovies,

    // error
    error => console.log(`error: ${error}`),

    // complete
    () => console.log("complete")
    );


