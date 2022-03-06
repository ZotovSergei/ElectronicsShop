import { Tab, Tabs as MuiTabs } from "@mui/material";
import { Typography } from "components/Typography";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { i18nKeys, ListTabs } from "utils/typings";

const Tabs: FC<ListTabs> = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState<string>("laptops");
  const router = useRouter();

  const handleChange = (event: React.SyntheticEvent, value: string) => {
    setSelectedTab(value);
    router.push(`/${value}`, undefined, { shallow: true });
  };

  useEffect(() => {
    const { pathname } = router;
    if (pathname) setSelectedTab(pathname.slice(1));
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
    >
      {listTabs}
    </MuiTabs>
  );
};
export default Tabs;
