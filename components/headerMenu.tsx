import React from 'react'; 
import Link from 'next/link';


const UnderlineLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
    return (
        <Link 
            href={href} 
            className="text-fore text-2xl relative group"
        >
            {children}
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[2px] bg-fore transition-all duration-300 group-hover:w-full" />
        </Link>
    );
};


const HeaderMenu : React.FC = () => {
    return (
        <div className="relative flex flex-row justify-between">
            <UnderlineLink href="/plog">Plog</UnderlineLink>
            <UnderlineLink href="/notes">Learning</UnderlineLink>
            <UnderlineLink href="/research">Research</UnderlineLink>
        </div>
    )
}

export default HeaderMenu;