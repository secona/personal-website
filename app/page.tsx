import { GitHub, Linkedin, Twitter } from "react-feather";
import { ButtonLink } from "@/components/ButtonLink/ButtonLink";
import { Card } from "@/components/Card/Card";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Card>
        <h1>vito secona</h1>
      </Card>
      <div className={styles.links}>
        <ButtonLink href="https://github.com/secona" bgColor="#333333">
          <GitHub color="white" />
        </ButtonLink>
        <ButtonLink href="https://linkedin.com/in/secona" bgColor="#0077b5">
          <Linkedin color="white" />
        </ButtonLink>
        <ButtonLink href="https://twitter.com/vitosecona" bgColor="#1DA1F2">
          <Twitter color="white" />
        </ButtonLink>
      </div>
    </div>
  );
}
