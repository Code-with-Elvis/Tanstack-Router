import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/(drinks)/drinks/")({
  component: Drinks,
});

function Drinks() {
  return (
    <div>
      <div className="p-2">Hello from Drinks! Choose your drink</div>
      <ul className="p-2">
        <li>
          <Link
            to="/drinks/$id"
            params={{ id: "1" }}
            className="text-blue-600 underline"
          >
            Drink 1
          </Link>
        </li>
        <li>
          <Link
            to="/drinks/$id"
            params={{ id: "2" }}
            className="text-blue-600 underline"
          >
            Drink 2
          </Link>
        </li>
        <li>
          <Link
            to="/drinks/$id"
            params={{ id: "3" }}
            className="text-blue-600 underline"
          >
            Drink 3
          </Link>
        </li>
      </ul>
    </div>
  );
}
