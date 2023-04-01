import { ReactNode } from "react";
import styles from "./styles/AddButton.module.scss";

type addButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

const AddButton = (props: addButtonProps) => {
  const { children, onClick } = props;

  return (
    <button
      className={styles.addButton}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
};

export default AddButton;
