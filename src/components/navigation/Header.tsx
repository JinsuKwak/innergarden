"use client";
import React, { useState, useEffect, useMemo } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import DrawerComp from "./Drawer";
import { colors } from "@/app/colors";
import Image from "next/image";
import logoImage from "@/../public/Inner-Garden-nav.png";
import NavItems from "./NavItems";
import { RESPONSIVE_SMALL } from "@/app/constants";

const initialPageForm = [
  {
    text: "JOIN US",
    subPages: [
      { text: "ENROLL YOUR CHILD", route: "/join/child" },
      { text: "JOIN AS AN EDUCATOR", route: "/join/educator" },
      { text: "LOCATIONS", route: "/locations" },
    ],
  },
  {
    text: "INFORMATIONS",
    subPages: [
      { text: "HOLYDAY AND BREAKS", route: "/posts/announcement/######" },
      { text: "PUBLISHED LICENSE", route: "/licencse" },
    ],
  },
  {
    text: "RESOURCES",
    subPages: [
      { text: "FAQ", route: "/post/faq" },
      { text: "MORE", route: "/post/resource" },
    ],
  },
  { text: "LASTEST POSTS", route: "/posts" },
  { text: "EMPLOYEE WELLFARE", route: "/employee-wellfare" },
  { text: "CONTACT", route: "/contact" },
];

const Header = () => {
  const [initialPages, setInitialPages] = useState(initialPageForm);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down(RESPONSIVE_SMALL));

  useEffect(() => {
    if (isSmall) {
      setInitialPages([{ text: "ABOUT US", route: "/about-us" }, ...initialPageForm]);
    } else {
      setInitialPages([...initialPageForm]);
    }
  }, [isSmall]);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#fff" }} elevation={1}>
        <Toolbar className="flex">
          <div className=" relative flex items-center text-2xl md:h-14 md:w-14 h-12 w-12">
            <Link href="/" className="w-full h-full">
              <Image
                style={{ objectFit: "cover", padding: "0.3rem" }}
                sizes="auto"
                src={logoImage}
                alt="InnerGarden Logo"
              />
            </Link>
          </div>

          {isSmall ? (
            <>
              <Typography className="text-neutral-900 pl-[3%] md:text-3xl text-2xl font-serif	">Inner Garden</Typography>
              <DrawerComp initialPages={initialPages} isSmall={isSmall} />
            </>
          ) : (
            <>
              <NavItems />
              <DrawerComp initialPages={initialPages} isSmall={isSmall} />
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
