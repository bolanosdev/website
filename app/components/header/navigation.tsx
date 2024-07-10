import { FC } from "react";
import { Link } from "@phoenix-ui/text";

type Link = { url: string; text: string };

export type IUser = {
  id: number;
  username: string;
  name: string;
  iconUrl: string;
};

const Navigation: FC<{
  navigationLinks: Link[];
  userLinks: Link[];
}> = ({ navigationLinks, userLinks }) => {
  return (
    <div className="flex flex-row">
      <ul>
        {navigationLinks.map((link, i) => (
          <li key={i} className="inline">
            <Link
              href={link.url}
              size="text-sm"
              colors={{ text: { color: "text-gray" } }}
            >
              {link.text}
            </Link>
          </li>
        ))}
        {userLinks.map((link, i) => (
          <li key={i} className="inline">
            <Link
              href={link.url}
              size="text-sm"
              colors={{ text: { color: "text-slate" } }}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
