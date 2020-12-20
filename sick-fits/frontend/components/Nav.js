import React from "react";
import Link from "next/link";
import NavStyles from "./styles/NavStyles";

export default function Nav() {
  return (
    <NavStyles>
      <Link href="/items">
        <a>Items</a>
      </Link>

      <Link href="/sell">
        <a>Sell</a>
      </Link>

      <Link href="/signup">
        <a>Sign up</a>
      </Link>

      <Link href="/orders">
        <a>Orders</a>
      </Link>

      <Link href="/orders">
        <a>Me</a>
      </Link>
    </NavStyles>
  );
}
