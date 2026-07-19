export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl lg:text-3xl text-[#071f1b] mt-14 mb-6 first:mt-0">
      {children}
    </h2>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#071f1b]/70 font-light leading-relaxed mb-5">{children}</p>
  );
}

export function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="flex flex-col gap-3 mb-5 text-[#071f1b]/70 font-light leading-relaxed list-disc pl-5">
      {children}
    </ul>
  );
}

export function InternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-[#ff6464] hover:text-[#e54d4d] underline decoration-1 underline-offset-4"
    >
      {children}
    </a>
  );
}
