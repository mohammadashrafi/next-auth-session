import { NextResponse } from "next/server";

export async function middleware(req) {

    const response = NextResponse.next();
    
     response.cookies.set("ashrafi", '124', {
       path: "/",
       httpOnly: true,
       sameSite: "none",
       secure: true,
     });
 
     return response;
     }

     export const config = {
        matcher: '/:path*',
      }