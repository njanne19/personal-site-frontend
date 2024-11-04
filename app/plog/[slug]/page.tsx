import fs from 'fs'; 
import path from 'path'; 
import ReactMarkdown from 'react-markdown'; 
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math'; // Import remark-math
import remarkGfm from 'remark-gfm';
import { notFound } from 'next/navigation'; 

// Tell Next.js which pages we expect to exist
export async function generateStaticParams() {
    const plogFiles = fs.readdirSync('public/plog'); 
    return plogFiles.map((filename) => ({
        slug: filename.replace('.md', ''), 
    }));
};

// When a given markdown file is requested, read it, parse and return. 
export default async function Page({ params: { slug }}: { params: { slug: string }}) {
    let markdownWithMeta; 
    try {
        markdownWithMeta = fs.readFileSync(
            path.join('public/plog', `${slug}.md`), 
            'utf-8', 
        ); 
    } catch (error) {
        return notFound(); 
    }

    return (
        <div>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
                integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
                crossOrigin="anonymous"
            />
            <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{
                p: ({ node, ...props }) => <p className="text-fore" {...props} />,
                h1: ({ node, ...props }) => <h1 className="text-fore text-4xl" {...props} />,
                h2: ({ node, ...props }) => <h2 className="text-fore text-3xl" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-fore text-2xl" {...props} />,
                h4: ({ node, ...props }) => <h4 className="text-fore text-xl" {...props} />,
                h5: ({ node, ...props }) => <h5 className="text-fore" {...props} />,
                h6: ({ node, ...props }) => <h6 className="text-fore" {...props} />,
                li: ({ node, ...props }) => <li className="text-fore" {...props} />,
                a: ({ node, ...props }) => <a className="text-fore" {...props} />,
                code: ({ node, ...props }) => <code className="text-fore" {...props} />,
                pre: ({ node, ...props }) => <pre className="text-fore" {...props} />,
                }}
            >
                {markdownWithMeta}
            </ReactMarkdown>
        </div>
    );
}; 