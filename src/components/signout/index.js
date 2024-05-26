"use server"
import { cookies } from "next/headers";

export default async function signoutfunc(){
    return cookies().delete('custom-sessions');
}