import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

// The AI Receptionist signup form is now a static non-React page
// (public/ai-agent/signup.html). React 19's focus-event dispatch spins the main
// thread unboundedly on these forms (see /home/team/shared/contact-typing-rootcause.md),
// so the client-side form route is replaced by a hard redirect to the static page.
export const Route = createFileRoute("/ai-agent/signup")({
  component: AIAgentSignupRedirect,
});

function AIAgentSignupRedirect() {
  useEffect(() => {
    window.location.replace("/ai-agent/signup.html");
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
      <p>Redirecting to the signup page…</p>
      <a href="/ai-agent/signup.html" style={{ color: "#2563eb", fontWeight: 600 }}>
        Start Your Free Trial
      </a>
    </div>
  );
}
