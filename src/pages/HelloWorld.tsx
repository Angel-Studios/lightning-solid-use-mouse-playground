import { Text, View } from "@lightningtv/solid";
import { $t } from "../translate";
import styles from "../styles";
import Button from "@/components/Button/Button";
import { Row } from "@lightningtv/solid/primitives";

const HelloWorld = () => {
  return (
    <>
      <View src="assets/solid.svg" width={800} height={600} x={1920 / 2 - 400} y={1080 / 2 - 300} />
      <Text autofocus style={styles.headlineText}>
        {$t("home.headLine")}
      </Text>
      <Text style={styles.headlineSubText}>T for Text pages, M for here</Text>
      <Row>
        <Button style={{ $focus: { color: "red" } }} state="$focus" onEnter={() => console.log("Enter1")}>
          Click me
        </Button>
        <Button style={{ $focus: { color: "red" } }} onEnter={() => console.log("Enter2")}>
          Click me
        </Button>
      </Row>
    </>
  );
};

export default HelloWorld;
