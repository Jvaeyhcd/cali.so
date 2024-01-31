export const emailConfig = {
  from: 'hi@cali.so',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://jvaeyhcd.fun`
      : 'http://localhost:3000',
}
