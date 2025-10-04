import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/$postId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { postId } = Route.useParams();
  return (
    <div>
      <h3 className="p-2">Viewing Post ID: {postId}</h3>
    </div>
  );
}
