"use server"
import { sendEmail } from "@/lib/brevo"

export async function handleForm(formData: FormData) {
    const firstname = formData.get("firstname") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const budget = formData.get("budget") as string;
    const proyectCompany = formData.get("proyectCompany") as string;

    if(!firstname || !email || !company || !budget || !proyectCompany) {
        return { error: "Please fill in all fields" };
    }

    const formDataObject = {
        firstname,
        email,
        company,
        budget,
        proyectCompany
    };

    console.log("Received form data:", formDataObject);

    try {
        await sendEmail(
            email,
            `${firstname} at ${company}`,
            `${proyectCompany}. My budget is ${budget}. My email is ${email}`
        );
        return { success: true, message: "Form submitted successfully", data: formDataObject };
    } catch (error) {
        console.error("Error sending email:", error);
        return { error: "An error occurred while submitting the form" };
    }
}
