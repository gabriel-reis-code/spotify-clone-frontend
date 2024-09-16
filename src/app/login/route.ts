import { cookies } from 'next/headers';
import LoginPage from './page';

export async function GET(request: Request) {
  console.log('veio aquiiii');
  console.log(request);
  const cookieStore = cookies();
  const token = cookieStore.get('token')
 
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `token=${token?.value}` },
  })
}