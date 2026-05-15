// Mictoo — UI translation dictionary
// Plain JS, no deps. Add a new locale by adding a key to LOCALES + DICT.
//
// Locale detection:
//   - Server: `detectLocaleFromPath('/fr/about')` → 'fr'
//   - Client: useLocale() (see components/useLocale.js)

export const LOCALES = ['en', 'fr', 'de', 'es', 'ru']
export const DEFAULT_LOCALE = 'en'

// Used by the language switcher in the header.
// Endonyms (language names in their own language) — industry standard.
export const LOCALE_META = {
  en: { code: 'en', endonym: 'English',  flag: '🇬🇧', htmlLang: 'en' },
  fr: { code: 'fr', endonym: 'Français', flag: '🇫🇷', htmlLang: 'fr' },
  de: { code: 'de', endonym: 'Deutsch',  flag: '🇩🇪', htmlLang: 'de' },
  es: { code: 'es', endonym: 'Español',  flag: '🇪🇸', htmlLang: 'es' },
  ru: { code: 'ru', endonym: 'Русский',  flag: '🇷🇺', htmlLang: 'ru' },
}

// Extract locale from a URL path. Returns one of LOCALES.
export function detectLocaleFromPath(path) {
  if (!path) return DEFAULT_LOCALE
  const seg = path.split('/').filter(Boolean)[0]
  return LOCALES.includes(seg) ? seg : DEFAULT_LOCALE
}

// Prepend a locale to a path. localized('/about', 'fr') → '/fr/about'
// EN stays at root: localized('/about', 'en') → '/about'
export function localized(path, locale) {
  if (!locale || locale === DEFAULT_LOCALE) return path
  if (path === '/') return `/${locale}`
  return `/${locale}${path}`
}

// Remove locale prefix from a path. stripLocale('/fr/about') → '/about'
export function stripLocale(path) {
  if (!path) return '/'
  const segs = path.split('/').filter(Boolean)
  if (segs.length && LOCALES.includes(segs[0])) {
    const rest = '/' + segs.slice(1).join('/')
    return rest === '/' ? '/' : rest
  }
  return path
}

// ───────────────────────────────────────────────────────────────────────────
// Translation dictionary
// ───────────────────────────────────────────────────────────────────────────

export const DICT = {
  en: {
    nav: { transcribe: 'Transcribe', howItWorks: 'How it works', about: 'About', contact: 'Contact' },
    langSwitcher: { label: 'Language' },
    picker: { label: 'Language', auto: '🌐 Auto-detect' },
    dropzone: {
      primary: 'Drop your file here',
      dragging: 'Drop it!',
      secondary: 'or click to browse',
      maxSize: 'Max 4MB',
      bigFileHint: 'Got a bigger file? See how to compress.',
    },
    status: {
      transcribing: 'Transcribing…',
      somethingWrong: 'Something went wrong',
      tryAgain: 'Try again',
      fileTooLarge: 'File too large. Max size is 4MB.',
      fileTooLargeDetailed: 'Your file is {size}. The free limit is 4 MB.',
      howToCompress: 'How to compress →',
    },
    result: {
      title: 'Transcript',
      stats: '{words} words · {chars} characters · {name}',
      copy: 'Copy',
      copied: 'Copied!',
      newFile: '↑ New file',
      editHint: 'You can edit the transcript above.',
      srtHint: ' Download .srt for subtitles.',
      timestampedHint: 'Download .txt with [HH:MM:SS] timestamps per paragraph',
    },
    landing: { faqTitle: 'Frequently asked questions', moreTools: 'More transcription tools' },
    summary: {
      title: 'AI Summary',
      loading: 'Generating summary…',
      keyPoints: 'Key points',
      actionItems: 'Action items',
      error: "Couldn't generate the summary.",
      retry: 'Retry',
      show: 'Show AI Summary',
      hide: 'Hide AI Summary',
    },
    footer: {
      useCases: 'Use Cases', formats: 'Formats', tools: 'Tools', languages: 'Languages',
      about: 'About', contact: 'Contact', privacy: 'Privacy', terms: 'Terms',
      copyright: '© {year} Mictoo. Free AI transcription tool.',
      counter: '{count} files transcribed',
    },
    languages: {
      en: '🇬🇧 English', es: '🇪🇸 Spanish', fr: '🇫🇷 French', de: '🇩🇪 German', pt: '🇧🇷 Portuguese',
      ru: '🇷🇺 Russian', it: '🇮🇹 Italian', nl: '🇳🇱 Dutch', pl: '🇵🇱 Polish', tr: '🇹🇷 Turkish',
      ja: '🇯🇵 Japanese', ko: '🇰🇷 Korean', zh: '🇨🇳 Chinese', ar: '🇸🇦 Arabic', hi: '🇮🇳 Hindi',
    },
  },

  fr: {
    nav: { transcribe: 'Transcrire', howItWorks: 'Comment ça marche', about: 'À propos', contact: 'Contact' },
    langSwitcher: { label: 'Langue' },
    picker: { label: 'Langue', auto: '🌐 Détection auto' },
    dropzone: {
      primary: 'Déposez votre fichier ici',
      dragging: 'Lâchez !',
      secondary: 'ou cliquez pour parcourir',
      maxSize: 'Max 4 Mo',
      bigFileHint: 'Fichier plus volumineux ? Voir comment compresser.',
    },
    status: {
      transcribing: 'Transcription en cours…',
      somethingWrong: "Une erreur s'est produite",
      tryAgain: 'Réessayer',
      fileTooLarge: 'Fichier trop volumineux. Taille maximale : 4 Mo.',
      fileTooLargeDetailed: 'Votre fichier fait {size}. La limite gratuite est de 4 Mo.',
      howToCompress: 'Comment compresser →',
    },
    result: {
      title: 'Transcription',
      stats: '{words} mots · {chars} caractères · {name}',
      copy: 'Copier',
      copied: 'Copié !',
      newFile: '↑ Nouveau fichier',
      editHint: 'Vous pouvez modifier la transcription ci-dessus.',
      srtHint: ' Téléchargez le .srt pour les sous-titres.',
      timestampedHint: 'Télécharger .txt avec horodatage [HH:MM:SS] par paragraphe',
    },
    landing: { faqTitle: 'Questions fréquentes', moreTools: 'Plus d\'outils de transcription' },
    summary: {
      title: 'Résumé IA',
      loading: 'Génération du résumé…',
      keyPoints: 'Points clés',
      actionItems: 'Actions à mener',
      error: "Impossible de générer le résumé.",
      retry: 'Réessayer',
      show: 'Afficher le résumé IA',
      hide: 'Masquer le résumé IA',
    },
    footer: {
      useCases: "Cas d'usage", formats: 'Formats', tools: 'Outils', languages: 'Langues',
      about: 'À propos', contact: 'Contact', privacy: 'Confidentialité', terms: 'Conditions',
      copyright: '© {year} Mictoo. Outil de transcription IA gratuit.',
      counter: '{count} fichiers transcrits',
    },
    languages: {
      en: '🇬🇧 Anglais', es: '🇪🇸 Espagnol', fr: '🇫🇷 Français', de: '🇩🇪 Allemand', pt: '🇧🇷 Portugais',
      ru: '🇷🇺 Russe', it: '🇮🇹 Italien', nl: '🇳🇱 Néerlandais', pl: '🇵🇱 Polonais', tr: '🇹🇷 Turc',
      ja: '🇯🇵 Japonais', ko: '🇰🇷 Coréen', zh: '🇨🇳 Chinois', ar: '🇸🇦 Arabe', hi: '🇮🇳 Hindi',
    },
  },

  de: {
    nav: { transcribe: 'Transkribieren', howItWorks: "So funktioniert's", about: 'Über uns', contact: 'Kontakt' },
    langSwitcher: { label: 'Sprache' },
    picker: { label: 'Sprache', auto: '🌐 Automatisch erkennen' },
    dropzone: {
      primary: 'Datei hier ablegen',
      dragging: 'Loslassen!',
      secondary: 'oder zum Auswählen klicken',
      maxSize: 'Max. 4 MB',
      bigFileHint: 'Größere Datei? So komprimieren.',
    },
    status: {
      transcribing: 'Wird transkribiert…',
      somethingWrong: 'Ein Fehler ist aufgetreten',
      tryAgain: 'Erneut versuchen',
      fileTooLarge: 'Datei zu groß. Maximale Größe: 4 MB.',
      fileTooLargeDetailed: 'Ihre Datei ist {size} groß. Das kostenlose Limit beträgt 4 MB.',
      howToCompress: 'So komprimieren →',
    },
    result: {
      title: 'Transkript',
      stats: '{words} Wörter · {chars} Zeichen · {name}',
      copy: 'Kopieren',
      copied: 'Kopiert!',
      newFile: '↑ Neue Datei',
      editHint: 'Sie können das Transkript oben bearbeiten.',
      srtHint: ' .srt für Untertitel herunterladen.',
      timestampedHint: '.txt mit Zeitstempeln [HH:MM:SS] pro Absatz herunterladen',
    },
    landing: { faqTitle: 'Häufig gestellte Fragen', moreTools: 'Weitere Transkriptions-Tools' },
    summary: {
      title: 'KI-Zusammenfassung',
      loading: 'Zusammenfassung wird erstellt…',
      keyPoints: 'Wichtige Punkte',
      actionItems: 'Aufgaben',
      error: 'Zusammenfassung konnte nicht erstellt werden.',
      retry: 'Erneut versuchen',
      show: 'KI-Zusammenfassung anzeigen',
      hide: 'KI-Zusammenfassung ausblenden',
    },
    footer: {
      useCases: 'Anwendungsfälle', formats: 'Formate', tools: 'Tools', languages: 'Sprachen',
      about: 'Über uns', contact: 'Kontakt', privacy: 'Datenschutz', terms: 'Nutzungsbedingungen',
      copyright: '© {year} Mictoo. Kostenloses KI-Transkriptionstool.',
      counter: '{count} Dateien transkribiert',
    },
    languages: {
      en: '🇬🇧 Englisch', es: '🇪🇸 Spanisch', fr: '🇫🇷 Französisch', de: '🇩🇪 Deutsch', pt: '🇧🇷 Portugiesisch',
      ru: '🇷🇺 Russisch', it: '🇮🇹 Italienisch', nl: '🇳🇱 Niederländisch', pl: '🇵🇱 Polnisch', tr: '🇹🇷 Türkisch',
      ja: '🇯🇵 Japanisch', ko: '🇰🇷 Koreanisch', zh: '🇨🇳 Chinesisch', ar: '🇸🇦 Arabisch', hi: '🇮🇳 Hindi',
    },
  },

  es: {
    nav: { transcribe: 'Transcribir', howItWorks: 'Cómo funciona', about: 'Acerca de', contact: 'Contacto' },
    langSwitcher: { label: 'Idioma' },
    picker: { label: 'Idioma', auto: '🌐 Detección automática' },
    dropzone: {
      primary: 'Suelta tu archivo aquí',
      dragging: '¡Suéltalo!',
      secondary: 'o haz clic para buscar',
      maxSize: 'Máx. 4 MB',
      bigFileHint: '¿Archivo más grande? Cómo comprimir.',
    },
    status: {
      transcribing: 'Transcribiendo…',
      somethingWrong: 'Algo salió mal',
      tryAgain: 'Reintentar',
      fileTooLarge: 'Archivo demasiado grande. Tamaño máximo: 4 MB.',
      fileTooLargeDetailed: 'Tu archivo pesa {size}. El límite gratuito es 4 MB.',
      howToCompress: 'Cómo comprimir →',
    },
    result: {
      title: 'Transcripción',
      stats: '{words} palabras · {chars} caracteres · {name}',
      copy: 'Copiar',
      copied: '¡Copiado!',
      newFile: '↑ Nuevo archivo',
      editHint: 'Puedes editar la transcripción arriba.',
      srtHint: ' Descarga .srt para subtítulos.',
      timestampedHint: 'Descargar .txt con marcas de tiempo [HH:MM:SS] por párrafo',
    },
    landing: { faqTitle: 'Preguntas frecuentes', moreTools: 'Más herramientas de transcripción' },
    summary: {
      title: 'Resumen IA',
      loading: 'Generando resumen…',
      keyPoints: 'Puntos clave',
      actionItems: 'Acciones',
      error: 'No se pudo generar el resumen.',
      retry: 'Reintentar',
      show: 'Mostrar resumen IA',
      hide: 'Ocultar resumen IA',
    },
    footer: {
      useCases: 'Casos de uso', formats: 'Formatos', tools: 'Herramientas', languages: 'Idiomas',
      about: 'Acerca de', contact: 'Contacto', privacy: 'Privacidad', terms: 'Términos',
      copyright: '© {year} Mictoo. Herramienta gratuita de transcripción con IA.',
      counter: '{count} archivos transcritos',
    },
    languages: {
      en: '🇬🇧 Inglés', es: '🇪🇸 Español', fr: '🇫🇷 Francés', de: '🇩🇪 Alemán', pt: '🇧🇷 Portugués',
      ru: '🇷🇺 Ruso', it: '🇮🇹 Italiano', nl: '🇳🇱 Neerlandés', pl: '🇵🇱 Polaco', tr: '🇹🇷 Turco',
      ja: '🇯🇵 Japonés', ko: '🇰🇷 Coreano', zh: '🇨🇳 Chino', ar: '🇸🇦 Árabe', hi: '🇮🇳 Hindi',
    },
  },

  ru: {
    nav: { transcribe: 'Транскрибация', howItWorks: 'Как это работает', about: 'О сервисе', contact: 'Контакты' },
    langSwitcher: { label: 'Язык' },
    picker: { label: 'Язык', auto: '🌐 Определить автоматически' },
    dropzone: {
      primary: 'Перетащите файл сюда',
      dragging: 'Отпустите!',
      secondary: 'или нажмите, чтобы выбрать',
      maxSize: 'Макс. 4 МБ',
      bigFileHint: 'Файл больше? Как сжать.',
    },
    status: {
      transcribing: 'Распознавание…',
      somethingWrong: 'Что-то пошло не так',
      tryAgain: 'Попробовать снова',
      fileTooLarge: 'Файл слишком большой. Максимальный размер: 4 МБ.',
      fileTooLargeDetailed: 'Ваш файл — {size}. Бесплатный лимит — 4 МБ.',
      howToCompress: 'Как сжать →',
    },
    result: {
      title: 'Расшифровка',
      stats: '{words} слов · {chars} символов · {name}',
      copy: 'Скопировать',
      copied: 'Скопировано',
      newFile: '↑ Новый файл',
      editHint: 'Расшифровку выше можно отредактировать.',
      srtHint: ' Скачайте .srt для субтитров.',
      timestampedHint: 'Скачать .txt с таймкодами [HH:MM:SS] перед каждым абзацем',
    },
    landing: { faqTitle: 'Частые вопросы', moreTools: 'Другие инструменты транскрибации' },
    summary: {
      title: 'AI-резюме',
      loading: 'Генерация резюме…',
      keyPoints: 'Ключевые тезисы',
      actionItems: 'Задачи',
      error: 'Не удалось создать резюме.',
      retry: 'Повторить',
      show: 'Показать AI-резюме',
      hide: 'Скрыть AI-резюме',
    },
    footer: {
      useCases: 'Сценарии', formats: 'Форматы', tools: 'Инструменты', languages: 'Языки',
      about: 'О сервисе', contact: 'Контакты', privacy: 'Конфиденциальность', terms: 'Условия',
      copyright: '© {year} Mictoo. Бесплатный сервис транскрибации на ИИ.',
      counter: '{count} файлов расшифровано',
    },
    languages: {
      en: '🇬🇧 Английский', es: '🇪🇸 Испанский', fr: '🇫🇷 Французский', de: '🇩🇪 Немецкий', pt: '🇧🇷 Португальский',
      ru: '🇷🇺 Русский', it: '🇮🇹 Итальянский', nl: '🇳🇱 Нидерландский', pl: '🇵🇱 Польский', tr: '🇹🇷 Турецкий',
      ja: '🇯🇵 Японский', ko: '🇰🇷 Корейский', zh: '🇨🇳 Китайский', ar: '🇸🇦 Арабский', hi: '🇮🇳 Хинди',
    },
  },
}

// Format helper: t('result.stats', { words: 42, chars: 240, name: 'file.mp3' })
export function format(str, vars = {}) {
  if (!str) return ''
  return str.replace(/\{(\w+)\}/g, (_, k) => (vars[k] !== undefined ? vars[k] : `{${k}}`))
}

// Get translation by dotted key with fallback to EN. Returns string or empty.
export function t(locale, key, vars) {
  const safeLocale = LOCALES.includes(locale) ? locale : DEFAULT_LOCALE
  const get = (loc) => key.split('.').reduce((o, k) => (o == null ? o : o[k]), DICT[loc])
  const raw = get(safeLocale) ?? get(DEFAULT_LOCALE) ?? ''
  return vars ? format(raw, vars) : raw
}
