import { useState } from 'react'
import { ChevronUpDownIcon } from '@heroicons/react/24/solid'
import { Dropdown } from 'flowbite-react';

function Sort() {
    const [sort, setSort] = useState("Relevance")

    return (
        <div className="rounded-xl p-1 text-xs flex items-center bg-zinc-300 px-2 text-zinc-600">
            <ChevronUpDownIcon className="h-5 w-5" />
            <Dropdown
                inline
                dismissOnClick
                label={sort}
                arrowIcon={false}
            >
                <Dropdown.Item onClick={(e) => setSort("Relevance")}>
                    Relevance
                </Dropdown.Item>
                <Dropdown.Item onClick={(e) => setSort("Price - high to low")}>
                    Price - high to low
                </Dropdown.Item>
                <Dropdown.Item onClick={(e) => setSort("Price - low to high")}>
                    Price - low to high
                </Dropdown.Item>
                <Dropdown.Item onClick={(e) => setSort("Review score")}>
                    Review score
                </Dropdown.Item>
            </Dropdown>
        </div>
    )
}

export default Sort