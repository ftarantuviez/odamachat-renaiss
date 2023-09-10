"use client";
import { Card } from "@/components/Card";
import { PromptInput } from "@/components/PromptInput";
import { HistoryCard } from "@/components/HistoryCard";
import { ChatCard } from "@/components/ChatCard";
import useChatContext from "@/hooks/useChatContext";

import styles from "./page.module.scss";

export default function Home() {
  const { currentChat, loading, onNewSearch, allChatsSaved } = useChatContext();

  return (
    <main className={styles.main}>
      <div className={styles.main__left}>
        <Card className={styles.main__left__system}>
          <h3>Sistema</h3>
          <p>
            Para conseguir una respuesta adecuada a tus necesidades, escribe un
            prompt para el sistema.
          </p>

          <PromptInput isNewChat />
        </Card>
        <HistoryCard history={allChatsSaved} />
      </div>
      <div className={styles.main__right}>
        <ChatCard
          messages={currentChat.messages}
          loading={loading}
          handleNewSearch={onNewSearch}
        />
      </div>
    </main>
  );
}
