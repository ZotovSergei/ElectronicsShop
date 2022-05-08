import { Tab, Tabs as MuiTabs } from "@mui/material";
import { Typography } from "components/Typography";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Routes } from "utils/enums/route";
import useDeviceType from "utils/hooks/useDeviceType";
import { i18nKeys, ITabs } from "utils/typings";

const tabs: ITabs[] = [
  {
    value: Routes.Home,
    labelIntlId: "navigation.home",
  },
  {
    value: Routes.Laptops,
    labelIntlId: "navigation.laptops",
  },
  {
    value: Routes.SmartPhones,
    labelIntlId: "navigation.smartPhones",
  },
  {
    value: Routes.Tablets,
    labelIntlId: "navigation.tablets",
  },
  {
    value: Routes.SmartWatches,
    labelIntlId: "navigation.smartWatches",
  },
];

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState<string>(Routes.Home);
  const router = useRouter();
  const { isPhone, isTablet } = useDeviceType();

  const handleChange = (event: React.SyntheticEvent, value: string) => {
    setSelectedTab(value);
    router.push(`/${value}`, undefined, { shallow: true });
  };

  useEffect(() => {
    const { pathname } = router;
    const url = pathname.slice(1);
    if (url) setSelectedTab(url);
    else setSelectedTab(Routes.Home);
  }, []);

  const listTabs = tabs.map(({ value, labelIntlId }) => {
    return (
      <Tab
        key={`${value}_${labelIntlId}`}
        value={value}
        label={<Typography intlId={labelIntlId as i18nKeys} />}
      />
    );
  });
  return (
    <MuiTabs
      value={selectedTab}
      onChange={handleChange}
      textColor='secondary'
      indicatorColor='secondary'
      aria-label='secondary tabs example'
      orientation={isTablet || isPhone ? "vertical" : "horizontal"}
    >
      {listTabs}
    </MuiTabs>
  );
};
export default Tabs;
