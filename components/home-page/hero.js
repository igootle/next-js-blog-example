import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/tle.jpeg"
          alt="An image showing me"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Rapeepat</h1>
      <p>
        Adipisicing enim aliqua nisi cillum voluptate laborum exercitation
        laboris qui voluptate ullamco elit anim minim.{" "}
      </p>
    </section>
  );
}

export default Hero;
