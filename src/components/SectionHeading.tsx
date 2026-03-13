interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  gold?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true, gold = false }: SectionHeadingProps) => (
  <div className={centered ? "text-center" : ""}>
    <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${gold ? "text-gold-gradient" : ""}`}>
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);

export default SectionHeading;
