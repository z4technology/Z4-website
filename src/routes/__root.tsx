import { HeadContent, Outlet, Scripts, createRootRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
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
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}

function NavBar() {
  const [open, setOpen] = useState(false);
  const linkCls = "text-[11px] font-semibold tracking-[0.08em] text-slate-500 hover:text-slate-900 uppercase transition-colors";
  const burger = (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      aria-label="Toggle navigation menu"
      className="md:hidden -ml-2 flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-200/70"
    >
      {open ? (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
      ) : (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
      )}
    </button>
  );
  const mobileLogo = (
    <Link to="/" className="md:hidden absolute" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
      <img src="/logo.png" alt="Z4 Technology" className="h-8 w-auto" />
    </Link>
  );
  const panelLinks: { href: string; label: string; cls?: string }[] = [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/ai-agent", label: "AI Agent", cls: "text-blue-600" },
    { href: "/showcase.html", label: "Showcase" },
  ];
  return (
    <header className="fixed top-0 z-50 w-full nav-glass">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {burger}
        {mobileLogo}
        <Link to="/" className="hidden items-center gap-2 md:flex">
          <img src="/logo.png" alt="Z4 Technology" className="h-8 w-auto" />
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          <div className="hidden items-center gap-6 md:flex">
            <Link to="/" className={linkCls}>Home</Link>
            <a href="/#services" className={linkCls}>Services</a>
            <Link to="/ai-agent" className={`${linkCls} text-blue-600 hover:text-blue-700`}>AI Agent</Link>
            <a href="/showcase.html" className={linkCls}>Showcase</a>
          </div>
          <a href="/ai-agent/signup.html" className="btn-primary text-[10px] py-2 px-4">Get Started</a>
        </nav>
      </div>
      {open && (
        <div className="md:hidden absolute left-4 right-4 top-full z-50 mt-2 rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg">
          <div className="flex flex-col">
            {panelLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className={`rounded-lg px-3 py-2.5 text-[12px] font-semibold tracking-[0.04em] text-slate-600 hover:bg-slate-50 hover:text-blue-600 ${l.cls ?? ""}`}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-[10px] font-extrabold tracking-[0.15em] text-slate-400 uppercase mb-3">Company</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-xs text-slate-500 hover:text-slate-900 transition-colors">Home</Link>
              <Link to="/ai-agent" className="text-xs text-slate-500 hover:text-slate-900 transition-colors">AI Receptionist</Link>
              <a href="/showcase.html" className="text-xs text-slate-500 hover:text-slate-900 transition-colors">Showcase</a>
              <a href="/contact.html" className="text-xs text-slate-500 hover:text-slate-900 transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <h3 className="text-[10px] font-extrabold tracking-[0.15em] text-slate-400 uppercase mb-3">Legal</h3>
            <div className="flex flex-col gap-2">
              <Link to="/terms" className="text-xs text-slate-500 hover:text-slate-900 transition-colors">Terms & Conditions</Link>
              <Link to="/privacy" className="text-xs text-slate-500 hover:text-slate-900 transition-colors">Privacy Policy</Link>
            </div>
          </div>
          <div>
            <h3 className="text-[10px] font-extrabold tracking-[0.15em] text-slate-400 uppercase mb-3">Z4 Technology</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              AI-powered business operations.<br />
              Knoxville, TN<br />
              <a href="mailto:support@z4technology.com" className="text-blue-600 hover:underline">support@z4technology.com</a>
            </p>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-slate-200">
          <p className="text-[10px] text-slate-400 text-center">
            &copy; {new Date().getFullYear()} Z4 Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}