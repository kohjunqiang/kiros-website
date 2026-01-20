import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	/**
	 * Specify your server-side environment variables schema here. This way you can ensure the app
	 * isn't built with invalid env vars.
	 */
	server: {
		NODE_ENV: z.enum(["development", "test", "production"]),
		SMTP_HOST: z.string(),
		SMTP_PORT: z.string(),
		SMTP_SECURE: z.enum(["true", "false"]),
		SMTP_USERNAME: z.string(),
		SMTP_PASSWORD: z.string(),
		SMTP_EMAIL_FROM: z.string(),
		CONTACT_FORM_EMAIL: z.string(),
		CONTACT_FORM_EMAIL_CC: z.string().optional(),
		CONTACT_FORM_EMAIL_BCC: z.string().optional(),
	},

	/**
	 * Specify your client-side environment variables schema here. This way you can ensure the app
	 * isn't built with invalid env vars. To expose them to the client, prefix them with
	 * `NEXT_PUBLIC_`.
	 */
	client: {
		// NEXT_PUBLIC_CLIENTVAR: z.string(),
	},

	/**
	 * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
	 * middlewares) or client-side so we need to destruct manually.
	 */
	runtimeEnv: {
		NODE_ENV: process.env.NODE_ENV,
		SMTP_HOST: process.env.SMTP_HOST,
		SMTP_PORT: process.env.SMTP_PORT,
		SMTP_SECURE: process.env.SMTP_SECURE,
		SMTP_USERNAME: process.env.SMTP_USERNAME,
		SMTP_PASSWORD: process.env.SMTP_PASSWORD,
		SMTP_EMAIL_FROM: process.env.SMTP_EMAIL_FROM,
		CONTACT_FORM_EMAIL: process.env.CONTACT_FORM_EMAIL,
		CONTACT_FORM_EMAIL_CC: process.env.CONTACT_FORM_EMAIL_CC,
		CONTACT_FORM_EMAIL_BCC: process.env.CONTACT_FORM_EMAIL_BCC,
	},
	/**
	 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
	 * useful for Docker builds.
	 */
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
	/**
	 * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
	 * `SOME_VAR=''` will throw an error.
	 */
	emptyStringAsUndefined: true,
});
