# Visualize Nested Json with HyperTree & MitchTree

- [Viz by HyperTree](https://ishihara-jp.github.io/VizNestJson/NestJsonViz.html)
- [Viz by MitchTree](https://ishihara-jp.github.io/VizNestJson/NestJsonViz2.html)

You can visualize any nested json resource.
If this page don't work, please check JavaScript settings.

## Example
|JSON source | HyperTree | MitchTree |
|---|---|---|
|Simple ([innter URL](data/test.json))|[demo](https://ishihara-jp.github.io/VizNestJson/example/NestJsonVizDemo1.html)|[demo](https://ishihara-jp.github.io/VizNestJson/example/NestJsonViz2Demo1.html)|
|HL7FHIR Microbiology report ([external URL](https://jami-fhir-jp-wg.github.io/jp-core-v1xpages/jpcore-r4/develop/DiagnosticReport-jp-diagnosticreport-microbiology-example-1.json)) | [demo](https://ishihara-jp.github.io/VizNestJson/example/NestJsonVizDemo2.html)|[demo](https://ishihara-jp.github.io/VizNestJson/example/NestJsonViz2Demo2.html)|
|Mammalia ([external URL](https://glouwa.github.io/d3-hypertree-examples/examples-html/minimal-ajax/mammalia.d3.json)) |[demo](https://ishihara-jp.github.io/VizNestJson/example/NestJsonVizDemo3.html)||


## Note
- JSON parser `js/json-process.js` is original.
- Follwoing extarnal libraries are imported in `js/`and `css/` :
  - `d3-hypertree.js`, `d3-hypertree-light.css` (from [D3-HyperTree](https://github.com/glouwa/d3-hypertree))
  - `d3-mitch-tree.js`, `d3-mitch-tree-theme-default.css` (from [D3-Mitch-Tree](https://github.com/deltoss/d3-mitch-tree))
