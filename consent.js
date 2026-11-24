/* Banner cookie City Transfer (CookieConsent v3, impostato secondo le linee guida del Garante).
   Statistiche (Google Analytics 4, Microsoft Clarity) partono solo dopo "Accetta". */
CookieConsent.run({
  cookie: { name: 'cc_cookie', expiresAfterDays: 182 },
  guiOptions: {
    consentModal: { layout: 'box', position: 'bottom left', equalWeightButtons: true, flipButtons: false },
    preferencesModal: { layout: 'box', equalWeightButtons: true, flipButtons: false }
  },
  categories: {
    necessary: { enabled: true, readOnly: true },
    analytics: {
      autoClear: { cookies: [{ name: /^_ga/ }, { name: /^_cl/ }], reloadPage: true },
      services: {
        ga4: { label: 'Google Analytics 4' },
        clarity: { label: 'Microsoft Clarity' }
      }
    }
  },
  language: {
    default: 'it',
    translations: {
      it: {
        consentModal: {
          title: 'Usiamo i cookie',
          description: 'Usiamo cookie tecnici necessari al sito e, solo con il tuo consenso, cookie statistici (Google Analytics, Microsoft Clarity) per capire come viene usato il sito. Chiudendo con la X continui senza accettare. <a href="/cookie-policy.html">Cookie policy</a>',
          closeIconLabel: 'Rifiuta e chiudi',
          acceptAllBtn: 'Accetta',
          acceptNecessaryBtn: 'Rifiuta',
          showPreferencesBtn: 'Personalizza'
        },
        preferencesModal: {
          title: 'Preferenze cookie',
          acceptAllBtn: 'Accetta tutti',
          acceptNecessaryBtn: 'Rifiuta tutti',
          savePreferencesBtn: 'Salva le preferenze',
          closeIconLabel: 'Chiudi',
          sections: [
            { title: 'Cookie necessari', description: 'Servono al funzionamento del sito e a ricordare le tue scelte sui cookie. Non richiedono consenso.', linkedCategory: 'necessary' },
            { title: 'Statistiche', description: 'Ci aiutano a capire, in forma aggregata, come viene usato il sito: pagine visitate, provenienza delle visite, clic e scorrimento (Google Analytics 4, Microsoft Clarity).', linkedCategory: 'analytics' },
            { title: 'Maggiori informazioni', description: 'Leggi la <a href="/cookie-policy.html">cookie policy</a> e l\'<a href="/privacy.html">informativa privacy</a>.' }
          ]
        }
      }
    }
  }
});
