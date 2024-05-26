import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";

export const options = {
    providers: [
        CredentialsProvider({
           
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              email: { label: "email", type: "email", placeholder: "email" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
    
              // const res = await fetch("http://192.168.160.97:3535/login", {
              //   method: 'POST',
              //   body: JSON.stringify(credentials),
              //   headers: { "Content-Type": "application/json" }
              // })
              // console.log("res",res)
              // const user = await res.json()
        // console.log("user",user)

        const user={
          id:11,
          email:"test@test.com",
          userName:"m.ashrafi",
          password:"1234",
          token:"eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..pq44ajBGZ8paYN85.-SOzoB9lP7sqIQDzHBCdY91qFSbfpfNtliX4LJJ8JcMRt24ISKgiH_i0RpBq0r_-GI5m0yeAIzokbl5hDGkVI9DSnHBjASI-2tKR4bwSnNRWW_f3RRBEUwD3Ers3OAMw9-9Vw3aTZCndef4VfbseN0dwhA.bq8ZvaTvmtxMqHeep4eTuA"
        }
             
              if (credentials.email=== user.email && credentials.password=== user.password) {
                cookies().set('custom-sessions',user.token,{
                  httpOnly:false,
                  sameSite:false,
                  secure:false,
                  
                })

                return user
              }
          
              return null
            },
            
          })
    ],
    pages: {
        signIn: "/auth/login",
        signOut: "/auth/signout",
    },
    // cookies:{
    //   sessionToken: {
    //     name: `session-token`,
    //     options: {
    //       httpOnly: false,
    //       sameSite: 'lax',
    //       path: '/',
    //       secure: false
    //     }
    //   },
    // }
};
