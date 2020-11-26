import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en-EN': {
        'btn': {
            'save': 'Save',
            'cancel': 'Cancel',
            'next': 'Next'
        },
        'nav': {
            'front': {
                'home': 'Home',
                'shop': 'Shop',
                'categories': 'Categories',
                'contact': 'Contact',
                'terms': 'Regulation',
                'pp': 'Private policy',
                'sm': 'Visit us on:'
            },
            'account': {
                'order': 'Orders',
                'setting': 'Settings',
                'logout': 'Logout'
            },
            'auth': {
                'login': 'Sign In',
                'register': 'Sign Up',
                'forgot_pass': 'Forgot password',
                'hello': 'Hello, '
            }
        },
        'page': {
            'home': {
                'best': 'Best',
                'news': 'News',
                'promo': 'Promotion',
                'info': {
                    'shipment': 'Quick delivery',
                    'security': 'Secure payments',
                    'support': 'Hassle-free shopping'
                }
            },
            'product': {
                'category': 'Category',
                'in_some_category': 'In the some category',
                'select_color': 'Select color',
                'select_size': 'Select size',
                'add_basket': 'Add to basket',
                'buy_now': 'Buy now',
                'loading_related_product': 'Loading related products'
            },
            'basket': {
                'title': 'Basket',
                'size': 'Size',
                'color': 'Color',
                'amount': 'Price',
                'total_amount': 'Total price',
                'summary': 'Summary',
                'select_shipment': 'Select shipment',
                'info': 'Nie zwlekaj z zakupem,\n' +
                    '                           dodanie produktów do koszyka nie oznacza ich rezerwacji'
            },
            'order': {
                'title': 'Order',
                'buy_company': 'Kupuję jako firma',
                'warning': 'Comments (optional)',
                'company_name': 'Company name',
                'company_nip': 'NIP',
                'create_account': 'register account',
                'create_account_profit': 'learn about the benefits of having an account',
                'create_account_pass': 'Password to account'
            }
        },
        'form': {
            'title': 'Title ...',
            'category': 'Select category',
            'type': 'Select type',
            'name': 'Name ...',
            'email': 'E-mail',
            'pass': 'Password',
            'first_name': 'First name',
            'last_name': 'Last name',
            'min': 'mniej',
            'more': 'more',
            'phone': 'Phone number',
            'post_code': 'Post code',
            'city': 'City',
            'address': 'Address',
            'country': 'Country',
            'sort': {
                'title': 'Sort by',
                'options': {
                    'asc': 'Oldest',
                    'desc': 'Latest',
                    'price_min': 'Price (ascending)',
                    'price_max': 'Price (descending)'
                }
            },
            'pagination': {
                'title': 'Records on page'
            }
        },
        'msg': {
            'no_data': 'No data to display',
            'no_basket': 'No products in basket'
        },
        'lang': {
            'select': 'Select language'
        }
    },
    'pl-PL': {
        'btn': {
            'save': 'Zapisz',
            'cancel': 'Anuluj',
            'next': 'Dalej'
        },
        'nav': {
            'front': {
                'home': 'Strona główna',
                'shop': 'Sklep',
                'categories': 'Kategorie',
                'contact': 'Contact',
                'terms': 'Reglulamin',
                'pp': 'Polityka prywatności',
                'sm': 'Odwieź nas na:'
            },
            'account': {
                'order': 'Zamówienia',
                'setting': 'Ustawienia',
                'logout': 'Wyloguj się'
            },
            'auth': {
                'login': 'Zaloguj się',
                'register': 'Zarejestruj się',
                'forgot_pass': 'Przypomnij hasło',
                'hello': 'Cześć, '
            }
        },
        'page': {
            'home': {
                'best': 'Najlepsze',
                'news': 'Nowości',
                'promo': 'Promocje',
                'info': {
                    'shipment': 'Szybka dostawa',
                    'security': 'Bezpieczne płatności',
                    'support': 'Bezproblemowe zakupy'
                }
            },
            'product': {
                'category': 'Kategoria',
                'in_some_category': 'W tej samej kategorii',
                'select_color': 'Wybierz kolor',
                'select_size': 'Wybierz rozmiar',
                'add_basket': 'Dodaj do koszyka',
                'buy_now': 'Kup teraz',
                'loading_related_product': 'Łauję powiązane produkty'
            },
            'basket': {
                'title': 'Koszyk',
                'size': 'Rozmiar',
                'color': 'Kolor',
                'amount': 'Cena',
                'total_amount': 'Cena łącznie',
                'summary': 'Podsumowanie',
                'select_shipment': 'Wybierz wysyłkę',
                'info': 'Nie zwlekaj z zakupem,\n' +
                    '                           dodanie produktów do koszyka nie oznacza ich rezerwacji'
            },
            'order': {
                'title': 'Zamówienie',
                'buy_company': 'Kupuję jako firma',
                'warning': 'Uwagi (opcjonalnie)',
                'company_name': 'Nazwa firmy',
                'company_nip': 'NIP',
                'create_account': 'załóż konto',
                'create_account_profit': 'poznaj korzyści z posiadania konta',
                'create_account_pass': 'Hasło do konta'
            }
        },
        'form': {
            'title': 'Tytuł ...',
            'category': 'Wybierz kategorię',
            'type': 'Wybierz rodzaj',
            'name': 'Nazwa ...',
            'email': 'E-mail',
            'pass': 'Hasło',
            'first_name': 'Imię',
            'last_name': 'Nazwisko',
            'min': 'mniej',
            'more': 'więcej',
            'phone': 'Telefon',
            'post_code': 'Kod pocztowy',
            'city': 'Miasto',
            'address': 'Adres',
            'country': 'Kraj',
            'sort': {
                'title': 'Sortuj wg',
                'options': {
                    'asc': 'Najstarsze',
                    'desc': 'Najnowsze',
                    'price_min': 'Cena (rosnąco)',
                    'price_max': 'Cena (malejąco)'
                }
            },
            'pagination': {
                'title': 'Rekordów na stronę'
            }
        },
        'msg': {
            'no_data': 'Brak danych do wyświetlenia',
            'no_basket': 'Brak produktów w koszyku'
        },
        'lang': {
            'select': 'Wybierz język'
        }
    }
}

function setLang() {
    localStorage.setItem('lang', window.navigator.language)
    return window.navigator.language;
}

const v18n = new VueI18n({
    locale: localStorage.getItem('lang') ? localStorage.getItem('lang') : setLang(), // set locale
    fallbackLocale: 'en-EN', // set fallback locale
    messages,
})

export default v18n
