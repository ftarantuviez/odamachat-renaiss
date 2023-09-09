/* eslint-disable import/no-anonymous-default-export */
import { ChatContext } from "@/contexts/ChatContext";
import { ChatProviderValues } from "@/contexts/types";
import { useContext } from "react";

export default () => useContext<ChatProviderValues>(ChatContext);
