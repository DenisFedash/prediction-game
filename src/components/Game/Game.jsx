"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Howl } from "howler";
import ball from "../../../public/images/snow-ball.svg";
import paper from "../../../public/images/paper.svg";
import stand from "../../../public/images/stand.svg";
import Image from "next/image";
import Snowfall from "react-snowfall";
import logo from "../../../public/images/logo.svg";
import smallDragon from "../../../public/images/small-dragon.svg";
import dragon from "../../../public/images/dragon.svg";
import presents from "../../../public/images/presents.svg";
import balls from "../../../public/images/balls.svg";

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
  const [currentImage, setCurrentImage] = useState(stand);

  const handlePredictClick = () => {
    const newPrediction = getRandomPrediction();
    setPrediction(newPrediction);
    setSnowfallActive(true);

    setCurrentImage(currentImage === "stand" ? "paper" : "stand");

    sound.play(); // Відтворення звуку при кожному кліку
  };

  const handleDocumentClick = useCallback(() => {
    if (currentImage === "stand") {
      setCurrentImage("paper");
    }
  }, [currentImage]);

  useEffect(() => {
    // Добавляем обработчик событий клика на весь документ при монтировании компонента
    document.addEventListener("click", handleDocumentClick);

    // Очищаем обработчик при размонтировании компонента
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [handleDocumentClick]);

  return (
    <div className="">
      <div className="flex items-center relative ml-24 mt-4">
        <Image
          src={logo}
          alt="logo"
          width={220}
          height={184}
          className="mr-2.5"
        />
        <h2 className=" font-scriptorama text-[40px]">вітає</h2>
        <Image
          src={smallDragon}
          alt="small-dragon"
          width={60}
          height={45}
          className="absolute top-[50px] left-[-25px]"
        />
        <Image
          src={balls}
          alt="balls"
          width={229}
          height={325}
          className="absolute -top-4 right-0"
        />
      </div>
      <div className="mb-12">
        <h1 className=" font-scriptorama text-[90px] tracking-[3.2px] text-center">
          З Новим 2024 роком!
        </h1>
      </div>
      <div className="w-[599px] mb-6 ml-24 font-dihjauti text-[32px]">
        <p className="mb-6 ">
          Нехай здійсняться всі бажання! Нехай це буде рік удачі, любові і
          багатства, рік щастя, перемоги і добра!
        </p>
        <p className="mb-6">А ще в Новорічну ніч траплються дива!</p>
        <p>
          Відчуйте частинку магії, натисніть на кулю та дізнайтеся своє чарівне
          передбачення на новий рік
        </p>
      </div>
      <div className="flex justify-between">
        <Image src={dragon} alt="dragon" width={194} height={261} />
        <Image src={presents} alt="dragon" width={194} height={194} />
      </div>
      <div className="absolute top-[300px] right-[200px]">
        <div
          className="relative overflow-hidden w-[580px] h-[580px] rounded-full "
          onClick={handlePredictClick}
          type="button"
        >
          {snowfallActive && <Snowfall snowflakeCount={3000} />}

          <Image src={ball} alt="snow-ball" width={580} height={580} />
        </div>
        {currentImage && currentImage === "stand" ? (
          <div className="absolute top-[400px]">
            <div className="relative">
              <Image src={paper} alt="stand" width={571} height={228} />
              <p className=" font-dihjauti text-[32px] w-[443px] absolute top-[130px] left-[60px] text-center">
                {prediction}
              </p>
            </div>
          </div>
        ) : (
          <div className="absolute top-[460px] right-[1.5px]">
            <div className=" relative">
              <Image src={stand} alt="stand" width={610} height={228} />
              <button
                onClick={handlePredictClick}
                className=" bg-green-600 w-[150px] h-[50px] rounded-xl font-dihjauti text-xl focus:outline-none transform transition-transform duration-200 ease-in-out active:scale-90 absolute top-1/2 left-[220px]"
              >
                Тиць!
              </button>
            </div>
          </div>
        )}
      </div>
      <button onClick={handlePredictClick} className="hidden">
        Изменить картинку
      </button>
    </div>
  );
};

export default Game;
