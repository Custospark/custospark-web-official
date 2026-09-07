#!/usr/bin/env python3
"""Strip em/en dashes from Academy page copy (house style: plain hyphens).

Usage:
  python scripts/strip-emdashes.py [paths...]

With no paths, scans the Academy page + spotlight section. Prints a
per-file replacement count; exits 0. Safe to re-run (idempotent).
"""

import sys
from pathlib import Path

DEFAULT_TARGETS = [
    Path("src/pages/AcademyPage.tsx"),
    Path("src/sections/AcademySpotlight.tsx"),
]

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


def main(argv: list) -> int:
    targets = [Path(a) for a in argv[1:]] or DEFAULT_TARGETS
    grand = 0
    for path in targets:
        if not path.is_file():
            print(f"skip (missing): {path}")
            continue
        count = strip_file(path)
        grand += count
        print(f"{path}: {count} dash(es) replaced")
    print(f"done: {grand} total")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
