export interface Region {
  idRegiao: number
  idAreaAviso: string
  idConcelho: number
  globalIdLocal: number
  latitude: string
  idDistrito: number
  local: string
  longitude: string
}

export type Regions = {
  owner: string
  country: string
  data: Region[]
}

export type RegionsResponse = {
  regions: Regions
}

export interface Forecast {
  precipitaProb: string
  tMin: string
  tMax: string
  predWindDir: string
  idWeatherType: number
  classWindSpeed: number
  longitude: string
  forecastDate: Date
  classPrecInt: number
  latitude: string
}

export type ForecastResponse = {
  owner: string
  country: string
  data: Forecast[]
  globalIdLocal: number
  dataUpdate: Date
}
