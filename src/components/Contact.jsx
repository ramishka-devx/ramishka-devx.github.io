import { useEffect, useState } from 'react'
import LazyImage from './LazyImage'

export default function Contact() {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        const hCaptcha = event.target.querySelector('textarea[name=h-captcha-response]').value;
        if (!hCaptcha) {
            event.preventDefault();
            setResult("Please fill out captcha field");
            return
        }
        setResult("Sending....");
        const formData = new FormData(event.target);

        // ----- Enter your Web3 Forms Access key below---------
        // Get your free access key from https://web3forms.com
        // 1. Go to https://web3forms.com and sign up
        // 2. Create a new form and copy the access key
        // 3. Paste it below in the access_key field

        formData.append("access_key", "08877834-87aa-4050-ae50-701e1b53498d");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            // Track form submission in Google Analytics
            if (window.gtag) {
                window.gtag('event', 'contact_form_submission', {
                    'form_name': 'contact_form',
                    'submission_status': 'success'
                });
            }
            setResult(res.message);
            event.target.reset();
        } else {
            console.log("Error", res);
            // Track form submission error
            if (window.gtag) {
                window.gtag('event', 'contact_form_submission', {
                    'form_name': 'contact_form',
                    'submission_status': 'error'
                });
            }
            setResult(res.message);
        }
    };

    function CaptchaLoader() {
        const captchadiv = document.querySelectorAll('[data-captcha="true"]');
        if (captchadiv.length) {
            let lang = null;
            let onload = null;
            let render = null;

            captchadiv.forEach(function (item) {
                const sitekey = item.dataset.sitekey;
                lang = item.dataset.lang;
                onload = item.dataset.onload;
                render = item.dataset.render;

                if (!sitekey) {
                    item.dataset.sitekey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
                }
            });

            let scriptSrc = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";
            if (lang) {
                scriptSrc += `&hl=${lang}`;
            }
            if (onload) {
                scriptSrc += `&onload=${onload}`;
            }
            if (render) {
                scriptSrc += `&render=${render}`;
            }

            var script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.defer = true;
            script.src = scriptSrc;
            document.body.appendChild(script);
        }
    }

    useEffect(() => {
        CaptchaLoader();
    }, []);
    return (
        <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">

            <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
            <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I&apos;d love to hear from you! If you have any questions, comments or feedback, please use the form below.</p>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto">

                <input type="hidden" name="subject" value="Ramishka.me - New form Submission" />

                <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
                    <input type="text" placeholder="Enter your name" className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkTheme/50" required name="name" />

                    <input type="email" placeholder="Enter your email" className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkTheme/50" required name="email" />
                </div>
                <textarea rows="6" placeholder="Enter your message" className="w-full px-4 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white mb-6 dark:bg-darkTheme/50" required name="message"></textarea>
                <div className="h-captcha mb-6 max-w-full" data-captcha="true"></div>
                <button type='submit' className="py-2 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border dark:border-white/30 dark:hover:bg-darkHover">
                Submit now
                    <LazyImage src="./assets/right-arrow-white.png" alt="" className="w-4" />
                </button>
                <p className={`mt-4 text-center text-sm font-medium ${result.includes("success") || result.includes("successful") ? 'text-green-600 dark:text-green-400' : result.includes("Error") ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'}`}>{result}</p>
            </form>
        </div>
    )
}