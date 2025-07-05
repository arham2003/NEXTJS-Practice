"use client";
import { useFormState } from "react-dom";
import { Button } from "../ui/button";

export function Submitbutton() {
  const { pending } = useFormState();
  return (
    <Button className="w-fit" type="submit" disabled={pending}>
      {pending ? "Submitting" : "Submit"}
    </Button>
  );
}
