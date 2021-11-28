import { Tabs, Tab, Typography, Grid } from "components";

import { useRouter } from "next/router";

import React, { useState } from "react";
import { StyledAppBar } from "./styled";

const Navigation = () => {
  const [selectedTab, setSelectedTab] = useState<string>("laptops");
  const router = useRouter();

  const handleChange = (event: React.SyntheticEvent, value: string) => {
    setSelectedTab(value);
    router.push(`/${value}`, undefined, { shallow: true });
  };

  return (
    <StyledAppBar position='static' color='transparent'>
      <Grid container></Grid>
      <Grid container justifyContent='flex-end'>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          textColor='secondary'
          indicatorColor='secondary'
          aria-label='secondary tabs example'
        >
          <Tab
            value={"laptops"}
            label={<Typography intlId='navigation.laptops' />}
          />
          <Tab
            value={"smartPhones"}
            label={<Typography intlId='navigation.smartPhones' />}
          />
          <Tab
            value={"tablets"}
            label={<Typography intlId='navigation.tablets' />}
          />
          <Tab
            value={"smartWatches"}
            label={<Typography intlId='navigation.smartWatches' />}
          />
        </Tabs>
      </Grid>
    </StyledAppBar>
  );
};

export default Navigation;
