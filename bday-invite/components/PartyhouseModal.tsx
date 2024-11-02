"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProgramPoint } from "@/model/ProgramPoint";

export function PartyhouseModal({children, triggerClassname, programPoint}:{children:React.ReactNode, triggerClassname?: string, programPoint:ProgramPoint}) {
  
  const images = {
    kitchen: [
        "/kuchnia/21.jpg",
        "/kuchnia/22.jpg",
        "/kuchnia/23.jpg",
    ],
    toilets: [
        "/lazienki/14.jpg",
        "/lazienki/15.jpg",
        "/lazienki/18.jpg",
        "/lazienki/19.jpg",
        "/lazienki/20.jpg",
    ],
    bedrooms: [
        "/parter/13.jpg",
        "/pietro/27.jpg",
        "/pietro/29.jpg",
        "/pietro/32.jpg",
        "/pietro/34.jpg",
    ],
    couchRoom: [
        "/salon/01.jpg",
        "/salon/02.jpg",
        "/salon/03.jpg",
        "/salon/05.jpg",
        "/salon/06.jpg",
    ],
    selection: [
      "/pietro/27.jpg",
      "/kuchnia/22.jpg",
      "/salon/04.jpg",
      "/lazienki/16.jpg",
      "/parter/13.jpg",
    ]
}

  return (
    <div>
      <Modal>
        <ModalTrigger className={triggerClassname}>
            {children}
        </ModalTrigger>
        <ModalBody className="flex items-center justify-center">
          <ModalContent>
            <h4 className="text-lg text-neutral-600 dark:text-neutral-100 font-bold text-center mt-5">
              RV {programPoint.rv}: {programPoint.title}
            </h4>
            <h5 className="text-md text-neutral-600 dark:text-neutral-100 font-semibold text-center">{programPoint.address}, {programPoint.time}</h5>
            <div className="flex justify-center items-center">
              {images.selection.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={"/partyhouse"+image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg aspect-square w-[80px] object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="py-5 flex flex-wrap gap-x-4 gap-y-2 items-start justify-start max-w-sm mx-auto">
              {programPoint.content}
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}

