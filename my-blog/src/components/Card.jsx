import Link from "next/link";
export function Card({ article }) {
  return (
    <Link href={article.path} className="border p-4 mt-8">
      <img src={article.cover_image} alt="italian" className="aspect-video" />
      <div className=" bg-white rounded mt-2">
        {article.tag_list.map((p) => {
          return (
            <span className="bg-blue-200 text-blue-700 rounded  flex-wrap gap-2 m-1 inline-flex p-1">
              {p}
            </span>
          );
        })}
      </div>
      <h1 className="font-bold text-2xl mt-2 mb-4">{article.title}</h1>
      <p className="text-gray-600">{article.readable_publish_date}</p>
    </Link>
  );
}
