import { Text, View } from "@lightningtv/solid";
import { $t } from "../translate";
import styles from "../styles";
import Button from "@/components/Button/Button";
import { Column, Row } from "@lightningtv/solid/primitives";
import { Container } from "@/components/Button/container/Container";

const HelloWorld = () => {
  return (
    <>
      <View src="assets/solid.svg" width={800} height={600} x={1920 / 2 - 400} y={1080 / 2 - 300} />
      <Text autofocus style={styles.headlineText}>
        {$t("home.headLine")}
      </Text>
      <Text style={styles.headlineSubText}>T for Text pages, M for here</Text>
      <Row>
        <Button onEnter={() => console.log("Enter1")}>Row Button</Button>
        <Button onEnter={() => console.log("Enter2")} onFocus={() => console.log("Focus2")}>
          Row Button 2
        </Button>
      </Row>
      <Column x={400} y={400} gap={26}>
        <Button onEnter={() => console.log("Enter3")}>No Focus Column Button</Button>
        <Button onEnter={() => console.log("Enter4")} onFocus={() => console.log("column focus 2")}>
          No Focus Column Button 2
        </Button>
      </Column>
      <Container />
    </>
  );
};

export default HelloWorld;
