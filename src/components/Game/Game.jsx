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
import presentsLeft from "../../../public/images/presents-left.svg";
import presentsRight from "../../../public/images/presents-right.svg";
import presentsCenter from "../../../public/images/presents-center.svg";
import balls from "../../../public/images/balls.svg";
import data from "./data.json";
import Link from "next/link";

const getRandomPrediction = () => {
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
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
    <div className="ml-auto mr-auto layout bg-back-mobile lg:bg-back-img bg-no-repeat bg-cover overflow-hidden relative">
      <div className="">
        <div className="flex items-center">
          <Image
            src={logo}
            alt="logo"
            width={73}
            height={27}
            className="mr-2.5 lg:w-[220px] lg:h-[184px] absolute top-12 left-14 lg:top-[-50px] lg:left-24"
          />
          <h2 className=" font-scriptorama text-2xl tracking-[4.8px] lg:text-[40px] absolute top-10 left-[135px] lg:top-5 lg:left-[325px]">
            вітає
          </h2>
          <Image
            src={smallDragon}
            alt="small-dragon"
            width={60}
            height={45}
            className="hidden lg:block absolute lg:top-[50px] lg:left-[65px]"
          />
          <Image
            src={dragon}
            alt="dragon"
            width={53}
            height={71}
            className="absolute top-10 left-2 lg:hidden"
          />
          <Image
            src={balls}
            alt="balls"
            width={124}
            height={176}
            className=" lg:w-[229px] lg:h-[325px] absolute top-0 right-[-50px] lg:-top-4"
          />
        </div>
        <div className="mt-[85px] lg:mt-[130px] mb-6 lg:mb-24">
          <h1 className=" font-scriptorama text-2xl lg:text-[90px] tracking-[4.4px] lg:tracking-[3.2px] text-center">
            З Новим 2024 роком!
          </h1>
        </div>
        <div className="w-[325px] lg:w-[599px] tracking-[1.6px] lg:tracking-[3.2px] lg:leading-9 mb-[400px] lg:mb-[325px] mx-8 lg:ml-24 font-dihjauti text-base lg:text-[32px]">
          <Snowfall snowflakeCount={100} />
          <p className="mb-4 lg:mb-6 ">
            Нехай здійсняться всі бажання! Нехай це буде рік удачі, любові і
            багатства, рік щастя, перемоги і добра!
          </p>
          <p className="mb-4 lg:mb-6">А ще в Новорічну ніч траплються дива!</p>
          <p>
            Відчуйте частинку магії, натисніть на кулю та дізнайтеся своє
            чарівне передбачення на новий рік
          </p>
        </div>
        <div className="hidden lg:block lg:relative">
          <Image
            src={dragon}
            alt="dragon"
            width={194}
            height={261}
            className=" absolute bottom-0 left-0"
          />
          <Image
            src={presentsRight}
            alt="dragon"
            width={294}
            height={294}
            className=" absolute right-0 bottom-[-34px]"
          />
          <Image
            src={presentsCenter}
            alt="presents"
            width={331}
            height={349}
            className="absolute bottom-[-34px] right-[90px]"
          />
        </div>
        <div className=" lg:hidden relative">
          <Image
            src={presentsLeft}
            alt="presents"
            width={231}
            height={249}
            className="absolute bottom-[9px] left-4"
          />
          <Image
            src={presentsRight}
            alt="presents"
            width={231}
            height={249}
            className="absolute bottom-[9px] right-4"
          />
          <Image
            src={presentsCenter}
            alt="presents"
            width={231}
            height={249}
            className="absolute bottom-10 left-[70px]"
          />
        </div>
        <div className="absolute top-[410px] right-[50px] lg:top-[250px] lg:right-[200px]">
          <div className="relative overflow-hidden lg:w-[580px] lg:h-[580px] rounded-full ">
            {snowfallActive && <Snowfall snowflakeCount={3000} />}

            <Image
              src={ball}
              alt="snow-ball"
              width={287}
              height={287}
              className="lg:w-[580px] lg:h-[580px]"
            />
          </div>
          {currentImage && currentImage === "stand" ? (
            <div className="absolute top-[210px] lg:top-[400px]">
              <div className="relative">
                <Image src={paper} alt="stand" width={571} height={228} />
                <p className=" font-dihjauti text-xs lg:text-[25px] w-[200px] lg:w-[443px] absolute top-[50px] left-[40px] lg:top-[90px] lg:left-[60px] text-center lg:leading-9">
                  <p className=" font-scriptorama tracking-widest mb-4 lg:mb-10 lg:text-[32px]">
                    Передбачення:
                  </p>
                  {prediction}
                </p>
              </div>
            </div>
          ) : (
            <div className="absolute top-[240px] right-0 lg:top-[460px] lg:right-[1.5px]">
              <div className=" relative">
                <Image src={stand} alt="stand" width={610} height={228} />
                <button
                  onClick={handlePredictClick}
                  className=" bg-green-600 w-[75px] h-[25px] lg:w-[150px] lg:h-[50px] rounded-md lg:rounded-xl font-dihjauti text-sm lg:text-xl focus:outline-none transform transition-transform duration-200 ease-in-out active:scale-90 absolute top-1/2 left-[110px] lg:left-[220px]"
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

      <div className="absolut bottom-0 left-0 z-10">
        <Link href={`/team`}>
          <p className="text-center font-dihjauti text-xs tracking-[1.2px] z-10">
            Наша команда
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Game;
