import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/posts")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h2 className="p-2 text-xl font-bold">Posts Section</h2>
      <Outlet />
    </div>
  );
}
