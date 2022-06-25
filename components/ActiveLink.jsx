import Link from "next/link";
import { useRouter } from "next/router";

/**
 * Este objeto se pone fuera del componente porque no es necesario crearlo
 * cada vez que se renderiza el componente
 * */
const style = {
  color: "#0070f3",
  textDecoration: "underline",
};

export const ActiveLink = ({ href, text }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? style : null}>{text}</a>
    </Link>
  );
};
