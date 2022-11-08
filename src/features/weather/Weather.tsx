import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import Regions from '../regions'
import { selectRegions } from "../regions/regionsSlice";
import Forescat from '../forecast/'
import { selectForecast } from "../forecast/forecastSlice";
import styles from "./Weather.module.scss";

function Weather() {
    const { selectedRegion} = useAppSelector(selectRegions);

    const { forecast } = useAppSelector(selectForecast);

    const showForecast = Object.keys(forecast).length > 0 && forecast.data.length > 0 && forecast.globalIdLocal === selectedRegion?.globalIdLocal;

    return (
        <section className={styles.weather}>
            <div className={styles.weather__regions}>
                <div className={styles.weather__title}>Regions</div>
                <Regions />
            </div>
            <div className={styles.weather__forecast}>
            <div className={styles.weather__title}>Forecast</div>
            {
                showForecast ?
                    <Forescat />
                    : null
            }
            </div>
        </section>
    )
}

export default Weather;
