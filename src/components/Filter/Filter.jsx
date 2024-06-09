import { useState } from "react";
import FilterBtn from "./FilterBtn/FilterBtn";
import FilterModal from "./FilterModal/FilterModal";

function Filter({theme}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <FilterBtn theme={theme} isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>
      <FilterModal theme={theme} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  )
}

export default Filter;