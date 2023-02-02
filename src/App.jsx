import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSpeechSynthesis } from "react-speech-kit";
import { getJoke } from "./api/joke.api";

function App() {
  const { speak } = useSpeechSynthesis();
  const [joke, setJoke] = useState(false);

  const jokeQuery = useQuery(["joke"], getJoke, {
    refetchOnWindowFocus: false,
    enabled: joke,
    onSuccess: (joke) => {
      speak({ text: joke });
      setJoke(false);
    },
  });

  return (
    <div className="container">
      <button
        className="btn my-[1rem] "
        onClick={() => setJoke(true)}
        disable={`${joke}`}
      >
        {joke ? "loading joke..." : "Tell Me A Joke"}
      </button>
    </div>
  );
}

export default App;
