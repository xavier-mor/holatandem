#!/usr/bin/env bash
# Git pre-commit hook: optimises staged PNG/JPG files and re-stages them.
set -euo pipefail

staged=()
while IFS= read -r f; do
  [[ -n "$f" ]] && staged+=("$f")
done < <(git diff --cached --name-only --diff-filter=ACM | grep -Ei '\.(png|jpe?g)$' || true)

[[ ${#staged[@]} -eq 0 ]] && exit 0

echo "🖼  Optimising staged images..."
node scripts/optimize-images.mjs "${staged[@]}"

# Re-stage any files that were modified by the optimiser.
for f in "${staged[@]}"; do
  [[ -f "$f" ]] && git add "$f"
done
