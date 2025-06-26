
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={`transition-all duration-200 ${
            selectedCategory === category
              ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
              : "hover:bg-purple-50 dark:hover:bg-purple-950/50"
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
