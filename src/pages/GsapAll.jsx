import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const GsapAll = () => {
  const scrollRef = useRef();
  const scrollRef2 = useRef();

  useGSAP(() => {
    gsap.to("#text", {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      y: 0,
    });

    gsap.fromTo(
      ".para",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.1,
      }
    );
    //the scroll trigger animation
    const images = gsap.utils.toArray(scrollRef.current.children);

    images.forEach((image) => {
      gsap.to(image, {
        x: 100 * (images.indexOf(image) + 5),
        rotation: 360,
        borderRadius: "15px",
        scale: 2,
        scrollTrigger: {
          trigger: image,
          start: "bottom bottom",
          end: "top 40%",
          scrub: true,
        },
        ease: "power1.inOut",
      });
    });

    //scroll trigger to the text
    gsap.fromTo(
        scrollRef2.current.children, 
        {
            opacity: 0,
            y: 50,
        },
        {
            opacity: 1,
            x: 50,
            y:0,
            stagger: 0.1,
            fontSize: '25px',
            fontWeight: '600',
            padding: '2rem',
            scrollTrigger: {
                trigger: scrollRef2.current,
                start: "top 80%",
                end: "top 50%",
                scrub: true,
            },
            // ease: 'power1.inOut'
        }
    );
  }, []);
  return (
    <main>
      <h1 id="text" className="opacity-0 translate-y-10">
        the maidens - Synopsis
      </h1>

      <p className="mt-5 text-gray-500 para">
        In The Maidens, Mariana finds herself the on idyllic campus of Cambridge
        University after her niece Zoe's closest friend, Tara, has been
        murdered. Zoe believes the murderer is Professor Edward Fosca, the
        handsome and popular Greek tragedy professor on campus. Fosca is
        charismatic and idolized by his students, especially a group of female
        students known as The Maidens, named after the goddess Persephone.
      </p>

      <p className="mt-5 text-gray-500 para">
        Despite his alibi, Mariana is convinced of Fosca's guilt and is drawn
        into the investigation, which soon grows more complicated when another
        body is found.
      </p>

      <p className="mt-5 text-gray-500 para">
        In this mystery involving Ancient Greek rites and brutal murders,
        Mariana becomes determined to unmask the killer, even as she risks
        endangering herself.
      </p>

      <p className="mt-5 text-gray-500 para">
        (The Full Plot Summary is also available, below){" "}
        <a
          href="https://the-bibliofile.com/the-maidens/#bksummary"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          right here.
        </a>{" "}
      </p>

      <div className="w-full h-[70vh] flex justify-center items-center flex-col">
        <p className="text-center text-gray-500">
          Scroll down to see the animation
        </p>

        <svg
          className="animate-bounce mt-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7 7 7-7" />
        </svg>
      </div>

      <div className="mt-20 w-full h-screen" ref={scrollRef}>
        <img
          src="https://th.bing.com/th/id/OIP.sBKC5NEYgKVjDFPbQWX3-AHaFj?w=288&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
          id="img-camb"
          className="w-40 h-40"
        />
        <img
          src="https://th.bing.com/th/id/OIP.3zDWIGN0OgZUVTu7rNk2sAHaJQ?w=132&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
          id="img-book"
          className="mt-5 w-25 h-50"
        />
      </div>

      {/* the stagger  */}
      <div className="mt-20 w-full h-screen flex flex-col items-center" ref={scrollRef2}>
        <p className="mt-5 text-gray-500 ">
          In this mystery involving Ancient Greek rites and brutal murders,
          Mariana becomes determined to unmask the killer, even as she risks
          endangering herself.
        </p>
        <p className="mt-5 text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus enim
          quis earum mollitia ut nemo expedita ipsam quae illo est, quidem
          temporibus autem culpa dicta sapiente accusamus? Animi deserunt
          molestias odio qui quaerat necessitatibus ullam atque sed nisi optio.
          Possimus quaerat quas sed quos, nisi incidunt magni vitae deserunt
          praesentium quia, ipsam deleniti blanditiis facilis voluptas debitis
          dignissimos culpa? Mollitia laboriosam dolorum quas suscipit nostrum
          sit nesciunt vel magni quo inventore molestiae fugiat error laborum
          commodi esse ratione perferendis et consectetur sed maxime, nobis
          architecto amet doloremque. Nesciunt eveniet officia in nisi
          cupiditate a, voluptates quidem dolor doloremque aut nobis!
        </p>
      </div>
    </main>
  );
};

export default GsapAll;
