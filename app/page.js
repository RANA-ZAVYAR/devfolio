import Image from "next/image";
import { Button } from "flowbite-react";
import Hompage from "./components/homepage";
import Years from "./components/years";
export default function Home() {
  return (
  

    
        <div>
          {/* <Button>Click me</Button> */}
          <Hompage/>
          <Years/>
        </div>
  
    
  );
}
