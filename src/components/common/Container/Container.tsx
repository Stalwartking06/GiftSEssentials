import styles from "./container.module.css";

type Props = {
  children: React.ReactNode;

  large?: boolean;

  className?: string;
};

const Container = ({
  children,
  large = false,
  className = "",
}: Props) => {
  return (
    <div
      className={`
        ${styles.container}
        ${large ? styles.large : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;