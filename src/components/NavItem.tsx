import Link from "next/link";
const NavItem = ({ text, href, active }: {text: any; href: any; active: any}) => {
  return (
    <Link href={href} className={`nav__item ${
        active ? "text-gray-200" : "text-gray-500"
      }`}>
     {text}
    </Link>
  );
};

export default NavItem;
