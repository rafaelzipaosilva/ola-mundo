import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

import React from "react";
import MenuLink from "../MenuLink";

export default function Menu() {
	return (
		<header>
			<nav className={styles.navegacao}>
				<MenuLink to="/">Início</MenuLink>
				<MenuLink to="/SobreMim">Sobre Mim</MenuLink>
			</nav>
		</header>
	);
}
