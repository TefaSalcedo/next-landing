// app/blog/page.jsx (sin useEffect)

export default async function BlogPage() {
  const res = await fetch("http://localhost:1337/api/articles?populate=*", {
    cache: "no-store", // evita que quede en caché
  });
  const data = await res.json();

  return (
    <section className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-8">
        {data.data.map((article) => {
          const { id, attributes } = article;
          const { title, description, cover } = attributes;
          const imageUrl = cover?.data?.attributes?.url;

          return (
            <li key={id} className="border p-4 rounded-md shadow">
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <p className="mb-2">{description}</p>
              {imageUrl && (
                <img
                  src={`http://localhost:1337${imageUrl}`}
                  alt={title}
                  className="w-full max-h-64 object-cover rounded"
                />
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
