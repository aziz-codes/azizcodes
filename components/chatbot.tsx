"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Robot from "@/public/images/robot.gif";
import { Textarea } from "./ui/textarea";
import { Avatar as Dp } from "@/constants/images";
import { aboutAziz, chatbotQuestions } from "@/constants/utils";
import { AvatarImage, Avatar, AvatarFallback } from "./ui/avatar";

// Define message type
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

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      content: newMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setNewMessage("");

    // Ensure newMessage is a string and convert it to lowercase
    const lowerCaseMessage = newMessage.toLowerCase();

    // Find a matching question from chatbotQuestions
    const matchingQuestion = chatbotQuestions.find((item) =>
      item.questions.some((question) =>
        lowerCaseMessage.includes(question.toLowerCase())
      )
    );

    if (matchingQuestion) {
      const value = aboutAziz[matchingQuestion.answerField];
      const aiMessage: Message = {
        id: messages.length + 2,
        content: Array.isArray(value) ? value.join(", ") : value,
        sender: "ai",
        timestamp: new Date(),
      };
      setTimeout(() => {
        setMessages((prev) => [...prev, aiMessage]);
      }, 1000);
    } else {
      const aiMessage: Message = {
        id: messages.length + 2,
        content:
          "Sorry, I couldn't find an answer to your question. Please try again!",
        sender: "ai",
        timestamp: new Date(),
      };
      setTimeout(() => {
        setMessages((prev) => [...prev, aiMessage]);
      }, 1000);
    }
  };
  const handleBotResponse = (userInput: string) => {
    const lowerCaseMessage = userInput.toLowerCase();
    const matchingQuestion = chatbotQuestions.find((item) =>
      item.questions.some((question) =>
        lowerCaseMessage.includes(question.toLowerCase())
      )
    );

    if (matchingQuestion) {
      const value = aboutAziz[matchingQuestion.answerField];
      const aiMessage: Message = {
        id: messages.length + 2,
        content: Array.isArray(value) ? value.join(", ") : value,
        sender: "ai",
        timestamp: new Date(),
      };
      setTimeout(() => {
        setMessages((prev) => [...prev, aiMessage]);
      }, 1000);
    } else {
      const aiMessage: Message = {
        id: messages.length + 2,
        content:
          "Sorry, I couldn't find an answer to your question. Please try again!",
        sender: "ai",
        timestamp: new Date(),
      };
      setTimeout(() => {
        setMessages((prev) => [...prev, aiMessage]);
      }, 1000);
    }
  };

  const topQuestions = [
    "What's your experience?",
    "What's your name?",
    "Where do you work?",
    "What skills do you have?",
  ];
  const handleTopQuestionClick = (question: string) => {
    const userMessage: Message = {
      id: messages.length + 1,
      content: question,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simulate typing delay before bot responds
    setTimeout(() => {
      handleBotResponse(question);
    }, 500);
  };
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Floating chat button */}
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

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-16 right-6 w-72 sm:w-[350px] h-[500px] shadow-xl z-40 flex flex-col overflow-hidden">
          {/* Chat header */}
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

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-background">
            {messages.length === 0 ? (
              <div className="flex flex-col gap-2  justify-center h-full items-center ">
                <Avatar>
                  <AvatarImage src={Dp.src} className="h-29 w-28" />
                  <AvatarFallback>AZ</AvatarFallback>
                </Avatar>
                <p className="text-xs italic">
                  what do you want to know about me?
                </p>
                <div className="space-x-2 space-y-2">
                  {topQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleTopQuestionClick(question)}
                      className="px-3 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 text-xs"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex !text-xs ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-2 relative ${
                      message.sender === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {/* Notch for the message bubble */}
                    <div
                      className={`absolute top-0 w-4 h-4 overflow-hidden ${
                        message.sender === "user"
                          ? "right-0 -mr-2"
                          : "left-0 -ml-2"
                      }`}
                    >
                      <div
                        className={`absolute transform rotate-45 w-2 h-2 ${
                          message.sender === "user"
                            ? "bg-blue-500 -top-1 -right-1"
                            : "bg-gray-200 -top-1 -left-1"
                        }`}
                      />
                    </div>
                    <p className="text-xs">{message.content}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {message.timestamp.toLocaleTimeString([], {
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

          {/* Chat input */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 bg-background border-t border-gray-400 flex items-center gap-2"
          >
            <div className="flex-1 relative">
              <Textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Enter your message"
                className="border-none resize-none !ring-[1.5px] ring-gray-400 !focus:ring-0gray-400!outline-none"
              ></Textarea>
            </div>
            <Button
              type="submit"
              className="rounded-full w-10 h-10 p-0 flex items-center justify-center bg-blue-500 hover:bg-blue-600 transition-colors"
            >
              <Send className="h-5 w-5 text-white" />
            </Button>
          </form>
        </Card>
      )}
    </>
  );
}
