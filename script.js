
// // /*var likes=0;
// // var dislikes=0;
// // $('.buttonlike').click(function(){
// //     likes++;
// //    /* console.loge(likes);*/
// //     $('#lbllikes').text(likes);
// // });
// // $('.buttondislike').click(function(){
// //     dislikes++;
// //     /*console.loge(dislikes);*/
// //     $('#lbldislikes').text(dislikes);
// // });
// aqui e para contar likes e dislikes independentemente do livro

// var book1_opinion=0;
// var book2_opinion=0;
// var book3_opinion=0;

// $('#book1 button').click(function(){
//     book1_opinion = $(this).attr("data-opinion");
// });
// $('#book2 button').click(function(){
//     book2_opinion = $(this).attr("data-opinion");
// });
// $('#book3 button').click(function(){
//     book3_opinion = $(this).attr("data-opinion");
// });


// $('.book button').click(function(){//se alguma coisa com a classe .book for clicada
//     var opinion=$(this).attr("data-opinion");
//     console.log("book" + opinion);
//     $current = $('.book.active');
//     $next=$current.next();

//     if ($next.length == 0 ){
//         $next=$('.book').first();
//         $next= $('.book:first-of-type');
//         $next=$('book').eq(0);
//     }

//     $current.removeClass ("active");
//     $next.addClass("active");


// });
// $next=$current.next() - chama o proximo elemento
//$('.book').first(); - select the first .book element
//first-of-type: Select every .book element that is the first .book element of its parent:

// var book1 = {
//     name: 'A Estalagem de Rose Harbour',
//     img: "estalagem.jpeg",
//     res: "Depois da morte do marido no Afeganistão, Jo Marie Rose procura refúgio em Cedar Cove, uma pequena cidade acolhedora à beira-mar. Decide comprar uma estalagem com uma vista encantadora e repousante e aí iniciar uma nova vida, repleta de paz. Mas esta nova vida reserva-lhe mais surpresas e agitação do que esperava, com a chegada dos seus primeiros hóspedes, Joshua Weaver e Abby Kincaid. Ambos oriundos de Cedar Cove, mas afastados há muitos anos por diferentes motivos, vão encontrar na Estalagem de Rose Harbor um porto seguro, onde conseguirão enfrentar o passado, sarar as feridas e reconciliar-se com os próprios medos, revoltas e desilusões.",
//     links:[
//         {
//             text: "Wook",
//             url: "https://www.wook.pt/livro/a-estalagem-de-rose-harbor-debbie-macomber/14907377"
//         },
//         {
//             text: "Presença",
//             url: "https://www.presenca.pt/livro/a-estalagem-de-rosa-harbor/"

//         }
//     ]
// };

// var book2 = {
//     name: 'O Assassino Inglês',
//     img: "assassinoingles.jpeg",
//     res: "Espião ocasional e restaurador de arte, Gabriel Allon chega a Zurique para restaurar a obra de um Velho Mestre, a pedido de um banqueiro milionário. Em vez disso, dá por si no meio do sangue do cliente e injustamente acusado do seu homicídio. Allon vê-se inesperadamente a braços com uma voraz cadeia de acontecimentos, incluindo roubos de arte pelos nazis, um suicídio com várias décadas e um trilho sangrento de assassínios - alguns da sua autoria. O mundo da espionagem que Allon pensava ter colocado de parte vai envolvê-lo uma vez mais. E ele vai ter de lutar pela vida com o assassino que ajudou a treinar.",
//     links:[
//         {
//             text: "Wook",
//             url: "https://www.wook.pt/livro/o-assassino-ingles-daniel-silva/1459107"
//         },
//         {
//             text: "Fnac",
//             url: "https://www.fnac.pt/O-Assassino-Ingles-Daniel-Silva/a249594"
//         }
//     ]
// };

// var book3 = {
//     name: 'Verão Quente',
//     img: "veraoquente.jpeg" ,
//     res: "Em 1975, no auge do Verão Quente, com Portugal à beira de uma guerra civil, Julieta é encontrada inanimada e cega, depois de cair pela escada, na sua casa de família na Arrábida. E, num dos quartos do primeiro andar, são descobertos, já mortos, o seu marido, Miguel, e a sua irmã, Madalena. Seminus e ambos atingidos com duas balas junto ao coração, as suas mortes levam o tribunal a condenar Julieta pelo duplo homicídio. Vinte e oito anos depois, em 2003, a cegueira traumática de Julieta desaparece e ela volta a ver. Começa também a recordar-se de muitos pormenores daquela tarde trágica em que aconteceu o crime, e em conjunto com Redonda, a sua bonita filha, e o narrador da história, vão tentar reconstituir e desvendar o terrível segredo da Arrábida, que destrui aquela família para sempre. Quem matou Miguel e Madalena e porquê?",
//     links:[
//         {
//             text: "Wook",
//             url: "https://www.wook.pt/livro/verao-quente-domingos-amaral/13044551"
//         },
//         {
//             text: "Bertrand",
//             url: "https://www.bertrand.pt/livro/verao-quente-domingos-amaral/13044551"
//         }
//     ]
// };

class library {
    constructor() {
        this.books = [];
        this.seenBooks = [];
        this.searchIndex = 0
        // this.Load(this.books[0])
        // this.GetBooks("harry potter");
    }

    Load(book) {
        $('.book h1').text(book.title);
        $('.book img').attr('src', book.img);
        $('.book p').text(book.description);
        $('.book a').text('Preview');
        $('.book a').attr('href', book.links);
        //  $('.book a').attr(book.links);
        // book.links.forEach(function(v,i){
        //     $('.book a').eq(i).text(v.text);
        //     $('.book a').eq(i).attr('href',v.url);
        // });
    }

    NextBook(opinion) {
        // console.log(this.books.length)
        this.books[0].opinion = opinion;// para guardar a informacao de cada livro que é clicado
        this.seenBooks.push(this.books[0]);//para o livro desaparecer
        this.books.splice(0, 1);//para aparecer o seguinte
        if (this.books.length > 0) {
            this.Load(this.books[0]);
            // console.log(opinion)
        }
        else {

            $('#bookContainer').toggle();
            $('#endPage').toggle();
            var html = "";
            this.seenBooks.forEach(function (v, i) {
                html += `
                    <tr>
                        <td>` + v.title + `</td>
                        <td>` + v.opinion + `</td>
                    </tr>`;
            });
            $('#display tbody').html(html);

        }
    }

    GetBooks(search) {
        var obj = this;
       
            $.ajax({
                url: "https://www.googleapis.com/books/v1/volumes?q=" + search + "&startIndex=" + this.searchIndex,
            

            }).done(function (data) {
                //quando o pedido ajax terminar com sucesso
                //console.log(data);
                data.items.forEach(function (v, i) {
                    var book = {
                        title: v.volumeInfo.title,
                        description: v.volumeInfo.description,
                        img: v.volumeInfo.imageLinks.thumbnail,
                        links: v.volumeInfo.previewLink,
                        opinion: "",
                    }
                    
                    obj.books.push(book);
                });
    
                obj.Load(obj.books[0]);
                
            });
            this.searchIndex += 10;
            // if (this.seenBooks.length=0)
            //...
        // else if (this.seenBooks.length >= 10) {
        //     $.ajax({
        //         url: "https://www.googleapis.com/books/v1/volumes?q=" + search + "&startIndex=10",
        //     }).done(function (data) {
        //         data.items.forEach(function (v, i) {
        //             var book = {
        //                 title: v.volumeInfo.title,
        //                 description: v.volumeInfo.description,
        //                 img: v.volumeInfo.imageLinks.thumbnail,
        //                 links: v.volumeInfo.previewLink,
        //                 opinion: "",
        //             }
        //             i
        //             obj.books.push(book);
        //         });
        //         obj.Load(obj.books[0]);
        //         $('#bookContainer').toggle(); //passamos para aqui em vez do metodo star porque so faz sentido mostrar os livros depois de estarem carregados
        //         $('#endPage').toggle();


            // })
        // }


    }

    Reset() {
        this.books = this.seenBooks;
        // console.log(this.seenBooks);
        // console.log(this.books);
        this.seenBooks = [];
        // console.log(this.seenBooks);
        this.Load(this.books[0]);
        $('#bookContainer').toggle();
        $('#endPage').toggle();
    }

    Start() {
        var pesquisa = $('#searchBox').val();

        if (pesquisa.length >= 2) {
            this.GetBooks(pesquisa);
        }
        $('#bookContainer').toggle(); 
        $('#startPage').toggle();
    }

    NewSearch() {
        $('#endPage').toggle();
        $('#startPage').toggle();
        $('#searchBox').val('');
        // this.seenBooks = []; nao e preciso pq é para aparecerem as pesquisas todas

    }

};

var lib = new library();


$('.book button').click(function () {
    var opinion = $(this).attr("data-opinion");
    lib.NextBook(opinion);
});

$('#resetButton').click(function () {
    lib.Reset();
});

$('#searchButton').click(function () {
    lib.Start();
});

$('#newSearchButton').click(function () {
    lib.NewSearch();
});

$('#readMore').click(function () {
    lib.GetBooks($('#searchBox').val());
    $('#endPage').toggle();
    $('#bookContainer').toggle();
});

$('#searchBox').keyup(function(){
    setTimeout(lib.GetBooks(), 2000);
});
