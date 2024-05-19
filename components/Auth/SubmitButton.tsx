// /components/Auth/Login/SubmitButton.tsx
"use client";

import { useFormStatus } from "react-dom";
import { type ComponentProps } from "react";

type Props = ComponentProps<"button"> & {
  pendingText?: string;
};

const SubmitButton: React.FC<Props> = ({ children, pendingText, ...props }) => {
  const { pending, action } = useFormStatus();
  const isPending = pending && action === props.formAction;
  return (
    <button {...props} type="submit" aria-disabled={pending}>
      {isPending ? pendingText : children}
    </button>
  );
};

export default SubmitButton;
