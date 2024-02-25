import { renderPokemonCards } from "./helpers.js";

// Setting our API url
const pokeAPI = "https://localhost:3000/pokemon";

// Creating a new request
function handleResponse() {
  const { results } = JSON.parse(this.response);
  appendPokemonElements(results);
}

const request = new XMLHttpRequest();

request.addEventListener("load", handleResponse);

// method open() https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open

// Definition: Initializes a newly-created request, or re-initializes an existing one.
// Parameters:
//      open(
//          HTTP Request Method,    * required: "GET", "POST", "PUT", "DELETE"
//          url,                    * required: URL of the resource to send the request to
//          Async Boolean,          optional: defaults to null
//          user,                   optional: defaults to null
//          password                optional: defaults to null
//          )

request.open("GET", pokeAPI, true);

// Send the request
request.send();
