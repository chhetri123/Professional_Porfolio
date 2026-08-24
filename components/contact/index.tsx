"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import NextImage from "@/components/NextImage";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      setIsSubmitting(true);

      const fields = new FormData(form);
      const formData = {
        name: String(fields.get("name") ?? ""),
        email: String(fields.get("email") ?? ""),
        message: String(fields.get("message") ?? ""),
      };

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email");
      }

      toast.success("Email Sent Successfully");
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to send email. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="flex animate_in flex-col min-h-full justify-center items-center px-4 sm:px-6 mb-32"
      id="contact"
    >
      <h1 className="text-3xl font-semibold text-center my-10">Contact</h1>
      <div className="mx-auto flex flex-col md:flex-row max-w-7xl gap-8 items-center justify-end">
        <Card className="md:w-[450px]">
          <CardHeader className="text-center font-semibold">
            Just to say hi,
            <br />
            Feel free to shoot me a message 😉.
          </CardHeader>
          <CardContent>
            <form onSubmit={sendEmail}>
              <div className="grid w-full items-center gap-1.5 my-5">
                <Label htmlFor="name">Name*</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="grid w-full items-center gap-1.5 my-5">
                <Label htmlFor="email">Email*</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="grid w-full items-center gap-1.5 my-5">
                <Label htmlFor="message">Mesaage*</Label>
                <Textarea
                  name="message"
                  rows={5}
                  placeholder="Enter Your Message"
                  required
                />
              </div>
              <div>
                <Button
                  disabled={isSubmitting}
                  variant="secondary"
                  className="w-full"
                  type="submit"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        <div className="w-full md:w-[450px] hidden md:block ml-auto">
          <NextImage
            height={500}
            width={500}
            className="w-full h-auto max-w-[450px] mx-auto"
            src="/contact.svg"
            alt="contactimg"
          />
        </div>
      </div>
    </section>
  );
}
