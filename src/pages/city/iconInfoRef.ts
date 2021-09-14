import rain from "../../assets/rain.png";
import uvi from "../../assets/uvi.png";
import sunrise from "../../assets/sunrise.png";
import sunset from "../../assets/sunset.png";

export interface IIconRef {
  icon: string;
  title: string;
  contentKey: string[];
}

export const iconInfoRef: IIconRef[] = [
  {
    icon: rain,
    title: "Rain",
    contentKey: ["rain"],
  },
  { icon: uvi, title: "UV Index", contentKey: ["uvi"] },
  { icon: sunrise, title: "Sunrise", contentKey: ["sunrise"] },
  { icon: sunset, title: "Sunset", contentKey: ["sunset"] },
];
