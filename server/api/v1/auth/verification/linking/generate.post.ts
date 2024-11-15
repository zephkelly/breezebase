import { OTPPurpose } from "~~/server/types/otp"
import { createOTP } from "~~/server/utils/auth/handlers/tokens/otp/generate"
import { SecureSessionData } from "~~/types/auth/user/session/secure"

import { getMailer } from "~~/server/utils/mailer"

export default defineEventHandler(async (event) => {
    try {
        const session = await getUserSession(event)
        const secureData: SecureSessionData | undefined = session.secure as SecureSessionData | undefined
        const email = (secureData?.provider_email) ? secureData.provider_email : null

        if (!session || !email) {
            throw createError({
                statusCode: 401,
                message: 'Unauthorized'
            })
        }

        const otp_code = await createOTP(event, email, OTPPurpose.ACCOUNT_LINKING)

        const mailer = getMailer()
        await mailer.sendVerificationEmail('evan.connor.kelly@gmail.com', otp_code)

        setResponseStatus(event, 201, 'Created')
    }
    catch (error: any) {
        if (error.statusCode) {
            throw error
        }

        throw createError({
            statusCode: 500,
            message: 'Failed to generate verification code'
        })
    }
})