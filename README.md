XPath evaluator plugin (Experimental)
=====================================

Experimental plugin that adds functions to evaluate XPath functions (compatible with version 22.1+).

It adds two functions on the `EditingSupport` instance: `evaluateXPathAtSelection` and `evaluateXPath`. They take 3 parameters:
- expression - the XPath expression to evaluate
- nsResolver - resolver for prefixes used in the XPath expression (https://www.w3.org/TR/DOM-Level-3-XPath/xpath.html#XPathNSResolver).
- resultType - constants in the XPathResult object
and return an XPathResult - https://www.w3.org/TR/DOM-Level-3-XPath/xpath.html#XPathResult .

Example
-------

```
editor.getEditingSupport().evaluateXPathAtSelection('./ancestor-or-self::table', null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE).iterateNext()
```

NOTICES
-------

This library uses the Wicked Good XPath library (https://github.com/google/wicked-good-xpath) which is MIT licensed.


Copyright and License
---------------------

Copyright 2023 Syncro Soft, SRL.

This project is licensed under [MIT License](https://github.com/oxygenxml-incubator/web-author-xpath-plugin/blob/master/LICENSE)
