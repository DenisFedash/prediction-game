"use client";
import React, { useEffect, useState } from "react";
import { Howl } from "howler";
import styles from "./style.module.css";
import ball from "../../../public/images/snow-ball.svg";
import stand from "../../../public/images/stand.svg";
import Image from "next/image";
import Snowfall from "react-snowfall";
import ModalWindow from "../Modal/Modal";
import { useDisclosure } from "@mantine/hooks";

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
  const [snowfallActive, setSnowfallActive] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);

  const handlePredictClick = () => {
    const newPrediction = getRandomPrediction();
    setPrediction(newPrediction);
    setSnowfallActive(true);
    setModalOpened(true);
    sound.play(); // Відтворення звуку при кожному кліку
  };

  const handleModalClose = () => {
    setModalOpened(false);
  };

  return (
    <div className=" ">
      {/* <main className={styles.main}>
        <h1 className={styles.title}>Гра-передбачення Нового Року</h1>
        <button className={styles.button} onClick={handlePredictClick}>
          Клацніть, щоб отримати передбачення
        </button>
        {prediction && (
          <div className={styles.prediction}>
            <p>{prediction}</p>
          </div>
        )}
      </main> */}
      <div className="flex flex-row-reverse">
        <div className=" relative w-[580px] h-[580px] rounded-full overflow-hidden">
          {snowfallActive && <Snowfall snowflakeCount={3000} />}

          <Image src={ball} alt="snow-ball" width={580} height={580} />
        </div>
        <div className="absolute bottom-[275px] right-0">
          <Image src={stand} alt="stand" width={571} height={228} />
        </div>
      </div>
      <p className=" text-center">{prediction}</p>
      <button onClick={handlePredictClick} type="button" className="">
        Запустить снегопад
      </button>
      {/* <ModalWindow
        opened={modalOpened}
        onClose={handleModalClose}
        prediction={prediction}
      /> */}
    </div>
  );
};

export default Game;
