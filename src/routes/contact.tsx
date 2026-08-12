import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

// The contact form is now a static non-React page (public/contact.html).
// React 19's focus-event dispatch spins the main thread unboundedly on this
// form (see /home/team/shared/contact-typing-rootcause.md), so any client-side
// form route is replaced by a hard redirect to the static page.
export const Route = createFileRoute("/contact")({
  component: ContactRedirect,
});

function ContactRedirect() {
  useEffect(() => {
    window.location.replace("/contact.html");
  }, []);

  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem",
        fontFamily: "system-ui, sans-serif",
        color: "#475569",
      }}
    >
      <p>Redirecting to our contact page…</p>
      <a href="/contact.html" style={{ color: "#2563eb", fontWeight: 600 }}>
        Go to Contact
      </a>
    </div>
  );
}
