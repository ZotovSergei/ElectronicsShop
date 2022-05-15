import { Divider, Grid, Typography } from "components";
import { camelCase } from "lodash";
import React, { FC } from "react";
import useTranslations from "utils/hooks/useTranslations";
import { i18nKeys } from "utils/typings";

interface FilterProps {
  id: number;
  type: string;
  name: string;
  values: string[];
}
interface Props {
  filters: FilterProps[];
}

const LayoutFilter: FC<Props> = ({ filters }) => {
  const t = useTranslations();

  const sidebarFilters = filters.map((item) => {
    const filtersName = `sidebar.common.filters.${camelCase(
      item.name
    )}` as i18nKeys;
    return (
      <Grid key={item.id}>
        <Typography>{t(filtersName)}</Typography>
      </Grid>
    );
  });

  return (
    <Grid>
      <Typography intlId='sidebar.filters.title' />
      <Divider />

      {sidebarFilters}
    </Grid>
  );
};

export default LayoutFilter;
