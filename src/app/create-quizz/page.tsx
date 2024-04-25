"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { QuizzContext } from "../contexts/createQuizzContext";

export default function CreateQuizz() {
  const question = QuizzContext();

  return (
    <div className="container flex max-w-4xl flex-col gap-12 py-12">
      <p className="text-center text-3xl">Question number x</p>
      <div className="flex gap-2">
        <Input placeholder="question" />
        <Button>Submit Question</Button>
      </div>
      <Separator />
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <p>A.</p>
          <Input placeholder="Answer 1" />
          <Button>Submit Answer</Button>
        </div>
        <div className="flex items-center gap-2">
          <p>B.</p>
          <Input placeholder="Answer 2" />
          <Button>Submit Answer</Button>
        </div>
        <div className="flex items-center gap-2">
          <p>C.</p>
          <Input placeholder="Answer 3" />
          <Button>Submit Answer</Button>
        </div>
        <div className="flex items-center gap-2">
          <p>D.</p>
          <Input placeholder="Answer 4" />
          <Button>Submit Answer</Button>
        </div>
      </div>
      <div className="flex items-center gap-4 text-xl">
        <p>Please select which answers are correct:</p>
        <div className="flex gap-2 text-3xl">
          <div>
            A. <Checkbox />
          </div>
          <div>
            B. <Checkbox />
          </div>
          <div>
            C. <Checkbox />
          </div>
          <div>
            D. <Checkbox />
          </div>
        </div>
      </div>
    </div>
  );
}
