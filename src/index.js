function displayJoke(response) {
  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: "",
  });
}

function triggerAIPrompt(event) {
  event.preventDefault();
  let apiKey = "4f2360cc5d2fbf9f02a9o90ddad3f50t";
  let context =
    "You are a polite and gender inclusive assistant that respect everybody. you are also extremelly witted and tell the best jokes. the jokes are not very long but they are great and clever.";
  let prompt = "tell me a joke";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let jokeElement = document.querySelector("#joke");
  jokeElement.innerHTML = "Let me think of something witty...";

  axios.get(apiUrl).then(displayJoke);
}

let button = document.querySelector("#button");
button.addEventListener("click", triggerAIPrompt);
