export const seo = {
  title: 'Jvaeyhcd | 个人博客',
  description:
    '',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
