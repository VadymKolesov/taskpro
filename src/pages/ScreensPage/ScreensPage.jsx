import { useParams } from "react-router-dom";

export default function ScreensPage() {
  const { boardName } = useParams();

  return <h1>Screens Page. Board name: {boardName}</h1>;
}
