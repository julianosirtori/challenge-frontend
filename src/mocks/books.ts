import { FetchVolumesResponse } from "@/services/books/types";
import { InfiniteData } from "react-query";

const data = {
  pages: [
    {
      kind: "books#volumes",
      totalItems: 348,
      items: [
        {
          kind: "books#volume",
          id: "eVevDwAAQBAJ",
          etag: "Fa+5RB631kU",
          selfLink: "https://www.googleapis.com/books/v1/volumes/eVevDwAAQBAJ",
          volumeInfo: {
            title: "Box Trilogia O Senhor dos Anéis",
            authors: ["J.R.R. Tolkien"],
            publisher: "HARLEQUIN",
            publishedDate: "2019-11-25",
            description:
              "Embarque numa viagem inesquecível para a Terra-média e tenha os três livros de O Senhor dos Anéis, a obra-prima de J.R.R. Tolkien e um dos maiores clássicos da fantasia, em edições de luxo com capa dura neste box de colecionador! Apesar de ter sido publicado em três volumes – A Sociedade do Anel, As Duas Torres e O Retorno do Rei – desde os anos 1950, O Senhor dos Anéis não é exatamente uma trilogia, mas um único grande romance que só pode ser compreendido em seu conjunto, segundo a concepção de seu autor, J.R.R. Tolkien. Com design cuidadosamente pensado para refletir a unidade da obra e com os desenhos originais feitos por Tolkien para as capas de cada volume, este box reúne os três livros da Saga do Anel e oferece aos leitores uma nova oportunidade de mergulhar no notável mundo da Terra-média.",
            industryIdentifiers: [
              {
                type: "ISBN_13",
                identifier: "9788595086364",
              },
              {
                type: "ISBN_10",
                identifier: "8595086362",
              },
            ],
            readingModes: {
              text: true,
              image: false,
            },
            pageCount: 1090,
            printType: "BOOK",
            categories: ["Fiction"],
            maturityRating: "NOT_MATURE",
            allowAnonLogging: true,
            contentVersion: "1.11.11.0.preview.2",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=eVevDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=eVevDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            },
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=eVevDwAAQBAJ&printsec=frontcover&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=2&source=gbs_api",
            infoLink:
              "https://play.google.com/store/books/details?id=eVevDwAAQBAJ&source=gbs_api",
            canonicalVolumeLink:
              "https://play.google.com/store/books/details?id=eVevDwAAQBAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "FOR_SALE",
            isEbook: true,
            listPrice: {
              amount: 134.9,
              currencyCode: "BRL",
            },
            retailPrice: {
              amount: 128.16,
              currencyCode: "BRL",
            },
            buyLink:
              "https://play.google.com/store/books/details?id=eVevDwAAQBAJ&rdid=book-eVevDwAAQBAJ&rdot=1&source=gbs_api",
            offers: [
              {
                finskyOfferType: 1,
                listPrice: {
                  amountInMicros: 134900000,
                  currencyCode: "BRL",
                },
                retailPrice: {
                  amountInMicros: 128160000,
                  currencyCode: "BRL",
                },
                giftable: true,
              },
            ],
          },
          accessInfo: {
            country: "BR",
            viewability: "PARTIAL",
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: true,
              acsTokenLink:
                "http://books.google.com.br/books/download/Box_Trilogia_O_Senhor_dos_An%C3%A9is-sample-epub.acsm?id=eVevDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=eVevDwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "SAMPLE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "Embarque numa viagem inesquecível para a Terra-média e tenha os três livros de O Senhor dos Anéis, a obra-prima de J.R.R. Tolkien e um dos maiores clássicos da fantasia, em edições de luxo com capa dura neste box de colecionador!",
          },
        },
        {
          kind: "books#volume",
          id: "SbKuDwAAQBAJ",
          etag: "qQeAA9HrIPU",
          selfLink: "https://www.googleapis.com/books/v1/volumes/SbKuDwAAQBAJ",
          volumeInfo: {
            title: "O Senhor dos Anéis: O retorno do rei",
            authors: ["J.R.R. Tolkien"],
            publisher: "HARLEQUIN",
            publishedDate: "2019-11-25",
            description:
              "O Retorno do Rei A guerra entre os Povos Livres da Terra-média e Sauron, o Senhor Sombrio da terra de Mordor, chega a seu clímax neste terceiro volume do romance O Senhor dos Anéis. As batalhas grandiosas que estão prestes a acontecer, no entanto, são apenas o pano de fundo para o verdadeiro drama: a missão quase suicida dos hobbits Frodo e Sam, que tentam destruir o Um Anel, fonte do poder de Sauron, infiltrando-se no coração do território do Inimigo. Em O Retorno do Rei, acompanhamos o mago Gandalf e o hobbit Pippin em sua visita à a majestosa cidade de Minas Tirith, que já foi o principal baluarte dos Homens contra a ameaça de Sauron, mas que está prestes a sucumbir diante da força avassaladora do Senhor Sombrio. Outros membros da Sociedade do Anel se juntam a Aragorn, herdeiro da longa linhagem dos reis de Minas Tirith, na tentativa de evitar que a antiga capital do reino de Gondor seja destruída. Nas fronteiras de Mordor, Sam resgata Frodo, e os dois hobbits partem para o último estágio de sua jornada rumo ao Monte da Perdição, uma jornada que testará os limites do corpo e da mente dos pequenos heróis. O livro inclui ainda numerosos apêndices, nos quais Tolkien explora detalhes da história, das línguas, dos alfabetos e até dos calendários de seu mundo ficcional.",
            industryIdentifiers: [
              {
                type: "ISBN_13",
                identifier: "9788595086371",
              },
              {
                type: "ISBN_10",
                identifier: "8595086370",
              },
            ],
            readingModes: {
              text: true,
              image: false,
            },
            pageCount: 548,
            printType: "BOOK",
            categories: ["Fiction"],
            maturityRating: "NOT_MATURE",
            allowAnonLogging: true,
            contentVersion: "1.7.9.0.preview.2",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=SbKuDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=SbKuDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            },
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=SbKuDwAAQBAJ&printsec=frontcover&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=3&source=gbs_api",
            infoLink:
              "https://play.google.com/store/books/details?id=SbKuDwAAQBAJ&source=gbs_api",
            canonicalVolumeLink:
              "https://play.google.com/store/books/details?id=SbKuDwAAQBAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "FOR_SALE",
            isEbook: true,
            listPrice: {
              amount: 49.9,
              currencyCode: "BRL",
            },
            retailPrice: {
              amount: 47.4,
              currencyCode: "BRL",
            },
            buyLink:
              "https://play.google.com/store/books/details?id=SbKuDwAAQBAJ&rdid=book-SbKuDwAAQBAJ&rdot=1&source=gbs_api",
            offers: [
              {
                finskyOfferType: 1,
                listPrice: {
                  amountInMicros: 49900000,
                  currencyCode: "BRL",
                },
                retailPrice: {
                  amountInMicros: 47400000,
                  currencyCode: "BRL",
                },
                giftable: true,
              },
            ],
          },
          accessInfo: {
            country: "BR",
            viewability: "PARTIAL",
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: true,
              acsTokenLink:
                "http://books.google.com.br/books/download/O_Senhor_dos_An%C3%A9is_O_retorno_do_rei-sample-epub.acsm?id=SbKuDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=SbKuDwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "SAMPLE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "O Retorno do Rei A guerra entre os Povos Livres da Terra-média e Sauron, o Senhor Sombrio da terra de Mordor, chega a seu clímax neste terceiro volume do romance O Senhor dos Anéis.",
          },
        },
        {
          kind: "books#volume",
          id: "UbKuDwAAQBAJ",
          etag: "yOZK3Cu6sU8",
          selfLink: "https://www.googleapis.com/books/v1/volumes/UbKuDwAAQBAJ",
          volumeInfo: {
            title: "O Senhor dos Anéis: As duas torres",
            authors: ["J.R.R. Tolkien"],
            publisher: "HARLEQUIN",
            publishedDate: "2019-11-25",
            description:
              "As Duas Torres O segundo volume de O Senhor dos Anéis, mais importante épico de fantasia moderno, narra os caminhos separados seguidos pelos membros da Sociedade do Anel em sua luta para deter Sauron, o Senhor Sombrio da terra de Mordor, e destruir o Um Anel, no qual está contida a maior parte do poder do tirano demoníaco imaginado por J.R.R. Tolkien. Um ataque-surpresa pôs fim à jornada conjunta da Sociedade do Anel. De um lado, o trio formado pelo elfo Legolas, pelo anão Gimli e por Aragorn, herdeiro da realeza dos Homens, tenta resgatar os jovens hobbits Merry e Pippin, capturados por guerreiros-órquicos. A busca pelos companheiros perdidos levará os três a confrontar os cavaleiros do reino de Rohan e o mago renegado Saruman, que também deseja o Um Anel para si. Enquanto isso, do outro lado das montanhas, Frodo e Sam buscam uma maneira de entrar em Mordor e chegar até a montanha onde o Anel foi forjado, único lugar onde é possível destruí-lo. Para isso, acabam recebendo a ajuda de seu mais improvável aliado: Gollum, a criatura que chegou a ter o Anel sob seu poder durante centenas de anos e que ainda é devorada, em corpo e alma, pelo desejo de voltar a possuí-lo. Com cenas que mesclam o heroico e o intimista, o sublime e o cômico, As Duas Torres abriga algumas das criações mais inesquecíveis da imaginação de J.R.R. Tolkien, como os gigantescos Ents e a cultura nobre e belicosa do povo de Rohan.",
            industryIdentifiers: [
              {
                type: "ISBN_13",
                identifier: "9788595086326",
              },
              {
                type: "ISBN_10",
                identifier: "859508632X",
              },
            ],
            readingModes: {
              text: true,
              image: false,
            },
            pageCount: 453,
            printType: "BOOK",
            categories: ["Fiction"],
            maturityRating: "NOT_MATURE",
            allowAnonLogging: true,
            contentVersion: "1.7.7.0.preview.2",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=UbKuDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=UbKuDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            },
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=UbKuDwAAQBAJ&printsec=frontcover&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=4&source=gbs_api",
            infoLink:
              "https://play.google.com/store/books/details?id=UbKuDwAAQBAJ&source=gbs_api",
            canonicalVolumeLink:
              "https://play.google.com/store/books/details?id=UbKuDwAAQBAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "FOR_SALE",
            isEbook: true,
            listPrice: {
              amount: 49.9,
              currencyCode: "BRL",
            },
            retailPrice: {
              amount: 47.4,
              currencyCode: "BRL",
            },
            buyLink:
              "https://play.google.com/store/books/details?id=UbKuDwAAQBAJ&rdid=book-UbKuDwAAQBAJ&rdot=1&source=gbs_api",
            offers: [
              {
                finskyOfferType: 1,
                listPrice: {
                  amountInMicros: 49900000,
                  currencyCode: "BRL",
                },
                retailPrice: {
                  amountInMicros: 47400000,
                  currencyCode: "BRL",
                },
                giftable: true,
              },
            ],
          },
          accessInfo: {
            country: "BR",
            viewability: "PARTIAL",
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: true,
              acsTokenLink:
                "http://books.google.com.br/books/download/O_Senhor_dos_An%C3%A9is_As_duas_torres-sample-epub.acsm?id=UbKuDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=UbKuDwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "SAMPLE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "As Duas Torres O segundo volume de O Senhor dos Anéis, mais importante épico de fantasia moderno, narra os caminhos separados seguidos pelos membros da Sociedade do Anel em sua luta para deter Sauron, o Senhor Sombrio da terra de Mordor, ...",
          },
        },
        {
          kind: "books#volume",
          id: "3xeoPgAACAAJ",
          etag: "uzDq2Exgj/c",
          selfLink: "https://www.googleapis.com/books/v1/volumes/3xeoPgAACAAJ",
          volumeInfo: {
            title: "Senhor Dos Aneis - Caixa com Hobbit",
            authors: ["J. R. R. TOLKIEN"],
            publisher: "Martins Martins Fontes",
            description:
              'Esta edição especial dos livros de Tolkien vem em uma caixa com os quatro volumes da saga do Senhor dos Anéis - "A sociedade do anel", \'As duas torres" e "O retorno do rei" e "O Hobbit".',
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "853361568X",
              },
              {
                type: "ISBN_13",
                identifier: "9788533615687",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            printType: "BOOK",
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=3xeoPgAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=5&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=3xeoPgAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/Senhor_Dos_Aneis_Caixa_com_Hobbit.html?hl=&id=3xeoPgAACAAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=3xeoPgAACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "Esta edição especial dos livros de Tolkien vem em uma caixa com os quatro volumes da saga do Senhor dos Anéis - &quot;A sociedade do anel&quot;, &#39;As duas torres&quot; e &quot;O retorno do rei&quot; e &quot;O Hobbit&quot;.",
          },
        },
        {
          kind: "books#volume",
          id: "W65gOgAACAAJ",
          etag: "rP7asUujoVs",
          selfLink: "https://www.googleapis.com/books/v1/volumes/W65gOgAACAAJ",
          volumeInfo: {
            title: "Senhor Dos Aneis, O - as Duas Torres - Vol 2",
            authors: ["John Ronald Reuel Tolkien"],
            publisher: "Martins Martins Fontes",
            publishedDate: "2000",
            description:
              "'As Duas Torres' é a segunda parte da obra de ficção de J. R. R. Tolkien, 'O Senhor dos Anéis'. É impossível transmitir ao novo leitor todas as qualidades e o alcance do livro. Alternadamente cômica, singela, épica, monstruosa, diabólica, a narrativa desenvolve-se em meio a inúmeras mudanças de cenários e de personagens, num mundo imaginário absolutamente convincente em seus detalhes.",
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "8533613385",
              },
              {
                type: "ISBN_13",
                identifier: "9788533613386",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 373,
            printType: "BOOK",
            categories: ["Baggins, Frodo (Fictitious character)"],
            averageRating: 4.5,
            ratingsCount: 4,
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=W65gOgAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=6&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=W65gOgAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/Senhor_Dos_Aneis_O_as_Duas_Torres_Vol_2.html?hl=&id=W65gOgAACAAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=W65gOgAACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
        },
        {
          kind: "books#volume",
          id: "fWd6EAAAQBAJ",
          etag: "Ni2S8PSuBZI",
          selfLink: "https://www.googleapis.com/books/v1/volumes/fWd6EAAAQBAJ",
          volumeInfo: {
            title: "O Senhor dos Anéis",
            subtitle: "Volume Único - Capa Os Anéis de Poder",
            authors: ["J.R.R. Tolkien"],
            publisher: "HARLEQUIN",
            publishedDate: "2022-08-09",
            description:
              '"Um Anel que a todos rege, Um Anel para achá-los, Um Anel que a todos traz para a escuridão atá-los". O grande épico de J.R.R. Tolkien em volume único e capa especial da série do Prime Video. Nos tempos antigos da Terra-média, mais especificamente na Segunda Era, os ferreiros-élficos de Eregion, liderados por Celebrimbor, criaram os Anéis de Poder. Mas o que eles não sabiam, era que em Mordor, Sauron, o Senhor das Trevas, forjou o Um Anel, enchendo-o com seu próprio poder para que pudesse governar todos os outros. Depois da Batalha da Última Aliança, onde Elfos (liderados por Elrond e Gil-galad) e os poderosos Homens de Númenor (liderados por Elendil e Isildur) lutaram juntos contra Sauron, ele foi derrotado e o seu Anel foi tirado dele. Sauron vagou em forma de um espírito derrotado por séculos, até que depois de ter reunido um pouco de forças, buscou seu artefato em vão. Ele estava perdido e se tornara apenas uma lenda, conhecida por poucos, na Terra-média. Depois de muitas eras, o Um Anel caiu por acaso nas mãos do improvável hobbit Bilbo Bolseiro do Condado. Quando Bilbo atingiu seu onzentésimo primeiro aniversário, acabou legando a seu jovem sobrinho Frodo o Anel Governante. Porém, o mago Gandalf, depois de muito estudar, descobre a verdade sobre o artefato e indica a Frodo uma missão perigosa: viajar pela Terra-média, mergulhar nas sombras de Mordor e destruir o Anel, lançando-o na Fenda da Perdição. O Senhor dos Anéis é a grande obra-prima de J.R.R. Tolkien. Considerado o primeiro grande épico de fantasia moderno, conquistou milhões de leitores e tornou-se padrão de referência para todas as outras obras do gênero até hoje. Apesar de ter sido publicado em três volumes – A Sociedade do Anel, As Duas Torres e O Retorno do Rei –, O Senhor dos Anéis não é exatamente uma trilogia, mas um único grande romance que só pode ser compreendido em seu conjunto, segundo a concepção de seu autor. Em comemoração à estreia da aguardada série O Senhor dos Anéis: Os Anéis de Poder do serviço de streaming Prime Video, uma nova capa foi lançada para o volume único da maior obra de J.R.R. Tolkien. A capa é uma arte conceitual do aclamado artista tolkieniano John Howe que participou da equipe criativa da série, além de ser uma das grandes mentes artistas nas duas trilogias de filmes de Peter Jackson.',
            industryIdentifiers: [
              {
                type: "ISBN_13",
                identifier: "9786555114355",
              },
              {
                type: "ISBN_10",
                identifier: "6555114355",
              },
            ],
            readingModes: {
              text: true,
              image: false,
            },
            pageCount: 872,
            printType: "BOOK",
            categories: ["Fiction"],
            maturityRating: "NOT_MATURE",
            allowAnonLogging: true,
            contentVersion: "1.4.4.0.preview.2",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=fWd6EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=fWd6EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            },
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=fWd6EAAAQBAJ&printsec=frontcover&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=7&source=gbs_api",
            infoLink:
              "https://play.google.com/store/books/details?id=fWd6EAAAQBAJ&source=gbs_api",
            canonicalVolumeLink:
              "https://play.google.com/store/books/details?id=fWd6EAAAQBAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "FOR_SALE",
            isEbook: true,
            listPrice: {
              amount: 104.9,
              currencyCode: "BRL",
            },
            retailPrice: {
              amount: 99.66,
              currencyCode: "BRL",
            },
            buyLink:
              "https://play.google.com/store/books/details?id=fWd6EAAAQBAJ&rdid=book-fWd6EAAAQBAJ&rdot=1&source=gbs_api",
            offers: [
              {
                finskyOfferType: 1,
                listPrice: {
                  amountInMicros: 104900000,
                  currencyCode: "BRL",
                },
                retailPrice: {
                  amountInMicros: 99660000,
                  currencyCode: "BRL",
                },
                giftable: true,
              },
            ],
          },
          accessInfo: {
            country: "BR",
            viewability: "PARTIAL",
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: true,
              acsTokenLink:
                "http://books.google.com.br/books/download/O_Senhor_dos_An%C3%A9is-sample-epub.acsm?id=fWd6EAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=fWd6EAAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "SAMPLE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "O Senhor dos Anéis é a grande obra-prima de J.R.R. Tolkien. Considerado o primeiro grande épico de fantasia moderno, conquistou milhões de leitores e tornou-se padrão de referência para todas as outras obras do gênero até hoje.",
          },
        },
        {
          kind: "books#volume",
          id: "p39zEAAAQBAJ",
          etag: "nCjqBTaVnmo",
          selfLink: "https://www.googleapis.com/books/v1/volumes/p39zEAAAQBAJ",
          volumeInfo: {
            title: "O Retorno do Rei - Capa Os Anéis de Poder",
            subtitle: "O Senhor dos Anéis - Parte 3",
            authors: ["J.R.R. Tolkien"],
            publisher: "HARLEQUIN",
            publishedDate: "2022-07-15",
            description:
              'A guerra entre os Povos Livres da Terra-média e Sauron, o Senhor Sombrio da terra de Mordor, chega a seu clímax neste terceiro volume do romance O Senhor dos Anéis. As batalhas grandiosas que estão prestes a acontecer, no entanto, são apenas o pano de fundo para o verdadeiro drama: a missão quase suicida dos hobbits Frodo e Sam, que tentam destruir o Um Anel, fonte do poder de Sauron, infiltrando-se no coração do território do Inimigo. Em O Retorno do Rei, acompanhamos o mago Gandalf e o hobbit Pippin em sua visita à majestosa cidade de Minas Tirith, que já foi o principal baluarte dos Homens contra a ameaça de Sauron, mas que está prestes a sucumbir diante da força avassaladora do Senhor Sombrio. Outros membros da Sociedade do Anel se juntam a Aragorn, herdeiro da longa linhagem dos reis de Minas Tirith, na tentativa de evitar que a antiga capital do reino de Gondor seja destruída. Nas fronteiras de Mordor, Sam resgata Frodo, e os dois hobbits partem para o último estágio de sua jornada rumo ao Monte da Perdição, uma jornada que testará os limites do corpo e da mente dos pequenos heróis. O livro inclui ainda numerosos apêndices, nos quais Tolkien explora detalhes da história, das línguas, dos alfabetos e até dos calendários de seu mundo ficcional. Em comemoração à estreia da aguardada série O Senhor dos Anéis: Os Anéis de Poder do serviço de streaming Prime Video , novas capas foram lançadas para os três volumes da maior obra de J.R.R. Tolkien. Na capa de O Retorno do Rei , temos a figura de um poderoso ser das Trevas. Seria ele um dos Nove nazgûls? Talvez até mesmo o poderoso Rei-bruxo de Angmar? Ou quem sabe, ele, o Senhor Sombrio Sauron? Na série acompanharemos Elrond o Meio-Elfo (Robert Aramayo) e grandes nomes do legendário da Terra-média como o Alto Rei dos Noldor, Gil-galad (Benjamin Walker), Galadriel (Morfydd Clark), Celebrimbor (Charles Edwards), Durin VI (Owain Arthur) e Isildur (Maxim Baldry), desbravando diferentes locais como o reino de Lindon, a cidade de Eregion, as Mansões de Moria e a ilha de Númenor. Além disto as regiões de Eriador, Rhovanion e Mordor também serão apresentadas por grandes diretores como J.A. Bayona. Poderemos ainda ver os antepassados dos amados e pequeninos hobbits na figura dos Pés Peludos como no caso de Elanor "Nori" Brandyfoot (Markella Kavenagh).',
            industryIdentifiers: [
              {
                type: "ISBN_13",
                identifier: "9786555113914",
              },
              {
                type: "ISBN_10",
                identifier: "655511391X",
              },
            ],
            readingModes: {
              text: true,
              image: false,
            },
            pageCount: 548,
            printType: "BOOK",
            categories: ["Fiction"],
            maturityRating: "NOT_MATURE",
            allowAnonLogging: true,
            contentVersion: "1.3.3.0.preview.2",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=p39zEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=p39zEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            },
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=p39zEAAAQBAJ&printsec=frontcover&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=8&source=gbs_api",
            infoLink:
              "https://play.google.com/store/books/details?id=p39zEAAAQBAJ&source=gbs_api",
            canonicalVolumeLink:
              "https://play.google.com/store/books/details?id=p39zEAAAQBAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "FOR_SALE",
            isEbook: true,
            listPrice: {
              amount: 39.9,
              currencyCode: "BRL",
            },
            retailPrice: {
              amount: 37.9,
              currencyCode: "BRL",
            },
            buyLink:
              "https://play.google.com/store/books/details?id=p39zEAAAQBAJ&rdid=book-p39zEAAAQBAJ&rdot=1&source=gbs_api",
            offers: [
              {
                finskyOfferType: 1,
                listPrice: {
                  amountInMicros: 39900000,
                  currencyCode: "BRL",
                },
                retailPrice: {
                  amountInMicros: 37900000,
                  currencyCode: "BRL",
                },
                giftable: true,
              },
            ],
          },
          accessInfo: {
            country: "BR",
            viewability: "PARTIAL",
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: true,
              acsTokenLink:
                "http://books.google.com.br/books/download/O_Retorno_do_Rei_Capa_Os_An%C3%A9is_de_Poder-sample-epub.acsm?id=p39zEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=p39zEAAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "SAMPLE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "Em comemoração à estreia da aguardada série O Senhor dos Anéis: Os Anéis de Poder do serviço de streaming Prime Video , novas capas foram lançadas para os três volumes da maior obra de J.R.R. Tolkien.",
          },
        },
        {
          kind: "books#volume",
          id: "kcdyPgAACAAJ",
          etag: "Rxi+i32wYQE",
          selfLink: "https://www.googleapis.com/books/v1/volumes/kcdyPgAACAAJ",
          volumeInfo: {
            title: "Senhor Dos Aneis, O - Trilogia",
            authors: ["J. R. R. Tolkien"],
            publisher: "Martins Martins Fontes",
            description:
              "Este livro reúne em um único volume as três partes da trilogia 'O Senhor dos Anéis' - 'A Sociedade do Anel', 'As duas torres' e 'O retorno do rei'.",
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "8533619626",
              },
              {
                type: "ISBN_13",
                identifier: "9788533619623",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 1228,
            printType: "BOOK",
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=kcdyPgAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=9&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=kcdyPgAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/Senhor_Dos_Aneis_O_Trilogia.html?hl=&id=kcdyPgAACAAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=kcdyPgAACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "Este livro reúne em um único volume as três partes da trilogia &#39;O Senhor dos Anéis&#39; - &#39;A Sociedade do Anel&#39;, &#39;As duas torres&#39; e &#39;O retorno do rei&#39;.",
          },
        },
        {
          kind: "books#volume",
          id: "4Gp5PgAACAAJ",
          etag: "pmcmb9TeZ3k",
          selfLink: "https://www.googleapis.com/books/v1/volumes/4Gp5PgAACAAJ",
          volumeInfo: {
            title: "Senhor dos anéis",
            authors: ["Gonçalo Ferreira da Silva", "J. Victtor"],
            publishedDate: "2004",
            industryIdentifiers: [
              {
                type: "OTHER",
                identifier: "OCLC:246627630",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 8,
            printType: "BOOK",
            categories: ["Brazilian poetry"],
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=4Gp5PgAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=10&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=4Gp5PgAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/Senhor_dos_an%C3%A9is.html?hl=&id=4Gp5PgAACAAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=4Gp5PgAACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
        },
        {
          kind: "books#volume",
          id: "Ei_EEAAAQBAJ",
          etag: "IESbYNJGONY",
          selfLink: "https://www.googleapis.com/books/v1/volumes/Ei_EEAAAQBAJ",
          volumeInfo: {
            title: "O Senhor dos Anéis de J. R. R. Tolkien (Análise do livro)",
            subtitle: "Análise completa e resumo pormenorizado do trabalho",
            authors: ["Jade Gathoye"],
            publisher: "Primento Digital sprl",
            publishedDate: "2023-06-09",
            description:
              "O que devemos aprender com O Senhor dos Anéis, este monumento da literatura de fantasia? Este livro é o primeiro do seu género no mundo a ser publicado nos Estados Unidos da América. Encontrará em particular nesta folha : - Um resumo completo - Uma apresentação das personagens principais, tais como Frodo e Gandalf - Uma análise das especificidades da obra: a génese de O Senhor dos Anéis, a interpretação, o lugar do Senhor dos Anéis na obra de Tolkien e a recepção da obra Uma análise de referência para compreender rapidamente o significado da obra.",
            industryIdentifiers: [
              {
                type: "ISBN_13",
                identifier: "9782808692601",
              },
              {
                type: "ISBN_10",
                identifier: "2808692609",
              },
            ],
            readingModes: {
              text: true,
              image: true,
            },
            pageCount: 33,
            printType: "BOOK",
            categories: ["Fiction"],
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "0.1.1.0.preview.3",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=Ei_EEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=Ei_EEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            },
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=Ei_EEAAAQBAJ&printsec=frontcover&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=11&source=gbs_api",
            infoLink:
              "https://play.google.com/store/books/details?id=Ei_EEAAAQBAJ&source=gbs_api",
            canonicalVolumeLink:
              "https://play.google.com/store/books/details?id=Ei_EEAAAQBAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "FOR_SALE",
            isEbook: true,
            listPrice: {
              amount: 37.51,
              currencyCode: "BRL",
            },
            retailPrice: {
              amount: 37.51,
              currencyCode: "BRL",
            },
            buyLink:
              "https://play.google.com/store/books/details?id=Ei_EEAAAQBAJ&rdid=book-Ei_EEAAAQBAJ&rdot=1&source=gbs_api",
            offers: [
              {
                finskyOfferType: 1,
                listPrice: {
                  amountInMicros: 37510000,
                  currencyCode: "BRL",
                },
                retailPrice: {
                  amountInMicros: 37510000,
                  currencyCode: "BRL",
                },
                giftable: true,
              },
            ],
          },
          accessInfo: {
            country: "BR",
            viewability: "PARTIAL",
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: true,
            },
            pdf: {
              isAvailable: true,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=Ei_EEAAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "SAMPLE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "O que devemos aprender com O Senhor dos Anéis, este monumento da literatura de fantasia?",
          },
        },
        {
          kind: "books#volume",
          id: "o39zEAAAQBAJ",
          etag: "js8io9M8wZs",
          selfLink: "https://www.googleapis.com/books/v1/volumes/o39zEAAAQBAJ",
          volumeInfo: {
            title: "A Sociedade do Anel - Capa Os Anéis de Poder",
            subtitle: "O Senhor dos Anéis - Parte 1",
            authors: ["J.R.R. Tolkien"],
            publisher: "HARLEQUIN",
            publishedDate: "2022-07-15",
            description:
              'O volume inicial de O Senhor dos Anéis, lançado originalmente em julho de 1954, foi o primeiro grande épico de fantasia moderno, conquistando milhões de leitores e se tornando o padrão de referência para todas as outras obras do gênero até hoje. A imaginação prodigiosa de J.R.R. Tolkien e seu conhecimento profundo das antigas mitologias da Europa permitiram que ele criasse um universo tão complexo e convincente quanto o mundo real. A Sociedade do Anel começa no Condado, a região rural do oeste da Terra-média onde vivem os diminutos e pacatos hobbits. Bilbo Bolseiro, um dos raros aventureiros desse povo, cujas peripécias foram contadas em O Hobbit, resolve ir embora do Condado e deixa sua considerável herança nas mãos de seu jovem parente Frodo. O mais importante legado de Bilbo é o anel mágico que costumava usar para se tornar invisível. No entanto, o mago Gandalf, companheiro de aventuras do velho hobbit, revela a Frodo que o objeto é o Um Anel, a raiz do poder demoníaco de Sauron, o Senhor Sombrio, que deseja escravizar todos os povos da Terra-média. A única maneira de eliminar a ameaça de Sauron é destruir o Um Anel nas entranhas da própria montanha de fogo onde foi forjado. A revelação faz com que Frodo e seus companheiros hobbits Sam, Merry e Pippin deixem a segurança do Condado e iniciem uma perigosa jornada rumo ao leste. Ao lado de representantes dos outros Povos Livres que resistem ao Senhor Sombrio, eles formam a Sociedade do Anel. Alguém uma vez disse que o mundo dos leitores de língua inglesa se divide entre os que já leram O Senhor dos Anéis e os que um dia lerão o livro. Com esta nova tradução da obra, o fascínio dessa aventura atemporal ficará ainda mais evidente para os leitores brasileiros, tanto os que já conhecem a saga como os que estão prestes a descobrir seu encanto. Em comemoração à estreia da aguardada série O Senhor dos Anéis: Os Anéis de Poder do serviço de streaming Prime Video , novas capas foram lançadas para os três volumes da maior obra de J.R.R. Tolkien. Na capa de A Sociedade do Anel , temos a figura da Elfa Galadriel (Morfydd Clark) segurando uma adaga com o desenho das Duas Árvores de Valinor em Aman. Na série acompanharemos Galadriel e grandes nomes do legendário da Terra-média como o Alto Rei dos Noldor, Gil-galad (Benjamin Walker), Elrond o Meio-elfo (Robert Aramayo), Celebrimbor (Charles Edwards), Durin VI (Owain Arthur) e Isildur (Maxim Baldry), desbravando diferentes locais como o reino de Lindon, a cidade de Eregion, as Mansões de Moria e a ilha de Númenor. Além disto as regiões de Eriador, Rhovanion e Mordor também serão apresentadas por grandes diretores, como J.A. Bayona. Ainda veremos os antepassados dos amados e pequeninos hobbits na figura dos Pés Peludos, como no caso de Elanor "Nori" Brandyfoot (Markella Kavenagh).',
            industryIdentifiers: [
              {
                type: "ISBN_13",
                identifier: "9786555113884",
              },
              {
                type: "ISBN_10",
                identifier: "655511388X",
              },
            ],
            readingModes: {
              text: true,
              image: false,
            },
            pageCount: 586,
            printType: "BOOK",
            categories: ["Fiction"],
            maturityRating: "NOT_MATURE",
            allowAnonLogging: true,
            contentVersion: "1.3.3.0.preview.2",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=o39zEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=o39zEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            },
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=o39zEAAAQBAJ&printsec=frontcover&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=12&source=gbs_api",
            infoLink:
              "https://play.google.com/store/books/details?id=o39zEAAAQBAJ&source=gbs_api",
            canonicalVolumeLink:
              "https://play.google.com/store/books/details?id=o39zEAAAQBAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "FOR_SALE",
            isEbook: true,
            listPrice: {
              amount: 39.9,
              currencyCode: "BRL",
            },
            retailPrice: {
              amount: 37.9,
              currencyCode: "BRL",
            },
            buyLink:
              "https://play.google.com/store/books/details?id=o39zEAAAQBAJ&rdid=book-o39zEAAAQBAJ&rdot=1&source=gbs_api",
            offers: [
              {
                finskyOfferType: 1,
                listPrice: {
                  amountInMicros: 39900000,
                  currencyCode: "BRL",
                },
                retailPrice: {
                  amountInMicros: 37900000,
                  currencyCode: "BRL",
                },
                giftable: true,
              },
            ],
          },
          accessInfo: {
            country: "BR",
            viewability: "PARTIAL",
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: true,
              acsTokenLink:
                "http://books.google.com.br/books/download/A_Sociedade_do_Anel_Capa_Os_An%C3%A9is_de_Po-sample-epub.acsm?id=o39zEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=o39zEAAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "SAMPLE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "A imaginação prodigiosa de J.R.R. Tolkien e seu conhecimento profundo das antigas mitologias da Europa permitiram que ele criasse um universo tão complexo e convincente quanto o mundo real.",
          },
        },
        {
          kind: "books#volume",
          id: "HP4FEAAAQBAJ",
          etag: "W8SX/EJLfDE",
          selfLink: "https://www.googleapis.com/books/v1/volumes/HP4FEAAAQBAJ",
          volumeInfo: {
            title: "A Irmandade do Anel - O Senhor dos Anéis - Parte I",
            authors: ["J. R. R. Tolkien"],
            publisher: "Planeta",
            publishedDate: "2020-10-27",
            description:
              "A primeira parte da aventura épica de O SENHOR DOS ANÉIS. Numa aldeia adormecida do Shire, um jovem hobbit é incumbido de uma gigantesca tarefa. Terá de fazer uma viagem recheada de perigos ao longo da Terra Média, até às Fendas da Condenação, para aí destruir o Anel de Poder Soberano, o único gesto capaz de impedir que o domínio maligno do Senhor das Trevas prevaleça. Assim começa a narrativa clássica de J.R.R Tolkien, que continua em As Duas Torres e em O Regresso do Rei. «O mundo anglófono divide-se em duas categorias: aqueles que já leram O Hobbit e O Senhor dos Anéis e aqueles que vão lê-los.» Sunday Times «Obra-prima? Oh, sim, não tenho a mais pequena dúvida.» Evening Standard",
            industryIdentifiers: [
              {
                type: "ISBN_13",
                identifier: "9789897774355",
              },
              {
                type: "ISBN_10",
                identifier: "9897774351",
              },
            ],
            readingModes: {
              text: true,
              image: false,
            },
            pageCount: 560,
            printType: "BOOK",
            categories: ["Fiction"],
            maturityRating: "NOT_MATURE",
            allowAnonLogging: true,
            contentVersion: "0.3.3.0.preview.2",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=HP4FEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=HP4FEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
            },
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=HP4FEAAAQBAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=13&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=HP4FEAAAQBAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/A_Irmandade_do_Anel_O_Senhor_dos_An%C3%A9is.html?hl=&id=HP4FEAAAQBAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: true,
            },
            pdf: {
              isAvailable: true,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=HP4FEAAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "Assim começa a narrativa clássica de J.R.R Tolkien, que continua em As Duas Torres e em O Regresso do Rei. «O mundo anglófono divide-se em duas categorias: aqueles que já leram O Hobbit e O Senhor dos Anéis e aqueles que vão lê-los ...",
          },
        },
        {
          kind: "books#volume",
          id: "KtVzkgEACAAJ",
          etag: "B6SYxbQX5pk",
          selfLink: "https://www.googleapis.com/books/v1/volumes/KtVzkgEACAAJ",
          volumeInfo: {
            title: "O senhor dos aneis ; A volta do anel",
            authors: ["John Ronald Reuel Tolkien"],
            publishedDate: "1976",
            industryIdentifiers: [
              {
                type: "OTHER",
                identifier: "OCLC:817752844",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 167,
            printType: "BOOK",
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=KtVzkgEACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=14&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=KtVzkgEACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/O_senhor_dos_aneis_A_volta_do_anel.html?hl=&id=KtVzkgEACAAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=KtVzkgEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
        },
        {
          kind: "books#volume",
          id: "fDSBkQEACAAJ",
          etag: "FhOZWUgp/yM",
          selfLink: "https://www.googleapis.com/books/v1/volumes/fDSBkQEACAAJ",
          volumeInfo: {
            title: "O mundo do Senhor dos Anéis",
            subtitle: "vida e obra de J.R.R. Tolkien",
            authors: ["Ives Gandra da Silva Martins Filho"],
            publishedDate: "2002",
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "8573745525",
              },
              {
                type: "ISBN_13",
                identifier: "9788573745528",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 177,
            printType: "BOOK",
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=fDSBkQEACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=15&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=fDSBkQEACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/O_mundo_do_Senhor_dos_An%C3%A9is.html?hl=&id=fDSBkQEACAAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=fDSBkQEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
        },
        {
          kind: "books#volume",
          id: "rIPGNAEACAAJ",
          etag: "lA4GFEKy/eA",
          selfLink: "https://www.googleapis.com/books/v1/volumes/rIPGNAEACAAJ",
          volumeInfo: {
            title: "A cozinha do Senhor dos anéis",
            authors: ["Ana da Costa Cabral"],
            description:
              "Tolkien criou a trilogia de 'O Senhor dos Anéis', um universo de raiz, a Terra Média e povoou-o com várias raças. E o que é que comiam essas raças? Este livro pretende disponibilizar informações da cozinha dos Hobbits, dos Elfos, dos Ents, dos Anões e dos Orcs e dos Homens. Receitas antigas, com um sabor místico e mágico para qualquer refeição.",
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "9721053031",
              },
              {
                type: "ISBN_13",
                identifier: "9789721053038",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 104,
            printType: "BOOK",
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=rIPGNAEACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=16&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=rIPGNAEACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/A_cozinha_do_Senhor_dos_an%C3%A9is.html?hl=&id=rIPGNAEACAAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=rIPGNAEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "E o que é que comiam essas raças? Este livro pretende disponibilizar informações da cozinha dos Hobbits, dos Elfos, dos Ents, dos Anões e dos Orcs e dos Homens.",
          },
        },
        {
          kind: "books#volume",
          id: "RTk8zwEACAAJ",
          etag: "3av3DOFVDXY",
          selfLink: "https://www.googleapis.com/books/v1/volumes/RTk8zwEACAAJ",
          volumeInfo: {
            title: "As duas torres",
            authors: ["John Ronald Reuel Tolkien"],
            publishedDate: "2021",
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "8595084769",
              },
              {
                type: "ISBN_13",
                identifier: "9788595084766",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 454,
            printType: "BOOK",
            categories: ["Middle Earth (Imaginary place)"],
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=RTk8zwEACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=17&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=RTk8zwEACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/As_duas_torres.html?hl=&id=RTk8zwEACAAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=RTk8zwEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "As Duas Torres O segundo volume de O Senhor dos Anéis, mais importante épico de fantasia moderno, narra os caminhos separados seguidos pelos membros da Sociedade do Anel em sua luta para deter Sauron, o Senhor Sombrio da terra de Mordor, ...",
          },
        },
        {
          kind: "books#volume",
          id: "bChBzwEACAAJ",
          etag: "XZDpbg+NS0A",
          selfLink: "https://www.googleapis.com/books/v1/volumes/bChBzwEACAAJ",
          volumeInfo: {
            title: "O retorno do rei",
            authors: ["John Ronald Reuel Tolkien"],
            publishedDate: "2021",
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "8595084777",
              },
              {
                type: "ISBN_13",
                identifier: "9788595084773",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 598,
            printType: "BOOK",
            categories: ["Middle Earth (Imaginary place)"],
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=bChBzwEACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=18&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=bChBzwEACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/O_retorno_do_rei.html?hl=&id=bChBzwEACAAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=bChBzwEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "O Retorno do Rei A guerra entre os Povos Livres da Terra-média e Sauron, o Senhor Sombrio da terra de Mordor, chega a seu clímax neste terceiro volume do romance O Senhor dos Anéis.",
          },
        },
        {
          kind: "books#volume",
          id: "FubLzgEACAAJ",
          etag: "6Jyu63rak0A",
          selfLink: "https://www.googleapis.com/books/v1/volumes/FubLzgEACAAJ",
          volumeInfo: {
            title: "A sociedade do anel",
            authors: ["John Ronald Reuel Tolkien"],
            publishedDate: "2019",
            description:
              '"O volume inicial de O Senhor dos Anéis, lançado originalmente em julho de 1954, foi o primeiro grande épico de fantasia moderno, conquistando milhões de leitores e se tornando o padrão de referência para todas as outras obras do gênero até hoje. A imaginação prodigiosa de J.R.R. Tolkien e seu conhecimento profundo das antigas mitologias da Europa permitiram que ele criasse um universo tão complexo e convincente quanto o mundo real. A Sociedade do Anel começa no Condado, a região rural do oeste da Terra-média onde vivem os diminutos e pacatos hobbits. Bilbo Bolseiro, um dos raros aventureiros desse povo, cujas peripécias foram contadas em O Hobbit, resolve ir embora do Condado e deixa sua considerável herança nas mãos de seu jovem parente Frodo. O mais importante legado de Bilbo é o anel mágico que costumava usar para se tornar invisível. No entanto, o mago Gandalf, companheiro de aventuras do velho hobbit, revela a Frodo que o objeto é o Um Anel, a raiz do poder demoníaco de Sauron, o Senhor Sombrio, que deseja escravizar todos os povos da Terra-média. A única maneira de eliminar a ameaça de Sauron é destruir o Um Anel nas entranhas da própria montanha de fogo onde foi forjado. A revelação faz com que Frodo e seus companheiros hobbits Sam, Merry e Pippin deixem a segurança do Condado e iniciem uma perigosa jornada rumo ao leste. Ao lado de representantes dos outros Povos Livres que resistem ao Senhor Sombrio, eles formam a Sociedade do Anel."--',
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "8595084750",
              },
              {
                type: "ISBN_13",
                identifier: "9788595084759",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 604,
            printType: "BOOK",
            categories: ["Middle Earth (Imaginary place)"],
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=FubLzgEACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=19&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=FubLzgEACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/A_sociedade_do_anel.html?hl=&id=FubLzgEACAAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=FubLzgEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "A Sociedade do Anel O volume inicial de O Senhor dos Anéis, lançado originalmente em julho de 1954, foi o primeiro grande épico de fantasia moderno, conquistando milhões de leitores e se tornando o padrão de referência para todas as ...",
          },
        },
        {
          kind: "books#volume",
          id: "pX9zEAAAQBAJ",
          etag: "JXbkXEC04ms",
          selfLink: "https://www.googleapis.com/books/v1/volumes/pX9zEAAAQBAJ",
          volumeInfo: {
            title: "As Duas Torres - Capa Os Anéis de Poder",
            subtitle: "O Senhor dos Anéis - Parte 2",
            authors: ["J.R.R. Tolkien"],
            publisher: "HARLEQUIN",
            publishedDate: "2022-07-15",
            description:
              'O segundo volume de O Senhor dos Anéis, mais importante épico de fantasia moderno, narra os caminhos separados seguidos pelos membros da Sociedade do Anel em sua luta para deter Sauron, o Senhor Sombrio da terra de Mordor, e destruir o Um Anel, no qual está contida a maior parte do poder do tirano demoníaco imaginado por J.R.R. Tolkien. Um ataque-surpresa pôs fim à jornada conjunta da Sociedade do Anel. De um lado, o trio formado pelo elfo Legolas, pelo anão Gimli e por Aragorn, herdeiro da realeza dos Homens, tenta resgatar os jovens hobbits Merry e Pippin, capturados por guerreiros-órquicos. A busca pelos companheiros perdidos levará os três a confrontar os cavaleiros do reino de Rohan e o mago renegado Saruman, que também deseja o Um Anel para si. Enquanto isso, do outro lado das montanhas, Frodo e Sam buscam uma maneira de entrar em Mordor e chegar até a montanha onde o Anel foi forjado, único lugar onde é possível destruí-lo. Para isso, acabam recebendo a ajuda de seu mais improvável aliado: Gollum, a criatura que chegou a ter o Anel sob seu poder durante centenas de anos e que ainda é devorada, em corpo e alma, pelo desejo de voltar a possuí-lo. Com cenas que mesclam o heroico e o intimista, o sublime e o cômico, As Duas Torres abriga algumas das criações mais inesquecíveis da imaginação de J.R.R. Tolkien, como os gigantescos Ents e a cultura nobre e belicosa do povo de Rohan. Em comemoração à estreia da aguardada série O Senhor dos Anéis: Os Anéis de Poder do serviço de streaming Prime Video , novas capas foram lançadas para os três volumes da maior obra de J.R.R. Tolkien. Na capa de As Duas Torres , temos a figura do Meio-Elfo Elrond (Robert Aramayo) segurando um cetro que remonta aos escritos de O Silmarillion da Primeira Era. Na série acompanharemos Elrond e grandes nomes do legendário da Terra-média como o Alto Rei dos Noldor, Gil-galad (Benjamin Walker), Galadriel (Morfydd Clark), Celebrimbor (Charles Edwards), Durin VI (Owain Arthur) e Isildur (Maxim Baldry), desbravando diferentes locais como o reino de Lindon, a cidade de Eregion, as Mansões de Moria e a ilha de Númenor. Além disto as regiões de Eriador, Rhovanion e Mordor também serão apresentadas por grandes diretores como J.A. Bayona. Poderemos ainda ver os antepassados dos amados e pequeninos hobbits na figura dos Pés Peludos como no caso de Elanor "Nori" Brandyfoot (Markella Kavenagh).',
            industryIdentifiers: [
              {
                type: "ISBN_13",
                identifier: "9786555113891",
              },
              {
                type: "ISBN_10",
                identifier: "6555113898",
              },
            ],
            readingModes: {
              text: true,
              image: false,
            },
            pageCount: 453,
            printType: "BOOK",
            categories: ["Fiction"],
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "1.2.2.0.preview.2",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=pX9zEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=pX9zEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            },
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=pX9zEAAAQBAJ&printsec=frontcover&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=20&source=gbs_api",
            infoLink:
              "https://play.google.com/store/books/details?id=pX9zEAAAQBAJ&source=gbs_api",
            canonicalVolumeLink:
              "https://play.google.com/store/books/details?id=pX9zEAAAQBAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "FOR_SALE",
            isEbook: true,
            listPrice: {
              amount: 39.9,
              currencyCode: "BRL",
            },
            retailPrice: {
              amount: 37.9,
              currencyCode: "BRL",
            },
            buyLink:
              "https://play.google.com/store/books/details?id=pX9zEAAAQBAJ&rdid=book-pX9zEAAAQBAJ&rdot=1&source=gbs_api",
            offers: [
              {
                finskyOfferType: 1,
                listPrice: {
                  amountInMicros: 39900000,
                  currencyCode: "BRL",
                },
                retailPrice: {
                  amountInMicros: 37900000,
                  currencyCode: "BRL",
                },
                giftable: true,
              },
            ],
          },
          accessInfo: {
            country: "BR",
            viewability: "PARTIAL",
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: true,
              acsTokenLink:
                "http://books.google.com.br/books/download/As_Duas_Torres_Capa_Os_An%C3%A9is_de_Poder-sample-epub.acsm?id=pX9zEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=pX9zEAAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "SAMPLE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "O segundo volume de O Senhor dos Anéis, mais importante épico de fantasia moderno, narra os caminhos separados seguidos pelos membros da Sociedade do Anel em sua luta para deter Sauron, o Senhor Sombrio da terra de Mordor, e destruir o Um ...",
          },
        },
        {
          kind: "books#volume",
          id: "18PZSAAACAAJ",
          etag: "jbpDMSSKYoM",
          selfLink: "https://www.googleapis.com/books/v1/volumes/18PZSAAACAAJ",
          volumeInfo: {
            title: "Tolkien e o senhor dos anéis",
            authors: ["Colin Duriez", "Susana Serrão"],
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "9721051837",
              },
              {
                type: "ISBN_13",
                identifier: "9789721051836",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            printType: "BOOK",
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=18PZSAAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=21&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=18PZSAAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/Tolkien_e_o_senhor_dos_an%C3%A9is.html?hl=&id=18PZSAAACAAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=18PZSAAACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
        },
      ],
    },
    {
      kind: "books#volumes",
      totalItems: 344,
      items: [
        {
          kind: "books#volume",
          id: "GO7USAAACAAJ",
          etag: "wOPoIySD15Y",
          selfLink: "https://www.googleapis.com/books/v1/volumes/GO7USAAACAAJ",
          volumeInfo: {
            title: "O senhor dos anéis, o Hobbit [de] Tolkien",
            authors: [
              "James L. Roberts",
              "Maria da Graça Pinhão",
              "J. R. R. Tolkien",
            ],
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "9721037737",
              },
              {
                type: "ISBN_13",
                identifier: "9789721037731",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 100,
            printType: "BOOK",
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=GO7USAAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=21&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=GO7USAAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/O_senhor_dos_an%C3%A9is_o_Hobbit_de_Tolkien.html?hl=&id=GO7USAAACAAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=GO7USAAACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
        },
        {
          kind: "books#volume",
          id: "18PZSAAACAAJ",
          etag: "I/RG3glbQr8",
          selfLink: "https://www.googleapis.com/books/v1/volumes/18PZSAAACAAJ",
          volumeInfo: {
            title: "Tolkien e o senhor dos anéis",
            authors: ["Colin Duriez", "Susana Serrão"],
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "9721051837",
              },
              {
                type: "ISBN_13",
                identifier: "9789721051836",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            printType: "BOOK",
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=18PZSAAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=22&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=18PZSAAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/Tolkien_e_o_senhor_dos_an%C3%A9is.html?hl=&id=18PZSAAACAAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=18PZSAAACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
        },
        {
          kind: "books#volume",
          id: "B3uFDwAAQBAJ",
          etag: "afXk3JQMDl0",
          selfLink: "https://www.googleapis.com/books/v1/volumes/B3uFDwAAQBAJ",
          volumeInfo: {
            title: "O Silmarillion",
            authors: ["J.R.R. Tolkien"],
            publisher: "HarperCollins Brasil",
            publishedDate: "2019-03-18",
            description:
              '"O Silmarillion" é um relato dos Dias Antigos da Primeira Era do mundo criado por J.R.R. Tolkien. É a história longínqua para a qual os personagens de "O Senhor dos Anéis" e "O Hobbit" olham para trás, e em cujos eventos alguns deles, como Elrond e Galadriel, tomaram parte. Os contos de "O Silmarillion" se passam em uma época em que Morgoth, o Primeiro Senhor Sombrio, habitava a Terra-média, e os Altos-Elfos guerreavam contra ele pela recuperação das Silmarils, as joias que continham a pura luz de Valinor. O livro começa com "O Ainulindalë", o mito da criação do Universo, seguido pelo "Valaquenta", onde estão descritas a natureza e os poderes de cada um dos deuses. O "Akallâbeth" narra o apogeu e a queda do reino da grande ilha de Númenor no final da Segunda Era e "Dos Anéis de Poder" fala dos grandes eventos no final da Terceira Era, como narrado em "O Senhor dos Anéis".',
            industryIdentifiers: [
              {
                type: "ISBN_13",
                identifier: "9788595085152",
              },
              {
                type: "ISBN_10",
                identifier: "8595085153",
              },
            ],
            readingModes: {
              text: true,
              image: false,
            },
            pageCount: 465,
            printType: "BOOK",
            categories: ["Fiction"],
            averageRating: 5,
            ratingsCount: 1,
            maturityRating: "NOT_MATURE",
            allowAnonLogging: true,
            contentVersion: "1.9.8.0.preview.2",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=B3uFDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=B3uFDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            },
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=B3uFDwAAQBAJ&printsec=frontcover&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=23&source=gbs_api",
            infoLink:
              "https://play.google.com/store/books/details?id=B3uFDwAAQBAJ&source=gbs_api",
            canonicalVolumeLink:
              "https://play.google.com/store/books/details?id=B3uFDwAAQBAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "FOR_SALE",
            isEbook: true,
            listPrice: {
              amount: 49.9,
              currencyCode: "BRL",
            },
            retailPrice: {
              amount: 47.4,
              currencyCode: "BRL",
            },
            buyLink:
              "https://play.google.com/store/books/details?id=B3uFDwAAQBAJ&rdid=book-B3uFDwAAQBAJ&rdot=1&source=gbs_api",
            offers: [
              {
                finskyOfferType: 1,
                listPrice: {
                  amountInMicros: 49900000,
                  currencyCode: "BRL",
                },
                retailPrice: {
                  amountInMicros: 47400000,
                  currencyCode: "BRL",
                },
                giftable: true,
              },
            ],
          },
          accessInfo: {
            country: "BR",
            viewability: "PARTIAL",
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: true,
              acsTokenLink:
                "http://books.google.com.br/books/download/O_Silmarillion-sample-epub.acsm?id=B3uFDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=B3uFDwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "SAMPLE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "&quot;O Silmarillion&quot; é um relato dos Dias Antigos da Primeira Era do mundo criado por J.R.R. Tolkien. É a história longínqua para a qual os personagens de &quot;O Senhor dos Anéis&quot; e &quot;O Hobbit&quot; olham para trás, e em cujos eventos alguns deles, ...",
          },
        },
        {
          kind: "books#volume",
          id: "wV3CZb-1HfoC",
          etag: "1HXhMNSLe6I",
          selfLink: "https://www.googleapis.com/books/v1/volumes/wV3CZb-1HfoC",
          volumeInfo: {
            title: "O Senhor Dos Anéis & Tolkein - O Poder Mágico Da Palavra",
            authors: ["Rosa Sílvia López"],
            publisher: "Arte & Ciência",
            publishedDate: "2004",
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "8575321218",
              },
              {
                type: "ISBN_13",
                identifier: "9788575321218",
              },
            ],
            readingModes: {
              text: false,
              image: true,
            },
            pageCount: 232,
            printType: "BOOK",
            categories: ["Myth in literature"],
            averageRating: 3.5,
            ratingsCount: 4,
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "0.5.5.0.preview.1",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=wV3CZb-1HfoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=wV3CZb-1HfoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            },
            language: "en",
            previewLink:
              "http://books.google.com.br/books?id=wV3CZb-1HfoC&printsec=frontcover&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=24&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=wV3CZb-1HfoC&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/O_Senhor_Dos_An%C3%A9is_Tolkein_O_Poder_M%C3%A1g.html?hl=&id=wV3CZb-1HfoC",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "PARTIAL",
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: true,
              acsTokenLink:
                "http://books.google.com.br/books/download/O_Senhor_Dos_An%C3%A9is_Tolkein_O_Poder_M%C3%A1g-sample-pdf.acsm?id=wV3CZb-1HfoC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=wV3CZb-1HfoC&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "SAMPLE",
            quoteSharingAllowed: false,
          },
        },
        {
          kind: "books#volume",
          id: "z59kPwAACAAJ",
          etag: "KbRJd4+3w5c",
          selfLink: "https://www.googleapis.com/books/v1/volumes/z59kPwAACAAJ",
          volumeInfo: {
            title: "Senhor Dos Aneis, O - a Sociedade Do Anel - Vol 1",
            authors: ["J. R. R. Tolkien"],
            publisher: "Martins Martins Fontes",
            publishedDate: "2000",
            description:
              "Numa cidadezinha indolente do Condado, um jovem hobbit é encarregado de uma imensa tarefa - deve empreender uma perigosa viagem através da Terra-média até as Fendas da Perdição, e lá destruir o Anel do Poder - a única coisa que impede o domínio maléfico do Senhor do Escuro.",
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "8533613377",
              },
              {
                type: "ISBN_13",
                identifier: "9788533613379",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 434,
            printType: "BOOK",
            categories: ["Baggins, Frodo (Fictitious character)"],
            averageRating: 4.5,
            ratingsCount: 14,
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=z59kPwAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=25&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=z59kPwAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/Senhor_Dos_Aneis_O_a_Sociedade_Do_Anel_V.html?hl=&id=z59kPwAACAAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=z59kPwAACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
        },
        {
          kind: "books#volume",
          id: "1sVPPwAACAAJ",
          etag: "Zf1fFwmTFjo",
          selfLink: "https://www.googleapis.com/books/v1/volumes/1sVPPwAACAAJ",
          volumeInfo: {
            title: "Senhor Dos Aneis - 1 2 3 - Caixa",
            authors: ["J. R. R. TOLKIEN"],
            publisher: "Martins Martins Fontes",
            description:
              "Esta edição reúne em uma caixa especial os três volumes da trilogia 'O Senhor dos Anéis', que já vendeu milhões de cópias em todo o mundo e continua encantando pessoas de todas as idades. 'A Sociedade do Anel', 'As Duas Torres', 'O Retorno do Rei', respectivamente primeiro, segundo e terceiro volumes para os aficionados por Tolkien, ou simplesmente para os que mergulham pela primeira vez num emaranhado de acontecimentos improváveis, mas absolutamente convincentes em seus detalhes.",
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "8533615671",
              },
              {
                type: "ISBN_13",
                identifier: "9788533615670",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            printType: "BOOK",
            averageRating: 5,
            ratingsCount: 1,
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=1sVPPwAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=26&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=1sVPPwAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/Senhor_Dos_Aneis_1_2_3_Caixa.html?hl=&id=1sVPPwAACAAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=1sVPPwAACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "&#39;A Sociedade do Anel&#39;, &#39;As Duas Torres&#39;, &#39;O Retorno do Rei&#39;, respectivamente primeiro, segundo e terceiro volumes para os aficionados por Tolkien, ou simplesmente para os que mergulham pela primeira vez num emaranhado de acontecimentos ...",
          },
        },
        {
          kind: "books#volume",
          id: "EL1xOwAACAAJ",
          etag: "RrPzmufbuDI",
          selfLink: "https://www.googleapis.com/books/v1/volumes/EL1xOwAACAAJ",
          volumeInfo: {
            title: "Senhor Dos Aneis - 02 - Capa Nova",
            authors: ["John Ronald Reuel Tolkien"],
            publisher: "Martins Martins Fontes",
            publishedDate: "2002",
            description:
              "Esta segunda parte de 'O Senhor dos Anéis' conta o que sucedeu a cada um dos membros da Sociedade do Anel, depois do rompimento de sua sociedade, até a chegada da grande Escuridão e o início da Guerra do Anel.",
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "8533615566",
              },
              {
                type: "ISBN_13",
                identifier: "9788533615564",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 486,
            printType: "BOOK",
            categories: ["Baggins, Frodo (Fictitious character)"],
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=EL1xOwAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=27&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=EL1xOwAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/Senhor_Dos_Aneis_02_Capa_Nova.html?hl=&id=EL1xOwAACAAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=EL1xOwAACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
        },
        {
          kind: "books#volume",
          id: "8QxYPgAACAAJ",
          etag: "Xmj85LrGGnk",
          selfLink: "https://www.googleapis.com/books/v1/volumes/8QxYPgAACAAJ",
          volumeInfo: {
            title: "Senhor Dos Aneis - Vol. Unico - Filme",
            authors: ["John Ronald Reuel Tolkien"],
            publisher: "Martins Martins Fontes",
            publishedDate: "2001",
            description:
              "Alternadamente cômica, singela, épica, monstruosa e diabólica, a narrativa desenvolve-se em meio a inúmeras mudanças de cenários e de personagens, num mundo imaginário absolutamente convincente em seus detalhes. Nas palavras do romancista Richard Hughes, 'quanto à amplitude imaginativa, a obra praticamente não tem paralelos e é quase igualmente notável na sua vividez e na habilidade narrativa, que mantêm o leitor preso página após página'. Tolkien criou em Senhor dos Anéis uma nova mitologia, num mundo inventado que demonstrou possuir um poder de atração atemporal.",
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "8533615167",
              },
              {
                type: "ISBN_13",
                identifier: "9788533615168",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 434,
            printType: "BOOK",
            categories: ["Baggins, Frodo (Fictitious character)"],
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            language: "en",
            previewLink:
              "http://books.google.com.br/books?id=8QxYPgAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=28&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=8QxYPgAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/Senhor_Dos_Aneis_Vol_Unico_Filme.html?hl=&id=8QxYPgAACAAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=8QxYPgAACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
        },
        {
          kind: "books#volume",
          id: "wOVHzgEACAAJ",
          etag: "5rOPVDkzrJc",
          selfLink: "https://www.googleapis.com/books/v1/volumes/wOVHzgEACAAJ",
          volumeInfo: {
            title: "A sociedade do anel",
            authors: ["John Ronald Reuel Tolkien"],
            publishedDate: "2001",
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "8533613377",
              },
              {
                type: "ISBN_13",
                identifier: "9788533613379",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 434,
            printType: "BOOK",
            categories: ["Fantasy fiction, English"],
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=wOVHzgEACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=29&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=wOVHzgEACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/A_sociedade_do_anel.html?hl=&id=wOVHzgEACAAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=wOVHzgEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
        },
        {
          kind: "books#volume",
          id: "fNI7EAAAQBAJ",
          etag: "uRh/jwpUK2k",
          selfLink: "https://www.googleapis.com/books/v1/volumes/fNI7EAAAQBAJ",
          volumeInfo: {
            title: "A Natureza da Terra-média",
            authors: ["J.R.R. Tolkien", "Carl F. Hostetter"],
            publisher: "HARLEQUIN",
            publishedDate: "2021-09-02",
            description:
              '"Obra inédita de J.R.R Tolkien, editada por Carl F. Hostetter, um dos maiores especialista no autor do mundo, apresenta escritos nunca publicados sobre o universo da Terra-média e abrange assuntos que vão muito além da história de O Senhor dos Anéis, respondendo algumas das dúvidas que os fãs debatem há anos. Mesmo após a publicação de O Hobbit e, posteriormente, O Senhor dos Anéis, J.R.R. Tolkien jamais deixou de escrever sobre seu mundo imaginário. Para ele, a Terra-média era parte de um mundo inteiro a ser explorado, e os escritos compilados em A natureza da Terra-média revelam alguns de seus esforços para compreender e aprimorar sua criação única. Tratando de temas mais abrangentes, complexos e profundos, como a metafísica da imortalidade, a reencarnação élfica e os poderes dos Valar, até assuntos mais específicos, como a fauna e a flora de Númenor, as especificidades geográficas de Gondor e quais espécies tinham barba, este livro é um verdadeiro tesouro que oferece aos leitores a chance de observar de perto a imaginação de um dos mais brilhantes escritores de fantasia da História."',
            industryIdentifiers: [
              {
                type: "ISBN_13",
                identifier: "9786555112054",
              },
              {
                type: "ISBN_10",
                identifier: "6555112050",
              },
            ],
            readingModes: {
              text: true,
              image: false,
            },
            pageCount: 299,
            printType: "BOOK",
            categories: ["Fiction"],
            maturityRating: "NOT_MATURE",
            allowAnonLogging: true,
            contentVersion: "1.3.3.0.preview.2",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=fNI7EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=fNI7EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            },
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=fNI7EAAAQBAJ&printsec=frontcover&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=30&source=gbs_api",
            infoLink:
              "https://play.google.com/store/books/details?id=fNI7EAAAQBAJ&source=gbs_api",
            canonicalVolumeLink:
              "https://play.google.com/store/books/details?id=fNI7EAAAQBAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "FOR_SALE",
            isEbook: true,
            listPrice: {
              amount: 44.9,
              currencyCode: "BRL",
            },
            retailPrice: {
              amount: 42.66,
              currencyCode: "BRL",
            },
            buyLink:
              "https://play.google.com/store/books/details?id=fNI7EAAAQBAJ&rdid=book-fNI7EAAAQBAJ&rdot=1&source=gbs_api",
            offers: [
              {
                finskyOfferType: 1,
                listPrice: {
                  amountInMicros: 44900000,
                  currencyCode: "BRL",
                },
                retailPrice: {
                  amountInMicros: 42660000,
                  currencyCode: "BRL",
                },
                giftable: true,
              },
            ],
          },
          accessInfo: {
            country: "BR",
            viewability: "PARTIAL",
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: true,
              acsTokenLink:
                "http://books.google.com.br/books/download/A_Natureza_da_Terra_m%C3%A9dia-sample-epub.acsm?id=fNI7EAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=fNI7EAAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "SAMPLE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "Para ele, a Terra-média era parte de um mundo inteiro a ser explorado, e os escritos compilados em A natureza da Terra-média revelam alguns de seus esforços para compreender e aprimorar sua criação única.",
          },
        },
        {
          kind: "books#volume",
          id: "z_2pDAEACAAJ",
          etag: "gQevYnC6Fsg",
          selfLink: "https://www.googleapis.com/books/v1/volumes/z_2pDAEACAAJ",
          volumeInfo: {
            title: "O senhor dos anéis",
            subtitle: "romance. O regresso do rei",
            publishedDate: "1984",
            industryIdentifiers: [
              {
                type: "OTHER",
                identifier: "OCLC:938877331",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 404,
            printType: "BOOK",
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=z_2pDAEACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=31&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=z_2pDAEACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/O_senhor_dos_an%C3%A9is.html?hl=&id=z_2pDAEACAAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=z_2pDAEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
        },
        {
          kind: "books#volume",
          id: "fsDBjgEACAAJ",
          etag: "dtOy4d9W08c",
          selfLink: "https://www.googleapis.com/books/v1/volumes/fsDBjgEACAAJ",
          volumeInfo: {
            title: "O Senhor dos Anéis",
            subtitle: "O regresso do Rei",
            authors: ["J. R. R. Tolkien"],
            publishedDate: "2002",
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "9721041548",
              },
              {
                type: "ISBN_13",
                identifier: "9789721041547",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 450,
            printType: "BOOK",
            categories: ["Popular literature"],
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=fsDBjgEACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=32&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=fsDBjgEACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/O_Senhor_dos_An%C3%A9is.html?hl=&id=fsDBjgEACAAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=fsDBjgEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "A história de O Senhor dos Anéis ocorre em um tempo e espaço imaginários, a Terceira Era da Terra Média, que é um mundo inspirado na Terra real, mais especificamente, segundo Tolkien, numa Europa mitológica, habitado por Humanos e ...",
          },
        },
        {
          kind: "books#volume",
          id: "gAH5zwEACAAJ",
          etag: "oYhc0vCII40",
          selfLink: "https://www.googleapis.com/books/v1/volumes/gAH5zwEACAAJ",
          volumeInfo: {
            title: "A amizade em O senhor dos anéis",
            authors: ["Cristina Casagrande"],
            publishedDate: "2019-02-25",
            description:
              'Estudar sobre a amizade em "O Senhor dos Anéis" surgiu do desejo de fazer um trabalho pautado pelos valores éticos e nobres. E era de suma importância que este trabalho tivesse uma aplicação prática e edificante na vida de qualquer pessoa. A obra de J.R.R. Tolkien é um prato cheio para isso: além de ser atraente e profunda, traz valores extremamente necessários para nossa felicidade. "A amizade em O Senhor dos Anéis” mostra como a amizade é essencial para vencermos as batalhas de nossas vidas, seja na guerra que travamos contra nós mesmos, seja na guerra política contra um poder maligno, como bem coloca J.R.R. Tolkien em sua grande obra.',
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "8544002048",
              },
              {
                type: "ISBN_13",
                identifier: "9788544002049",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 0,
            printType: "BOOK",
            categories: ["Literary Criticism"],
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=gAH5zwEACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=33&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=gAH5zwEACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/A_amizade_em_O_senhor_dos_an%C3%A9is.html?hl=&id=gAH5zwEACAAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=gAH5zwEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "Estudar sobre a amizade em &quot;O Senhor dos Anéis&quot; surgiu do desejo de fazer um trabalho pautado pelos valores éticos e nobres.",
          },
        },
        {
          kind: "books#volume",
          id: "BunxAAAACAAJ",
          etag: "gqaSloXWA+I",
          selfLink: "https://www.googleapis.com/books/v1/volumes/BunxAAAACAAJ",
          volumeInfo: {
            title: "O senhor dos anéis",
            authors: ["J. R. R. Tolkien"],
            publishedDate: "2002",
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "9721041025",
              },
              {
                type: "ISBN_13",
                identifier: "9789721041028",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 450,
            printType: "BOOK",
            categories: ["Baggins, Frodo (Fictitious character)"],
            averageRating: 5,
            ratingsCount: 1,
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=BunxAAAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=34&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=BunxAAAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/O_senhor_dos_an%C3%A9is.html?hl=&id=BunxAAAACAAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=BunxAAAACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
        },
        {
          kind: "books#volume",
          id: "TcSOPgAACAAJ",
          etag: "m1/uLlZlv/s",
          selfLink: "https://www.googleapis.com/books/v1/volumes/TcSOPgAACAAJ",
          volumeInfo: {
            title: "Senhor Dos Aneis - Volume Unico",
            authors: ["John Ronald Reuel Tolkien"],
            publisher: "Martins Martins Fontes",
            publishedDate: "2001",
            description:
              "Alternadamente cômica, singela, épica, monstruosa e diabólica, a narrativa deste livro desenvolve-se em meio a inúmeras mudanças de cenários e de personagens, num mundo imaginário convincente em seus detalhes. Tolkien criou em 'O Senhor dos Anéis' uma nova mitologia, num mundo inventado que demonstrou possuir um poder de atração atemporal. Este livro reúne em um único volume as três partes da trilogia 'O Senhor dos Anéis' - 'A Sociedade do Anel', 'As duas torres', 'O retorno do rei'.",
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "8533613407",
              },
              {
                type: "ISBN_13",
                identifier: "9788533613409",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 1202,
            printType: "BOOK",
            averageRating: 4,
            ratingsCount: 2,
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=TcSOPgAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=35&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=TcSOPgAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/Senhor_Dos_Aneis_Volume_Unico.html?hl=&id=TcSOPgAACAAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=TcSOPgAACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
        },
        {
          kind: "books#volume",
          id: "EoH5zwEACAAJ",
          etag: "P9fKjYKOhaE",
          selfLink: "https://www.googleapis.com/books/v1/volumes/EoH5zwEACAAJ",
          volumeInfo: {
            title: "Coleção Mundo Nerd Volume 2: O Senhor dos Anéis",
            authors: ["Editora Europa"],
            publishedDate: "2016",
            description:
              "Uma das maiores obras de todos os tempos Inspirações da saga | Bastidores da criação dos livros | Influências na cultura pop | Biografia de Tolkien | Cinema e TV As fantásticas aventuras criadas por J.R.R. Tolkien conquistaram o mundo e a cultura pop, primeiro na literatura, depois no rádio, no cinema e em outras mídias. Conheça a história e as incríveis curiosidades dessa grande saga estrelada por hobbits, anões, elfos e guerreiros humanos.",
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "8579604281",
              },
              {
                type: "ISBN_13",
                identifier: "9788579604287",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 0,
            printType: "BOOK",
            categories: ["Art"],
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=EoH5zwEACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=36&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=EoH5zwEACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/Cole%C3%A7%C3%A3o_Mundo_Nerd_Volume_2_O_Senhor_d.html?hl=&id=EoH5zwEACAAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=EoH5zwEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "Uma das maiores obras de todos os tempos Inspirações da saga | Bastidores da criação dos livros | Influências na cultura pop | Biografia de Tolkien | Cinema e TV As fantásticas aventuras criadas por J.R.R. Tolkien conquistaram o mundo ...",
          },
        },
        {
          kind: "books#volume",
          id: "tHf0zwEACAAJ",
          etag: "uR/9kSvKsZ0",
          selfLink: "https://www.googleapis.com/books/v1/volumes/tHf0zwEACAAJ",
          volumeInfo: {
            title: "O mundo do senhor dos anéis",
            authors: ["Ives Gandra Martins Filho"],
            publishedDate: "2006",
            description:
              "Os seres, os locais mágicos, todos os tesouros que povoam a obra de Tolkien são agora desvendados por um dos mais importantes estudiosos do autor. Este absorvente guia para a mente responsável pela criação da Terra Média revelará a riqueza que existe no pensamento e na imaginação de Tolkien.",
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "8533623097",
              },
              {
                type: "ISBN_13",
                identifier: "9788533623095",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 0,
            printType: "BOOK",
            categories: ["Fiction"],
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=tHf0zwEACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=37&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=tHf0zwEACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/O_mundo_do_senhor_dos_an%C3%A9is.html?hl=&id=tHf0zwEACAAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=tHf0zwEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              "Os seres, os locais mágicos, todos os tesouros que povoam a obra de Tolkien são agora desvendados por um dos mais importantes estudiosos do autor.",
          },
        },
        {
          kind: "books#volume",
          id: "j2wCPwAACAAJ",
          etag: "YxhBxw0w+dM",
          selfLink: "https://www.googleapis.com/books/v1/volumes/j2wCPwAACAAJ",
          volumeInfo: {
            title: "O Senhor dos Anéis",
            subtitle: "As duas torres",
            authors: ["John Ronald Reuel Tolkien"],
            publishedDate: "2002",
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "9721041440",
              },
              {
                type: "ISBN_13",
                identifier: "9789721041448",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 365,
            printType: "BOOK",
            categories: ["Baggins, Frodo (Fictitious character)"],
            averageRating: 5,
            ratingsCount: 1,
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=j2wCPwAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=38&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=j2wCPwAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/O_Senhor_dos_An%C3%A9is.html?hl=&id=j2wCPwAACAAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=j2wCPwAACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
        },
        {
          kind: "books#volume",
          id: "M1K8GwAACAAJ",
          etag: "ioMB3EHG2GM",
          selfLink: "https://www.googleapis.com/books/v1/volumes/M1K8GwAACAAJ",
          volumeInfo: {
            title: "Senhor Dos Aneis, O - O Retorno Do Rei - Vol 3",
            authors: ["J. R. R. Tolkien"],
            publisher: "Martins Martins Fontes",
            publishedDate: "1994",
            description:
              "O Retorno do Rei é a terceira parte da grande obra de ficção fantástica de J. R. R. Tolkien, O Senhor dos Anéis. É impossível transmitir ao novo leitor todas as qualidades e o alcance do livro. Alternadamente cômica, singela, épica, monstruosa, diabólica, a narrativa desenvolve-se em meio a inúmeras mudanças de cenários e de personagens, num mundo imaginário absolutamente convincente em seus detalhes.",
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "8533613393",
              },
              {
                type: "ISBN_13",
                identifier: "9788533613393",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 431,
            printType: "BOOK",
            categories: ["Adventure stories"],
            averageRating: 4,
            ratingsCount: 5,
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=M1K8GwAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=39&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=M1K8GwAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/Senhor_Dos_Aneis_O_O_Retorno_Do_Rei_Vol.html?hl=&id=M1K8GwAACAAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=M1K8GwAACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
        },
        {
          kind: "books#volume",
          id: "G-6FvgAACAAJ",
          etag: "msj6iOe+1Qc",
          selfLink: "https://www.googleapis.com/books/v1/volumes/G-6FvgAACAAJ",
          volumeInfo: {
            title: "O senhor dos anéis",
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "9721053198",
              },
              {
                type: "ISBN_13",
                identifier: "9789721053199",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            printType: "BOOK",
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            language: "pt-BR",
            previewLink:
              "http://books.google.com.br/books?id=G-6FvgAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&cd=40&source=gbs_api",
            infoLink:
              "http://books.google.com.br/books?id=G-6FvgAACAAJ&dq=senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/O_senhor_dos_an%C3%A9is.html?hl=&id=G-6FvgAACAAJ",
          },
          saleInfo: {
            country: "BR",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
          },
          accessInfo: {
            country: "BR",
            viewability: "NO_PAGES",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              "http://play.google.com/books/reader?id=G-6FvgAACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            accessViewStatus: "NONE",
            quoteSharingAllowed: false,
          },
        },
      ],
    },
  ],
  pageParams: [null, 20],
};

export const infiniteBookList = data as InfiniteData<FetchVolumesResponse>;
