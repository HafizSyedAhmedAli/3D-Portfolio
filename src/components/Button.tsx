import Image from 'next/image';
import type { MouseEvent } from 'react';
type Props = {
   className: string;
   id: string;
   text: string;
};

const Button = ({ className, id, text }: Props) => {
   const handleClick = (e: MouseEvent) => {
      e.preventDefault();

      // const target = document.getElementById('counter');
      const target = document.getElementById('work');

      // if (target && id) {
         const offset = window.innerHeight * 0.15;

         const top =
            target!.getBoundingClientRect().top + window.scrollY; //- offset;

         window.scrollTo({ top, behavior: 'smooth' });
      // }
   };

   return (
      <button onClick={handleClick} className={`cta-wrapper ${className}`}>
         <div className="cta-button group">
            <div className="bg-circle" />
            <p className="text">{text}</p>
            <div className="arrow-wrapper">
               <Image src="/images/arrow-down.svg" alt="arrow" width={20} height={20} />
            </div>
         </div>
      </button>
   );
};

export default Button;
