$(window).load(function () {
  /** Data model */
  function Article(name, price) {
    mobx.extendObservable(this, {
      name: name,
      price: price
    });
  }

  function ShoppingCartEntry(article) {
    mobx.extendObservable(this, {
      article: article,
      amount: 1,
      price: function () {
        return this.article ? this.article.price * this.amount : 0;
      }
    });
  }

  function ShoppingCart() {
    mobx.extendObservable(this, {
      entries: [],
      total: function () {
        return this.entries.reduce(function (sum, entry) {
          return sum + entry.price;
        }, 0);
      }
    });
  }
  // remove demo dom
  $(".demo").remove();

  // Some available articles
  var articles = mobx.observable([
    ["Funny Bunnies", 17.63],
    ["Awesome React", 23.95],
    ["Second hand netbook", 50.00]
  ].map(function (e) {
    return new Article(e[0], e[1]);
  }));

  // Our shopping cart
  var shoppingCart = new ShoppingCart();
  // With a demo item inside
  shoppingCart.entries.push(new ShoppingCartEntry(articles[0]));

  $.fn.insertAt = function (index, $parent) {
    return this.each(function () {
      if (index === 0) {
        $parent.prepend(this);
      } else {
        $parent.children().eq(index - 1).after(this);
      }
    });
  };

  /** UI Logic */
  var $articles = $("#articles");

  // Make the articles list follow the array
  articles.observe(function (change) {
    // items where added or removed
    if (change.type === "splice") {
      $articles.children().slice(change.index, change.index + change.removed.length).remove();
      for (var i = 0; i < change.addedCount; i++) {
        renderArticle(articles[change.index + i])
          .insertAt(change.index + i, $articles);
      }
    }
  }, true); // true makes sure the observe function is invoked immediately

  // Render an article in the articles overview, and watch or changes
  function renderArticle(article) {
    var $name = $("<span>").text(article.name);
    var $price = $("<span>").addClass("price").text(article.price);
    mobx.autorun(function () {
      $name.text(article.name);
    });
    mobx.autorun(function () {
      $price.text(article.price);
    });
    return $("<li>").append($name,
      $("<button>").text("+").addClass("add-article"),
      $("<button>").text("edit").addClass("edit-article"),
      $price);
  }

  // ShoppingCart ui
  var $cart = $("#cart");
  var $total = $("#total");

  mobx.autorun(function () {
    $total.text(shoppingCart.total);
  }, true);

  shoppingCart.entries.observe(function (change) {
    // items where added or removed
    if (change.type === "splice") {
      $cart.children().slice(change.index, change.index + change.removed.length).remove();
      for (var i = 0; i < change.addedCount; i++) {
        renderCartEntry(shoppingCart.entries[change.index + i])
          .insertAt(change.index + i, $cart);
      }
    }
  }, true);

  function renderCartEntry(entry) {
    var $name = $("<span>").text(entry.article.name);
    var $amount = $("<span>").addClass("price").text(entry.amount);
    mobx.autorun(function () {
      $name.text(entry.article.name);
    });
    mobx.autorun(function () {
      $amount.text(entry.amount);
    });
    return $("<li>").append(
      $("<button>").text("-").addClass("remove-article"),
      $name,
      $amount);
  }


  // Events
  $("#new-article").on("click", function () {
    articles.push(new Article(prompt("Article name"), prompt("Price")));
  });

  $(document).on("click", ".edit-article", function (event) {
    var idx = $(event.target).parent().index();
    articles[idx].name = prompt("New name");
    articles[idx].price = prompt("New price");
  });

  $(document).on("click", ".add-article", function (event) {
    var article = articles[$(event.target).parent().index()];
    var existingEntry = shoppingCart.entries.find(function (entry) {
      return entry.article === article;
    });
    if (existingEntry)
      existingEntry.amount += 1;
    else
      shoppingCart.entries.unshift(new ShoppingCartEntry(article));
  });

  $(document).on("click", ".remove-article", function (event) {
    var entryIndex = $(event.target).parent().index();
    if ((shoppingCart.entries[entryIndex].amount -= 1) < 1)
      shoppingCart.entries.splice(entryIndex, 1);
  });
});//]]> 
  