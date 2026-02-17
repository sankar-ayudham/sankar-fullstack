## Why binary files should not be committed

Git is optimized for tracking text changes line by line.
Binary files such as images, videos, zip archives, and compiled binaries
cannot be diffed meaningfully, increase repository size, and slow down
cloning and history operations. Large or generated files should be stored
outside Git or produced via build steps instead.
Git and GitHub setup notes
