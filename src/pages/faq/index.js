import { useEffect } from "react";
import Questions from "@/components/faq/FAQ";
import QuestionTabs from "@/components/faq/QuestionTabs";



const FAQ = () => {
    useEffect(() => {
        document.querySelector("#main-layout").scrollTop = 0;
      }, []);
      return (
        <>
         
          <div className="h-screen w-fit  mt-auto sm:mb-10 flex items-center flex-col ">
          <QuestionTabs/>
          </div>
        </>
      )
}

export default FAQ;