import { cookies } from 'next/headers';

export async function GET(request: Request) {
  console.log('veio aquiiii');
  const cookieStore = cookies();
  const token = cookieStore.get('token')
 
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `token=${token?.value}` },
  })
}