import UpdateForm from "@/components/updateForm";

interface UpdatePageProps {
  params: Promise<{
    objectId: string;
  }>;
}

export default async function UpdatePage({ params }: UpdatePageProps) {
  const { objectId } = await params;

  return <UpdateForm objectId={objectId} />;
}