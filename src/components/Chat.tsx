"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardContentInner,
  CardContentInnerParagraph,
  CardContentInnerParagraphDetached,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Using Vercel SDK to create a chatbot</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] w-full space-y-4 pr-4">
          {messages.map((m) => (
            <CardContentInner key={m.id}>
              <Avatar>
                <AvatarFallback>
                  {m.role === "user" ? "RB" : "AI"}
                </AvatarFallback>
                <AvatarImage
                  src={
                    m.role === "user"
                      ? "https://github.com/rafaelbertelli.png"
                      : "https://github.com/rocketseat.png"
                  }
                />
              </Avatar>

              <CardContentInnerParagraph>
                <CardContentInnerParagraphDetached>
                  {m.role === "user" ? "User:" : "Bot:"}
                </CardContentInnerParagraphDetached>
                {m.content}
              </CardContentInnerParagraph>
            </CardContentInner>
          ))}
        </ScrollArea>
      </CardContent>

      <CardFooter>
        <form className="flex w-full gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
