import { useState } from "react";
import FilterBtn from "./FilterBtn/FilterBtn";
import FilterModal from "./FilterModal/FilterModal";

function Filter({theme}) {
  //const theme = useSelector(selectTheme());
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      <FilterBtn theme={theme} isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>
      <FilterModal theme={theme} isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>
    </>
  )
}

export default Filter;