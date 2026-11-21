#!/bin/bash
# Run from frontend/. Release mode requires an imported Developer ID and a notarytool profile.
set -euo pipefail
arch=${KNOT_MAC_ARCH:-$(node -p 'process.arch')}
version=${KNOT_MAC_VERSION:-0.0.0}
release=${KNOT_MAC_RELEASE:-0}
pnpm package:mac
bundle="dist-desktop/Knot-darwin-$arch/Knot.app"
name="Knot-$version-$arch"
if [[ $release == 1 ]]; then
  : "${KNOT_NOTARY_PROFILE:?missing notarytool profile}"
  codesign --verify --deep --strict -R='anchor apple generic and certificate leaf[field.1.2.840.113635.100.6.1.13] exists' "$bundle"
elif [[ ${KNOT_MAC_PREVIEW:-0} != 1 ]]; then
  name="$name-test"
fi
stage=$(mktemp -d)
trap 'rm -rf "$stage"' EXIT
mkdir "$stage/image"
ditto "$bundle" "$stage/image/Knot.app"
ln -s /Applications "$stage/image/Applications"
hdiutil create -quiet -volname Knot -fs HFS+ -format UDZO -srcfolder "$stage/image" "$stage/$name.dmg"
if [[ $release == 1 ]]; then
  codesign --force --timestamp --sign "$KNOT_SIGN_IDENTITY" "$stage/$name.dmg"
  xcrun notarytool submit "$stage/$name.dmg" --keychain-profile "$KNOT_NOTARY_PROFILE" --wait --output-format json > "$stage/notary.json"
  [[ $(plutil -extract status raw "$stage/notary.json") == Accepted ]]
  xcrun stapler staple "$stage/$name.dmg"
  xcrun stapler validate "$stage/$name.dmg"
  spctl --assess --type open --context context:primary-signature --verbose "$stage/$name.dmg"
fi
mv "$stage/$name.dmg" "dist-desktop/$name.dmg"
