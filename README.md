# PhantomPDF

#### Create PDFs from urls using PhantomJS

#### Motivation

How can I print this?  Can you put headers/footers on this when it prints?  Page numbers?  Can we ensure formatting of this page when printed?  Can you replicate this government form?  How do I save this as a PDF?  Can we have a link to a PDF of this page?  In realtime?  With the output from client side scripts included?

PhantomPDF was created to answer these questions, well - really it was a "how about if we tried this?" that got used over and over again.

You need:

- [PhantomJS](http://phantomjs.org/)
- The Rasterize script (included with PhantomJS)
- A service/api/listener running that can accept requests, call PhantomJS with some parameters and return the result (included in this project)

#### Installation (Windows)

- Install NodeJS
- Clone/download this repo
- In directory of download (as Admin)
  - npm install
  - node install.js

If you see "PhantomPDF running!" all went well.  

Perform a GET request to: [http://localhost:9090/pdf?url=http://www.google.com]

Include a filename parameter: [http://localhost:9090/pdf?url=http://www.google.com?filename=google.pdf] to (depending on broswer) download the file rather than open it.

...more to come

