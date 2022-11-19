# Tailwing config for nextJS

I follow the official guide => https://tailwindcss.com/docs/guides/nextjs

# Header.jsx

I install react social icons => https://www.npmjs.com/package/react-social-icons

Then, check this out =>

```jsx
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <div className="flex flex-row items-center">
        {/* social icons */}
        <SocialIcon
          url="https://twitter.com/codingsirius"
          fgColor="gray"
          bgColor="transparent"
        />
        {/* can change network as I wish */}
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>
    </header>
  );
};

export default Header;
```

For SoricalIcon, if I give a LinkedIn url, the icon turn inthe LinkedIn icon. If I give a Twitter url, the icon turn in the Twitter icon. How cool is that?

# Framer Motion

install with => `npm i framer-motion`
I import it in the componrnt =>`import { motion } from "framer-motion"; `

Then, check Header.tsx

```tsx
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      {/* I wrap the social icons with motion.div */}
      <motion.div
      {/* from */}
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        {/* to */}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center flex-row"
      >
        <div className="flex flex-row items-center">
          {/* social icons */}
          <SocialIcon
            url="https://twitter.com/codingsirius"
            fgColor="gray"
            bgColor="transparent"
          /> <SocialIcon
            url="https://twitter.com/codingsirius"
            fgColor="gray"
            bgColor="transparent"
          /> <SocialIcon url="https://twitter.com/codingsirius" fgColor="gray" bgColor="transparent" />
        </div>
        <div className="flex flex-row items-center text-gray-300 cursor-pointer">
          {" "}
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
```

# Hero component

## react simple typewriter

https://www.npmjs.com/package/react-simple-typewriter
npm i react-simple-typewriter

Check the following component out =>

```tsx
import React from "react";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    loop: true,
    words: ["Web Developer", "Software Engineer", "Full Stack Developer"],
    delaySpeed: 2000,
  });
  return (
    <div>
      {/* you can add typewriter like this also */}
      {/* <Typewriter
        words={["Hi, my name is Murat Can Yüksel", "Sleep", "Code", "Repeat!"]}
        loop={true}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={2000}
      />{" "} */}
      <h1>
        <span> {text} </span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
};

export default Hero;
```

Here you see 2 ways of using the typewriter. We can either pass the `Typewriter` props directly in the return statement, or we can use the `useTypewriter` hook.
Quite basic eh.
