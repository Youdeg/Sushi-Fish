import { ReactNode, useEffect, useState } from "react";
import classes from "./styles/navigationButton.module.scss";

type NavigationButtonProps = {
  children: ReactNode;
};

const NavigationButton = ({ children }: NavigationButtonProps) => {
  return <div className={classes.navigationButton}>{children}</div>;
};

export default NavigationButton;
