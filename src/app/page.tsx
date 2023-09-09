import { Card } from "@/components/Card";

import styles from "./page.module.scss";
import { PromptInput } from "@/components/PromptInput";
import { HistoryCard } from "@/components/HistoryCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.main__left}>
        <Card className={styles.main__left__system}>
          <h3>Sistema</h3>
          <p>
            Para conseguir una respuesta adecuada a tus necesidades, escribe un
            prompt para el sistema.
          </p>

          <PromptInput />
        </Card>
        <HistoryCard />
      </div>
      <div className={styles.main__right}>
        <Card>
          <h5>Sistema</h5>
        </Card>
      </div>
    </main>
  );
}
