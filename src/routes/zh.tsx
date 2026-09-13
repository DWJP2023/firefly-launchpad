import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";
import { Header } from "@/components/firefly/Header";
import { content } from "@/lib/firefly/content";

export const Route = createFileRoute("/zh")({
  component: ChineseLayout,
});

function ChineseLayout() {
  const { pathname } = useLocation();
  const page = pathname.startsWith("/zh/team")
    ? "team"
    : pathname.startsWith("/zh/clients")
      ? "clients"
      : "home";

  return (
    <>
      <Header lang="zh" page={page} content={content.zh} />
      <Outlet />
    </>
  );
}
