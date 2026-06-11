import Link from '@/components/AppLink';
import Image from "next/image";
import { blogPosts } from "@/data/blogs";

const latestPosts = blogPosts.slice(0, 3);

export default function LatestInsights() {
  return (
    <section className="relative py-20 bg-background-alt border-t border-white/5">
      <div className="container-boxed">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-accent text-xs font-orbitron uppercase tracking-[0.3em] mb-3">
              Insights & Intelligence
            </p>
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-foreground">
              Latest from the AESTR Blog
            </h2>
          </div>
          <Link
            href="/blogs"
            className="text-accent font-orbitron text-sm uppercase tracking-widest hover:underline"
          >
            View all articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group rounded-2xl border border-white/10 bg-black/40 overflow-hidden hover:border-accent/40 transition-colors"
            >
              <div className="relative aspect-video">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-widest text-accent mb-2">
                  {post.category}
                </p>
                <h3 className="font-orbitron font-bold text-white leading-snug group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
