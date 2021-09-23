const js = import("../pkg/my_corpus.js");
js.then(js => {
    js.greet("WebAssembly");
});
