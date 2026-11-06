import "./Button.css";

type ButtonVariant = "SignIn" | "Menu";

type Props = {
  text: string;
  title: string;
  variant?: ButtonVariant;
  onClick: () => void;
};

export const Button = ({ text, title, onClick }: Props) => {
  return (
    <button className={`button button--title`} title={title} onClick={onClick}>
      {text}
    </button>
  );
};
