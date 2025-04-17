import { useState } from 'react'
import Filter from "./Filter"
import Sort from "./Sort"

function FilterSort({ showFilter = true }) {
    const [isFilter, setIsFilter] = useState(false)
    const [dataFilter, setDataFilter] = useState([])

    return (
        <div className='flex items-center gap-2'>
            <Sort />
            {showFilter &&
                <>
                    <div className="bg-zinc-200 h-6 w-[1.5px]" />
                    <Filter dataFilter={dataFilter} setDataFilter={setDataFilter} isFilter={isFilter} setIsFilter={setIsFilter} />
                </>
            }
        </div>
    )
}

export default FilterSort