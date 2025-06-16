"use client";
import { useState } from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { toast, Toaster } from "sonner";
import { Phone } from "lucide-react";

import { Form, Formik, useField } from "formik";
import * as yup from "yup";
import Image from "next/image";

export function CTACall() {
  const [open, setOpen] = useState(false);

  const phoneRegex = RegExp("^0[0-9]{8}[0-9]$");

  const schema = yup.object().shape({
    name: yup.string().required("Le nom est requis"),
    email: yup
      .string()
      .required("L'email est requis")
      .email("L'email n'est pas valide. Exemple: leconte@gmail.com"),
    phone: yup
      .string()
      .required("Le téléphone est requis")
      .matches(phoneRegex, "Le téléphone n'est pas valide"),
  });

  const onSubmitToast = () => {
    toast.success("L'Email a bien été envoyé", {
      description: "Je vous rappelle d'ici 24h",
    });
  };

  return (
    <>
      <Collapsible
        className="fixed top-1/5 end-1 z-10 flex "
        open={open}
        onOpenChange={setOpen}
      >
        <CollapsibleTrigger
          className={`bg-leconte-primary rounded-md text-white h-fit cursor-pointer rounded-e-none border border-black ${
            open ? "p-2" : "p-4"
          }`}
        >
          {open ? (
            <Image
              alt="bouton close"
              width={20}
              height={20}
              className="text-white"
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e"
            />
          ) : (
            <div
              className={`capitalize ${
                open ? "rotate-90" : "rotate-0"
              }  font-medium flex gap-2 justify-center items-center`}
              style={{
                writingMode: open ? "inherit" : "vertical-rl",
              }}
            >
              <span className="rotate-90">
                <Phone />
              </span>
              être rappelé
            </div>
          )}
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Card className="w-3xs pt-2 sm:w-sm rounded-ss-none">
            <CardContent className="px-2 md:px-6">
              <Formik
                validationSchema={schema}
                onSubmit={onSubmitToast}
                initialValues={{
                  name: "",
                  email: "",
                  phone: "",
                }}
              >
                {({ handleSubmit, values }) => (
                  <Form
                    className="flex flex-col gap-4"
                    noValidate
                    onSubmit={handleSubmit}
                  >
                    <Toaster
                      richColors
                      position="top-center"
                      duration={3000}
                      closeButton
                    />
                    <TextInputLiveFeedback
                      label="Nom"
                      id="name"
                      name="name"
                      type="text"
                      value={values.name}
                    />
                    <TextInputLiveFeedback
                      label="Tél"
                      id="phone"
                      name="phone"
                      type="tel"
                      value={values.phone}
                    />
                    <TextInputLiveFeedback
                      label="Email"
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                    />
                    <div className="flex justify-center">
                      <Button
                        type="submit"
                        variant="default"
                        className="bg-leconte-primary hover:bg-leconte-primary hover:opacity-50"
                      >
                        Submit
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
}

const TextInputLiveFeedback = (propsPedr: {
  label: string;
  id: string;
  name: string;
  type: string;
  value: string;
}) => {
  const [field, meta] = useField(propsPedr);

  // Show inline feedback if EITHER
  // - the input is focused AND value is longer than 2 characters
  // - or, the has been visited (touched === true)
  const [didFocus, setDidFocus] = useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback = meta.touched;

  return (
    <>
      <div className="flex">
        <Label className="wrap-break-word w-1/5" htmlFor={propsPedr.id}>
          {propsPedr.label}
        </Label>
        <Input
          aria-checked={didFocus}
          {...propsPedr}
          {...field}
          onFocus={handleFocus}
          aria-describedby={`${propsPedr.id}-feedback ${propsPedr.id}-help`}
        />

        <span className="text-green-500 text-sm ps-2 pt-2">
          {" "}
          {showFeedback && !meta.error && "✓"}
        </span>
      </div>
      {showFeedback && (
        <div
          id={`${propsPedr.id}-feedback`}
          aria-live="polite"
          className="feedback text-sm ms-12 sm:ms-16 -mt-2 text-red-500"
        >
          {meta.error}
        </div>
      )}
    </>
  );
};
