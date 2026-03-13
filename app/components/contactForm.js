"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "@restart/ui";

const Fieldset = styled.fieldset`
  border: 0;
  margin: auto;
  padding: 0 0 1.5rem;

  label {
    align-self: center;
    font-family: var(--font-family-grotesk);
    font-size: var(--font-size-heading-subtitle);
    font-weight: 600;
    grid-column: 1 / 2;
    text-align: right;
    text-transform: uppercase;
  }

  input,
  textarea {
    font-family: var(--font-family-proxima);
    padding: 0.75rem;
    width: 100%;
  }
`;

const Submit = styled(Button)`
  background-color: var(--color-black);
  border: 0;
  border-radius: 8px;
  color: var(--color-white);
  cursor: pointer;
  padding: 0.75rem 1.5rem;
  transition: all 300ms;

  &:hover {
    color: var(--color-green);
  }

  &:active {
    opacity: 0.8;
  }
`;

export default function ContactForm() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  return success ? (
    <p>
      <strong>Thank you for reaching out!</strong>
    </p>
  ) : (
    <form name="/contact" method="POST" data-netlify="true">
      name="contact"
      id="contact"
      <input type="hidden" name="form-name" value="contact" />

      <Fieldset>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
      </Fieldset>
      <Fieldset>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
      </Fieldset>
      <Fieldset>
        <label htmlFor="phone">Phone:</label>
        <input type="phone" name="phone" id="phone" />
      </Fieldset>
      <Fieldset>
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message"></textarea>
      </Fieldset>
      <Fieldset>
        <Submit type="submit">Submit</Submit>
      </Fieldset>
    </form>
  );
}
