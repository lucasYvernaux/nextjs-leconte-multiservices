"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Collapsible, CollapsibleContent } from "./ui/collapsible";
import { CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { Cross, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

export function CTACall() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* <div className="fixed top-1/5 end-0 flex "> */}
      <Collapsible
        className="fixed top-1/5 end-0 flex "
        open={open}
        onOpenChange={setOpen}
      >
        <CollapsibleTrigger className="bg-leconte-primary rounded-md px-4 py-2 text-white">
          {open ? (
            <Cross className="rotate-45" />
          ) : (
            <div
              className={`bg-leconte-primary capitalize ${
                open ? "rotate-90" : "rotate-0"
              } text- font-medium flex gap-2 `}
              style={{
                writingMode: open ? "inherit" : "vertical-rl",
              }}
            >
              <span className=" rotate-90">
                <Phone />
              </span>
              être rappelé
            </div>
          )}
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Card>
            <CardContent>
              <form>
                <Input />
                <Input />
                <Input />
              </form>
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>
      {/* </div> */}
    </>
  );
}
