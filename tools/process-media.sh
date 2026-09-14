#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
src="$root/media-source"
out="$root/public/media"

command -v ffmpeg >/dev/null 2>&1 || {
  echo "ffmpeg is required" >&2
  exit 1
}

mkdir -p "$out"/{guest,stock,legacy}

process_group() {
  local group="$1"
  local filter="$2"
  local quality="$3"
  local input="$src/$group"
  local output="$out/$group"

  [ -d "$input" ] || return 0
  find "$input" -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) -print0 |
  while IFS= read -r -d '' file; do
    local name
    name="$(basename "${file%.*}").jpg"
    ffmpeg -y -loglevel error -i "$file" \
      -vf "$filter" \
      -q:v "$quality" -pix_fmt yuvj420p "$output/$name"
    echo "$group/$name"
  done
}

process_group guest \
  "scale=1600:-2:force_original_aspect_ratio=decrease,eq=contrast=1.025:saturation=0.94:gamma=1.015,unsharp=5:5:0.25" 3
process_group stock \
  "scale=1600:-2:force_original_aspect_ratio=decrease,eq=contrast=1.015:saturation=0.92:gamma=1.01" 3
process_group legacy \
  "eq=contrast=1.025:saturation=0.94:gamma=1.015,unsharp=5:5:0.2" 3
