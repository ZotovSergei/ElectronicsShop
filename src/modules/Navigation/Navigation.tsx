import { Tabs, Tab } from 'components';
import { useRouter } from 'next/router';

import React, { useState } from 'react';

const Navigation = () => {
  const [selectedTab, setSelectedTab] = useState<string>('laptops');
  const router = useRouter();
  const handleChange = (event: React.SyntheticEvent, value: string) => {
    setSelectedTab(value);
    router.push(`/${value}`);
  };

  return (
    <Tabs
      value={selectedTab}
      onChange={handleChange}
      textColor='secondary'
      indicatorColor='secondary'
      aria-label='secondary tabs example'
    >
      <Tab value={'laptops'} label='laptops' />
      <Tab value={'smartPhones'} label='smartPhones' />
      <Tab value={'tablets'} label='tablets' />
      <Tab value={'smartWatches'} label='smartWatches' />
    </Tabs>
  );
};

export default Navigation;
