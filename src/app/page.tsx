"use client";

import { useState } from "react";

import { Card } from "@/components/Card";
import { PromptInput } from "@/components/PromptInput";
import { HistoryCard } from "@/components/HistoryCard";
import { ChatCard } from "@/components/ChatCard";
import { NavBar } from "@/components/NavBar";

import useChatContext from "@/hooks/useChatContext";

import styles from "./page.module.scss";

export default function Home() {
  const { currentChat, loading, onNewSearch, allChatsSaved } = useChatContext();

  const [isSidebar, setIsSidebar] = useState(true);

  const onSidebarClick = () => setIsSidebar(!isSidebar);
  return (
    <div>
      <NavBar onSidebarClick={onSidebarClick} isSidebar={isSidebar} />
      <main className={`${styles.main} ${!isSidebar && styles.main__sidebar}`}>
        <div
          className={`${styles.main__left} ${
            !isSidebar && styles.main__left__sidebar
          }`}
        >
          <Card className={styles.main__left__system}>
            <h3>Sistema</h3>
            <p>
              Para conseguir una respuesta adecuada a tus necesidades, escribe
              un prompt para el sistema.
            </p>

            <PromptInput isNewChat />
          </Card>
          <HistoryCard history={allChatsSaved} />
        </div>
        <div
          className={`${styles.main__right} ${
            !isSidebar && styles.main__right__sidebar
          }`}
        >
          <ChatCard
            messages={currentChat.messages}
            loading={loading}
            handleNewSearch={onNewSearch}
          />
        </div>
      </main>
    </div>
  );
}
