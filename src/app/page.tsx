import Image from "next/image";
import Header from '@/app/components/header'
import Footer from "./components/footer"
import Link from "next/link";
export default function Home() {
  return(
    <section>
      <div className="parentContainer">
        {/* Post card 1 */}
        <div className="childContainer bounce-top ">
          <img className="img" src="images.jpeg" alt="" />
          <div>
            <h1 className="title"> Blog Tital</h1>
            <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur consequuntur neque magni delectus labore excepturi ad autem est assumenda unde at animi distinctio nam aspernatur, eos nostrum? Ullam, consequatur! Odit.</p>
          </div>
          <Link href={'/post6'} className="readMore"> Read More</Link>  
        </div>

        {/* Post card 2 */}
        <div className="childContainer bounce-top ">
          <img className="img" src="images.jpeg" alt="" />
          <div>
            <h1 className="title"> Blog Tital</h1>
            <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur consequuntur neque magni delectus labore excepturi ad autem est assumenda unde at animi distinctio nam aspernatur, eos nostrum? Ullam, consequatur! Odit.</p>
          </div>
          <Link href={'/post5'} className="readMore"> Read More</Link>
        </div>

        {/* Post card 3 */}
        <div className="childContainer bounce-top ">
          <img className="img" src="images.jpeg" alt="" />
          <div className="flex flex-col gap-1">
            <h1 className="title"> Blog Tital</h1>
            <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur consequuntur neque magni delectus labore excepturi ad autem est assumenda unde at animi distinctio nam aspernatur, eos nostrum? Ullam, consequatur! Odit.</p>
          </div>
          <Link href={'/post4'} className="readMore"> Read More</Link>
        </div>

        {/* Post card 4 */}
        <div className="childContainer bounce-top ">
          <img className="img" src="images.jpeg" alt="" />
          <div className="flex flex-col gap-1">
            <h1 className="title"> Blog Tital</h1>
            <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur consequuntur neque magni delectus labore excepturi ad autem est assumenda unde at animi distinctio nam aspernatur, eos nostrum? Ullam, consequatur! Odit.</p>
          </div>
          <Link href={'/post3'} className="readMore"> Read More</Link>
        </div>

        {/* Post card 5 */}
        <div className="childContainer bounce-top ">
          <img className="img" src="images.jpeg" alt="" />
          <div className="flex flex-col gap-1">
            <h1 className="title"> Blog Tital</h1>
            <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur consequuntur neque magni delectus labore excepturi ad autem est assumenda unde at animi distinctio nam aspernatur, eos nostrum? Ullam, consequatur! Odit.</p>
          </div>
          <Link href={'/post1'} className="readMore"> Read More</Link>
        </div>

        {/* Post card 6 */}
        <div className="childContainer bounce-top ">
          <img className="img" src="images.jpeg" alt="" />
          <div className="flex flex-col gap-1">
            <h1 className="title"> Blog Tital</h1>
            <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur consequuntur neque magni delectus labore excepturi ad autem est assumenda unde at animi distinctio nam aspernatur, eos nostrum? Ullam, consequatur! Odit.</p>
          </div>
          <Link href={'/post2'} className="readMore"> Read More</Link>
        </div>
      </div>
    </section>
  );
}
