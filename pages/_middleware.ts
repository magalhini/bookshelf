// this middleware always fires first, before accessing any page
// This is an edge function, it does not run on the server.

import { NextResponse } from "next/server";

const signedinPages = ["/", "/bookshelf", "/bookshelves", "/authors/add"];

export default function middleware(req) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.LIBRARY_TOKEN;

    console.log(req.nextUrl.pathname);

    if (!token) {
      console.log("nope, no token for you");
      return NextResponse.redirect("http://localhost:3000/signin");
    }
  }
}
