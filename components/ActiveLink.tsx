import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

/**
 * Este objeto se pone fuera del componente porque no es necesario crearlo
 * cada vez que se renderiza el componente
 * */
const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

interface Props {
  text: string;
  href: string;
}

export const ActiveLink: FC<Props> = ({ href, text }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};
