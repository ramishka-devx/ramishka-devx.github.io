import { useEffect, useState } from 'react'
import LazyImage from './LazyImage'

export default function Contact() {
  const [result, setResult] = useState('');
  const onSubmit = async (event) => {
    event.preventDefault();
    const hCaptcha = event.target.querySelector('textarea[name=h-captcha-response]').value;
    if (!hCaptcha) {
      event.preventDefault();
      setResult('Please fill out captcha field');
      return;
    }
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', '08877834-87aa-4050-ae50-701e1b53498d');

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log('Success', res);
      if (window.gtag) {
        window.gtag('event', 'contact_form_submission', {
          'form_name': 'contact_form',
          'submission_status': 'success'
        });
      }
      setResult(res.message);
      event.target.reset();
    } else {
      console.log('Error', res);
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
          item.dataset.sitekey = '50b2fe65-b00b-4b9e-ad62-3ba471098be2';
        }
      });

      let scriptSrc = 'https://js.hcaptcha.com/1/api.js?recaptchacompat=off';
      if (lang) {
        scriptSrc += `&hl=${lang}`;
      }
      if (onload) {
        scriptSrc += `&onload=${onload}`;
      }
      if (render) {
        scriptSrc += `&render=${render}`;
      }

      var script = document.createElement('script');
      script.type = 'text/javascript';
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
    <section id="contact" className="section-wrap">
      <div className="glass-panel-strong rounded-[2rem] p-6 md:p-10 lg:p-14 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:80%_auto] bg-center dark:bg-none">
        <p className="section-kicker">Connect with me</p>
        <h2 className="section-title">Get in touch</h2>
        <p className="section-subtitle">I&apos;d love to hear from you! If you have any questions, comments or feedback, please use the form below.</p>

        <form onSubmit={onSubmit} className="max-w-3xl mx-auto mt-10">
          <input type="hidden" name="subject" value="Ramishka.me - New form Submission" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="Enter your name" className="w-full px-4 py-3 outline-none border border-slate-300/90 dark:border-white/20 rounded-xl bg-white/95 dark:bg-slate-900/60 focus:border-sky-400 transition" required name="name" />

            <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 outline-none border border-slate-300/90 dark:border-white/20 rounded-xl bg-white/95 dark:bg-slate-900/60 focus:border-sky-400 transition" required name="email" />
          </div>
          <textarea rows="6" placeholder="Enter your message" className="w-full px-4 py-3 outline-none border border-slate-300/90 dark:border-white/20 rounded-xl bg-white/95 dark:bg-slate-900/60 mb-5 focus:border-sky-400 transition" required name="message" />
          <div className="h-captcha mb-6 max-w-full" data-captcha="true" />
          <button type='submit' className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-slate-950 text-white dark:bg-white dark:text-slate-900 rounded-full mx-auto hover:-translate-y-0.5 transition">
            Submit now
            <LazyImage src="./assets/right-arrow-white.png" alt="" className="w-4 dark:invert" />
          </button>
          <p className={`mt-4 text-center text-sm font-medium ${result.includes('success') || result.includes('successful') ? 'text-green-600 dark:text-green-400' : result.includes('Error') ? 'text-red-600 dark:text-red-400' : 'text-slate-600 dark:text-slate-300'}`}>{result}</p>
        </form>
      </div>
    </section>
  )
}
