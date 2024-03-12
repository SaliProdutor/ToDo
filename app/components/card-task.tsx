'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react"

import Check from '@/public/assets/check.svg'
import Trash from '@/public/assets/trash.svg'

interface CardTaskProps{
    id?: string | number,
    check?: boolean,
    task?: string,
    onDelete: (id: string | number) => void;
    onSwitch: (id: string | number) => void;
}


export function CardTask({id, check, task, onDelete, onSwitch}:CardTaskProps){
    const [VerifyCheck, setVerifyCheck] = useState(check);

    function handleSwitch(){
        setVerifyCheck(!VerifyCheck)
        if (id !== undefined) {
          onSwitch(id);
        }
      };

    function handleDelete(){
        if (id !== undefined) {
          onDelete(id);
        }
      };
   return(
    <div className=" bg-gray-500 border-gray-400 border-[.1px] mb-[0.75rem] rounded-[8px]">
        <div className="  px-[1rem] py-[1rem] flex gap-[1rem] justify-start items-start">
            <button onClick={handleSwitch} className={ VerifyCheck ? "border-purple-dark bg-purple-dark flex justify-center items-center rounded-full w-[1.2rem] h-[1.2rem] border-[2px]" : "border-blue rounded-full w-[1.2rem] h-[1.2rem] border-[2px]"}>
                {VerifyCheck ? <Image src={Check} alt=""/> : <></>}
            </button>
            <div className="flex-1 items-start justify-start m-0 p-0">
                <p className="font-regular text-[0.875rem] text-gray-100">{task}</p>
            </div>
            <button onClick={handleDelete} className={"flex justify-center border-none items-center w-[1.5rem] h-[1.5rem] border-[2px]"}>
                <Image src={Trash} alt=""/>
            </button>
        </div>
    </div>
   );
}