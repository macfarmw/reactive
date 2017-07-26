import { Observable } from "rxjs";
import { loadWithFetch } from "./loader";

let timer = Observable.interval(3000);

timer.subscribe(
    value => console.log(`value: ${value}`)
)


// let output = document.getElementById("output");
// let button = document.getElementById("button");

// let click = Observable.fromEvent(button, "click");

// function renderMovies(movies) {
//     console.log('Calling renderMovies');
//     movies.forEach(m => {
//         let div = document.createElement("div");
//         div.innerText = m.title;
//         output.appendChild(div);
//     });
// }

// loadWithFetch("moviess.json")
//     .subscribe(renderMovies, 
//     e => console.log(`My error: ${e}`),
//     () => console.log("My complete")
// )

// click.flatMap(e => loadWithFetch("moviess.json"))
//     .subscribe(
//     // next
//     renderMovies,

//     // error
//     error => console.log(`error: ${error}`),

//     // complete
//     () => console.log("complete")
// );


