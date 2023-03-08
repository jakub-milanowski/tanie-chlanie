import RootModule from "../modules/root/presentation/root-module";
import { Container } from "../styles/root.style";

const Root = (): JSX.Element => {
  return (
    <Container>
      <RootModule />
    </Container>
  );
};

export default Root;
