"use client";

import { useEffect, useRef } from "react";
import { useConversation } from "@/hooks/users"; // hook personalizado para ruta dinamica
import Talk from "talkjs";

export default function Messenger2() {
  const appId = 'tRRLiGzf';   // esta id es la id principal de la aplicacion de la api para hacer absolutamente todo
  const { userId, otherUserId, conversationId } = useConversation();   // Se obtiene los parametros de la URL
  const containerRef = useRef(null);

  useEffect(() => {

    // Nesesario para iniciar el chat, sin esto explota todo, (ruta dinamica)
    if (!userId || !otherUserId || !conversationId || !containerRef.current) return;

    let session; // declaramos session aqui para que el cleanup pueda acceder a ella

    // se usa la libreria talkjs con SDK de java script puro
    Talk.ready.then(() => {
      const me = new Talk.User({ id: userId, name: userId });
      session = new Talk.Session({ appId: appId, me: me });
      const other = new Talk.User({ id: otherUserId, name: otherUserId });

      // Busca en los servidores de TalkJS si existe el ID, y si no, lo crea al instante.
      const conversation = session.getOrCreateConversation(conversationId);

      // Sincronizacion obligatoria de participantes en la conversacion, para que el chat funcione correctamente.
      conversation.setParticipant(me);
      conversation.setParticipant(other);

      // Crea el chatbox, es la caja de aquel chat que se muestra en pantalla
      const chatbox = session.createChatbox({ mobile: true });
      chatbox.select(conversation);
      chatbox.mount(containerRef.current);
    });

    // cleanup: cuando el usuario sale del chat, destruye la sesion correctamente
    return () => {
      if (session) session.destroy();
    };
  }, [userId, otherUserId, conversationId]);

  // estado de carga
  if (!userId || !otherUserId || !conversationId) {
    return <div style={{ padding: "20px" }}>Cargando datos de la URL...</div>;
  }

  return (
    <div className="h-[90vh] w-full p-2 md:p-4">
      <div ref={containerRef} className="h-full w-full">
        Cargando tu hermosa conversacion...
      </div>
    </div>
  );
}