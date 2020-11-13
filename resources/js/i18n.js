import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en-EN': {

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
                'forgot_pass': 'Przypomnij hasło'
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


const v18n = new VueI18n({
    locale: localStorage.getItem('lang'), // set locale
    fallbackLocale: 'en-EN', // set fallback locale
    messages,
})

export default v18n
