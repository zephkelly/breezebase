export default defineNuxtConfig({
    future: {
        compatibilityVersion: 4,
    },

    compatibilityDate: '2024-04-03',
    devtools: { enabled: false },
    devServer: {
        host: '127.0.0.1',
    },

    typescript: {
        strict: true,
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
        },
    },

    modules: ['nuxt-auth-utils'],

    runtimeConfig: {
        databaseConnectionString: process.env.POSTGRES_CONNECTION_STRING,
        oauth: {
            google: {
                clientId: process.env.NUXT_OAUTH_GOOGLE_CLIENT_ID,
                clientSecret: process.env.NUXT_OAUTH_GOOGLE_CLIENT_SECRET,
                redirectURL: process.env.NUXT_OAUTH_GOOGLE_REDIRECT_URL
            },
            github: {
                clientId: process.env.NUXT_OAUTH_GITHUB_CLIENT_ID,
                clientSecret: process.env.NUXT_OAUTH_GITHUB_CLIENT_SECRET,
                redirectURL: process.env.NUXT_OAUTH_GITHUB_REDIRECT_URL
            },
            discord: {
                clientId: process.env.NUXT_OAUTH_DISCORD_CLIENT_ID,
                clientSecret: process.env.NUXT_OAUTH_DISCORD_CLIENT_SECRET,
                redirectURL: process.env.NUXT_OAUTH_DISCORD_REDIRECT_URL
            }
        },

        smtp: {
            host: process.env.AMAZON_SES_SMTP_HOST,
            port: process.env.AMAZON_SES_SMTP_PORT,
            secure: process.env.AMAZON_SES_SMTP_SECURE,
            user: process.env.AMAZON_SES_SMTP_USER,
            password: process.env.AMAZON_SES_SMTP_PASS,

            from_noreply: process.env.EMAIL_FROM_NOREPLY
        }
    },
    
})