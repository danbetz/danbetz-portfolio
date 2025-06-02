import { Button } from "../../components/ui/button";
import Container from "../../components/ui/container";

export default function WorkPage() {
  return (
    <>
    <Container>
      <h1>
          Contact the kid
      </h1>
        <div className="button-group">
            <Button>
            <a href="https://www.linkedin.com/in/danbetz/">LinkedIn</a>
            </Button>

            <Button>
            <a href="mailto:dan.betz@gmail.com">Email Me</a>
            </Button>
        </div>

        <div className="button-group">
            <Button className="secondary">
            <a href="#">Bluesky</a>
            </Button>

            <Button className="secondary">
            <a href="#">Whatever</a>
            </Button>

            <Button className="secondary">
            <a href="#">Whatever</a>
            </Button>
        </div>

    </Container>
    </>
  );
}
