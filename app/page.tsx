import { GitHub, Linkedin, Twitter } from "react-feather";
import { ButtonLink } from "@/components/ButtonLink/ButtonLink";
import { Card } from "@/components/Card/Card";
import { Text } from "@/components/Text/Text";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <Text.H1>Hello, World!</Text.H1>
        <Text>
          My name is Vito. I am a Computer Science student at University of
          Indonesia.
        </Text>
      </Card>
      <div className={styles.links}>
        <ButtonLink href="https://github.com/secona" bgColor="#333333">
          <GitHub color="white" />
        </ButtonLink>
        <ButtonLink href="https://linkedin.com/in/secona" bgColor="#0077b5">
          <Linkedin color="white" />
        </ButtonLink>
        <ButtonLink href="https://twitter.com/bahasakarat" bgColor="#1DA1F2">
          <Twitter color="white" />
        </ButtonLink>
      </div>
    </div>
  );
}
