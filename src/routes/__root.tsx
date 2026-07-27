import { HeadContent, Outlet, Scripts, createRootRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Z4 Technology | AI-Powered Business Operations" },
      {
        name: "description",
        content: "Performance-based AI implementation. We help businesses 10x revenue with AI voice agents, automation, and data solutions.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <NavBar />
        <main>{children}</main>
        <Scripts />
      </body>
    </html>
  );
}

function NavBar() {
  return (
    <header className="fixed top-0 z-50 w-full nav-glass">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-black tracking-tight text-slate-900">Z4</span>
          <span className="hidden sm:inline text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase">Technology</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link to="/" className="text-[11px] font-semibold tracking-[0.08em] text-slate-500 hover:text-slate-900 uppercase transition-colors">Home</Link>
          <a href="/#services" className="text-[11px] font-semibold tracking-[0.08em] text-slate-500 hover:text-slate-900 uppercase transition-colors">Services</a>
          <Link to="/ai-agent" className="text-[11px] font-semibold tracking-[0.08em] text-blue-600 hover:text-blue-700 uppercase transition-colors">AI Agent</Link>
          <Link to="/ai-agent/signup" className="btn-primary text-[10px] py-2 px-4">Get Started</Link>
        </nav>
      </div>
    </header>
  );
}