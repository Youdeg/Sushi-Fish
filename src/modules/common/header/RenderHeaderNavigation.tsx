import Link from "next/link";
import NavigationButton from "../buttons/NavigationButton";

export type NavigationButton = {
  name: string;
  link: string;
};

type RenderHeaderNavigationProps = {
  data: NavigationButton[];
  className: string;
};

const RenderHeaderNavigation = (props: RenderHeaderNavigationProps) => {
  const { data, className } = props;

  return (
    <div className={className}>
      {data
        ? data.map((el) => (
            <NavigationButton key={el.name}>
              <Link href={el.link}>{el.name}</Link>
            </NavigationButton>
          ))
        : "Пусто"}
    </div>
  );
};

export default RenderHeaderNavigation;
