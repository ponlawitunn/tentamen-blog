let products = [];

function renderListOfProduct() {
    let $listOfProduct = $("#listOfProduct");
    $listOfProduct.empty();

    $('body').delegate('button','click', function () {
        $("div").show();
    });

    for (let product of products) {
        let $product = $(`<div style="padding: 1em">
                <div><span><strong>Post Id: </strong></span>${product.postId}</div>
                <div><span><strong>ID: </strong></span>${product.id}</div>
                <div><span><strong>Name: </strong></span>${product.name}</div>
                <div><span><strong>Likes: </strong></span>${product.QuantityLikes}</div>
                <div style="margin-bottom: 1em"><span><strong>E-mail: </strong></span>${product.email}</div>
                <div><button style="margin-bottom: 1em">See comments</button><div hidden="hidden"><span><strong>Comment: </strong></span>${product.body}</div></div>
            </div>`);
        $product.appendTo($listOfProduct);
    }
}



$.getJSON( "https://jsonplaceholder.typicode.com/posts/1/comments", function( data ) {
    products = data;

    for (let product of products) {
        product.QuantityLikes = Math.floor((Math.random() * 100));
    }

    renderListOfProduct();
});