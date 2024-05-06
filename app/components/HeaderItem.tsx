import React from "react";

interface HeaderItemProps {
  title: string;
  Icon: any;
}

export const HeaderItem = ({ title, Icon }: HeaderItemProps) => {
  return (
    <div className="flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white group">
      <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
      {/*we render this as a component*/}
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
};

{
  /*
  tracking-widest (space between the text)
  w-12 sm:w-20 (the default width will be 12 but then on small devices it will be 20 )
*/
}
