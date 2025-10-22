import Button from "@/components/Button/Button";
import { Column, Row } from "@lightningtv/solid/primitives";
import { Container } from "@/components/Button/container/Container";

const HelloWorld = () => {
  return (
    <>
      <Row>
        <Button autofocus onEnter={() => console.log("Enter1")}>
          Row Button
        </Button>
        <Button onEnter={() => console.log("Enter2")} onFocus={() => console.log("Focus2")}>
          Row Button 2
        </Button>
      </Row>
      <Column x={400} y={400} gap={26}>
        <Button onEnter={() => console.log("Enter3")} onFocus={() => console.log("column focus 2")}>
          No Focus Col Button
        </Button>
        <Button onEnter={() => console.log("Enter4")} onFocus={() => console.log("column focus 2")}>
          No Focus Col Button 2
        </Button>
      </Column>
      ;
      <Container />
    </>
  );
};

export default HelloWorld;
