'use client';
import { Divider } from "@nextui-org/divider"; 
import React, { useEffect, useState } from 'react'; 
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/table";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";
import { Chip } from "@nextui-org/chip";
import { Tooltip } from "@nextui-org/tooltip";
import { MdiLocation } from "./icons";
import { Button } from "@nextui-org/button";

export type PublicationItemProps = { 
    title: string; 
    authors: string; 
    type: string; 
    venue: string; 
    date: string;
    abstract: string; 
}

export type PublicationSectionProps = { 
    title: string; 
    items: PublicationItemProps[];
}


const PublicationSection: React.FC<PublicationSectionProps> = (props) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modalContent, setModalContent] = useState<PublicationItemProps>();
    const numElements = props.items.length;

    return (
        <div className="mb-8">
        <h2 className="text-2xl font-bold pb-3 pl-3">{props.title}</h2>
        <Table className="overflow-x-auto" aria-label="Table of section {props.title}">
            {/* <h2 className="text-2xl font-bold">{props.title}</h2> */}
            <TableHeader>
                <TableColumn className="hidden sm:table-cell">Item</TableColumn>
                <TableColumn>Title</TableColumn>
                <TableColumn>Authors</TableColumn>
                <TableColumn>Type</TableColumn>
                <TableColumn>Venue</TableColumn>
                <TableColumn>Date</TableColumn>
                <TableColumn>Actions</TableColumn>
            </TableHeader>
            <TableBody>
                {props.items.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell className="hidden sm:table-cell text-xs sm:text-medium p-2 sm:p-1 align-top">
                            <Chip color="primary" size="sm">
                                {numElements - index}
                            </Chip>
                        </TableCell>
                        <TableCell className="text-xs sm:text-medium p-2 sm:p-1">
                            {item.title}
                        </TableCell>
                        <TableCell className="text-xs sm:text-medium p-2 sm:p-1 align-top">
                                {item.authors}
                        </TableCell>
                        <TableCell className="text-xs sm:text-medium p-2 sm:p-1 align-top">
                            {item.type}
                        </TableCell>
                        <TableCell className="text-xs sm:text-medium p-2 sm:p-1 align-top">
                            {item.venue}
                        </TableCell>
                        <TableCell className="text-xs sm:text-medium p-2 sm:p-1 align-top">
                            {item.date}
                        </TableCell>
                        <TableCell className="text-xs sm:text-medium p-2 sm:p-1 align-top">
                            <Button radius="full" size="sm" onClick={() => {setModalContent(item); onOpen();}}>
                                View
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        <>
            <Modal isOpen={isOpen} size={"xl"} onOpenChange={onOpenChange}>
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">{modalContent?.title}</ModalHeader>
                    <ModalBody>
                        <p>
                        {modalContent?.abstract}
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                        Close
                        </Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>

        </div>
    )
}

const Publications: React.FC = () => {
    const [resumeData, setResumeData] = useState<PublicationSectionProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/data/pubData.json');
            const data: PublicationSectionProps[] = await response.json();
            setResumeData(data);
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-wrap justify-evenly">
            {resumeData.map((section, index) => (
                <div key={index} className="w-full">
                    <PublicationSection key={index} {...section} />
                </div> 
                
            ))}
        </div>
    );
};

export default Publications;