import { NextResponse } from "next/server";

export async function middleware(req) {

    const response = NextResponse.next();
    
     response.cookies.set("ashrafi", '124', {
       path: "/",
       httpOnly: false,
       sameSite: "none",
       secure: false,
       domain:"http://localhost:3002"
      
     });
 
     return response;
     }

     export const config = {
        matcher: '/:path*',
      }