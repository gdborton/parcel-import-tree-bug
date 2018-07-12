This is a repo meant to highlight a bug that I found in Parcel.

It seems that there is some wonkiness when a bundles async children share additional async children.

In this example repo, `index.js` async imports `a` and `b`, which then import `c`. `c` async imports `1`.

When this happens, the bundle is built in an incorrect way, and module.exports from index.js isn't what's expected (`{}` vs `{ default: { asdf: 1 } }`).

If you change `a` and `b` to skip over `c` and directly async import `1` the build seems to be correct.