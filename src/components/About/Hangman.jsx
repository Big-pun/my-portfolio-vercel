import { useState } from "react";
import { motion } from "framer-motion";

export default function Hangman() {
  const [chosenWord] = useState("clean-code");
  const [guesses, setGuesses] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);
  const [remainingLives, setRemainingLives] = useState(10);
  const [wtfPositions, setWtfPositions] = useState([]);

  const checkGuess = (letter) => {
    if (guesses.includes(letter) || incorrectGuesses.includes(letter)) {
      return;
    }

    if (chosenWord.includes(letter)) {
      setGuesses([...guesses, letter]);
    } else {
      setIncorrectGuesses([...incorrectGuesses, letter]);
      setRemainingLives(remainingLives - 1);
      addRandomWtfPosition();
    }
  };

  const addRandomWtfPosition = () => {
    const randomX = Math.random() * 80 + 10; // Random percentage between 10% and 90%
    const randomY = Math.random() * 80 + 10; // Random percentage between 10% and 90%
    setWtfPositions([...wtfPositions, { x: randomX, y: randomY }]);
  };

  const displayWord = () => {
    return chosenWord
      .split("")
      .map((letter) =>
        guesses.includes(letter) || letter === "-" ? letter : "_"
      )
      .join(" ");
  };

  const isWinner = displayWord().replace(/\s/g, "") === chosenWord;
  const isGameOver = remainingLives === 0;

  const keyboardLayout = [
    "qwertyuiop".split(""),
    "asdfghjkl".split(""),
    "zxcvbnm".split(""),
  ];

  return (
    <div className="text-center mt-12 bg-slate-700 bg-opacity-50 rounded-lg py-4">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-green bg-clip-text text-transparent">Hangman</h2>
      <h3 className="text-xl font-mono tracking-wider">{displayWord()}</h3>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-red-500 text-xl font-semibold mt-4"
      >
        <p>Trials left : {remainingLives}</p>
      </motion.div>

      {isWinner && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-green-600 font-bold text-lg mt-4"
        >
          Congratulation !!! You Won !!!
        </motion.div>
      )}

      {isGameOver && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-red-600 font-bold text-lg mt-4"
        >
          You lost !!! The correct answer is &quot;{chosenWord}&quot;.
        </motion.div>
      )}

      <div className="mt-8">
        <h3 className="text-xl font-semibold">Hint:</h3>
        <div className="relative mx-auto w-48 h-64 border-4 border-gray-700 bg-yellow-50 rounded-md mt-4">
          <h4 className="text-lg font-semibold text-center mt-2 border border-black text-black ">Code review</h4>
          <div className="absolute bottom-24 right-6 w-6 h-6 bg-gray-600 rounded-full border-2 border-gray-800"></div>

          {wtfPositions.map((pos, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute font-bold text-red-600 text-xl"
              style={{
                top: `${pos.y}%`,
                left: `${pos.x}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              WTF
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-semibold mb-4">Try a letter :</h4>
        {keyboardLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="mb-2">
            {row.map((letter) => (
              <button
                key={letter}
                onClick={() => checkGuess(letter)}
                disabled={
                  guesses.includes(letter) || incorrectGuesses.includes(letter)
                }
                className={`text-white font-bold py-2 px-2 rounded-md m-1 transition-colors ${guesses.includes(letter) || incorrectGuesses.includes(letter)
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-600"
                  }`}
              >
                {letter}
              </button>
            ))}
          </div>
        ))}
      </div>


    </div>
  );
}
