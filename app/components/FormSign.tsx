'use client'
import React, { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { cn } from "@/app/lib/utils";
import { handleForm } from "@/app/action";
import { Modal } from "@/app/components/ui/modal";

const formAction = async (prevState: unknown, formData: FormData) => {
  return handleForm(formData);
};

export function SignupForm() {
  const [, dispatch] = useFormState(formAction, null);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await dispatch(new FormData(event.currentTarget));
    setShowModal(true);
  };

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showModal]);

  return (
    <div className="w-full md:w-3/4 lg:w-1/2 mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
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

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <LabelInputContainer className="w-full sm:w-1/2">
              <Label htmlFor="firstname">My name is</Label>
              <Input id="firstname" placeholder="TYPE YOUR NAME" name="firstname" type="text" />
            </LabelInputContainer>
            <LabelInputContainer className="w-full sm:w-1/2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="TYPE YOUR EMAIL" name="email" type="email" />
            </LabelInputContainer>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <LabelInputContainer className="w-full sm:w-1/2">
              <Label htmlFor="company">My Company is</Label>
              <Input id="company" placeholder="TYPE YOUR COMPANY NAME" name="company" type="text" />
            </LabelInputContainer>
            <LabelInputContainer className="w-full sm:w-1/2">
              <Label htmlFor="budget">My budget is</Label>
              <Input id="budget" placeholder="TYPE YOUR BUDGET" name="budget" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer>
            <Label htmlFor="proyectCompany">Tell me about your project</Label>
            <Input id="proyectCompany" placeholder="TYPE YOUR PROJECT" name="proyectCompany" type="text" />
          </LabelInputContainer>
        </div>
        <button
          className="mt-6 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>
      </form>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">Thanks!</h2>
          <p>We will contact you soon.</p>
        </div>
      </Modal>
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
