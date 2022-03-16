$(document) . ready (function () {
      $("code") . html (
        `"<span class = 'subject'>2468;</span>"  <span class = 'hidden'>=~ ` +
        "/<span class = 'pattern'>[2468]*(?&lt;cell>[2468])[2468]*;</span>/" +
        "</span>" +
        "\n"      +
        "\n"      +
        `"<span class = 'subject'>13579;</span>" <span class = 'hidden'>=~ ` +
        "/<span class = 'pattern'>[13579]*(?&lt;cell>[13579])[13579]*;</span>" +
        "/</span>"
      )

      add_todo (() => unhide (2))
})
