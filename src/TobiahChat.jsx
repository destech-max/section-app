import { useState } from "react";
import { ChevronLeft, Search, MoreVertical, Send } from "lucide-react";
import { CHATS } from "./data";

export default function TobiahChat() {
  const [activeChat, setActiveChat] = useState(null);

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center py-8">
      <div className="w-[380px] bg-slate-50 rounded-[2rem] shadow-xl overflow-hidden border border-slate-200 min-h-[720px] flex flex-col">
        {activeChat === null ? (
          <ChatList openChat={setActiveChat} />
        ) : (
          <ChatView chatId={activeChat} goBack={() => setActiveChat(null)} />
        )}
      </div>
    </div>
  );
}

function ChatList({ openChat }) {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="px-5 pt-6 pb-4 bg-green-900 flex items-center justify-between border-b border-slate-100">
        <h1 className="text-xl font-semibold  text-white text-slate-900">Tobiah Chat</h1>
        <MoreVertical size={18} className="text-slate-500" />
      </div>

      <div className="px-5 py-3">
        <div className="flex items-center gap-2 bg-slate-100 rounded-full px-3 py-2">
          <Search size={16} className="text-slate-400" />
          <input
            placeholder="Search"
            className="bg-transparent text-sm outline-none flex-1 text-slate-700"
          />
        </div>
      </div>

      <div className="flex flex-col">
        {CHATS.map((c) => (
          <button
            key={c.id}
            onClick={() => openChat(c.id)}
            className="flex items-center gap-3 px-5 py-3 border-b border-slate-50 text-left"
          >
            <div className="w-11 h-11 rounded-full bg-green-100 text-green-900 flex items-center justify-center text-sm font-medium shrink-0">
              {c.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-green-900">{c.name}</p>
                <span className={`text-[11px] ${c.unread ? "text-slate-600 font-medium" : "text-slate-400"}`}>
                  {c.time}
                </span>
              </div>
              <div className="flex items-center justify-between mt-0.5">
                <p className="text-xs text-slate-500 truncate">{c.lastMessage}</p>
                {c.unread > 0 && (
                  <span className="ml-2 shrink-0 bg-green-600 text-white text-[10px] font-medium rounded-full min-w-[18px] h-[18px] flex items-center justify-center">
                    {c.unread}
                  </span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function ChatView({ chatId, goBack }) {
  const chat = CHATS.find((c) => c.id === chatId);
  const [messages, setMessages] = useState(chat.messages);
  const [draft, setDraft] = useState("");

  function sendMessage() {
    if (!draft.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, from: "me", text: draft, time: "Now" },
    ]);
    setDraft("");
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex items-center gap-3 px-4 pt-6 pb-3 bg-white border-b border-slate-100">
        <button onClick={goBack} className="p-1 -ml-1 rounded-full hover:bg-slate-100">
          <ChevronLeft size={20} className="text-slate-700" />
        </button>
        <div className="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center text-xs font-medium">
          {chat.avatar}
        </div>
        <p className="text-sm font-semibold text-slate-900">{chat.name}</p>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-2 bg-slate-50">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`max-w-[75%] px-3 py-2 rounded-2xl text-sm ${
              m.from === "me"
                ? "bg-green-600 text-white self-end rounded-br-sm"
                : "bg-white text-slate-800 self-start rounded-bl-sm border border-slate-100"
            }`}
          >
            <p>{m.text}</p>
            <p className={`text-[10px] mt-1 ${m.from === "me" ? "text-blue-100" : "text-slate-400"}`}>
              {m.time}
            </p>
          </div>
        ))}
      </div>

      <div className="px-3 py-3 bg-white border-t border-slate-100 flex items-center gap-2">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Message"
          className="flex-1 bg-slate-100 rounded-full px-4 py-2.5 text-sm outline-none text-slate-700"
        />
        <button
          onClick={sendMessage}
          className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center shrink-0"
        >
          <Send size={16} className="text-white" />
        </button>
      </div>
    </div>
  );
}