import UpdateForm from "@/components/updateForm";

interface UpdatePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function UpdatePage({ params }: UpdatePageProps) {
  const { slug } = await params;

  return <UpdateForm slug={slug} />;
}