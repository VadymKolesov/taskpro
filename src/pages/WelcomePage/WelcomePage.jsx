import AddColumnBtn from "../../components/AddColumnBtn/AddColumnBtn";
import AddColumnPopUp from "../../components/AddColumnPopUp/AddColumnPopUp";

export default function WelcomePage() {
  return (
    <>
      <h1>Welcome page</h1>
      <AddColumnBtn />
      <AddColumnPopUp titleValue={"Add"} />
    </>
  );
}
