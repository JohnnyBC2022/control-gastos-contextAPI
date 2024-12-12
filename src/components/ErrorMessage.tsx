import { PropsWithChildren } from "react";

function ErrorMessage({ children }: PropsWithChildren) {
  return (
    <p className="bg-red-600 text-white font-bold text-sm text-center p-2">
      {children}
    </p>
  );
}

export default ErrorMessage;