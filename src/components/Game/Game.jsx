"use client";
import React, { useEffect, useState } from "react";
import { Howl } from "howler";
import styles from "./style.module.css";

const predictions = [
  "Ваше бажання збудеться!",
  "Очікуйте несподіванок!",
  "Новий рік принесе вам щастя!",
  "Будьте уважні у подорожах!",
  "Познайомтеся з новими друзями!",
  "Зосередьте увагу на своїх мріях!",
];

const getRandomPrediction = () => {
  const randomIndex = Math.floor(Math.random() * predictions.length);
  return predictions[randomIndex];
};

const sound = new Howl({
  src: ["/sounds/Zvuk-poyavenia-chudo.mp3"], // Замініть це шляхом до свого аудіофайлу
});

const Game = () => {
  const [prediction, setPrediction] = useState(null);

  const handlePredictClick = () => {
    const newPrediction = getRandomPrediction();
    setPrediction(newPrediction);
    sound.play(); // Відтворення звуку при кожному кліку
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Гра-передбачення Нового Року</h1>
        <button className={styles.button} onClick={handlePredictClick}>
          Клацніть, щоб отримати передбачення
        </button>
        {prediction && (
          <div className={styles.prediction}>
            <p>{prediction}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Game;
