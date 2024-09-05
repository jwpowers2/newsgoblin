import { Link } from "@remix-run/react";

import { Form, useLoaderData, NavLink, Outlet } from '@remix-run/react';


import { json } from "@remix-run/node";
import Ticker from "../components/ticker";



export async function loader() {
  return json({ });
}

export default function SearchIndexPage() {


  return (
    <div className="relative mt-24">

      <div className="flex flex-wrap items-center space-x-5">
             <h1>search page</h1>
             
             <Outlet/>
      </div>
 
  </div>
  );
}