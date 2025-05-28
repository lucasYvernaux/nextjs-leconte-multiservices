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

import { Cross, Phone } from "lucide-react";

import { Form, Formik, useField } from "formik";
import * as yup from "yup";

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
        className="fixed top-1/5 end-0 flex "
        open={open}
        onOpenChange={setOpen}
      >
        <CollapsibleTrigger className="bg-leconte-primary rounded-md px-4 py-2 text-white h-fit">
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
          <Card className="w-3xs md:w-sm">
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
                    <div>
                      <Button
                        type="submit"
                        variant="destructive"
                        className="w-fit m-auto"
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
          className="feedback text-sm ms-16 -mt-2 text-red-500"
        >
          {meta.error}
        </div>
      )}
    </>
  );
};
