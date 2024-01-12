import { Book, FetchVolumesResponse } from "@/services/books/types";
import { InfiniteData } from "react-query";

export const mockBook: Book = {
  kind: "books#volume",
  id: "eVevDwAAQBAJ",
  etag: "Fa+5RB631kU",
  selfLink: "https://www.googleapis.com/books/v1/volumes/eVevDwAAQBAJ",
  volumeInfo: {
    title: "Box Trilogia O Senhor dos Anéis",
    authors: ["J.R.R. Tolkien"],
    publisher: "HARLEQUIN",
    description:
      "Embarque numa viagem inesquecível para a Terra-média e tenha os três livros de O Senhor dos Anéis, a obra-prima de J.R.R. Tolkien e um dos maiores clássicos da fantasia, em edições de luxo com capa dura neste box de colecionador! Apesar de ter sido publicado em três volumes – A Sociedade do Anel, As Duas Torres e O Retorno do Rei – desde os anos 1950, O Senhor dos Anéis não é exatamente uma trilogia, mas um único grande romance que só pode ser compreendido em seu conjunto, segundo a concepção de seu autor, J.R.R. Tolkien. Com design cuidadosamente pensado para refletir a unidade da obra e com os desenhos originais feitos por Tolkien para as capas de cada volume, este box reúne os três livros da Saga do Anel e oferece aos leitores uma nova oportunidade de mergulhar no notável mundo da Terra-média.",
    imageLinks: {
      smallThumbnail:
        "http://books.google.com/books/content?id=eVevDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=eVevDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    language: "pt-BR",
  },
  saleInfo: {
    country: "BR",
    saleability: "FOR_SALE",
    listPrice: {
      amount: 134.9,
      currencyCode: "BRL",
    },
    buyLink:
      "https://play.google.com/store/books/details?id=eVevDwAAQBAJ&rdid=book-eVevDwAAQBAJ&rdot=1&source=gbs_api",
  },
  accessInfo: {
    epub: {
      isAvailable: true,
    },
    pdf: {
      isAvailable: false,
    },
  },
};

const infiniteData = {
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

export const infiniteBookList =
  infiniteData as InfiniteData<FetchVolumesResponse>;

export const querySenhorDosAneis = {
  kind: "books#volumes",
  totalItems: 35,
  items: [
    {
      kind: "books#volume",
      id: "R7KuDwAAQBAJ",
      etag: "j7x4mayE/kY",
      selfLink: "https://www.googleapis.com/books/v1/volumes/R7KuDwAAQBAJ",
      volumeInfo: {
        title: "O Senhor dos Anéis: A Sociedade do Anel",
        authors: ["J.R.R. Tolkien"],
        publisher: "HARLEQUIN",
        publishedDate: "2019-11-25",
        description:
          "A Sociedade do Anel O volume inicial de O Senhor dos Anéis, lançado originalmente em julho de 1954, foi o primeiro grande épico de fantasia moderno, conquistando milhões de leitores e se tornando o padrão de referência para todas as outras obras do gênero até hoje. A imaginação prodigiosa de J.R.R. Tolkien e seu conhecimento profundo das antigas mitologias da Europa permitiram que ele criasse um universo tão complexo e convincente quanto o mundo real. A Sociedade do Anel começa no Condado, a região rural do oeste da Terra-média onde vivem os diminutos e pacatos hobbits. Bilbo Bolseiro, um dos raros aventureiros desse povo, cujas peripécias foram contadas em O Hobbit, resolve ir embora do Condado e deixa sua considerável herança nas mãos de seu jovem parente Frodo. O mais importante legado de Bilbo é o anel mágico que costumava usar para se tornar invisível. No entanto, o mago Gandalf, companheiro de aventuras do velho hobbit, revela a Frodo que o objeto é o Um Anel, a raiz do poder demoníaco de Sauron, o Senhor Sombrio, que deseja escravizar todos os povos da Terra-média. A única maneira de eliminar a ameaça de Sauron é destruir o Um Anel nas entranhas da própria montanha de fogo onde foi forjado. A revelação faz com que Frodo e seus companheiros hobbits Sam, Merry e Pippin deixem a segurança do Condado e iniciem uma perigosa jornada rumo ao leste. Ao lado de representantes dos outros Povos Livres que resistem ao Senhor Sombrio, eles formam a Sociedade do Anel. Alguém uma vez disse que o mundo dos leitores de língua inglesa se divide entre os que já leram O Senhor dos Anéis e os que um dia lerão o livro. Com esta nova tradução da obra, o fascínio dessa aventura atemporal ficará ainda mais evidente para os leitores brasileiros, tanto os que já conhecem a saga como os que estão prestes a descobrir seu encanto.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788595086333",
          },
          {
            type: "ISBN_10",
            identifier: "8595086338",
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 584,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.11.12.0.preview.2",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=R7KuDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=R7KuDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "pt-BR",
        previewLink:
          "http://books.google.com.br/books?id=R7KuDwAAQBAJ&printsec=frontcover&dq=intitle:senhor+dos+aneis&hl=&as_pt=BOOKS&cd=1&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=R7KuDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=R7KuDwAAQBAJ",
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
          "https://play.google.com/store/books/details?id=R7KuDwAAQBAJ&rdid=book-R7KuDwAAQBAJ&rdot=1&source=gbs_api",
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
            "http://books.google.com.br/books/download/O_Senhor_dos_An%C3%A9is_A_Sociedade_do_Anel-sample-epub.acsm?id=R7KuDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=R7KuDwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
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
      id: "eVevDwAAQBAJ",
      etag: "j4Bx2gnOZt8",
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
          "http://books.google.com.br/books?id=eVevDwAAQBAJ&printsec=frontcover&dq=intitle:senhor+dos+aneis&hl=&as_pt=BOOKS&cd=2&source=gbs_api",
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
      id: "W65gOgAACAAJ",
      etag: "QvYcnpEXNvg",
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
          "http://books.google.com.br/books?id=W65gOgAACAAJ&dq=intitle:senhor+dos+aneis&hl=&as_pt=BOOKS&cd=3&source=gbs_api",
        infoLink:
          "http://books.google.com.br/books?id=W65gOgAACAAJ&dq=intitle:senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
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
      id: "SbKuDwAAQBAJ",
      etag: "zffSXj1qVjE",
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
          "http://books.google.com.br/books?id=SbKuDwAAQBAJ&printsec=frontcover&dq=intitle:senhor+dos+aneis&hl=&as_pt=BOOKS&cd=4&source=gbs_api",
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
      etag: "xAqHLHx4ClE",
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
          "http://books.google.com.br/books?id=UbKuDwAAQBAJ&printsec=frontcover&dq=intitle:senhor+dos+aneis&hl=&as_pt=BOOKS&cd=5&source=gbs_api",
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
      etag: "DE4H9wIoDSA",
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
          "http://books.google.com.br/books?id=3xeoPgAACAAJ&dq=intitle:senhor+dos+aneis&hl=&as_pt=BOOKS&cd=6&source=gbs_api",
        infoLink:
          "http://books.google.com.br/books?id=3xeoPgAACAAJ&dq=intitle:senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
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
      id: "kcdyPgAACAAJ",
      etag: "RY/qdx1Ag6w",
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
          "http://books.google.com.br/books?id=kcdyPgAACAAJ&dq=intitle:senhor+dos+aneis&hl=&as_pt=BOOKS&cd=7&source=gbs_api",
        infoLink:
          "http://books.google.com.br/books?id=kcdyPgAACAAJ&dq=intitle:senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
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
      id: "KtVzkgEACAAJ",
      etag: "U3mgr+mJr6I",
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
          "http://books.google.com.br/books?id=KtVzkgEACAAJ&dq=intitle:senhor+dos+aneis&hl=&as_pt=BOOKS&cd=8&source=gbs_api",
        infoLink:
          "http://books.google.com.br/books?id=KtVzkgEACAAJ&dq=intitle:senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
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
      id: "4Gp5PgAACAAJ",
      etag: "GTykNn2Tuwo",
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
          "http://books.google.com.br/books?id=4Gp5PgAACAAJ&dq=intitle:senhor+dos+aneis&hl=&as_pt=BOOKS&cd=9&source=gbs_api",
        infoLink:
          "http://books.google.com.br/books?id=4Gp5PgAACAAJ&dq=intitle:senhor+dos+aneis&hl=&as_pt=BOOKS&source=gbs_api",
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
      id: "o39zEAAAQBAJ",
      etag: "Eo5MbJQXaH0",
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
          "http://books.google.com.br/books?id=o39zEAAAQBAJ&printsec=frontcover&dq=intitle:senhor+dos+aneis&hl=&as_pt=BOOKS&cd=10&source=gbs_api",
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
  ],
};

export const queryJulioVerne = {
  kind: "books#volumes",
  totalItems: 70,
  items: [
    {
      kind: "books#volume",
      id: "2pLnDwAAQBAJ",
      etag: "2BH7/rLimx4",
      selfLink: "https://www.googleapis.com/books/v1/volumes/2pLnDwAAQBAJ",
      volumeInfo: {
        title: "A jangada: 800 léguas pelo Amazonas",
        authors: ["Júlio Verne"],
        publisher: "L&PM Pocket",
        publishedDate: "2020-05-29",
        description:
          "Sem jamais ter estado no Brasil, Júlio Verne (1828-1905), o pai da ficção científica e de fantasia, escreveu um primoroso romance de aventura e mistério que se passa no rio Amazonas. A família de João Garral, um próspero e digno fazendeiro de Iquitos, no Peru, precisa empreender uma viagem rio abaixo, com o intuito de levar sua filha até Belém do Pará, para se casar. Para tal, é construída uma jangada que é uma verdadeira aldeia flutuante: autossuficiente, reproduz a sociedade da região e da época, com a família branca de origens europeias acompanhada de escravos negros e trabalhadores indígenas. Mas não só festejos e celebrações ocupam a mente do fazendeiro: um segredo do passado o assombra, e pode pôr tudo a perder...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9786556660554",
          },
          {
            type: "ISBN_10",
            identifier: "6556660558",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 264,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.6.5.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=2pLnDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=2pLnDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "pt-BR",
        previewLink:
          "http://books.google.com.br/books?id=2pLnDwAAQBAJ&printsec=frontcover&dq=inauthor:%22J%C3%BAlio+Verne%22&hl=&as_pt=BOOKS&cd=2&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=2pLnDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=2pLnDwAAQBAJ",
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 20.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 20.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=2pLnDwAAQBAJ&rdid=book-2pLnDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 20900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 20900000,
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
            "http://books.google.com.br/books/download/A_jangada_800_l%C3%A9guas_pelo_Amazonas-sample-epub.acsm?id=2pLnDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/A_jangada_800_l%C3%A9guas_pelo_Amazonas-sample-pdf.acsm?id=2pLnDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=2pLnDwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Sem jamais ter estado no Brasil, Júlio Verne (1828-1905), o pai da ficção científica e de fantasia, escreveu um primoroso romance de aventura e mistério que se passa no rio Amazonas.",
      },
    },
    {
      kind: "books#volume",
      id: "oHo1CgAAQBAJ",
      etag: "hkbdjxtzwyU",
      selfLink: "https://www.googleapis.com/books/v1/volumes/oHo1CgAAQBAJ",
      volumeInfo: {
        title: "Viagem ao centro da terra",
        authors: ["Carlos Heitor Cony", "Júlio Verne"],
        publisher: "Nova Fronteira",
        publishedDate: "2015-07-21",
        description:
          "EXCLUSIVO EM EBOOK!Sobre Carlos Heitor Cony: Estreou na literatura ganhando por duas vezes consecutivas o Prêmio Manuel Antônio de Almeida. Ganhou em quatro ocasiões o Prêmio Jabuti na categoria Romance, duas vezes o Prêmio Livro do Ano da Câmara Brasileira do Livro e o Prêmio Nacional Nestlé de Literatura. Em 1998, foi condecorado pelo governo francês com a L'Ordre des Arts et des Lettres. Foi eleito para a Academia Brasileira de Letras em março de 2000.Sobre Júlio Verne (1828-1905): Considerado um dos pioneiros da ficção científica, notabilizou-se por histórias repletas de peripécias e pela capacidade de antecipar na ficção as transformações que a tecnologia tornaria possível no mundo moderno. Em 1863, publicou seu primeiro romance, Cinco semanas em um balão. A mistura de aventura e especulação futurística resultou numa obra irresistível de 28 livros, na qual se destacam, além de Viagem ao centro da Terra (1864), os romances Da Terra à Lua (1864), Vinte mil léguas submarinas (1870), A volta ao mundo em oitenta dias (1872) e Um capitão de quinze anos (1878).Por muito tempo mantido à margem da literatura clássica francesa, Verne é hoje unanimidade e objeto de culto em seu país e em todo o mundo. É possível viajar até o centro da Terra? Ao publicar seu livro no longínquo ano de 1864, Júlio Verne acreditou que sim. E fez seus personagens encontrarem um misterioso pergaminho que os conduziria até lá — mas não sem antes passarem por muitas tribulações e descobertas assombrosas. Um clássico da literatura mundial, Viagem ao centro da Terra recebe agora uma nova edição, para continuar encantando as novas gerações.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788520940372",
          },
          {
            type: "ISBN_10",
            identifier: "8520940374",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 184,
        printType: "BOOK",
        categories: ["Juvenile Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "0.26.24.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=oHo1CgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=oHo1CgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "pt-BR",
        previewLink:
          "http://books.google.com.br/books?id=oHo1CgAAQBAJ&printsec=frontcover&dq=inauthor:%22J%C3%BAlio+Verne%22&hl=&as_pt=BOOKS&cd=3&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=oHo1CgAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=oHo1CgAAQBAJ",
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 29.99,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 29.99,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=oHo1CgAAQBAJ&rdid=book-oHo1CgAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 29990000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 29990000,
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
            "http://books.google.com.br/books/download/Viagem_ao_centro_da_terra-sample-epub.acsm?id=oHo1CgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Viagem_ao_centro_da_terra-sample-pdf.acsm?id=oHo1CgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=oHo1CgAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Um clássico da literatura mundial, Viagem ao centro da Terra recebe agora uma nova edição, para continuar encantando as novas gerações.",
      },
    },
    {
      kind: "books#volume",
      id: "5hcuEAAAQBAJ",
      etag: "R301gkYSysU",
      selfLink: "https://www.googleapis.com/books/v1/volumes/5hcuEAAAQBAJ",
      volumeInfo: {
        title: "Viagem ao centro da Terra",
        authors: ["Júlio Verne"],
        publisher: "Tricaju",
        publishedDate: "2021-05-13",
        description:
          "O mundo inteiro foi palco das viagens imaginárias do escritor francês Júlio Verne. Em Viagem ao centro da Terra, a aventura se passa nas entranhas misteriosas, mágicas e abismais da Terra, depois que o professor Lidenbrock comparou um antigo manuscrito em um antiquário, em Hamburgo, e descobriu informações interessantes. Então, ele, o sobrinho e o guia partem para a grande comprovação de que o manuscrito é verdadeiro! Um livro fascinante, de ação rápida, cheio de aventura!",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9786589678731",
          },
          {
            type: "ISBN_10",
            identifier: "6589678731",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 299,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=5hcuEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=5hcuEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "pt-BR",
        previewLink:
          "http://books.google.com.br/books?id=5hcuEAAAQBAJ&printsec=frontcover&dq=inauthor:%22J%C3%BAlio+Verne%22&hl=&as_pt=BOOKS&cd=4&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=5hcuEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=5hcuEAAAQBAJ",
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 9.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 9.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=5hcuEAAAQBAJ&rdid=book-5hcuEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 9900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 9900000,
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
            "http://books.google.com.br/books/download/Viagem_ao_centro_da_Terra-sample-epub.acsm?id=5hcuEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Viagem_ao_centro_da_Terra-sample-pdf.acsm?id=5hcuEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=5hcuEAAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Em Viagem ao centro da Terra, a aventura se passa nas entranhas misteriosas, mágicas e abismais da Terra, depois que o professor Lidenbrock comparou um antigo manuscrito em um antiquário, em Hamburgo, e descobriu informações ...",
      },
    },
    {
      kind: "books#volume",
      id: "a8_nDwAAQBAJ",
      etag: "SxI4H1dE5nE",
      selfLink: "https://www.googleapis.com/books/v1/volumes/a8_nDwAAQBAJ",
      volumeInfo: {
        title: "Dois anos de férias",
        authors: ["Júlio Verne"],
        publisher: "Via Leitura",
        publishedDate: "2020-05-28",
        description:
          "Reconhecido como um dos pais da ficção científica, Júlio Verne não se ateve apenas às predições tecnológicas em suas obras, mas também à criação de aventuras empolgantes que divertem até hoje. Em Dois anos de férias , publicado em 1888, Verne alia seu grande conhecimento náutico a um enredo emocionante e cheio de surpresas. Um grupo de garotos neozelandeses prepara-se para uma expedição náutica organizada pelo internato em que estudam. Um acidente durante a noite, porém, coloca a nau à deriva no imenso mar do Pacífico. Lutando para controlar a embarcação, os bravos garotos acabam por encalhar em uma ilha deserta, na qual erguerão sua pequena comunidade. Um clássico da literatura infantojuvenil, Dois anos de férias é um livro cultuado por mais de um século pelos fãs de Verne e um ícone da impressionante literatura de aventura do século XIX.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9786587034164",
          },
          {
            type: "ISBN_10",
            identifier: "6587034160",
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 402,
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
            "http://books.google.com/books/content?id=a8_nDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=a8_nDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "pt-BR",
        previewLink:
          "http://books.google.com.br/books?id=a8_nDwAAQBAJ&printsec=frontcover&dq=inauthor:%22J%C3%BAlio+Verne%22&hl=&as_pt=BOOKS&cd=5&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=a8_nDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=a8_nDwAAQBAJ",
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 18.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 18.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=a8_nDwAAQBAJ&rdid=book-a8_nDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 18900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 18900000,
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
            "http://books.google.com.br/books/download/Dois_anos_de_f%C3%A9rias-sample-epub.acsm?id=a8_nDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=a8_nDwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Em Dois anos de férias , publicado em 1888, Verne alia seu grande conhecimento náutico a um enredo emocionante e cheio de surpresas.",
      },
    },
    {
      kind: "books#volume",
      id: "191BEAAAQBAJ",
      etag: "7HpBhM1EYc0",
      selfLink: "https://www.googleapis.com/books/v1/volumes/191BEAAAQBAJ",
      volumeInfo: {
        title: "A ilha misteriosa",
        authors: ["Júlio Verne"],
        publisher: "Editora Itapuca",
        publishedDate: "2021-09-06",
        description:
          "Um dos mais aclamados livros de Júlio Verne, A ilha misteriosa foi publicado em 1874. O livro conta a aventura e a luta pela sobrevivência de um grupo de homens que, após fugirem da guerra em um balão, acabam em uma ilha desconhecida e cheia de mistérios. O grupo de náufragos tenta organizar a vida na ilha, enquanto lida com piratas e outros perigos e sonha com algum navio que os resgate. Para piorar a situação, a ilha está ameaçada por um vulcão. Coisas misteriosas acontecem e um benfeitor parece estar ajudando, sem nunca mostrar quem é. Eles vão conseguir sobreviver? Qual será o destinos dos homens e da ilha misteriosa?",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9786586655995",
          },
          {
            type: "ISBN_10",
            identifier: "6586655994",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 161,
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
            "http://books.google.com/books/content?id=191BEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=191BEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "pt-BR",
        previewLink:
          "http://books.google.com.br/books?id=191BEAAAQBAJ&printsec=frontcover&dq=inauthor:%22J%C3%BAlio+Verne%22&hl=&as_pt=BOOKS&cd=6&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=191BEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=191BEAAAQBAJ",
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 12.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 12.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=191BEAAAQBAJ&rdid=book-191BEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 12900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 12900000,
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
            "http://books.google.com.br/books/download/A_ilha_misteriosa-sample-epub.acsm?id=191BEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/A_ilha_misteriosa-sample-pdf.acsm?id=191BEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=191BEAAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Um dos mais aclamados livros de Júlio Verne, A ilha misteriosa foi publicado em 1874.",
      },
    },
    {
      kind: "books#volume",
      id: "PRj6DQAAQBAJ",
      etag: "6G2ZZhdjiag",
      selfLink: "https://www.googleapis.com/books/v1/volumes/PRj6DQAAQBAJ",
      volumeInfo: {
        title: "Da Terra à Lua",
        subtitle: "Texto adaptado",
        authors: ["Júlio Verne"],
        publisher: "Editora Melhoramentos",
        publishedDate: "2017-01-24",
        description:
          "Edição traduzida e condensada por Maria Alice de A. Sampaio Doria. Após a Guerra de Secessão, os Estados Unidos entram num longo período de paz, o que preocupa demais os membros do Clube do Canhão. Afinal, o que farão das suas vidas sem nenhuma guerrinha para exercitar todas as suas habilidades e conhecimentos bélicos, principalmente na criação de balas e canhões? Mas a monotonia não dura muito, pois o excelentíssimo Sr. Impey Barbicane, presidente do Clube do Canhão, já tem um plano muito bem traçado para o futuro. Um plano que literalmente vai da Terra à Lua. Todos os membros do clube são convocados para trabalhar em prol dessa ideia, construindo um canhão capaz de lançar um projétil tripulado até a Lua. Mas eles não contavam com alguns pequenos, porém complicados, problemas. Da Terra à Lua é mais uma das obras visionárias do escritor Júlio Verne. Escrita em 1865 – exatamente 104 anos antes de o homem pisar na Lua –, esta obra prova mais uma vez a genialidade desse escritor cuja imaginação vai além da órbita terrestre.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788506061701",
          },
          {
            type: "ISBN_10",
            identifier: "8506061709",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 128,
        printType: "BOOK",
        categories: ["Juvenile Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.7.7.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=PRj6DQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=PRj6DQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "pt-BR",
        previewLink:
          "http://books.google.com.br/books?id=PRj6DQAAQBAJ&printsec=frontcover&dq=inauthor:%22J%C3%BAlio+Verne%22&hl=&as_pt=BOOKS&cd=7&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=PRj6DQAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=PRj6DQAAQBAJ",
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 37,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 37,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=PRj6DQAAQBAJ&rdid=book-PRj6DQAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 37000000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 37000000,
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
            "http://books.google.com.br/books/download/Da_Terra_%C3%A0_Lua-sample-epub.acsm?id=PRj6DQAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Da_Terra_%C3%A0_Lua-sample-pdf.acsm?id=PRj6DQAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=PRj6DQAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Mas eles não contavam com alguns pequenos, porém complicados, problemas. Da Terra à Lua é mais uma das obras visionárias do escritor Júlio Verne.",
      },
    },
    {
      kind: "books#volume",
      id: "sG8CDgAAQBAJ",
      etag: "NnV0PUWRXNw",
      selfLink: "https://www.googleapis.com/books/v1/volumes/sG8CDgAAQBAJ",
      volumeInfo: {
        title: "Viagem ao Centro da Terra",
        subtitle: "Texto adaptado",
        authors: ["Júlio Verne"],
        publisher: "Editora Melhoramentos",
        publishedDate: "2017-01-24",
        description:
          "Edição traduzida e condensada por Maria Alice de A. Sampaio Doria. Para o excêntrico professor Otto Lidenbrock, encontrar um manuscrito antigo dentro de um livro raro não é simples acaso. É um desafio. Principalmente quando descobre que esse manuscrito é, na verdade, um roteiro escrito por Arne Saknussemm, célebre cientista islandês do século XVI, para uma das mais insólitas aventuras: uma viagem ao centro da Terra. Na companhia do seu inteligente sobrinho Axel e de Hans, o corajoso guia, Lidenbrock parte em busca dos segredos das profundezas do planeta, onde nossos aventureiros deparam com rios de lava e criaturas pré-históricas, entre outras surpresas dessa fantástica jornada. Júlio Verne, que já nos levou à Lua, ao fundo do mar e ao redor do mundo, nos conduz agora numa fascinante viagem, aonde certamente nenhum homem jamais conseguiu chegar: o centro da Terra.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788506061695",
          },
          {
            type: "ISBN_10",
            identifier: "8506061695",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 128,
        printType: "BOOK",
        categories: ["Juvenile Fiction"],
        averageRating: 5,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.6.6.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=sG8CDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=sG8CDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "pt-BR",
        previewLink:
          "http://books.google.com.br/books?id=sG8CDgAAQBAJ&printsec=frontcover&dq=inauthor:%22J%C3%BAlio+Verne%22&hl=&as_pt=BOOKS&cd=8&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=sG8CDgAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=sG8CDgAAQBAJ",
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 37,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 37,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=sG8CDgAAQBAJ&rdid=book-sG8CDgAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 37000000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 37000000,
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
            "http://books.google.com.br/books/download/Viagem_ao_Centro_da_Terra-sample-epub.acsm?id=sG8CDgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Viagem_ao_Centro_da_Terra-sample-pdf.acsm?id=sG8CDgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=sG8CDgAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Júlio Verne, que já nos levou à Lua, ao fundo do mar e ao redor do mundo, nos conduz agora numa fascinante viagem, aonde certamente nenhum homem jamais conseguiu chegar: o centro da Terra.",
      },
    },
    {
      kind: "books#volume",
      id: "rRYuEAAAQBAJ",
      etag: "L+RCm7K2XcE",
      selfLink: "https://www.googleapis.com/books/v1/volumes/rRYuEAAAQBAJ",
      volumeInfo: {
        title: "Vinte mil léguas submarinas",
        authors: ["Júlio Verne"],
        publisher: "Tricaju",
        publishedDate: "2021-05-27",
        description:
          "Escrito em 1870, Vinte mil léguas submarinas é um romance clássico de ficção científica de Júlio Verne, cuja trama gira em torno de uma expedição ousada empreendida pelos protagonistas para lutar contra um monstro marinho ameaçador. Apresentando um amálgama incrível de imaginação e visão de futuro, Verne consegue dar tons e matizes inesperados ao texto, que o torna fascinante e leitura indispensável.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9786589678748",
          },
          {
            type: "ISBN_10",
            identifier: "658967874X",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 415,
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
            "http://books.google.com/books/content?id=rRYuEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=rRYuEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "pt-BR",
        previewLink:
          "http://books.google.com.br/books?id=rRYuEAAAQBAJ&printsec=frontcover&dq=inauthor:%22J%C3%BAlio+Verne%22&hl=&as_pt=BOOKS&cd=9&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=rRYuEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=rRYuEAAAQBAJ",
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 3.96,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 3.96,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=rRYuEAAAQBAJ&rdid=book-rRYuEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 3960000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 3960000,
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
            "http://books.google.com.br/books/download/Vinte_mil_l%C3%A9guas_submarinas-sample-epub.acsm?id=rRYuEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Vinte_mil_l%C3%A9guas_submarinas-sample-pdf.acsm?id=rRYuEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=rRYuEAAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Escrito em 1870, Vinte mil léguas submarinas é um romance clássico de ficção científica de Júlio Verne, cuja trama gira em torno de uma expedição ousada empreendida pelos protagonistas para lutar contra um monstro marinho ...",
      },
    },
    {
      kind: "books#volume",
      id: "dZ3DCAAAQBAJ",
      etag: "fGHJsBwwZbY",
      selfLink: "https://www.googleapis.com/books/v1/volumes/dZ3DCAAAQBAJ",
      volumeInfo: {
        title: "Um capitão de quinze anos",
        authors: ["Carlos Heitor Cony", "Júlio Verne"],
        publisher: "Nova Fronteira",
        publishedDate: "2015-04-27",
        description:
          "EXCLUSIVO EM EBOOK!Sobre Carlos Heitor Cony: Estreou na literatura ganhando por duas vezes consecutivas o Prêmio Manuel Antônio de Almeida. Ganhou em quatro ocasiões o Prêmio Jabuti na categoria Romance, duas vezes o Prêmio Livro do Ano da Câmara Brasileira do Livro e o Prêmio Nacional Nestlé de Literatura. Em 1998, foi condecorado pelo governo francês com a L'Ordre des Arts et des Lettres. Foi eleito para a Academia Brasileira de Letras em março de 2000.Sobre Júlio Verne (1828-1905): Considerado um dos pioneiros da ficção científica, notabilizou-se por histórias repletas de peripécias e pela capacidade de antecipar na ficção as transformações que a tecnologia tornaria possível no mundo moderno. Em 1863, publicou seu primeiro romance, Cinco semanas em um balão. A mistura de aventura e especulação futurística resultou numa obra irresistível de 28 livros, na qual se destacam, além de Um capitão de quinze anos (1878), os romances Viagem ao centro da Terra (1864), Da Terra à Lua (1864), Vinte mil léguas submarinas (1870) e A volta ao mundo em oitenta dias (1872).Quando uma terrível tragédia se abate sobre a tripulação do brigue-galeota Peregrino, o jovem Dick Sand se vê obrigado a assumir o comando do navio e conduzir a família Weldon de volta a São Francisco, nos Estados Unidos. Mas uma conspiração nefasta pretende colocar tudo a perder. Com a competente adaptação do clássico de Júlio Verne por Carlos Heitor Cony, as novas gerações de leitores passarão a conhecer esta história repleta de intrigas, reviravoltas e muitas aventuras, passada em pleno século XIX.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788520940044",
          },
          {
            type: "ISBN_10",
            identifier: "8520940048",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 216,
        printType: "BOOK",
        categories: ["Juvenile Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.7.8.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=dZ3DCAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=dZ3DCAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "pt-BR",
        previewLink:
          "http://books.google.com.br/books?id=dZ3DCAAAQBAJ&printsec=frontcover&dq=inauthor:%22J%C3%BAlio+Verne%22&hl=&as_pt=BOOKS&cd=10&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=dZ3DCAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=dZ3DCAAAQBAJ",
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 16.99,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 16.99,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=dZ3DCAAAQBAJ&rdid=book-dZ3DCAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 16990000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 16990000,
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
            "http://books.google.com.br/books/download/Um_capit%C3%A3o_de_quinze_anos-sample-epub.acsm?id=dZ3DCAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Um_capit%C3%A3o_de_quinze_anos-sample-pdf.acsm?id=dZ3DCAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=dZ3DCAAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "A mistura de aventura e especulação futurística resultou numa obra irresistível de 28 livros, na qual se destacam, além de Um capitão de quinze anos (1878), os romances Viagem ao centro da Terra (1864), Da Terra à Lua (1864), Vinte ...",
      },
    },
    {
      kind: "books#volume",
      id: "9qQjEAAAQBAJ",
      etag: "mhooZoWTFgA",
      selfLink: "https://www.googleapis.com/books/v1/volumes/9qQjEAAAQBAJ",
      volumeInfo: {
        title: "As extraordinárias viagens de Júlio Verne",
        authors: ["Júlio Verne"],
        publisher: "Principis",
        publishedDate: "2021-03-29",
        description:
          "Conheça as incríveis aventuras de Júlio Verne com os livros: Da Terra à Lua, A ilha misteriosa, Cinco semanas em um balão, Vinte Mil Léguas Submarinas, A Volta ao Mundo em 80 Dias e Viagem ao Centro da Terra. O autor antecipou as tecnologias do século XX em suas histórias e é considerado um dos grandes nomes da ficção científica.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9786555524130",
          },
          {
            type: "ISBN_10",
            identifier: "6555524138",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 2464,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.1.1.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=9qQjEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=9qQjEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "pt-BR",
        previewLink:
          "http://books.google.com.br/books?id=9qQjEAAAQBAJ&printsec=frontcover&dq=inauthor:%22J%C3%BAlio+Verne%22&hl=&as_pt=BOOKS&cd=11&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=9qQjEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=9qQjEAAAQBAJ",
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 13.47,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 13.47,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=9qQjEAAAQBAJ&rdid=book-9qQjEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 13470000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 13470000,
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
            "http://books.google.com.br/books/download/As_extraordin%C3%A1rias_viagens_de_J%C3%BAlio_Ve-sample-epub.acsm?id=9qQjEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/As_extraordin%C3%A1rias_viagens_de_J%C3%BAlio_Ve-sample-pdf.acsm?id=9qQjEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=9qQjEAAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Conheça as incríveis aventuras de Júlio Verne com os livros: Da Terra à Lua, A ilha misteriosa, Cinco semanas em um balão, Vinte Mil Léguas Submarinas, A Volta ao Mundo em 80 Dias e Viagem ao Centro da Terra.",
      },
    },
    {
      kind: "books#volume",
      id: "LC7KDwAAQBAJ",
      etag: "WnilKC5pEc0",
      selfLink: "https://www.googleapis.com/books/v1/volumes/LC7KDwAAQBAJ",
      volumeInfo: {
        title: "Um capitão de quinze anos",
        authors: ["Júlio Verne"],
        publisher: "Editora Itapuca",
        publishedDate: "2020-01-14",
        description:
          "Um Capitão de Quinze Anos é considerada um das melhores obras infanto-juvenis de Júlio Verne. Traz a história do menino Dick Sand, que é um aprendiz a bordo do navio Peregrino. Muitas coisas acontecem na viagem e Dick Sand é obrigado a comandar o navio, lutando para salvar a vida das pessoas a bordo e ainda ajudar seus novos amigos a fugir dos traficantes de escravos. O livro apresenta uma aventura maravilhosa, na terra e no mar.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9786550390259",
          },
          {
            type: "ISBN_10",
            identifier: "6550390257",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 67,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.2.2.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=LC7KDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=LC7KDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "pt-BR",
        previewLink:
          "http://books.google.com.br/books?id=LC7KDwAAQBAJ&printsec=frontcover&dq=inauthor:%22J%C3%BAlio+Verne%22&hl=&as_pt=BOOKS&cd=12&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=LC7KDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=LC7KDwAAQBAJ",
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 9.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 9.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=LC7KDwAAQBAJ&rdid=book-LC7KDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 9900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 9900000,
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
            "http://books.google.com.br/books/download/Um_capit%C3%A3o_de_quinze_anos-sample-epub.acsm?id=LC7KDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Um_capit%C3%A3o_de_quinze_anos-sample-pdf.acsm?id=LC7KDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=LC7KDwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Um Capitão de Quinze Anos é considerada um das melhores obras infanto-juvenis de Júlio Verne.",
      },
    },
    {
      kind: "books#volume",
      id: "rjnnDwAAQBAJ",
      etag: "cb2QZeREdjo",
      selfLink: "https://www.googleapis.com/books/v1/volumes/rjnnDwAAQBAJ",
      volumeInfo: {
        title: "Cinco semanas num balão",
        subtitle: "Viagem de descobertas na África por três ingleses",
        authors: ["Júlio Verne"],
        publisher: "Via Leitura",
        publishedDate: "2020-05-26",
        description:
          "Primeiro livro de sucesso de Júlio Verne, Cinco semanas num balão é uma aventura de exploração pelo continente africano. Publicada em 1863, a obra traz detalhes da geografia, das culturas e dos animais da África. Tudo fruto de pesquisas e da inventividade de Verne, que nunca pôs os pés no continente africano ou em um balão. A história narra a jornada de Samuel Fergusson, que, acompanhado de seu criado e de um caçador escocês, parte de Zanzibar em um balão. O trio busca chegar à outra costa da África e encontrar no caminho a nascente do rio Nilo. Cinco semanas num balão é uma deliciosa aventura e um registro do início de carreira daquele que viria a se tornar um dos mais célebres nomes da literatura de aventura e de ficção científica.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9786587034133",
          },
          {
            type: "ISBN_10",
            identifier: "6587034136",
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 304,
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
            "http://books.google.com/books/content?id=rjnnDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=rjnnDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "pt-BR",
        previewLink:
          "http://books.google.com.br/books?id=rjnnDwAAQBAJ&printsec=frontcover&dq=inauthor:%22J%C3%BAlio+Verne%22&hl=&as_pt=BOOKS&cd=13&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=rjnnDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=rjnnDwAAQBAJ",
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 19.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 19.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=rjnnDwAAQBAJ&rdid=book-rjnnDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 19900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 19900000,
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
            "http://books.google.com.br/books/download/Cinco_semanas_num_bal%C3%A3o-sample-epub.acsm?id=rjnnDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=rjnnDwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Primeiro livro de sucesso de Júlio Verne, Cinco semanas num balão é uma aventura de exploração pelo continente africano.",
      },
    },
    {
      kind: "books#volume",
      id: "Ub0TEAAAQBAJ",
      etag: "jhiv8lxXx60",
      selfLink: "https://www.googleapis.com/books/v1/volumes/Ub0TEAAAQBAJ",
      volumeInfo: {
        title: "Da Terra à Lua",
        authors: ["Júlio Verne"],
        publisher: "Principis",
        publishedDate: "2021-01-01",
        description:
          "Da Terra à Lua é a primeira história da exploração espacial escrita. Foi publicada em 1865 e apresenta, de maneira surpreendente, conjectura científica precisa. Quando os membros do Baltimore Gun Club veteranos de guerra entediados decidem embarcar em um projeto para atirar na lua, começa a corrida para arrecadar dinheiro, superar desafios de engenharia e convencer os detratores de que eles não são Lunáticos.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9786555522693",
          },
          {
            type: "ISBN_10",
            identifier: "6555522690",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 190,
        printType: "BOOK",
        categories: ["Young Adult Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.1.1.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=Ub0TEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=Ub0TEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "pt-BR",
        previewLink:
          "http://books.google.com.br/books?id=Ub0TEAAAQBAJ&printsec=frontcover&dq=inauthor:%22J%C3%BAlio+Verne%22&hl=&as_pt=BOOKS&cd=14&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=Ub0TEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=Ub0TEAAAQBAJ",
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 1.49,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 1.49,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=Ub0TEAAAQBAJ&rdid=book-Ub0TEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 1490000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 1490000,
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
            "http://books.google.com.br/books/download/Da_Terra_%C3%A0_Lua-sample-epub.acsm?id=Ub0TEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Da_Terra_%C3%A0_Lua-sample-pdf.acsm?id=Ub0TEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=Ub0TEAAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Da Terra à Lua é a primeira história da exploração espacial escrita.",
      },
    },
    {
      kind: "books#volume",
      id: "t9LXzwEACAAJ",
      etag: "XoOhyOIUX2g",
      selfLink: "https://www.googleapis.com/books/v1/volumes/t9LXzwEACAAJ",
      volumeInfo: {
        title: "Vinte Mil Léguas Submarinas - Júlio Verne",
        authors: ["Júlio Verne"],
        publishedDate: "2023-05-28",
        description:
          "Neste romance de sucesso, Júlio Verne, o mestre da ficção científica, desenvolve uma narrativa de aventura pelo fascinante mundo subaquático. Acompanhe o professor Aronnax e seu fiel escudeiro Conselho em uma jornada incrível. Venha descobrir tesouros inestimáveis e embarcações naufragadas, ex",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "6587817483",
          },
          {
            type: "ISBN_13",
            identifier: "9786587817484",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 0,
        printType: "BOOK",
        categories: ["Drama"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=t9LXzwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=t9LXzwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "pt-BR",
        previewLink:
          "http://books.google.com.br/books?id=t9LXzwEACAAJ&dq=inauthor:%22J%C3%BAlio+Verne%22&hl=&as_pt=BOOKS&cd=15&source=gbs_api",
        infoLink:
          "http://books.google.com.br/books?id=t9LXzwEACAAJ&dq=inauthor:%22J%C3%BAlio+Verne%22&hl=&as_pt=BOOKS&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Vinte_Mil_L%C3%A9guas_Submarinas_J%C3%BAlio_Vern.html?hl=&id=t9LXzwEACAAJ",
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
          "http://play.google.com/books/reader?id=t9LXzwEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Neste romance de sucesso, Júlio Verne, o mestre da ficção científica, desenvolve uma narrativa de aventura pelo fascinante mundo subaquático.",
      },
    },
    {
      kind: "books#volume",
      id: "1pLnDwAAQBAJ",
      etag: "6O51TRnYCqk",
      selfLink: "https://www.googleapis.com/books/v1/volumes/1pLnDwAAQBAJ",
      volumeInfo: {
        title: "Da Terra à Lua",
        subtitle: "Viagem direta em 97 horas e 20 minutos",
        authors: ["Júlio Verne"],
        publisher: "L&PM Pocket",
        publishedDate: "2020-05-29",
        description:
          'Após o fim da Guerra da Secessão, os membros do Gun Club de Baltimore, envolvidos principalmente com a indústria de canhões, anseiam por uma nova empreitada armamentista. O presidente do famigerado clube, Impey Barbicane, propõe construírem o maior projétil já visto e enviá-lo à Lua. Será que eles conseguirão fazê-lo chegar ao satélite com seres humanos dentro? Publicada em 1865, "Da Terra à Lua" é uma das obras de ficção científica mais audaciosas de Júlio Verne (1828-1905), que antecipou em mais de cem anos a chegada do homem à Lua.',
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9786556660547",
          },
          {
            type: "ISBN_10",
            identifier: "655666054X",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 210,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "0.4.4.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=1pLnDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=1pLnDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "pt-BR",
        previewLink:
          "http://books.google.com.br/books?id=1pLnDwAAQBAJ&printsec=frontcover&dq=inauthor:%22J%C3%BAlio+Verne%22&hl=&as_pt=BOOKS&cd=16&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=1pLnDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=1pLnDwAAQBAJ",
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 17.9,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 17.9,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=1pLnDwAAQBAJ&rdid=book-1pLnDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 17900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 17900000,
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
            "http://books.google.com.br/books/download/Da_Terra_%C3%A0_Lua-sample-epub.acsm?id=1pLnDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Da_Terra_%C3%A0_Lua-sample-pdf.acsm?id=1pLnDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=1pLnDwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Publicada em 1865, &quot;Da Terra à Lua&quot; é uma das obras de ficção científica mais audaciosas de Júlio Verne (1828-1905), que antecipou em mais de cem anos a chegada do homem à Lua.",
      },
    },
    {
      kind: "books#volume",
      id: "PRnzzwEACAAJ",
      etag: "lMH7TUDCW3g",
      selfLink: "https://www.googleapis.com/books/v1/volumes/PRnzzwEACAAJ",
      volumeInfo: {
        title: "Viagem ao centro da Terra- Versão luxo",
        authors: ["Júlio Verne"],
        publishedDate: "2022-10-19",
        description:
          "Curioso e arrojado , o professor e geólogo otto Lidenbrock imagina-se em uma aventura extraordinária quando decifra uma mensagem do alquimista Arne Saknuessem , que diz ter encontrado uma passagem para o centro da terra.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "6558702533",
          },
          {
            type: "ISBN_13",
            identifier: "9786558702535",
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
          "http://books.google.com.br/books?id=PRnzzwEACAAJ&dq=inauthor:%22J%C3%BAlio+Verne%22&hl=&as_pt=BOOKS&cd=17&source=gbs_api",
        infoLink:
          "http://books.google.com.br/books?id=PRnzzwEACAAJ&dq=inauthor:%22J%C3%BAlio+Verne%22&hl=&as_pt=BOOKS&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Viagem_ao_centro_da_Terra_Vers%C3%A3o_luxo.html?hl=&id=PRnzzwEACAAJ",
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
          "http://play.google.com/books/reader?id=PRnzzwEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Curioso e arrojado , o professor e geólogo otto Lidenbrock imagina-se em uma aventura extraordinária quando decifra uma mensagem do alquimista Arne Saknuessem , que diz ter encontrado uma passagem para o centro da terra.",
      },
    },
    {
      kind: "books#volume",
      id: "LAIWEAAAQBAJ",
      etag: "Cb0/oM1wl7k",
      selfLink: "https://www.googleapis.com/books/v1/volumes/LAIWEAAAQBAJ",
      volumeInfo: {
        title: "Cinco semanas em um balão",
        authors: ["Júlio Verne"],
        publisher: "Principis",
        publishedDate: "2020-01-19",
        description:
          "Samuel Fergusson parte de Zanzibar com seu criado e um caçador escocês em uma ousada viagem de balão. No caminho, eles pretendem encontrar a nascente do rio Nilo. Essa aventura dá um vislumbre da exploração da África, território ainda não conhecido por completo pelos europeus da época. Uma visão que somente a prodigiosa mente de Júlio Verne é capaz de nos enredar.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9786555522976",
          },
          {
            type: "ISBN_10",
            identifier: "6555522976",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 292,
        printType: "BOOK",
        categories: ["Young Adult Nonfiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.1.1.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=LAIWEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=LAIWEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "pt-BR",
        previewLink:
          "http://books.google.com.br/books?id=LAIWEAAAQBAJ&printsec=frontcover&dq=inauthor:%22J%C3%BAlio+Verne%22&hl=&as_pt=BOOKS&cd=18&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=LAIWEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=LAIWEAAAQBAJ",
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 5.96,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 5.96,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=LAIWEAAAQBAJ&rdid=book-LAIWEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 5960000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 5960000,
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
            "http://books.google.com.br/books/download/Cinco_semanas_em_um_bal%C3%A3o-sample-epub.acsm?id=LAIWEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Cinco_semanas_em_um_bal%C3%A3o-sample-pdf.acsm?id=LAIWEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=LAIWEAAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Essa aventura dá um vislumbre da exploração da África, território ainda não conhecido por completo pelos europeus da época. Uma visão que somente a prodigiosa mente de Júlio Verne é capaz de nos enredar.",
      },
    },
    {
      kind: "books#volume",
      id: "8xf6DQAAQBAJ",
      etag: "5k3Rs5LZSas",
      selfLink: "https://www.googleapis.com/books/v1/volumes/8xf6DQAAQBAJ",
      volumeInfo: {
        title: "O Raio Verde",
        subtitle: "Texto adaptado",
        authors: ["Júlio Verne"],
        publisher: "Editora Melhoramentos",
        publishedDate: "2017-01-24",
        description:
          "Edição traduzida e condensada por Maria Alice de A. Sampaio Doria. Para a jovem Helena Campbell, nada é mais importante do que ver o misterioso Raio Verde, pois ela acredita na lenda segundo a qual quem o vê encontrará a pessoa ideal para se casar. Já para seus tios, os irmãos Campbell, nada vale mais do que a felicidade de sua linda sobrinha. Por isso, querem casá-la com o jovem e promissor cientista Aristobulus Ursiclos. E este não medirá esforços para se casar com Helena, mesmo que tenha de atrapalhar um pouco os planos da jovem de ver o Raio Verde. Em busca do tal fenômeno, nossos personagens vão viver a maior aventura de suas vidas, enfrentando incríveis perigos e obstáculos através do mar e das montanhas da Escócia a fim de encontrar o lugar perfeito de onde poderão ver o inexplicavél Raio Verde. Júlio Verne, que tantas vezes nos surpreendeu com as mais geniais obras de ficção e aventura, desta vez parte para a investigação de um dos maiores mistérios que até hoje a humanidade não conseguiu compreender nem desvendar: o amor.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788506061688",
          },
          {
            type: "ISBN_10",
            identifier: "8506061687",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 128,
        printType: "BOOK",
        categories: ["Juvenile Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "2.8.8.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=8xf6DQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=8xf6DQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "pt-BR",
        previewLink:
          "http://books.google.com.br/books?id=8xf6DQAAQBAJ&printsec=frontcover&dq=inauthor:%22J%C3%BAlio+Verne%22&hl=&as_pt=BOOKS&cd=19&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=8xf6DQAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=8xf6DQAAQBAJ",
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 37,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 37,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=8xf6DQAAQBAJ&rdid=book-8xf6DQAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 37000000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 37000000,
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
            "http://books.google.com.br/books/download/O_Raio_Verde-sample-epub.acsm?id=8xf6DQAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/O_Raio_Verde-sample-pdf.acsm?id=8xf6DQAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=8xf6DQAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Júlio Verne, que tantas vezes nos surpreendeu com as mais geniais obras de ficção e aventura, desta vez parte para a investigação de um dos maiores mistérios que até hoje a humanidade não conseguiu compreender nem desvendar: o amor.",
      },
    },
    {
      kind: "books#volume",
      id: "LisXEAAAQBAJ",
      etag: "6mYUYCSEqZ4",
      selfLink: "https://www.googleapis.com/books/v1/volumes/LisXEAAAQBAJ",
      volumeInfo: {
        title: "Volta ao mundo em oitenta dias",
        subtitle: "Around the World in Eighty Days",
        authors: ["Júlio Verne"],
        publisher: "Editora do Brasil",
        publishedDate: "2021-01-22",
        description:
          "Embarque agora mesmo nessa emocionante viagem com o inglês Phileas Fogg e seu fiel criado francês, Passepartout. Após uma aposta, esse misterioso cavalheiro parte em uma jornada alucinada pelo mundo, correndo contra o tempo para dar uma volta completa em torno da Terra do século XIX em apenas 80 dias. No meio do caminho há inúmeras surpresas, sustos e aventuras fascinantes. Pegue uma carona nesta fantástica obra do escritor Júlio Verne, pai da ficção científica, adaptada em português e inglês.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9786558179924",
          },
          {
            type: "ISBN_10",
            identifier: "655817992X",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 148,
        printType: "BOOK",
        categories: ["Juvenile Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "2.9.9.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=LisXEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=LisXEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.br/books?id=LisXEAAAQBAJ&printsec=frontcover&dq=inauthor:%22J%C3%BAlio+Verne%22&hl=&as_pt=BOOKS&cd=20&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=LisXEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=LisXEAAAQBAJ",
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 54.18,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 54.18,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=LisXEAAAQBAJ&rdid=book-LisXEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 54180000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 54180000,
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
            "http://books.google.com.br/books/download/Volta_ao_mundo_em_oitenta_dias-sample-epub.acsm?id=LisXEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Volta_ao_mundo_em_oitenta_dias-sample-pdf.acsm?id=LisXEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=LisXEAAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "No meio do caminho há inúmeras surpresas, sustos e aventuras fascinantes. Pegue uma carona nesta fantástica obra do escritor Júlio Verne, pai da ficção científica, adaptada em português e inglês.",
      },
    },
    {
      kind: "books#volume",
      id: "goy6DwAAQBAJ",
      etag: "RJz3lm9B95c",
      selfLink: "https://www.googleapis.com/books/v1/volumes/goy6DwAAQBAJ",
      volumeInfo: {
        title: "A Galera Chancellor",
        authors: ["Julio Verne"],
        publisher: "NoBooks Editorial",
        publishedDate: "2015-10-05",
        description:
          "Esta obra é apresentada pelo autor sob a forma de um diário escrito na primeira pessoa. O protagonista descreve o naufrágio do «Chancellor», originado por um fogo, e as grandes privações e angústias com que os náufragos são confrontados.",
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 221,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.1.1.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=goy6DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=goy6DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "pt-BR",
        previewLink:
          "http://books.google.com.br/books?id=goy6DwAAQBAJ&printsec=frontcover&dq=inauthor:%22J%C3%BAlio+Verne%22&hl=&as_pt=BOOKS&cd=21&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=goy6DwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=goy6DwAAQBAJ",
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 8.05,
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 8.05,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=goy6DwAAQBAJ&rdid=book-goy6DwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 8050000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 8050000,
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
          "http://play.google.com/books/reader?id=goy6DwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Esta obra é apresentada pelo autor sob a forma de um diário escrito na primeira pessoa.",
      },
    },
  ],
};
