import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';

export default function GrowLetters({ children, text, delay, isAnimated = false, weightEnd }) {
  const [hover, setHover] = useState(false);
  const [textFormated, setTextFormated] = useState([]);

  useEffect(() => {
    console.log(weightEnd);
    const formattedText = text.split('').map((letter, index) => (
      <motion.span 
        key={index}
        initial={isAnimated ? { fontVariationSettings: `"wght" 100`, color: '#010403'} : null}
        animate={{ fontVariationSettings: `"wght" ${weightEnd}`, color: '#DDF9EF'}}
        transition={{ duration: hover ? .3 : 1, delay: hover ? 0 : index * 0.05 + delay }}
        whileHover={{ fontVariationSettings: `"wght" 400`, transition: { duration: 0.3}}}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        className="mr-1"
      >
        {letter}
      </motion.span>
    ));
    setTextFormated(formattedText);
  }, [delay, hover, isAnimated, text, weightEnd]);

  return (
    <div>
      {React.Children.map(children, child => {
        return React.cloneElement(child, null, textFormated);
      })}
    </div>
  );
}
