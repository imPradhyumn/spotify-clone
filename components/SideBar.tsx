"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

import Box from "./Box";
import SideBarItem from "./SideBarItem";
import Library from "./Library/Library";
import { useDispatch } from "react-redux";
import { setAuthState } from "@/redux/reducers/authSlice";

interface SideBarProps {
  children: React.ReactNode;
}

const SideBarProps: React.FC<SideBarProps> = ({ children }) => {
  const pathName = usePathname();

  const dispatch = useDispatch();

  dispatch(setAuthState(true));

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
    []
  );

  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 h-full w-[300px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((routeItem) => {
              return (
                <SideBarItem
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

      <main className="h-full flex-1 py-2 overflow-y-auto">{children}</main>
    </div>
  );
};

export default SideBarProps;
