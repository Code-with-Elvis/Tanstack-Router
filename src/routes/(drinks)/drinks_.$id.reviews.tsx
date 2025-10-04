import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/(drinks)/drinks_/$id/reviews")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();

  return (
    <div>
      <div className="p-2">Hello from Reviews for Drink {id}!</div>
      <p>This route does not share the same layout as the drink details.</p>
      <p>It is known as pathless routing.</p>
      <Link
        to="/drinks/$id"
        params={{ id }}
        className="text-blue-600 underline"
      >
        Back to Drink {id}
      </Link>
    </div>
  );
}
