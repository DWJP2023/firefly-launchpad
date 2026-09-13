import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";
import { Header } from "@/components/firefly/Header";
import { content } from "@/lib/firefly/content";

export const Route = createFileRoute("/en")({
  component: EnglishLayout,
});

function EnglishLayout() {
  const { pathname } = useLocation();
  const page = pathname.startsWith("/en/team")
    ? "team"
    : pathname.startsWith("/en/clients")
      ? "clients"
      : "home";

  return (
    <>
      <Header lang="en" page={page} content={content.en} />
      <Outlet />
    </>
  );
}
