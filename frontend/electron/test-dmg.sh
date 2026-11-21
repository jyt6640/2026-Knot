#!/bin/bash
# Install to an isolated Applications directory, so an existing Knot.app stays intact.
set -euo pipefail
image=${1:?DMG path}
arch=${KNOT_MAC_ARCH:-$(node -p 'process.arch')}
version=${KNOT_MAC_VERSION:-0.0.0}
work=$(mktemp -d)
mount="$work/volume"
mkdir "$mount" "$work/Applications"
attached=0
cleanup() {
  if [[ $attached == 1 ]]; then hdiutil detach "$mount" || return; fi
  rm -rf "$work"
}
trap cleanup EXIT
hdiutil verify "$image" >/dev/null
hdiutil attach -readonly -nobrowse -noautoopen -mountpoint "$mount" "$image"
attached=1
[[ $(readlink "$mount/Applications") == /Applications ]]
app="$work/Applications/Knot.app"
ditto "$mount/Knot.app" "$app"
hdiutil detach "$mount"
attached=0
cpu=$arch
[[ $arch != x64 ]] || cpu=x86_64
[[ $(lipo -archs "$app/Contents/MacOS/Knot") == "$cpu" ]]
[[ $(lipo -archs "$app/Contents/Frameworks/Electron Framework.framework/Electron Framework") == "$cpu" ]]
[[ $(plutil -extract CFBundleShortVersionString raw "$app/Contents/Info.plist") == "$version" ]]
codesign --verify --deep --strict "$app"
if [[ ${KNOT_MAC_RELEASE:-0} == 1 ]]; then
  spctl --assess --type execute --verbose "$app"
elif [[ $(uname -m) == "$cpu" ]]; then
  node electron/check-preview-launch.mjs "$app/Contents/MacOS/Knot" "$work/profile"
  if [[ ${KNOT_MAC_PREVIEW:-0} != 1 ]]; then
    KNOT_TEST_APP="$app" pnpm test:desktop
  fi
fi
