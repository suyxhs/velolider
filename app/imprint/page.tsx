import type { Metadata } from 'next';

import { socials } from '@/config/navigation.config';

const email = socials.find(social => social.name.includes('email'))?.href;
// if (!email) throw new Error('Email not found');

const Imprint = () => {
  return (
    <main className="px-container prose-custom mx-auto !max-w-container pb-24 pt-12">
      <h1>Разработчик</h1>
      <p>Основная информация:</p>
      <p>
        Название: suyxhs
        <br />
        Разработка сайтов и приложений
      </p>
      <p>
        <a href={email}>{email?.replace('mailto:', '')}</a>
      </p>
      <hr />
      <p>
        <strong>Обратная связь</strong>
      </p>
      <p>
        Привет, гость, это страница о информации про разработчика данного сайта.

        Моё портфолио: <a href="https://suyxhs-portfolio.vercel.app">suyxhs</a> - буду рад с вами пообщаться и выполнить для вас работу

        Примеры работ можете посмотреть в моём портфолио ( на сайте не все работы выложены, но на github есть больше примеров ) Ссылка на <a href="https://github.com/suyxhs">github</a>
        <br />
        Также ссылки на социальные сети для прямого обращения:
        <br />
        <a href="https://vk.com/chaffinch_8">VK</a>
        <br />
        <a href="https://t.me/xsiiijy_sgfff">Telegram</a>
      </p>
    </main>
  );
};

/** EXPORTS */

export const metadata: Metadata = {
  title: 'Разработка',
  description: undefined,
  robots: {
    follow: false,
    index: false,
  },
};

export default Imprint;
