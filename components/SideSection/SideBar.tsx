"use client";

import { usePathname } from "next/navigation";
import { useEffect, useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "../common/Box";
import Library from "../Library/Library";
import NavLink from "./NavLink";
import { useCookies } from "react-cookie";
import { LOGIN_COOKIE } from "@/constants";
import { useDispatch } from "react-redux";
import { setAuthState } from "@/redux/reducers/authSlice";

interface SideBarProps {
  children?: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  const pathName = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Home",
        url: "/",
        isActive: pathName != "/search",
        icon: HiHome,
      },
      {
        label: "Search",
        url: "/search",
        isActive: pathName === "/search",
        icon: BiSearch,
      },
    ],
    [pathName]
  );

  return (
    <div className="h-full">
      <div className="hidden md:flex flex-col gap-y-2 h-full w-[300px] ">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((routeItem) => {
              return (
                <NavLink
                  key={routeItem.label}
                  {...routeItem}
                />
              );
            })}
          </div>
        </Box>

        <Box className="h-full overflow-y-auto">
          <Library />
        </Box>
      </div>

      {/* <main className="h-full flex-1 py-2 overflow-y-auto">{children}</main> */}
    </div>
  );
};

export default SideBar;
