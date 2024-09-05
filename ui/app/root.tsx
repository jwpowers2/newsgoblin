import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import Header from "./components/Header";
import Ticker from "./components/ticker";
import Footer from "./components/Footer"
import { useState, useEffect } from "react";
//import tailwindStylesheetUrl from "./tailwind.css";

//export const links: LinksFunction = () => {
//  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
//};



export default function App() {

  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Header/>
        <Outlet />
        <Footer/>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
