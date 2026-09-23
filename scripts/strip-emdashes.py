#!/usr/bin/env python3
"""Strip em/en dashes from Academy page copy (house style: plain hyphens).

Usage:
  python scripts/strip-emdashes.py [paths...]

With no paths, scans the Academy page + spotlight section. Prints a
per-file replacement count; exits 0. Safe to re-run (idempotent).
"""

import sys
from pathlib import Path

DEFAULT_TARGETS: list[Path] | None = None  # None = scan all src/**/*.tsx + src/**/*.ts + src/**/*.md

# Em-dash / en-dash (plus common variants) -> ASCII hyphen-minus.
REPLACEMENTS = {
    "\u2014": "-",  # em dash
    "\u2015": "-",  # horizontal bar
    "\u2013": "-",  # en dash
    "\u2012": "-",  # figure dash
    "&mdash;": "-",
    "&ndash;": "-",
}


def strip_file(path: Path) -> int:
    text = path.read_text(encoding="utf-8")
    total = 0
    for old, new in REPLACEMENTS.items():
        count = text.count(old)
        if count:
            text = text.replace(old, new)
            total += count
    if total:
        path.write_text(text, encoding="utf-8")
    return total


def collect_targets() -> list[Path]:
    # All source + docs where copy lives — keeps house style consistent repo-wide.
    patterns = ["src/**/*.tsx", "src/**/*.ts", "src/**/*.md", "docs/**/*.md", "*.md"]
    found: list[Path] = []
    for pat in patterns:
        found.extend(Path(".").glob(pat))
    # De-dupe, ignore built output
    seen = set()
    out = []
    for p in found:
        if p.is_file() and p not in seen and "node_modules" not in p.parts and "dist" not in p.parts:
            seen.add(p)
            out.append(p)
    return sorted(out)


def main(argv: list) -> int:
    if len(argv) > 1:
        targets = [Path(a) for a in argv[1:]]
    else:
        targets = collect_targets() if DEFAULT_TARGETS is None else DEFAULT_TARGETS
    grand = 0
    for path in targets:
        if not path.is_file():
            print(f"skip (missing): {path}")
            continue
        count = strip_file(path)
        grand += count
        if count:
            print(f"{path}: {count} dash(es) replaced")
    print(f"done: {grand} total")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
