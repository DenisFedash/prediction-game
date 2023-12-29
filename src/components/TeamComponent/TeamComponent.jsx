"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Snowfall from "react-snowfall";
import logo from "../../../public/images/logo.svg";
import smallDragon from "../../../public/images/small-dragon.svg";
import dragon from "../../../public/images/dragon.svg";
import presentsLeft from "../../../public/images/presents-left.svg";
import presentsRight from "../../../public/images/presents-right.svg";
import presentsCenter from "../../../public/images/presents-center.svg";
import balls from "../../../public/images/balls.svg";
import dataTeam from "./dataTeam.json";

console.log("dataTeam", dataTeam);

const TeamComponent = () => {
  return (
    <div className="ml-auto mr-auto layout bg-back-mobile lg:bg-back-img bg-no-repeat bg-cover overflow-hidden relative">
      <Snowfall snowflakeCount={100} />
      <div className="flex items-center">
        <Image
          src={logo}
          alt="logo"
          width={73}
          height={27}
          className="mr-2.5 lg:w-[220px] lg:h-[184px] absolute top-6 left-14 lg:top-[-50px] lg:left-24"
        />

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
          className="absolute top-6 left-2 lg:hidden"
        />
        <Image
          src={balls}
          alt="balls"
          width={124}
          height={176}
          className=" lg:w-[229px] lg:h-[325px] absolute top-0 right-[-50px] lg:-top-4"
        />
      </div>
      <h1 className=" text-center text-2xl font-scriptorama tracking-[4.8px] mt-10 mb-8 lg:text-[64px] lg:tracking-[12.8px] lg:my-24">
        Команда
      </h1>

      <ul className="text-center mb-6 lg:mb-24  lg:flex lg:justify-evenly lg:items-center">
        {dataTeam.map(({ id, name, img, role }) => (
          <li key={id} className="mb-6 lg:mb-0 last:mb-0">
            <Image
              src={img}
              alt="avatar"
              width={116}
              height={116}
              className="ml-auto mr-auto rounded-full mb-1 lg:w-[300px] lg:h-[300px] lg:mb-5"
            />
            <div className=" font-dihjauti text-xs tracking-[1.1px] lg:text-3xl lg:tracking-[3.2px] font-bold lg:leading-10">
              <p>{name}</p>
              <p>{role}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="hidden lg:block">
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
      <div className=" lg:hidden ">
        <Image
          src={presentsLeft}
          alt="presents"
          width={231}
          height={249}
          className="absolute bottom-0 left-0"
        />
        <Image
          src={presentsRight}
          alt="presents"
          width={231}
          height={249}
          className="absolute bottom-0 right-0"
        />
        <Image
          src={presentsCenter}
          alt="presents"
          width={231}
          height={249}
          className="absolute bottom-[-100px] left-[70px]"
        />
      </div>

      <Link href={`/`}>
        <p className="ml-auto mr-auto text-center border border-black rounded-3xl w-[149px] lg:w-[374px] font-dihjauti text-[10px] lg:text-2xl lg:tracking-[2.4px] py-2 lg:py-4 focus:outline-none transform transition-transform duration-200 ease-in-out active:scale-90">
          Назад до передбачення
        </p>
      </Link>
    </div>
  );
};

export default TeamComponent;
