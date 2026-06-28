import { Search, Tags } from "lucide-react";

const Filters = ({
  search = "",
  onSearchChange,
  categories,
  selectedCategory = "",
  onCategoryChange,
}) => {
  return (
    <section className="filters">
      <div className="filters__search-wrapper">
        <Search size={20} className="filters__icon" />

        <input
          className="filters__search"
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="filters__select-wrapper">
        <Tags size={20} className="filters__icon" />

        <select
          className="filters__select"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="">All categories</option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default Filters;
