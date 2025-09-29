import { Text, View } from "@lightningtv/solid";
import { $t } from "../translate";
import styles from "../styles";
import Button from "@/components/Button/Button";
import { Row } from "@lightningtv/solid/primitives";
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
        <Button onEnter={() => console.log("Enter1")}>Click me one</Button>
        <Button onEnter={() => console.log("Enter2")} onFocus={() => console.log("Focus2")}>
          Click me
        </Button>
      </Row>
      <Container />
    </>
  );
};

export default HelloWorld;
