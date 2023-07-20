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

export default function Chat() {
  return (
    <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content] ">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Using Vercel SDK to create a chatbot</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardContentInner>
          <Avatar>
            <AvatarFallback>RB</AvatarFallback>
            <AvatarImage src="https://github.com/rafaelbertelli.png" />
          </Avatar>

          <CardContentInnerParagraph>
            <CardContentInnerParagraphDetached>
              Human:
            </CardContentInnerParagraphDetached>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            tempore. Unde optio quos error est aliquid consectetur, nobis
            consequatur, mollitia, beatae tenetur repellendus nihil soluta iure
            necessitatibus. Vitae, provident corporis!
          </CardContentInnerParagraph>
        </CardContentInner>

        <CardContentInner>
          <Avatar>
            <AvatarFallback>AI</AvatarFallback>
            <AvatarImage src="https://github.com/rocketseat.png" />
          </Avatar>

          <CardContentInnerParagraph>
            <CardContentInnerParagraphDetached>
              BOT:
            </CardContentInnerParagraphDetached>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            tempore. Unde optio quos error est aliquid consectetur, nobis
            consequatur, mollitia, beatae tenetur repellendus nihil soluta iure
            necessitatibus. Vitae, provident corporis!
          </CardContentInnerParagraph>
        </CardContentInner>
      </CardContent>

      <CardFooter className="space-x-2">
        <Input placeholder="How can I help you?" />
        <Button type="submit">Send</Button>
      </CardFooter>
    </Card>
  );
}
