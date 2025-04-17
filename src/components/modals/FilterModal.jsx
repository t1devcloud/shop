import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import close from '@/public/assets/svg/close-black.svg'
import Modal from 'react-bootstrap/Modal';
import starIcon from '@/public/assets/svg/star-yellow.svg'
import ReactSlider from 'react-slider';
import { popular_filter, star_rating } from '@/public/data/filter-data';

export default function FilterModal({show, setShow}) {
  const [checkedItems, setCheckedItems] = useState([]);
  const [checkedStar, setCheckedStar] = useState(5);

  useEffect(() => {
    setCheckedItems([2]);
  }, []);

  const handleChange = (id) => {
    setCheckedItems(prevState =>
      prevState.includes(id)
        ? prevState.filter(item => item !== id)
        : [...prevState, id]
    );
  };

  const handleStarChange = (id) => {
    setCheckedStar(id)
  }

  return (
    <Modal show={show} className="filterModal bottomModal">
      <div className="modal-header">
        <button type="button" onClick={() => setShow(false)} className="modal-close rounded-full">
          <Image src={close} alt="Close"/>
        </button>
        <h1 className="modal-title">Filter</h1>
      </div>
      <div className="modal-body">
        {/* price range */}
        <div className="pb-12 price-range">
          <h4 className="content-title">Price Range</h4>
          <div className="filter-range">
            <ReactSlider
                className="salary-slider"
                thumbClassName="salary-thumb"
                trackClassName="salary-track"
                defaultValue={[0, 100]}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                ariaValuetext={state => `Thumb value ${state.valueNow}`}
                renderThumb={(props, state) => <div {...props}>${state.valueNow}k</div>}
                pearling
                minDistance={10}
            />
          </div>
        </div>

        {/* popular filters */}
        <div className="py-12">
          <h4 className="content-title">Popular Filters</h4>
          <ul className="popular-filters">
            {
              popular_filter.map(({id, label, title}) => (
                <li key={id}>
                  <label htmlFor={label} className="filter-label">
                    <input type="checkbox" id={label} checked={checkedItems.includes(id)} onChange={() => handleChange(id)} />
                    {title}
                  </label>
                </li>
              ))
            }
          </ul>
        </div>

        {/* star rating */}
        <div className="py-12">
          <h4 className="content-title">Star Rating</h4>
          <ul className="star-rating">
            {
              star_rating.map(({id, label, star}) => (
                <li key={id}>
                  <label htmlFor={label} className="filter-label">
                    <input type="radio" name="star" id={label} checked={checkedStar === id} onChange={() => handleStarChange(id)} />
                    {
                      [...Array(star)].map((item, i) => (
                        <Image key={i} src={starIcon} alt="star"/>
                      ))
                    }
                  </label>
                </li>
              ))
            }
          </ul>
        </div>

        {/* apply-filter */}
        <div className="py-12">
          <Link href="/search-result" className="btn-primary apply-filter-btn">Apply Filter</Link>
        </div>

        {/* clear-all */}
        <div className="pt-12">
          <button type="button" onClick={() => setShow(false)} className="clear-all-btn" >Clear All</button>
        </div>
      </div>
    </Modal>
  )
}
