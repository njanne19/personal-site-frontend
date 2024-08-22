'use client';
import { Divider } from "@nextui-org/divider"; 
import React, { useEffect, useState } from 'react'; 
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/table";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";
import { Chip } from "@nextui-org/chip";
import { Tooltip } from "@nextui-org/tooltip";
import { MdiLocation } from "./icons";
import { Button } from "@nextui-org/button";

export type ResumeItemProps = { 
    title: string; 
    location?: string;
    subtitle: string; 
    dateStart: string; 
    dateEnd: string; 
    description: string;
}

export type ResumeSectionProps = { 
    title: string; 
    items: ResumeItemProps[];
}


const ResumeSection: React.FC<ResumeSectionProps> = (props) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modalContent, setModalContent] = useState<ResumeItemProps>();
    const numElements = props.items.length;

    let titleLabel; 
    let subtitleLabel; 

    if (props.title == "Education") {
        titleLabel = "School";
        subtitleLabel = "Degree";
    } else if (props.title == "Experience") {
        titleLabel = "Organization"; 
        subtitleLabel = "Role";
    } else if (props.title == "Teaching") {
        titleLabel = "Course";
        subtitleLabel = "Role";
    } else {
        titleLabel = "Title";
        subtitleLabel = "Subtitle";
    }

    return (
        <div className="mb-8">
        <h2 className="text-2xl font-bold pb-3 pl-3">{props.title}</h2>
        <Table className="overflow-x-auto" aria-label="Table of section {props.title}">
            {/* <h2 className="text-2xl font-bold">{props.title}</h2> */}
            <TableHeader>
                <TableColumn className="hidden sm:table-cell">Item</TableColumn>
                <TableColumn>{titleLabel}</TableColumn>
                <TableColumn>{subtitleLabel}</TableColumn>
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
                            {item.title} <br />
                            {item.location && (
                                    <Chip variant="bordered" size="sm">
                                        <div className="flex flex-row items-center align-top">
                                        <MdiLocation className="w-4 h-4" />
                                        <p>
                                        {item.location}
                                        </p>
                                        </div>
                                    </Chip>
                            )}
                        </TableCell>
                        <TableCell className="text-xs sm:text-medium p-2 sm:p-1 align-top">
                                {item.subtitle}
                        </TableCell>
                        <TableCell className="text-xs sm:text-medium p-2 sm:p-1 align-top">
                            {item.dateStart} - {item.dateEnd}
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
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">{modalContent?.title}</ModalHeader>
                    <ModalBody>
                        <p>
                        {modalContent?.description}
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

const ResumeItem: React.FC<ResumeItemProps> = (props) => {
    return (
        <div className="resume-item">
            <h3 className="text-lg font-semibold">{props.title}</h3>
            <p className="text-sm font-semibold">{props.subtitle}</p>
            <p className="text-sm font-semibold">{props.dateStart} - {props.dateEnd}</p>
            <p className="text-sm">{props.description}</p>
        </div>
    )
}

const Resume: React.FC = () => {
    const [resumeData, setResumeData] = useState<ResumeSectionProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/data/resumeData.json');
            const data: ResumeSectionProps[] = await response.json();
            setResumeData(data);
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-wrap justify-evenly">
            {resumeData.map((section, index) => (
                <div key={index} className="w-full">
                    <ResumeSection key={index} {...section} />
                </div> 
                
            ))}
        </div>
    );
};

export default Resume;