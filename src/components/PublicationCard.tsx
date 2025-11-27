interface PublicationCardProps {
  title: string;
  authors: string;
  venue: string;
  link?: string;
}

export default function PublicationCard({ title, authors, venue, link }: PublicationCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/8 transition-colors border border-white/10">
      <div className="flex justify-between items-start gap-4">
        <div>
          <div className="font-semibold text-foreground">{title}</div>
          <div className="text-sm text-foreground/70 mt-2">
            {authors} — <span className="text-xs">{venue}</span>
          </div>
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-sm text-accent hover:text-accent/80 whitespace-nowrap"
          >
            View
          </a>
        )}
      </div>
    </div>
  );
}
