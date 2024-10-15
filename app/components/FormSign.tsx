import React from "react";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { cn } from "@/app/lib/utils";
import { handleForm } from "@/app/action";

export async function SignupForm() {
  return (
    <div className="w-1/2  mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
    <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
      LETS BUILD TOGETHER
    </h2>
    <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 leading-relaxed">
      Complete the form below, or contact us directly:{' '}
      <span className="font-semibold text-blue-500 hover:text-blue-600 transition-colors">
        crcristian97.cc@gmail.com
      </span>{' '}
      /{' '}
      <span className="font-semibold text-green-500 hover:text-green-600 transition-colors">
        351-752-883
      </span>
    </p>

    <form className="my-8" action={handleForm} method="POST">
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
          <Label htmlFor="firstname">My name is</Label>
          <Input id="firstname" placeholder="TYPE YOUR NAME" name="firstname" type="text" />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="TYPE YOUR EMAIL" name="email" type="email" />
      </LabelInputContainer>
      </div>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
      <LabelInputContainer >
        <Label htmlFor="company">My Company is</Label>
        <Input id="company" placeholder="TYPE YOUR COMPANY NAME" name="company" type="text" />
      </LabelInputContainer>
      <LabelInputContainer >
        <Label htmlFor="budget">My budget is</Label>
        <Input id="budget" placeholder="TYPE YOUR BUDGET" name="budget" type="text" />
      </LabelInputContainer>
      </div>
      <LabelInputContainer >
        <Label htmlFor="proyectCompany">Tell me about your project</Label>
        <Input id="proyectCompany" placeholder="TYPE YOUR PROJECT" name="proyectCompany" type="text" />
      </LabelInputContainer>
      <button
        className="mt-4 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
      >
        Sign up &rarr;
        <BottomGradient />
      </button>
    </form>
  </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
