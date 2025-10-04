import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <p>Here are all the posts:</p>
      <ul className="list-disc pl-6">
        <li>
          Post 1
          <Link
            to="/posts/$postId"
            params={{ postId: "1" }}
            className="text-blue-600 underline ml-2"
          >
            View Post 1
          </Link>
        </li>
        <li>
          Post 2
          <Link
            to="/posts/$postId"
            params={{ postId: "2" }}
            className="text-blue-600 underline ml-2"
          >
            View Post 2
          </Link>
        </li>
        <li>
          Post 3
          <Link
            to="/posts/$postId"
            params={{ postId: "3" }}
            className="text-blue-600 underline ml-2"
          >
            View Post 3
          </Link>
        </li>
      </ul>
    </div>
  );
}
