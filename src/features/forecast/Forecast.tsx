import React from "react";
import { useAppSelector } from "../../hooks";
import { selectForecast } from "./forecastSlice";
import { selectRegions } from "../regions/regionsSlice";
import styles from './Forecast.module.scss'

function Forecast() {
  const { forecast } = useAppSelector(selectForecast);
  const { selectedRegion } = useAppSelector(selectRegions);

  return (
    <div className={styles.forecast}>
      {forecast?.data.map((item, index) => {
        return (
          <ul className={styles.forecast__items}
            key={`${forecast.globalIdLocal}-${index}`}
          >
            <li className={styles.forecast__item}>
              {`${selectedRegion?.idAreaAviso} ${item.forecastDate}`}
            </li>
            <li className={styles.forecast__item}>
              {`Minimum Temperature: ${item.tMin}ºC`}
            </li>
            <li className={styles.forecast__item}>
              {`Maximum Temperature: ${item.tMax}ºC`}
            </li>
            <li className={styles.forecast__item}>
              {`%: ${item.precipitaProb}%`}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default Forecast;
