import Link from "next/link";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

export default function Links(){
    return(
        <div>
            <Header/>
        <h1>
            <p className="calculator"><a href="https://github.com/AliJamali06/m1simple-_calculator">Calculator</a></p>
            <p className="Number-gasing-machine"><a href="https://github.com/AliJamali06/cli-Number-guessing"></a>Number Gasing MAchine</p>
         </h1>
             <Footer/>
        </div>
    );
}