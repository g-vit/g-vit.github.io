import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Vitaliy Gutsalyuk | Contact',
};

const Contacts = () => {
  return (
    <>
      <h2 className="text-2xl">Contact me 👇</h2>
      <hr className="my-4" />
      <ul>
        <li>Email: <a href="mailto:gutsalyuk.dev@gmail.com">gutsalyuk.dev@gmail.com</a></li>
        <li>Telegram: <a href="https://t.me/g_vit" target="_blank" rel="noopener noreferrer">t.me/g_vit</a></li>
        <li>GitHub: <a href="https://github.com/g-vit" target="_blank" rel="noopener noreferrer">github.com/g-vit</a></li>
      </ul>
    </>
  );
};

export default Contacts;
