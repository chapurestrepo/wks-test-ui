import { HeaderWorkspace } from "./ui/headerworkspace";
import { CdsLoader } from "@circutor/react-ui";

export default function Home() {
  
  return (
    <div className="layout">
      <HeaderWorkspace text="hola mundo"/>
      <CdsLoader label="Bernat la Hostia... " size="medium"></CdsLoader>
    </div>
  );
}

