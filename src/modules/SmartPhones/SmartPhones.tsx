import { Container, List, Typography } from "components";
import { themeSmartPhones } from "utils/theming/theming";
import mockfilters from "./mock";

const SmartPhones = () => {
  return (
    <Container>
      <Typography intlId='navigation.smartPhones' />
      <List filters={mockfilters} />
    </Container>
  );
};

SmartPhones.config = {
  Theme: themeSmartPhones,
  disableGutters: true,
};

export default SmartPhones;
