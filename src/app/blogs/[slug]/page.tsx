import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogs';
import StickyAdmissionsBar from '@/components/StickyAdmissionsBar';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: `${post.title} | AESTR Insights`,
        description: post.metaDescription,
        openGraph: {
            title: post.title,
            description: post.metaDescription,
            images: [post.image],
        },
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

const BlogDetailPage = async ({ params }: PageProps) => {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
                <h1 className="text-4xl font-orbitron mb-4">Post Not Found</h1>
                <p className="text-accent mb-8">Debug Info: Slug received is "{slug}"</p>
                <Link href="/blogs" className="text-accent underline">Back to Blogs</Link>
            </div>
        );
    }

    return (
        <main className="bg-background min-h-screen text-foreground font-sans selection:bg-accent selection:text-black">
            <StickyAdmissionsBar />
            
            <section className="relative pt-40 pb-20 px-4 bg-[#5B1DD6] overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-full max-w-[600px] aspect-square bg-[#5B1DD6]/20 blur-[150px] -translate-y-1/2 translate-x-1/4 rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full max-w-[400px] aspect-square bg-accent/10 blur-[120px] translate-y-1/2 -translate-x-1/4 rounded-full pointer-events-none" />

                <div className="container mx-auto max-w-4xl relative z-10">
                    <Link 
                        href="/blogs" 
                        className="inline-flex items-center text-accent mb-8 hover:translate-x-[-4px] transition-transform font-orbitron font-bold text-sm"
                    >
                        ← Back to Insights
                    </Link>
                    
                    <div className="flex items-center gap-4 mb-6">
                        <span className={`px-4 py-1 rounded-full text-xs font-bold border ${post.categoryColor} font-orbitron`}>
                            {post.category}
                        </span>
                        <span className="text-sm text-foreground/60 font-orbitron">{post.date}</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-black text-white mb-8 leading-tight">
                        {post.title}
                    </h1>
                    
                    <div className="flex items-center gap-4 py-8 border-y border-white/10">
                        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent border border-accent/20">
                            <span className="font-bold">{post.author.split(' ').map(n => n[0]).join('')}</span>
                        </div>
                        <div>
                            <p className="font-orbitron font-bold text-white uppercase tracking-wider">{post.author}</p>
                            <p className="text-sm text-foreground/50">AESTR Thought Leader</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4 bg-background">
                <div className="container mx-auto max-w-4xl">
                    <div className="relative aspect-video rounded-3xl overflow-hidden mb-16 border border-white/10 shadow-3xl">
                        <Image 
                            src={post.image} 
                            alt={post.title} 
                            fill 
                            className="object-cover"
                            priority
                        />
                    </div>
                    
                    <article className="prose prose-invert prose-lg max-w-none 
                        prose-headings:font-orbitron prose-headings:font-black prose-headings:text-white 
                        prose-p:text-foreground/80 prose-p:leading-relaxed 
                        prose-strong:text-accent prose-strong:font-black
                        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                        prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                        prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                        prose-li:text-foreground/80">
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </article>
                    
                    {/* Interior Footer / CTA */}
                    <div className="mt-24 p-12 bg-black/50 backdrop-blur-sm border border-white/10 rounded-[2.5rem] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[60px] -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none" />
                        
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <h3 className="text-2xl font-orbitron font-black text-white mb-2">Ready to shape the future?</h3>
                                <p className="text-foreground/60 max-w-md font-orbitron text-sm">
                                    Join the AESTR AI Program and master the technologies that are redefining industries.
                                </p>
                            </div>
                            <Link 
                                href="/btech-ai-shodh-ai"
                                className="px-8 py-4 bg-accent text-black font-orbitron font-black text-sm rounded-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(215,246,1,0.3)]"
                            >
                                EXPLORE PROGRAM
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default BlogDetailPage;
