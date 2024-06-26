import Link from "next/link";
import Postmes from "../components/postMessegeComponent/postmes";
import RequestStorage from "../components/requestStorage";
import IFrameCookieExample from "../components/requestStorage/RequestPageTwo";


export default function Home() {
    return (
        <main className="container mx-auto">
            
            <div className="text-center">
                <h1 className="text-3xl mt-10 mb-10 text-center">
                    اپلیکیشن Quiz
                </h1>
                <Link href="/quiz">
                    <button
                        type="button"
                        className="px-6 py-2 text-sm rounded shadow bg-rose-100 hover:bg-rose-200 text-rose-500 w-72"
                    >
                        شروع آزمون
                    </button>
                </Link>
            </div>
            <Postmes/>
            {/* <RequestStorage/> */}
            {/* <IFrameCookieExample/> */}
           

        </main>
    );
}
