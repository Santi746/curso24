
import { useSearchParams } from "next/navigation";

export function useConversation() {
  const searchParams = useSearchParams()
  const userId = searchParams.get("userId");  // usuario principal, el que da la perspectiva del chat
  const otherUserId = searchParams.get("otherUserId");  // el otro usuario es el receptor.
  const conversationId = searchParams.get("conversationId");  // ID unico de la conversacion (obligatorio)

  return {
    userId,
    otherUserId,
    conversationId
  };
}