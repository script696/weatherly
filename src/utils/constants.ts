interface IcitysCoord {
  [key : string] : {
    latitude: string;
    longitude: string;
  }
}

export const citysCoord: IcitysCoord = {
  Moscow: {
    latitude: "55.75",
    longitude: "37.62",
  },
  SaintP: {
    latitude: "59.94",
    longitude: "30.31",
  },
  Berlin: {
    latitude: "52.52",
    longitude: "13.41",
  },
  Kiev: {
    latitude: "50.45",
    longitude: "30.52",
  },
  Rome: {
    latitude: "41.89",
    longitude: "12.51",
  },
  Paris: {
    latitude: "48.85",
    longitude: "2.35",
  },
};