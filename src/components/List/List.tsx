import { Container, Grid, Sidebar } from "components";
import { FC } from "react";

interface FilterProps {
  id: number;
  type: string;
  name: string;
  values: string[];
}
interface Props {
  filters: FilterProps[];
}

const List: FC<Props> = ({ filters }) => {
  return (
    <Container>
      <Grid>
        <Sidebar filters={filters} />
      </Grid>
    </Container>
  );
};

export default List;
