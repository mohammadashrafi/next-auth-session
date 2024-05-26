import {getServerSession} from "next-auth/next"
import { options } from "../api/auth/[...nextauth]/options";
export default async function About() {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const session = await getServerSession(options);
    console.log("Session: " + session)
   

    return (
        <main className="p-5 mt-2 bg-gray-80 dark:bg-gray-800 shadow-lg dark:shadow-dark rounded mx-auto w-7/12">
            <div>
                <div className="text-gray-800  text-center mb-5">
                   
                   <h2 className="text-gray-800 text-xl">about page</h2>
                </div>
                {/* <Link href={`/about/photo`}>
                    <Image
                        alt=""
                        src={photo}
                        height={400}
                        width={400}
                        className="mx-auto rounded object-cover aspect-square"
                    />
                </Link> */}
            </div>
        </main>
    );
}
