const TerminalWindow = ({ title = "terminal.exe", children, className = "" }) => {
  return (
    <div
      className={`border border-matrix-border rounded-sm bg-matrix-surface overflow-hidden glow-box ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-matrix-border bg-matrix-surface-light">
        <span className="text-matrix-primary text-xs font-medium tracking-wider">
          &gt; {title}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-matrix-text-muted text-xs cursor-default select-none">
            —
          </span>
          <span className="text-matrix-text-muted text-xs cursor-default select-none">
            □
          </span>
          <span className="text-matrix-text-muted text-xs cursor-default select-none hover:text-red-400 transition-colors">
            ✕
          </span>
        </div>
      </div>
      {/* Content */}
      <div className="p-4">{children}</div>
    </div>
  );
};

export default TerminalWindow;
