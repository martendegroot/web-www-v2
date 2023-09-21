import * as React from "react";
import "./nav.scss";
import { MainNavItem } from "../../ui/nav/MainNavItem";
import { Button } from "../../ui/button/Button";
import { IconSearch, IconEmail } from "../../ui/icons";

import { SubNav } from "./SubNav";
import { Lang } from "types";

export interface MainNavProps {
  lang: Lang;
}

export function MainNav({ lang }: MainNavProps) {
  return (
    <>
      <nav className={"main"} id="divd-main-nav">
        <article>
          <section>
            <img src="/assets/divdlogo.svg" className="logo" />
          </section>
          <section>
            <MainNavItem href="/about" isActive={true}>
              About DIVD
            </MainNavItem>

            <MainNavItem href="/community" isActive={true}>
              DIVD Community
            </MainNavItem>

            <MainNavItem href="/security" isActive={true}>
              Security
            </MainNavItem>
          </section>
          <section>
            <Button size="md" isInverse leftIcon={<IconSearch />}>
              Search
            </Button>

            <Button size="md" isSecondary leftIcon={<IconEmail />}>
              Warning Email
            </Button>
          </section>
        </article>
      </nav>
      <SubNav lang={lang} />
      {/* <script type="text/javascript" src="/js/nav.js"></script> */}
    </>
  );
}
