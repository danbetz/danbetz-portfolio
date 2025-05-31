import { Button } from "../../components/ui/button";
import Container from "../../components/ui/container";

export default function WorkPage() {
  return (
    <>
    <Container>
      <h1>
          Contact the kid
      </h1>

        <Button>
          <a href="#">Dummy button</a>
        </Button>

        <Button>
          <a href="https://www.linkedin.com/in/danbetz/">LinkedIn</a>
        </Button>

        <Button>
          <a href="mailto:dan.betz@gmail.com">Email Me</a>
        </Button>

    </Container>
    </>
  );
}
