import UpdateForm from "@/components/updateForm";

export default function UpdatePage({ params }: { params: { objectId: string } }) {
  return <UpdateForm objectId={params.objectId} />;
}