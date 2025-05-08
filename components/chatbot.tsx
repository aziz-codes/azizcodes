"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Robot from "@/public/images/robot.gif";
import { aboutMe } from "./user-prompt";
import { Avatar as Dp } from "@/constants/images";
import { aboutAziz, chatbotQuestions } from "@/constants/utils";
import { AvatarImage, Avatar, AvatarFallback } from "./ui/avatar";
import AIMessage from "./ai-message";
import { GoogleGenAI } from "@google/genai";

type Message = {
  id: number;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
};

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const ai = new GoogleGenAI({
    apiKey: "AIzaSyCp8oAyOciqQTzHs68VqzhO4I-ncvSMSZY",
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/test");
      const data = await res.json();
      console.log(data);
    };

    fetchData();
  }, []);

  const getBotResponse = async (userMessage: string, aboutMe: string) => {
    setNewMessage("");
    try {
      setLoading(true);
      const response = await fetch("/api/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userMessage, aboutMe }),
      });
      const data = await response.json();
      console.log(data);
      setLoading(false);

      console.log("response from google is ", response.text);

      const aiMessage: Message = {
        id: messages.length + 2,
        content: data.response,
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      setLoading(false);
      console.log("api error is ", err);
    }
  };

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") return;

    const userMessage: Message = {
      id: messages.length + 1,
      content: newMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    await getBotResponse(newMessage, aboutMe);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleTopQuestionClick = (question: string) => {
    const userMessage: Message = {
      id: messages.length + 1,
      content: question,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const lower = question.toLowerCase();
      const match = chatbotQuestions.find((item) =>
        item.questions.some((q) => lower.includes(q.toLowerCase()))
      );
      const reply = match
        ? aboutAziz[match.answerField]
        : "Sorry, I couldn't find an answer to your question. Please try again!";
      const aiMessage: Message = {
        id: messages.length + 2,
        content: Array.isArray(reply) ? reply.join(", ") : reply,
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 500);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [newMessage]);

  const topQuestions = [
    "What's your experience?",
    "What's your name?",
    "Where do you work?",
    "current company",
    "What skills do you have?",
  ];

  return (
    <>
      <button
        onClick={toggleChat}
        className={`group fixed bottom-6 right-6 p-1 rounded-full shadow-lg transition-all duration-300 z-50 ${
          isOpen ? "bg-red-500 rotate-90" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <div className="relative w-10 h-10">
            <Image
              src={Dp}
              fill
              alt="chatbot"
              className="rounded-full object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            />
            <Image
              src={Robot}
              fill
              alt="robot"
              className="rounded-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
          </div>
        )}
      </button>

      {isOpen && (
        <Card className="fixed bottom-16 right-6 w-72 sm:w-[350px] h-[500px] shadow-xl z-40 flex flex-col overflow-hidden">
          <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Image
                src={Dp}
                height={24}
                width={24}
                alt="chatbot"
                className="rounded-full"
              />
              <h3 className="font-medium">aziz</h3>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-background">
            {messages.length === 0 ? (
              <div className="flex flex-col gap-2 justify-center h-full items-center">
                <Avatar>
                  <AvatarImage src={Robot.src} className="object-cover" />
                  <AvatarFallback>AZ</AvatarFallback>
                </Avatar>
                <p className="text-xs italic">
                  what do you want to know about me?
                </p>
                <div className="space-x-2 space-y-2">
                  {topQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleTopQuestionClick(q)}
                      className="px-3 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 text-xs"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`mb-4 flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  } items-center gap-2`}
                >
                  {msg.sender === "ai" && (
                    <Image
                      src={Dp}
                      width={32}
                      height={32}
                      alt="ai avatar"
                      unoptimized
                      className="rounded-full object-cover -mt-5"
                    />
                  )}
                  <div
                    className={`max-w-[80%] rounded-lg p-3   relative ${
                      msg.sender === "user"
                        ? "bg-blue-500 text-white overflow-x-auto max-w-full  scrollbar-thin  scrollbar-thumb-borderCard scrollbar-track-transparent scrollbar-none"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    <div
                      className={`absolute top-0 w-4 h-4 overflow-hidden ${
                        msg.sender === "user" ? "right-0 -mr-2" : "left-0 -ml-2"
                      }`}
                    >
                      <div
                        className={`absolute transform rotate-45 w-2 h-2 ${
                          msg.sender === "user"
                            ? "bg-blue-500 -top-1 -right-1"
                            : "bg-gray-200 -top-1 left-1"
                        }`}
                      />
                    </div>
                    {msg.sender === "ai" &&
                    Math.abs(Date.now() - new Date(msg.timestamp).getTime()) <
                      1000 ? (
                      <AIMessage content={msg.content} />
                    ) : (
                      <p className="text-xs">{msg.content}</p>
                    )}

                    <p className="text-xs mt-1 opacity-70">
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex items-center gap-2 rounded-full border justify-center px-3 py-2 mr-2 ml-2 mb-2">
            <textarea
              ref={textareaRef}
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              rows={1}
              className="flex-1 resize-none bg-transparent text-sm focus:outline-none  px-1  rounded-full"
            />
            <Button
              type="button"
              disabled={loading}
              onClick={handleSendMessage}
              className="rounded-full w-8 h-8 p-0 flex items-center justify-center bg-blue-500 hover:bg-blue-600"
            >
              <Send className="h-5 w-5 text-white" />
            </Button>
          </div>
        </Card>
      )}
    </>
  );
}
