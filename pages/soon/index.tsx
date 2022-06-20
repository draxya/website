import { Header } from "@components/Header";

const Soon = function(){

  return (
    <div className="absolute inset-0 flex items-center justify-center">
    <Header title="Soon"/>
    <div className="text-center text-white">
        This page is under maintenance and will be added soon.
        <br></br><br></br>
        <a href="/" className="px-8 p-3 rounded-full hover:bg-[#292929] transition bg-[#1f1f1f]">
          Take Me Home
        </a>
    </div>
    </div>
  );
};

export default Soon;