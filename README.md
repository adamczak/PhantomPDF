# PhantomPDF

#### Create PDFs from urls using PhantomJS

#### Motivation

How can I print this?  Can you put headers/footers on this when it prints?  Page numbers?  Can we ensure formatting of this page when printed?  Can you replicate this government form?  How do I save this as a PDF? 

PhantomPDF was created to answer these questions, well - really it was a "how about if we tried this?" that got used over and over again.

#### The Basics

You need:

- [PhantomJS](http://phantomjs.org/)
- The Rasterize script (included with PhantomJS)
- A service/api/listener running that can accept requests, call PhantomJS with parameters and return the result