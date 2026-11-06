import "./Button.css";

type Props = {
  text: string;
  title: string;
  onClick?: () => void;
};

export const ButtonSignIn = ({ text, title }: Props) => {
  return (
    <button className={`button button--SignIn`} title={title}>
      {text}
    </button>
  );
};

export const ButtonMenu = ({ text, title, onClick }: Props) => {
  return (
    <button className={`button button--Menu`} title={title} onClick={onClick}>
      {text}
    </button>
  );
};
