"use server";

export async function createPost(formData: FormData) {
  const title = formData.get("title");
  const content = formData.get("content");

  // Update data
  // Revalidate cache
}

export async function listRenters() {
  // Update data
  // Revalidate cache
}
