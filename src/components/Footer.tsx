export default function Footer() {
  return (
    <footer className="bg-nav-bg border-t border-white/5 p-6 text-sm text-foreground/70">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4">
        <div>
          <div className="font-semibold text-foreground">C.R.E.A.T.E Lab</div>
          <div>Centre for Resilient Environments & Autonomous Technologies</div>
        </div>
        <div>© {new Date().getFullYear()} C.R.E.A.T.E Lab — Built with ❤️</div>
      </div>
    </footer>
  );
}
