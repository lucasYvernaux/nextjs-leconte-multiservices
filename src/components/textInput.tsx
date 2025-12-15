"use client";
import { useField } from "formik";
import { useState } from "react";
import { Label } from "./ui/label";
import { propsInput } from "@/lib/type";

export function TextInputLiveFeedback(propsInput: propsInput) {
  const [field, meta] = useField(propsInput);

  // Show inline feedback if EITHER
  // - the input is focused AND value is longer than 2 characters
  // - or, the has been visited (touched === true)
  const [didFocus, setDidFocus] = useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback = meta.touched;
  const ROWS = 10;

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
                    rows={ROWS}
                    onFocus={handleFocus}
                    aria-describedby={`${propsInput.id}-feedback ${propsInput.id}-help`}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border ${
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
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border ${
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
            } duration-300 transform -translate-y-4 scale-75 top-4 origin-left start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}
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
}
