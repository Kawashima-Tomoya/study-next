import { Inter } from "next/font/google";
import styles from "./Main.module.css";
import { Title } from "@/components/Title";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";

const inter = Inter({ subsets: ["latin"] });

export function Main(props) {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <Headline>
        <code className={styles.code}>pages/{props.page}.js</code>
      </Headline>
      <Title />
      <Links />
    </main>
  );
}
