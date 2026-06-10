import Link from "next/link";

const links = [
  { href: "/curriculum", label: "Explore Curriculum" },
  { href: "/blogs", label: "Read Our Blog" },
  { href: "/#registration-form", label: "Apply Now" },
];

export default function ProgramCrossLinks() {
  return (
    <section className="py-16 px-4 border-t border-white/10">
      <div className="container-boxed max-w-4xl mx-auto">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-orbitron font-bold text-white mb-2">
              Continue Exploring AESTR
            </h3>
            <p className="text-foreground/60 text-sm font-orbitron">
              Discover our curriculum, insights, and 2026 admissions.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-2.5 rounded-xl border border-accent/30 text-accent font-orbitron text-xs uppercase tracking-wider hover:bg-accent hover:text-black transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
