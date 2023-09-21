import React, { useEffect, useRef, useState } from 'react';

import emailjs from '@emailjs/browser';
import { Loader } from 'components/Loader/Loader';
import gsap from 'gsap';
import { MessageFormBox } from 'styles/styled';

export default function MessageForm() {
   const messageForm = useRef(null);
   const close = useRef([]);
   const elements = useRef([]);
   const tl = useRef(gsap.timeline());
   const timer = useRef(null);

   const [isClicked, setIsClicked] = useState(false);
   const [form, setForm] = useState({ name: '', email: '', message: '' });
   const [isLoading, setIsLoading] = useState(false);
   const [timeOut, setTimeOut] = useState(-3);
   const [closeFlag, setCloseFlag] = useState(false);

   useEffect(() => {
      if (isClicked) {
         tl.current.to(messageForm.current, {
            duration: 0.35,
            ease: `power2.easeOut`,
            bottom: '50%',
            right: '50%',
            width: '60vw',
            height: '50vh',
            rotate: 0,
            translate: '50% 50%',
            borderRadius: '10px',
            cursor: 'default',
         });
         gsap.to([...close.current, ...elements.current], {
            duration: 0.3,
            scale: 1,
            opacity: 1,
            // stagger: 0.1,
         });
      } else {
         gsap.to([...close.current, ...elements.current], {
            scale: 0,
            opacity: 0,
            // stagger: 0.1,
         });
         tl.current.to(messageForm.current, {
            duration: 0.55,
            ease: `power2.easeOut`,
            bottom: '5%',
            right: '5%',
            width: 'auto',
            height: 'auto',
            rotate: -25,
            translate: '0% 0%',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
            borderBottomRightRadius: '8px',
            borderBottomLeftRadius: '30px',
            cursor: 'pointer',
         });
      }
   }, [isClicked]);

   useEffect(() => {
      if (timeOut === 0) {
         clearInterval(timer.current);
         setCloseFlag(false);
         setIsClicked(false);
         setTimeOut(-3);
      }
   }, [timeOut]);

   const onClick = () => {
      !isClicked && setIsClicked(true);
   };

   const onClose = () => {
      isClicked && setIsClicked(false);
   };

   const onMouseEnter = () => {
      !isClicked && gsap.to(messageForm.current, { rotate: 0 });
   };

   const onMouseLeave = () => {
      !isClicked && gsap.to(messageForm.current, { rotate: -25 });
   };

   const onSubmit = async (e) => {
      e.preventDefault();
      const { name, email, message } = form;
      const formToSend = { from_name: name, from_email: email, message };

      setIsLoading(true);
      try {
         const res = await emailjs.send(
            'service_7zra51v',
            'template_ixfqsfs',
            formToSend,
            'P-hDWjvQKM1uBTXqM'
         );

         if (res.text === 'OK') {
            setCloseFlag(true);
            timer.current = setInterval(() => {
               setTimeOut((prev) => prev + 1);
            }, 1000);
         }
      } catch (error) {
         console.log(error.text);
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <MessageFormBox
         onClick={onClick}
         ref={messageForm}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
      >
         <p>
            <span>Text me</span>
            <span
               onClick={onClose}
               ref={(el) => close.current.push(el)}
            >
               {closeFlag ? `Autoclose ${Math.abs(timeOut)}` : 'x'}
            </span>
         </p>
         <form
            onSubmit={onSubmit}
            ref={(el) => elements.current.push(el)}
         >
            <input
               type="text"
               name="name"
               placeholder="Your Name"
               ref={(el) => elements.current.push(el)}
               required
               value={form.name}
               onChange={({ target: { name, value } }) =>
                  setForm((prev) => ({ ...prev, [name]: value }))
               }
            />
            <input
               type="email"
               name="email"
               placeholder="Your Email"
               ref={(el) => elements.current.push(el)}
               required
               value={form.email}
               onChange={({ target: { name, value } }) => {
                  setForm((prev) => ({ ...prev, [name]: value }));
               }}
            />
            <textarea
               name="message"
               placeholder="Message"
               ref={(el) => elements.current.push(el)}
               required
               value={form.message}
               onChange={({ target: { name, value } }) =>
                  setForm((prev) => ({ ...prev, [name]: value }))
               }
            ></textarea>

            <button
               ref={(el) => elements.current.push(el)}
               disabled={isLoading}
            >
               {isLoading ? (
                  <Loader
                     isVisible={isLoading}
                     size={30}
                  />
               ) : (
                  'SEND'
               )}
            </button>
         </form>
      </MessageFormBox>
   );
}
