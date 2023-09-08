import styles from "./page.module.css";
import { MessageCard } from "@/components/MessageCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <MessageCard />
    </main>
  );
}
