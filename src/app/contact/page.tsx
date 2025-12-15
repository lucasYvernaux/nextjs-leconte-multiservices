"use client";

import { Formik } from "formik";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

import { toast, Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { useFormStatus } from "react-dom";
import { ContactFormState } from "@/lib/type";
import { TextInputLiveFeedback } from "@/components/textInput";

export default function ContactPage() {
  const phoneRegex = RegExp("^0[0-9]{8}[0-9]$");
  const { pending } = useFormStatus();
  const DURATION = 5000;
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
    result.lastName = result.lastName.toUpperCase();
    result.firstName =
      result.firstName.charAt(0).toUpperCase() + result.firstName.slice(1);
    try {
      emailjs
        .send(
          "service_k61gxzh", //serviceID
          "template_g4nk9pw", //TemplateID
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
        )
        .catch((err) => {
          console.error("Erreur lors du fecth");
          console.error(err);
          throw new Error(`Erreur lors du fetch: ${err}`);
        });
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
      <Toaster
        richColors
        position="top-center"
        duration={DURATION}
        closeButton
      />
      <Section name="form" idPage="contact" title="Contactez-nous" first>
        <Formik
          validationSchema={schema}
          onSubmit={onSubmit}
          initialValues={initialValues}
        >
          {({ handleSubmit, values }) => (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 m-auto md:w-3/4 md:px-16 md:gap-12"
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
                  disabled={pending}
                  className="bg-leconte-primary text-base hover:bg-leconte-primary hover:opacity-50"
                >
                  {pending ? "Envoie. . ." : "Envoyer"}
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </Section>
    </>
  );
}
