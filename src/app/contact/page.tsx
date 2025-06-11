"use client";
import { useState } from "react";

import { Formik, useField } from "formik";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

import { toast, Toaster } from "sonner";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";

interface ContactFormState {
  [key: string]: unknown;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function page() {
  const phoneRegex = RegExp("^0[0-9]{8}[0-9]$");

  const initialValues: ContactFormState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const schema = yup.object().shape({
    firstName: yup.string().required("Le prénom est requis"),
    lastName: yup.string().required("Le nom est requis"),
    email: yup
      .string()
      .required("L'email est requis")
      .email("L'email n'est pas valide. Exemple: leconte@gmail.com"),
    phone: yup
      .string()
      .required("Le téléphone est requis")
      .matches(phoneRegex, "Le téléphone n'est pas valide"),
    subject: yup.string().required("L'objet est requis"),
    message: yup.string().required("Le message est requis"),
  });

  function onSubmit(result: ContactFormState) {
    console.log("onsubmit");
    console.log(result);

    try {
      emailjs
        .send(
          "service_y15rv6s", //serviceID
          "template_k5nglaw", //TemplateID
          result,
          "tdeeaKm62sv5davM8" //Public Key
        )
        .then(
          () => {
            toast.success("L'email a bien été envoyé", {
              description: "Je vous rappellerai dans les plus bref délai.",
            });
          },
          () => {
            toast.error("L'email n'a pas été envoyé", {
              description:
                "Une erreur est survenue, Désolé de la gêne occasionnée. ",
            });
          }
        );
    } catch (e) {
      console.error("Erreur EmailJS: " + e);
      toast.error("L'email n'a pas été envoyé", {
        description:
          "Une erreur est survenue, avant l'envoie, Désolé de la gêne occasionnée. ",
      });
    }
  }

  return (
    <>
      <Toaster richColors position="top-center" duration={5000} closeButton />
      <Section name="form" idPage="contact" title="Contactez-nous" first>
        <Formik
          validationSchema={schema}
          onSubmit={onSubmit}
          initialValues={initialValues}
        >
          {({ handleSubmit, values }) => (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 m-auto md:px-16 md:gap-12"
            >
              <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                <div className="md:w-1/2">
                  <TextInputLiveFeedback
                    label="Prénom"
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={values.firstName}
                  />
                </div>
                <div className="md:w-1/2">
                  <TextInputLiveFeedback
                    label="Nom"
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={values.lastName}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                <div className="md:w-1/2">
                  <TextInputLiveFeedback
                    label="Téléphone"
                    id="phone"
                    name="phone"
                    type="tel"
                    value={values.phone}
                  />
                </div>
                <div className="md:w-1/2">
                  <TextInputLiveFeedback
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                  />
                </div>
              </div>

              <TextInputLiveFeedback
                label="Objet"
                id="subject"
                name="subject"
                type="text"
                value={values.subject}
              />
              <TextInputLiveFeedback
                label="Message"
                id="message"
                name="message"
                type="textarea"
                value={values.message}
              />
              <div className="flex justify-center">
                <Button
                  type="submit"
                  title="Enoyer le formulaire"
                  variant="default"
                  className="bg-leconte-primary text-base hover:bg-leconte-primary hover:opacity-50"
                >
                  Envoyer
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </Section>
    </>
  );
}

const TextInputLiveFeedback = (propsInput: {
  label: string;
  id: string;
  name: string;
  type: string;
  value: string;
}) => {
  const [field, meta] = useField(propsInput);

  // Show inline feedback if EITHER
  // - the input is focused AND value is longer than 2 characters
  // - or, the has been visited (touched === true)
  const [didFocus, setDidFocus] = useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback = meta.touched;

  // function formatPhoneText(value: string) {
  //   value = value.trim().replaceAll(" ", "");

  //   if (value.length > 2 && value.length <= 4)
  //     value = value.slice(0, 2) + " " + value.slice(2);
  //   else if (value.length > 4 && value.length <= 6)
  //     value =
  //       value.slice(0, 2) + " " + value.slice(2, 4) + " " + value.slice(4);
  //   else if (value.length > 6 && value.length <= 8)
  //     value =
  //       value.slice(0, 2) +
  //       " " +
  //       value.slice(2, 4) +
  //       " " +
  //       value.slice(4, 6) +
  //       " " +
  //       value.slice(6);
  //   else if (value.length > 8 && value.length <= 10)
  //     value =
  //       value.slice(0, 2) +
  //       " " +
  //       value.slice(2, 4) +
  //       " " +
  //       value.slice(4, 6) +
  //       " " +
  //       value.slice(6, 8) +
  //       " " +
  //       value.slice(8);
  //   return value;
  // }

  return (
    <>
      <div>
        <div className="relative">
          {(() => {
            switch (propsInput.type) {
              case "textarea":
                return (
                  <textarea
                    aria-checked={didFocus}
                    {...field}
                    rows={10}
                    onFocus={handleFocus}
                    aria-describedby={`${propsInput.id}-feedback ${propsInput.id}-help`}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                      showFeedback &&
                      !meta.error &&
                      "border-green-600 focus:border-green-600"
                    } ${
                      showFeedback &&
                      meta.error &&
                      "border-red-600 focus:border-red-600"
                    } appearance-none focus:outline-none focus:ring-0 focus:border-leconte-primary peer`}
                    placeholder=" "
                  ></textarea>
                );
              default:
                return (
                  <input
                    aria-checked={didFocus}
                    {...propsInput}
                    {...field}
                    onFocus={handleFocus}
                    aria-describedby={`${propsInput.id}-feedback ${propsInput.id}-help`}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                      showFeedback &&
                      !meta.error &&
                      "border-green-600 focus:border-green-600"
                    } ${
                      showFeedback &&
                      meta.error &&
                      "border-red-600 focus:border-red-600"
                    } appearance-none focus:outline-none focus:ring-0 focus:border-leconte-primary peer`}
                    placeholder=" "
                  />
                );
            }
          })()}
          <Label
            htmlFor={propsInput.id}
            className={`absolute text-sm text-gray-500 ${
              showFeedback && !meta.error && "text-green-600"
            } ${
              showFeedback && meta.error && "text-red-600"
            } duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}
          >
            {propsInput.label}
          </Label>
        </div>

        <p
          id={`${propsInput.id}_error_help`}
          className={`mt-2 text-base text-red-600 ${
            showFeedback ? "block" : "hidden"
          }`}
        >
          {meta.error}
        </p>
      </div>
    </>
  );
};
