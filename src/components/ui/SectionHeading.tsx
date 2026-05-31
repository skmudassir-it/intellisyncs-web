interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`text-center max-w-2xl mx-auto ${className}`}>
      {label && (
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold mt-3 mb-4 tracking-tight ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg ${
            light ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
