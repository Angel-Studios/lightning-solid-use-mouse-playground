import { Row } from "@lightningtv/solid/primitives";
import Button from "../Button";
import { View } from "@lightningtv/solid";

export const Container = () => {
  return (
    <View x={200} y={200} w={800} h={300} gap={26}>
      <Row>
        <Button onEnter={() => console.log("Enter1")}>Click me one</Button>
        <Button onEnter={() => console.log("Enter2")} onFocus={() => console.log("Focus2")}>
          Click me
        </Button>
      </Row>
    </View>
  );
};
