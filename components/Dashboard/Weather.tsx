import React, { useState } from "react";
import moment from 'moment';
import { MdSort } from "react-icons/md";
import { FaSnowflake, FaWater } from "react-icons/fa";
import { TiWeatherSunny, TiWeatherShower, TiWeatherNight } from "react-icons/ti";
import { IoIosWater } from "react-icons/io";
import { TbSettings } from "react-icons/tb";
import { IoEyeOutline } from "react-icons/io5";
import { RiSignalTowerLine } from "react-icons/ri";
import { LuCircleDotDashed } from "react-icons/lu";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Weather: React.FC = () => {
  const weather = useSelector((state: RootState) => state.weather.weather)
  const [season, setSeason] = useState<String>('sunny')

  const getPercentage = () => {
    return (weather - 4) / 45 * 100
  }

  return (
    <div className="col-span-12 md:col-span-4 rounded-2xl border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="mb-4 justify-between gap-4 flex flex-row">
        <div className="flex flex-col gap-2">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Weather
          </h4>
          <span className="text-grey-400 text-xs uppercase">{moment().format('ddd hh:mm')}</span>
        </div>
        <span className="text-green-500 mt-2"><MdSort size={28} /></span>
      </div>
      <div className="flex flex-row items-center justify-between py-3">
        <div className="flex flex-row items-center gap-1.5">
          <FaSnowflake className={season === 'flake' ? 'text-black dark:text-white' : 'text-gray-400'} size={12} />
          <TiWeatherSunny className={season === 'sunny' ? 'text-black dark:text-white' : 'text-gray-400'} />
          <TiWeatherShower className={season === 'rain' ? 'text-black dark:text-white' : 'text-gray-400'} />
          <TiWeatherNight className={season === 'night' ? 'text-black dark:text-white' : 'text-gray-300'} />
        </div>
        <span className="ordinal text-black flex flex-row animate delay-400 items-start dark:text-white text-2xl font-semibold ">{weather} <span className="text-sm -mt-1">°C</span></span>
      </div>
      <div className="w-full flex flex-row text-xs mt-4 items-center text-black dark:text-white justify-between">
        <span>5°C</span>
        <span>15°C</span>
        <span>25°C</span>
        <span>35°C</span>
        <span>45°C</span>
      </div>
      <div className="w-full mt-6 bg-grey-200 rounded-full h-1.5 dark:bg-gray-700">
        <div className="bg-gradient-to-r animate delay-500 from-blue-600 to-purple-600 h-1.5 rounded-full" style={{ width: getPercentage()+'%' }}></div>
      </div>
      <p className="text-sm mt-[60px] text-sm text-gray-400 uppercase">Details</p>
      <div className="flex flex-wrap flex-row items-center py-3 justify-center gap-3">
        <div className="flex flex-col items-center bg-grey-100 dark:bg-[#1D1650] shadow-md rounded-md text-grey-400 justify-center w-21 h-27.5 gap-1">
          <IoIosWater size={28} />
          <span className="text-xs">Humidity</span>
          <span className="text-black dark:text-white text-sm font-medium">14%</span>
        </div>
        <div className="flex flex-col items-center bg-grey-100 dark:bg-[#1D1650] shadow-md rounded-md text-grey-400 justify-center w-21 h-27.5 gap-1">
          <FaWater size={28} />
          <span className="text-xs">Wind</span>
          <span className="text-black dark:text-white text-sm font-medium">5 km/h</span>
        </div>
        <div className="flex flex-col items-center bg-grey-100 dark:bg-[#1D1650] shadow-md rounded-md text-grey-400 justify-center w-21 h-27.5 gap-1">
          <TbSettings size={28} />
          <span className="text-xs">Feels Like</span>
          <span className="text-black dark:text-white text-sm font-medium">23°C</span>
        </div>
        <div className="flex flex-col items-center bg-grey-100 dark:bg-[#1D1650] shadow-md rounded-md text-grey-400 justify-center w-21 h-27.5 gap-1">
          <IoEyeOutline size={28} />
          <span className="text-xs">Visibility</span>
          <span className="text-black dark:text-white text-sm font-medium">N/A</span>
        </div>
        <div className="flex flex-col items-center bg-grey-100 dark:bg-[#1D1650] shadow-md rounded-md text-grey-400 justify-center w-21 h-27.5 gap-1">
          <RiSignalTowerLine size={28} />
          <span className="text-xs">Pressure</span>
          <span className="text-black dark:text-white text-sm font-medium">24,25 in</span>
        </div>
        <div className="flex flex-col items-center bg-grey-100 dark:bg-[#1D1650] shadow-md rounded-md text-grey-400 justify-center w-21 h-27.5 gap-1">
          <LuCircleDotDashed size={28} />
          <span className="text-xs">Dew Point</span>
          <span className="text-black dark:text-white text-sm font-medium">11°</span>
        </div>
      </div>
    </div>
  );
};

export default Weather;
