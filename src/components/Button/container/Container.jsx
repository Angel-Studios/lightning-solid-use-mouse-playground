import { Row } from "@lightningtv/solid/primitives";
import Button from "../Button";
import { View } from "@lightningtv/solid";

export const Container = () => {
  return (
    <View x={200} y={200} width={800} height={150} gap={26} border>
      <Row>
        <Button onEnter={() => console.log("Enter1")}>Container Button</Button>
        <Button onEnter={() => console.log("Enter2")} onFocus={() => console.log("Focus2")}>
          Container Button 2
        </Button>
      </Row>
    </View>
  );
};
