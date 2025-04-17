"use client"

import { useState } from "react";
import { place_data } from "@/public/data/place-data";
import PlaceCard from "@/components/shared/PlaceCard";


export default function AllPlace() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeItems, setActiveItems] = useState(place_data);
  const tabList = ['All', 'Popular', 'Recommendation', 'Frequently visited'];

  const filterItems = (itemCategory) => {
		setActiveCategory(itemCategory.toLowerCase());
		if (itemCategory.toLowerCase() === "all") {
			setActiveItems(place_data);
		} 
    else {
			const findItems = place_data.filter((findItem) => {
				return findItem.category == itemCategory;
			});
			setActiveItems(findItems);
		}
	};  

  return (
    <section className="all-place py-12">
      {/* tab list */}
      <ul className="place-filter-btns d-flex align-items-center tab-list gap-12 w-100 scrollbar-hidden">
        {
          tabList.map((category, i) => (
            <li key={i} className={category.toLowerCase() === activeCategory.toLowerCase() ? 'active' : ''}>
              <button type="button" onClick={() => filterItems(category)}>{category}</button>
            </li>
          ))
        }
      </ul>

      {/* places */}
      <div id="place-cards" className="grid">
        {
          activeItems?.map((item) => <PlaceCard key={item.id} data={item}/>)
        }
      </div>
    </section>
  )
}
