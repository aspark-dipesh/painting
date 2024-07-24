import CategoryCard from "../CategoryCard";

export default function CategorySection() {
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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-2 gap-4">
        <CategoryCard
          title="Hand Paintings"
          image="/media/images/image28.jpg"
        />
        <CategoryCard
          title="Acrylic Painting"
          image="/media/images/image18.jpg"
        />
        <CategoryCard title="Wall Panting" image="/media/images/image9.jpg" />
        <CategoryCard title="Oil Paintings" image="/media/images/image40.jpg" />
        <CategoryCard title="Spiritual" image="/media/images/image36.jpg" />
        <CategoryCard
          title="Hand Painting Signage"
          image="/media/images/image43.jpg"
        />
      </div>
    </section>
  );
}
