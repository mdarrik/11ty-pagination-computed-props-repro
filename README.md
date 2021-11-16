# About this repo

This is a simple reproduction of a bug(?) where eleventyComputed functions get called twice when there is pagination & eleventyComputed properties.

This means that if you're doing data fetching or other things, you need to check that your dependency exists before you continue. 