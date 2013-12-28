# Istanbul coverage issues

I've found that certain methods, despite being exercised by jasmine are not
showing as being covered in Istanbul. At first, I thought it was because they
were using object literal notation, but I found that all of my functions
within an object are being skipped over in coverage, despite being called in
the tests.

## What am I doing wrong?

From what I've seen [Istanbul](https://github.com/gotwarlost/istanbul) seems
to have a great following, so I can't believe it is incabible of doing what
I'm trying to do here. Maybe I'm getting something wrong in how I'm
configuring [grunt-template-jasmine-istanbul](https://github.com/maenu/grunt-template-jasmine-istanbul)
in my gruntfile. Who knows? I don't.

## Anyway
I've cooked up a simple example that should be able to be run by anyone who is
famailiar with either of the projects and can help.


