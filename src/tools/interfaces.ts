interface UnixTimestamp {
    fa: string;
    en: number;
  }
  
  interface Timezone {
    name: string;
    number: {
      fa: string;
      en: string;
    };
  }
  
  interface Season {
    name: string;
    number: {
      fa: string;
      en: string;
    };
  }
  
  interface Time12 {
    full: {
      short: {
        fa: string;
        en: string;
      };
      full: {
        fa: string;
        en: string;
      };
    };
    hour: {
      fa: string;
      en: string;
    };
    minute: {
      fa: string;
      en: string;
    };
    second: {
      fa: string;
      en: string;
    };
    microsecond: {
      fa: string;
      en: string;
    };
    shift: {
      short: string;
      full: string;
    };
  }
  
  interface Time24 {
    full: {
      fa: string;
      en: string;
    };
    hour: {
      fa: string;
      en: string;
    };
    minute: {
      fa: string;
      en: string;
    };
    second: {
      fa: string;
      en: string;
    };
  }
  
  interface DateISO {
    fa: string;
    en: string;
  }
  
  interface DateUsual {
    fa: string;
    en: string;
  }
  
  interface DateFormats {
    iso: DateISO;
    usual: DateUsual;
  }
  
  interface FullDate {
    official: DateFormats;
    unofficial: DateFormats;
  }
  
  interface OtherDates {
    gregorian: DateFormats;
    ghamari: DateFormats;
  }
  
  interface YearInfo {
    name: string;
    animal: string;
    leapyear: string;
    agone: {
      days: {
        fa: string;
        en: string;
      };
      percent: {
        fa: string;
        en: string;
      };
    };
    left: {
      days: {
        fa: string;
        en: string;
      };
      percent: {
        fa: string;
        en: string;
      };
    };
    number: {
      fa: string;
      en: string;
    };
  }
  
  interface MonthInfo {
    name: string;
    asterism: string;
    number: {
      fa: string;
      en: string;
    };
  }
  
  interface DayInfo {
    name: string;
    events: {
      local: string | null;
      holy: string | null;
      global: string | null;
    };
    number: {
      fa: string;
      en: string;
    };
  }
  
  interface Weekday {
    name: string;
    champ: string;
    number: {
      fa: string;
      en: string;
    };
  }
  
  interface DateInfo {
    full: FullDate;
    other: OtherDates;
    year: YearInfo;
    month: MonthInfo;
    day: DayInfo;
    weekday: Weekday;
  }
  
  export interface DateTimeInfo {
    unix: UnixTimestamp;
    timestamp: UnixTimestamp;
    timezone: Timezone;
    season: Season;
    time12: Time12;
    time24: Time24;
    date: DateInfo;
  }
  interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  
  interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  }
  
  interface Wind {
    speed: number;
    deg: number;
  }
  
  interface Clouds {
    all: number;
  }
  
  interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  }
  
  interface Coord {
    lon: number;
    lat: number;
  }
  
  export interface WeatherData {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
  }
  
export interface SymbolStats {
  bidPrice: string;
  askPrice: string;
  '24h_ch': number;
  '7d_ch': number;
  '24h_volume': string;
  '7d_volume': string;
  '24h_quoteVolume': string;
  '24h_highPrice': string;
  '24h_lowPrice': string;
  lastPrice: string;
  lastQty: string;
  lastTradeSide: string;
  bidVolume: string;
  askVolume: string;
  bidCount: number;
  askCount: number;
  direction: {
    SELL: number;
    BUY: number;
  };
  '24h_tmnVolume': string;
}

export interface SymbolObject {
  [x: string]: any;
  symbol: string;
  baseAsset: string;
  baseAsset_png_icon: string;
  baseAsset_svg_icon: string;
  baseAssetPrecision: number;
  quoteAsset: string;
  quoteAsset_png_icon: string;
  quoteAsset_svg_icon: string;
  quotePrecision: number;
  faName: string;
  enName: string;
  faBaseAsset: string;
  enBaseAsset: string;
  faQuoteAsset: string;
  enQuoteAsset: string;
  stepSize: number;
  tickSize: number;
  minQty: number;
  minNotional: number;
  stats: SymbolStats;
  createdAt: string;
  isNew: boolean;
  isZeroFee: boolean;
}

export interface Result {
  data: {
    [key: string]: SymbolObject;
  };
  message: string;
  success: boolean;
}

export type stateI = SymbolObject[] | undefined;
