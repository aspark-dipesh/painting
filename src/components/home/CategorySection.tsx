import { ICategory } from "@/interface";
import CategoryCard from "../CategoryCard";

export default function CategorySection({
  categories,
}: {
  categories: ICategory[];
}) {
  return (
    <section className="bg-base-200 p-3 mt-3 rounded container mx-auto">
      <div>
        <h2 className="font-bold text-2xl text-center mt-5">
          Explore the Collection
        </h2>
        <p className="max-w-lg text-center mx-auto">
          Decorate your place with our beautiful paintings. We have a wide range
          of paintings for your home, office, restaurant, and many more.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-2 gap-4">
        {categories.map((category) => (
          <CategoryCard
            slug={category.slug}
            key={category.id}
            title={category.title}
            image={category.featured_image}
          />
        ))}
      </div>
    </section>
  );
}
