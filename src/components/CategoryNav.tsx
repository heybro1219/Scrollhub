"use client";

import { Grid2X2, Heart } from "lucide-react";
import type { MediaCategory } from "@/data/mediaData";
import { cn } from "@/lib/utils";

interface CategoryNavProps {
  categories: MediaCategory[];
  activeCategory: string;
  onSelectCategory: (slug: string) => void;
  activeSubcategory: string;
  onSelectSubcategory: (subcategory: string) => void;
  favoritesCount: number;
  totalSites: number;
}

export function CategoryNav({
  categories,
  activeCategory,
  onSelectCategory,
  activeSubcategory,
  onSelectSubcategory,
  favoritesCount,
  totalSites,
}: CategoryNavProps) {
  const currentCategory = categories.find(
    (category) => category.slug === activeCategory,
  );
  const hasSubcategories =
    currentCategory && currentCategory.subcategories.length > 1;

  const tabClass = (active: boolean) =>
    cn(
      "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/30 active:scale-[0.98] lg:justify-between lg:rounded-xl lg:py-2 lg:hover:scale-100",
      active
        ? "border-black bg-black text-white shadow-sm"
        : "border-black/5 bg-black/[0.03] text-black/60 hover:bg-black/[0.06] hover:text-black",
    );

  const countBadge = (active: boolean) =>
    cn(
      "rounded-full px-1.5 py-0.5 text-[10px] font-bold",
      active ? "bg-white/15 text-white/70" : "bg-black/5 text-black/35",
    );

  return (
    <nav aria-label="Directory categories" className="animate-enter-delay-2">
      <div className="flex flex-wrap gap-2.5 lg:flex-col lg:flex-nowrap lg:items-stretch">
        <button
          type="button"
          onClick={() => onSelectCategory("all")}
          className={tabClass(activeCategory === "all")}
          aria-current={activeCategory === "all" ? "page" : undefined}
        >
          <span className="flex items-center gap-2">
            <Grid2X2 className="h-3.5 w-3.5" />
            All sites
          </span>
          <span className={countBadge(activeCategory === "all")}>
            {totalSites}
          </span>
        </button>

        {categories.map((category) => {
          const active = category.slug === activeCategory;

          return (
            <button
              key={category.slug}
              type="button"
              onClick={() => onSelectCategory(category.slug)}
              className={tabClass(active)}
              aria-current={active ? "page" : undefined}
            >
              <span className="flex items-center gap-2">
                <span aria-hidden="true">{category.icon}</span>
                {category.name}
              </span>
              <span className={countBadge(active)}>{category.count}</span>
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => onSelectCategory("favorites")}
          className={tabClass(activeCategory === "favorites")}
          aria-current={activeCategory === "favorites" ? "page" : undefined}
        >
          <span className="flex items-center gap-2">
            <Heart
              className={cn(
                "h-3.5 w-3.5",
                favoritesCount > 0 && activeCategory === "favorites" && "fill-current",
              )}
            />
            Saved
          </span>
          <span className={countBadge(activeCategory === "favorites")}>
            {favoritesCount}
          </span>
        </button>
      </div>

      {hasSubcategories && (
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="mr-1 px-2 text-xs font-semibold text-black/35">
            Filter
          </span>
          {currentCategory.subcategories.map((subcategory) => {
            const active = activeSubcategory === subcategory;

            return (
              <button
                key={subcategory}
                type="button"
                onClick={() => onSelectSubcategory(subcategory)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/30",
                  active
                    ? "bg-black text-white"
                    : "bg-black/[0.03] text-black/55 hover:bg-black/[0.06] hover:text-black",
                )}
                aria-pressed={active}
              >
                {subcategory}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
