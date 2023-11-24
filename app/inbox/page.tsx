import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ChatCard from "@/components/Chat/ChatCard";
import Image from "next/image";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Inbox Page",
  description: "",
  // other metadata
};

const Inbox = () => {
  return (
    <>
      <Breadcrumb pageName="Inbox" />

      
      <ChatCard /> 
    </>
  );
};

export default Inbox;
