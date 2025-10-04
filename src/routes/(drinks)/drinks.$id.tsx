import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/(drinks)/drinks/$id")({
  // loader: async ({ params }) => {
  //   return params.id;
  // },
  component: Drink,
});

function Drink() {
  const { id } = Route.useParams();

  return (
    <div>
      <div className="p-2">Hello from Drink {id}!</div>
      <Link
        to="/drinks/$id/reviews"
        params={{ id }}
        className="text-blue-600 underline"
      >
        View Reviews for Drink {id}
      </Link>
    </div>
  );
}
