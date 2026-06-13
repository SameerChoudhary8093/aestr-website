import React from 'react';
import Image from 'next/image';
import Link from '@/components/AppLink';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogs';
import StickyAdmissionsBar from '@/components/StickyAdmissionsBar';
import JsonLd from '@/components/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';
import {
  buildBlogPostingSchema,
  buildBreadcrumbSchema,
} from '@/lib/schema';
import { absoluteUrl, canonicalUrl } from '@/lib/site';

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
        alternates: {
            canonical: canonicalUrl(`/blogs/${slug}`),
        },
        openGraph: {
            title: post.title,
            description: post.metaDescription,
            images: [absoluteUrl(post.image)],
            type: 'article',
        },
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

const RELATED_PROGRAMS: Record<string, { href: string; label: string }[]> = {
    "Artificial Intelligence": [
        { href: "/btech-ai-shodh-ai", label: "B.Tech AI with Shodh AI" },
        { href: "/ai-ml", label: "AI & Machine Learning" },
        { href: "/sovereign-ai-initiative", label: "Sovereign AI Initiative" },
    ],
    Robotics: [
        { href: "/robotics", label: "Robotics Specialization" },
        { href: "/curriculum", label: "B.Tech Curriculum" },
    ],
    Admissions: [
        { href: "/btech-ai-shodh-ai", label: "B.Tech AI Program" },
        { href: "/day-at-aestr", label: "Day at AESTR" },
        { href: "/#registration-form", label: "Apply Now" },
    ],
};

function getRelatedPrograms(category: string) {
    return (
        RELATED_PROGRAMS[category] ?? [
            { href: "/btech-ai-shodh-ai", label: "B.Tech AI Program" },
            { href: "/curriculum", label: "Explore Curriculum" },
            { href: "/blogs", label: "More Insights" },
        ]
    );
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

    const breadcrumbItems = [
        { name: "Home", path: "/" },
        { name: "Blogs", path: "/blogs" },
        { name: post.title, path: `/blogs/${slug}` },
    ];
    const relatedPrograms = getRelatedPrograms(post.category);

    return (
        <main className="bg-background min-h-screen text-foreground font-sans selection:bg-accent selection:text-black">
            <JsonLd
                data={[
                    buildBlogPostingSchema(post),
                    buildBreadcrumbSchema(breadcrumbItems),
                ]}
            />
            <StickyAdmissionsBar />
            
            <section className="relative pt-40 pb-20 px-4 bg-[#5B1DD6] overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-full max-w-[600px] aspect-square bg-[#5B1DD6]/20 blur-[150px] -translate-y-1/2 translate-x-1/4 rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full max-w-[400px] aspect-square bg-accent/10 blur-[120px] translate-y-1/2 -translate-x-1/4 rounded-full pointer-events-none" />

                <div className="container mx-auto max-w-4xl relative z-10">
                    <Breadcrumbs items={breadcrumbItems} />
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

                    <div className="mt-12 p-8 bg-black/40 border border-white/10 rounded-2xl">
                        <h3 className="text-lg font-orbitron font-bold text-white mb-4">
                            Related Programs
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {relatedPrograms.map((program) => (
                                <Link
                                    key={program.href}
                                    href={program.href}
                                    className="px-4 py-2 rounded-lg border border-accent/30 text-accent text-sm font-orbitron hover:bg-accent hover:text-black transition-colors"
                                >
                                    {program.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    
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
