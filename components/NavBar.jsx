import React, { useEffect, useState } from "react";
import { Navbar, Dropdown, User, Avatar } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const NavBar = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [locales, setLocales] = useState([]);
  const { t } = useTranslation("common");
  const router = useRouter();

  const MenuItems = [
    { name: t("menu.reel"), route: "/reel" },
    { name: t("menu.curriculum"), route: "/curriculum" },
    { name: t("menu.projects"), route: "/projects" },
    { name: t("menu.contact"), route: "/contact" },
  ];

  const handleChangeLang = (locale) => {
    router.push(router.route, "", {
      scroll: true,
      locale,
    });
  };

  useEffect(() => {
    setLocales(
      router.locales.map((loc) => ({
        name: loc,
        flag: `/flags/${loc === "es" ? "co" : "us"}.svg`,
      })).reverse() || []
    );
  }, [router]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <div style={{ height: 76, width: "100%", backgroundColor: 'white'}}/>;

  return (
    <Navbar variant="sticky" shouldHideOnScroll>
      <Navbar.Brand
        css={{
          gap: "0.5rem",
        }}
      >
        <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
        <Link href="/">
          <p>Camila</p>
          {/* <Image
            src="/icons/logo-text.svg"
            alt="Logo Camila Osorio"
            width={143}
            height={40}
            style={{ cursor: "pointer" }}
          /> */}
        </Link>
      </Navbar.Brand>
      <Navbar.Content
        hideIn="xs"
        variant="underline-rounded"
        enableCursorHighlight
        activeColor="primary"
      >
        {MenuItems.map((item, index) => (
          <Navbar.Link
            href={item.route}
            key={`${item.route}-${index}-sm}`}
            isActive={router.pathname === item.route}
          >
            {item.name}
          </Navbar.Link>
        ))}
      </Navbar.Content>
      <Navbar.Content enableCursorHighlight>
        <Dropdown>
          <Navbar.Item css={{ px: 0 }}>
            <Dropdown.Button
              light
              auto
              css={{
                textTransform: "capitalize",
                px: 0,
                dflex: "center",
                svg: { pe: "none" },
              }}
            >
              <User
                src={locales.find((loc) => loc.name === router.locale).flag}
                name={router.locale}
                css={{ gap: "0.4rem" }}
                size="xs"
                zoomed
              />
            </Dropdown.Button>
          </Navbar.Item>
          <Dropdown.Menu
            aria-label="Language"
            disabledKeys={[router.locale]}
            onAction={(e) => handleChangeLang(e)}
            css={{
              $$dropdownMenuWidth: "100px",
              $$dropdownMenuMinWidth: "100px"
            }}
          >
            {locales.map((option) => (
              <Dropdown.Item
                key={option.name}
                icon={<Avatar src={option.flag} size="xs" text={option.name} />}
                css={{ textTransform: "capitalize" }}
              >
                {option.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
      <Navbar.Collapse>
        {MenuItems.map((item, index) => (
          <Navbar.CollapseItem key={`${item.name}-${index}-mobile}`}>
            <Link
              color="inherit"
              css={{
                minInlineSize: "100%",
              }}
              href={item.route}
            >
              {item.name}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
