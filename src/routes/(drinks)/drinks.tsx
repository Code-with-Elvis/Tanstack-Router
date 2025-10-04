import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(drinks)/drinks")({
  component: DrinksLayout,
});

function DrinksLayout() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Drinks Section</h1>
      <div className="border-t pt-4">
        <Outlet />
      </div>
    </div>
  );
}
