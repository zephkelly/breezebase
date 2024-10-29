import { Provider } from '~~/types/user'
import { handleOAuthLogin } from '~~/server/utils/auth/oauthHandler'

export default defineOAuthDiscordEventHandler({
    async onSuccess(event, { user, tokens }) {
        return handleOAuthLogin(event, {
            provider: Provider.Discord,
            provider_id: user.id,
            provider_email: user.email,
            provider_verified: user.verified,
            picture: 'https://exampleimage.com'
        })
    },
    onError(event, error) {
        console.error('Error logging in with Discord:', error)
        return sendRedirect(event, '/login')
    }
})