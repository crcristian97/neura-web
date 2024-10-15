import * as brevo from '@getbrevo/brevo'

const apiInstance = new brevo.TransactionalEmailsApi()

apiInstance.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_API_KEY as string
)


export async function sendEmail(to: string, subject: string, htmlContent: string) {
    try {
        const smtpEmail = new brevo.SendSmtpEmail()
        smtpEmail.subject = subject
        smtpEmail.to = [{ email: 'crcristian97.cc@gmail.com', name: 'Cristian' }]
        smtpEmail.htmlContent = htmlContent
        smtpEmail.sender = { email: 'crcristian97.cc@gmail.com', name: 'Clientes' }

        await apiInstance.sendTransacEmail(smtpEmail)
    } catch (error) {
        console.error('Error sending email:', error)
        throw error // Re-throw the error for the caller to handle if needed
    }
}
