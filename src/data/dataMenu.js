import { RiDashboardLine } from "react-icons/ri";
import { BsCurrencyExchange } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { DiGithubBadge } from "react-icons/di";

export const dataMenu = [
  {
    id: 1,
    name: "dashboards",
    icon: <RiDashboardLine />,
  },
  {
    id: 2,
    name: "exchange",
    icon: <BsCurrencyExchange />,
  },
  {
    id: 3,
    name: "cities",
    icon: <GrMapLocation />,
  },
  {
    id: 4,
    name: "linkedin",
    icon: <TiSocialLinkedinCircular />,
  },
  {
    id: 5,
    name: "twitter",
    icon: <TiSocialTwitterCircular />,
  },
  {
    id: 6,
    name: "github",
    icon: <DiGithubBadge />,
  },
];
