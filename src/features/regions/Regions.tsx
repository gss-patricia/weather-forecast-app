import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { selectRegions, getRegionAsync, setRegion } from "./regionsSlice";
import { getForecastAsync, resetForecast } from "../forecast/forecastSlice";
import { selectForecast } from "../forecast/forecastSlice";
import styles from './Regions.module.scss'

function Regions() {
  const dispatch = useAppDispatch();
  const { regions } = useAppSelector(selectRegions);
  const { forecast } = useAppSelector(selectForecast);
  
  const [state, setstate] = useState({
    query: '',
    list: regions
  })

  const onChangeHandler = (e) => {
    const { value } = e.target;

    const results = regions.filter((region) => {
      if (value === "") {
        return regions;
      }

      return region.idAreaAviso
        .toLowerCase()
        .includes(value.toLowerCase());
    });

    if (forecast?.data?.length > 0) {
      dispatch(resetForecast());
    }

    setstate({
      query: e.target.value,
      list: results,
    });
  };
  
  useEffect(() => {
    dispatch(getRegionAsync());
  }, []);

  useEffect(() => {
    setstate({
      query: '',
      list: regions
    })
  }, [regions]);

  const setLocal = ({ e, globalIdLocal, idAreaAviso }) => {
    e.preventDefault();
    
    dispatch(getForecastAsync(globalIdLocal));
    dispatch(setRegion({idAreaAviso, globalIdLocal}));
  }

  return (
    <div className={styles.regions}>
      <form>
        <input
          className={styles.regions__filter}
          type="search"
          placeholder="Filter region..."
          value={state.query}
          onChange={onChangeHandler}
        />
      </form>
      {state.list.map(({globalIdLocal, idAreaAviso}) => {
        return (
          <div
            className={styles.regions__item}
            key={`${idAreaAviso}-${globalIdLocal}`}
          >
            <div className={styles.regions__label}>
              {globalIdLocal} {idAreaAviso}
            </div>
            <button
              className={styles.regions__button}
              onClick={(e) => setLocal({ e, globalIdLocal, idAreaAviso })}
            >
              Show
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Regions;
