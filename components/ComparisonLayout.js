import UploadZone from '@/components/UploadZone'

const COPY = {
  en: {
    quickFitTitle: 'Quick fit check',
    quickFitIntro: 'Be honest with yourself before you switch. Each tool is built around a different workflow.',
    chooseMictoo: 'Choose Mictoo if',
    stayWith: 'Stay with {competitorName} if',
    comparisonTitle: 'Side-by-side comparison',
    comparisonIntro: 'Features and workflows compared. Read it as a buying guide, not a ranking.',
    needWorkflow: 'Need / Workflow',
    whySwitch: 'Why people switch to Mictoo',
    whenBetterTitle: 'When {competitorName} is the better fit',
    whenBetterIntro: 'We are not the right tool for every job. Here is when you should stick with {competitorName}.',
    workflowTitle: 'How to try Mictoo with a {competitorName} recording',
    step: 'Step {n}',
    useCasesTitle: 'Common ways people use Mictoo instead of {competitorName}',
    legacyFitTitle: 'Which one fits you?',
    chooseCompetitor: 'Choose {competitorName} if',
    faqTitle: 'Frequently asked questions',
    ctaButton: 'Try Mictoo with your file',
    moreComparisons: 'More comparisons',
  },
  fr: {
    quickFitTitle: 'Le bon choix en un coup d’oeil',
    quickFitIntro: 'Avant de changer d’outil, regardez votre vrai flux de travail. Chaque produit sert un usage différent.',
    chooseMictoo: 'Choisissez Mictoo si',
    stayWith: 'Restez avec {competitorName} si',
    comparisonTitle: 'Comparaison côte à côte',
    comparisonIntro: 'Fonctions et flux de travail comparés. À lire comme un guide de choix, pas comme un classement.',
    needWorkflow: 'Besoin / flux de travail',
    whySwitch: 'Pourquoi passer à Mictoo',
    whenBetterTitle: 'Quand {competitorName} est le meilleur choix',
    whenBetterIntro: 'Mictoo n’est pas le bon outil pour tout. Voici quand il vaut mieux rester avec {competitorName}.',
    workflowTitle: 'Tester Mictoo avec un enregistrement {competitorName}',
    step: 'Étape {n}',
    useCasesTitle: 'Usages courants de Mictoo à la place de {competitorName}',
    legacyFitTitle: 'Lequel vous convient ?',
    chooseCompetitor: 'Choisissez {competitorName} si',
    faqTitle: 'Questions fréquentes',
    ctaButton: 'Essayer Mictoo avec votre fichier',
    moreComparisons: 'Plus de comparaisons',
  },
  de: {
    quickFitTitle: 'Schneller Eignungscheck',
    quickFitIntro: 'Prüfen Sie vor dem Wechsel ehrlich Ihren Workflow. Jedes Tool ist für einen anderen Ablauf gebaut.',
    chooseMictoo: 'Wählen Sie Mictoo, wenn',
    stayWith: 'Bleiben Sie bei {competitorName}, wenn',
    comparisonTitle: 'Direkter Vergleich',
    comparisonIntro: 'Funktionen und Workflows im Vergleich. Als Entscheidungshilfe gedacht, nicht als Rangliste.',
    needWorkflow: 'Bedarf / Workflow',
    whySwitch: 'Warum Nutzer zu Mictoo wechseln',
    whenBetterTitle: 'Wann {competitorName} besser passt',
    whenBetterIntro: 'Mictoo ist nicht für jede Aufgabe das richtige Tool. In diesen Fällen sollten Sie bei {competitorName} bleiben.',
    workflowTitle: 'Mictoo mit einer {competitorName}-Aufnahme testen',
    step: 'Schritt {n}',
    useCasesTitle: 'Häufige Workflows mit Mictoo statt {competitorName}',
    legacyFitTitle: 'Welches Tool passt zu Ihnen?',
    chooseCompetitor: 'Wählen Sie {competitorName}, wenn',
    faqTitle: 'Häufig gestellte Fragen',
    ctaButton: 'Mictoo mit Ihrer Datei testen',
    moreComparisons: 'Weitere Vergleiche',
  },
  es: {
    quickFitTitle: 'Comprobación rápida',
    quickFitIntro: 'Antes de cambiar, mira tu flujo de trabajo real. Cada herramienta está pensada para un uso distinto.',
    chooseMictoo: 'Elige Mictoo si',
    stayWith: 'Quédate con {competitorName} si',
    comparisonTitle: 'Comparación lado a lado',
    comparisonIntro: 'Funciones y flujos comparados. Léelo como una guía de compra, no como un ranking.',
    needWorkflow: 'Necesidad / flujo',
    whySwitch: 'Por qué la gente cambia a Mictoo',
    whenBetterTitle: 'Cuándo {competitorName} encaja mejor',
    whenBetterIntro: 'Mictoo no es la herramienta adecuada para todo. Estos son los casos en los que conviene seguir con {competitorName}.',
    workflowTitle: 'Cómo probar Mictoo con una grabación de {competitorName}',
    step: 'Paso {n}',
    useCasesTitle: 'Usos habituales de Mictoo en lugar de {competitorName}',
    legacyFitTitle: '¿Cuál encaja contigo?',
    chooseCompetitor: 'Elige {competitorName} si',
    faqTitle: 'Preguntas frecuentes',
    ctaButton: 'Probar Mictoo con tu archivo',
    moreComparisons: 'Más comparaciones',
  },
  ru: {
    quickFitTitle: 'Быстрая проверка: подходит ли вам',
    quickFitIntro: 'Перед переходом честно сравните свой сценарий. Эти инструменты сделаны под разные рабочие процессы.',
    chooseMictoo: 'Выбирайте Mictoo, если',
    stayWith: 'Оставайтесь с {competitorName}, если',
    comparisonTitle: 'Сравнение бок о бок',
    comparisonIntro: 'Сравниваем функции и рабочие процессы. Это гид по выбору, а не рейтинг.',
    needWorkflow: 'Задача / процесс',
    whySwitch: 'Почему переходят на Mictoo',
    whenBetterTitle: 'Когда {competitorName} подходит лучше',
    whenBetterIntro: 'Mictoo подходит не для всех задач. Вот когда лучше остаться с {competitorName}.',
    workflowTitle: 'Как попробовать Mictoo на записи из {competitorName}',
    step: 'Шаг {n}',
    useCasesTitle: 'Частые сценарии Mictoo вместо {competitorName}',
    legacyFitTitle: 'Что вам больше подходит?',
    chooseCompetitor: 'Выбирайте {competitorName}, если',
    faqTitle: 'Частые вопросы',
    ctaButton: 'Попробовать Mictoo со своим файлом',
    moreComparisons: 'Другие сравнения',
  },
  it: {
    quickFitTitle: 'Controllo rapido',
    quickFitIntro: 'Prima di cambiare, guarda il tuo flusso di lavoro reale. Ogni strumento nasce per un uso diverso.',
    chooseMictoo: 'Scegli Mictoo se',
    stayWith: 'Resta con {competitorName} se',
    comparisonTitle: 'Confronto diretto',
    comparisonIntro: 'Funzioni e flussi di lavoro a confronto. Usalo come guida di scelta, non come classifica.',
    needWorkflow: 'Esigenza / flusso',
    whySwitch: 'Perché si passa a Mictoo',
    whenBetterTitle: 'Quando {competitorName} è più adatto',
    whenBetterIntro: 'Mictoo non è lo strumento giusto per ogni lavoro. Ecco quando conviene restare con {competitorName}.',
    workflowTitle: 'Come provare Mictoo con una registrazione di {competitorName}',
    step: 'Passo {n}',
    useCasesTitle: 'Usi comuni di Mictoo al posto di {competitorName}',
    legacyFitTitle: 'Quale fa per te?',
    chooseCompetitor: 'Scegli {competitorName} se',
    faqTitle: 'Domande frequenti',
    ctaButton: 'Prova Mictoo con il tuo file',
    moreComparisons: 'Altri confronti',
  },
  pt: {
    quickFitTitle: 'Teste rápido de encaixe',
    quickFitIntro: 'Antes de trocar, olhe para seu fluxo de trabalho real. Cada ferramenta foi feita para um tipo de uso.',
    chooseMictoo: 'Escolha Mictoo se',
    stayWith: 'Fique com {competitorName} se',
    comparisonTitle: 'Comparação lado a lado',
    comparisonIntro: 'Recursos e fluxos de trabalho comparados. Leia como um guia de escolha, não como ranking.',
    needWorkflow: 'Necessidade / fluxo',
    whySwitch: 'Por que as pessoas mudam para Mictoo',
    whenBetterTitle: 'Quando {competitorName} é a melhor opção',
    whenBetterIntro: 'Mictoo não é a ferramenta certa para todo trabalho. Veja quando vale ficar com {competitorName}.',
    workflowTitle: 'Como testar Mictoo com uma gravação do {competitorName}',
    step: 'Passo {n}',
    useCasesTitle: 'Usos comuns do Mictoo no lugar do {competitorName}',
    legacyFitTitle: 'Qual combina mais com você?',
    chooseCompetitor: 'Escolha {competitorName} se',
    faqTitle: 'Perguntas frequentes',
    ctaButton: 'Testar Mictoo com seu arquivo',
    moreComparisons: 'Mais comparações',
  },
  pl: {
    quickFitTitle: 'Szybkie sprawdzenie dopasowania',
    quickFitIntro: 'Zanim zmienisz narzędzie, sprawdź swój rzeczywisty proces pracy. Każde narzędzie pasuje do innego scenariusza.',
    chooseMictoo: 'Wybierz Mictoo, jeśli',
    stayWith: 'Zostań przy {competitorName}, jeśli',
    comparisonTitle: 'Porównanie krok po kroku',
    comparisonIntro: 'Porównanie funkcji i procesów pracy. To przewodnik wyboru, nie ranking.',
    needWorkflow: 'Potrzeba / proces',
    whySwitch: 'Dlaczego ludzie przechodzą na Mictoo',
    whenBetterTitle: 'Kiedy {competitorName} jest lepszym wyborem',
    whenBetterIntro: 'Mictoo nie jest właściwym narzędziem do każdego zadania. Oto kiedy lepiej zostać przy {competitorName}.',
    workflowTitle: 'Jak przetestować Mictoo na nagraniu z {competitorName}',
    step: 'Krok {n}',
    useCasesTitle: 'Typowe użycia Mictoo zamiast {competitorName}',
    legacyFitTitle: 'Co pasuje do Ciebie?',
    chooseCompetitor: 'Wybierz {competitorName}, jeśli',
    faqTitle: 'Najczęściej zadawane pytania',
    ctaButton: 'Wypróbuj Mictoo na swoim pliku',
    moreComparisons: 'Więcej porównań',
  },
  ja: {
    quickFitTitle: '向き不向きの確認',
    quickFitIntro: '乗り換える前に、実際の作業フローを確認しましょう。各ツールは異なる用途に向いています。',
    chooseMictoo: 'Mictooが向いている場合',
    stayWith: '{competitorName}を使い続けるべき場合',
    comparisonTitle: '機能比較',
    comparisonIntro: '機能と作業フローを比較します。ランキングではなく、選ぶためのガイドとして読んでください。',
    needWorkflow: '用途 / 作業フロー',
    whySwitch: 'Mictooに切り替える理由',
    whenBetterTitle: '{competitorName}のほうが向いている場合',
    whenBetterIntro: 'Mictooはすべての用途に最適なツールではありません。{competitorName}を使い続けたほうがよい場面もあります。',
    workflowTitle: '{competitorName}の録音でMictooを試す方法',
    step: 'ステップ {n}',
    useCasesTitle: '{competitorName}の代わりにMictooを使う主な場面',
    legacyFitTitle: 'どちらが合っていますか?',
    chooseCompetitor: '{competitorName}を選ぶべき場合',
    faqTitle: 'よくある質問',
    ctaButton: '自分のファイルでMictooを試す',
    moreComparisons: 'その他の比較',
  },
  ko: {
    quickFitTitle: '빠른 적합성 확인',
    quickFitIntro: '전환하기 전에 실제 작업 흐름을 확인하세요. 각 도구는 서로 다른 방식에 맞춰져 있습니다.',
    chooseMictoo: 'Mictoo가 맞는 경우',
    stayWith: '{competitorName}를 계속 쓰는 것이 좋은 경우',
    comparisonTitle: '나란히 비교',
    comparisonIntro: '기능과 작업 흐름을 비교합니다. 순위가 아니라 선택 가이드로 읽어 주세요.',
    needWorkflow: '필요 / 작업 흐름',
    whySwitch: 'Mictoo로 바꾸는 이유',
    whenBetterTitle: '{competitorName}가 더 잘 맞는 경우',
    whenBetterIntro: 'Mictoo가 모든 작업에 맞는 도구는 아닙니다. 이런 경우에는 {competitorName}를 계속 쓰는 편이 좋습니다.',
    workflowTitle: '{competitorName} 녹음으로 Mictoo를 테스트하는 방법',
    step: '단계 {n}',
    useCasesTitle: '{competitorName} 대신 Mictoo를 쓰는 일반적인 경우',
    legacyFitTitle: '어느 쪽이 더 맞나요?',
    chooseCompetitor: '{competitorName}를 선택할 경우',
    faqTitle: '자주 묻는 질문',
    ctaButton: '내 파일로 Mictoo 테스트',
    moreComparisons: '다른 비교',
  },
}

const LOCALE_RE = /^\/(fr|de|es|ru|it|pt|pl|ja|ko)(?:\/|$)/
const fill = (str, vars = {}) => str.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? '{' + key + '}')

function getCopy(locale, key, vars) {
  const dict = COPY[locale] || COPY.en
  return fill(dict[key] || COPY.en[key] || '', vars)
}

function inferLocale(defaultLanguage, relatedLinks) {
  if (defaultLanguage) return defaultLanguage
  const localizedHref = relatedLinks?.map(link => link.href).find(href => LOCALE_RE.test(href))
  return localizedHref?.match(LOCALE_RE)?.[1] || 'en'
}

/**
 * Layout for /[competitor]-alternative pages.
 *
 * Refactored 2026-06-05 per Alternative_pages_TZ.pdf in response to the
 * AdSense "Useless content" rejection (see
 * project_mictoo_adsense_rejection_2026_06_05 memory). Previous version
 * had identical H2 sequence across all 5 alternative pages ("Why pick
 * Mictoo", "Which one fits you?", "Try Mictoo now", "FAQ") which the
 * AdSense classifier flags as doorway template.
 *
 * New rendering order (top to bottom), per ТЗ:
 *   1. Hero (badge + h1 + subtitle anchored to competitor's specific pain)
 *   2. Tool (UploadZone, try Mictoo immediately, no scroll)
 *   3. Quick Fit / Not Fit (two-column, 3-5 items each)
 *   4. Main use case angle (page-specific prose, unique per competitor)
 *   5. Comparison table (Need / Workflow / Mictoo / Competitor, 7-10 rows)
 *   6. Why Mictoo (4-5 benefit cards, different angles per competitor)
 *   7. When [Competitor] is still better (3-4 honest situations)
 *   8. Workflow (4-step "how to switch")
 *   9. Use cases (cards specific to competitor's typical user intent)
 *  10. FAQ (40-80 word answers, 2-3 unique per competitor)
 *  11. Final CTA
 *  12. relatedLinks
 *
 * All section slots are optional. Pages that haven't been migrated to the
 * full ТЗ structure render only the sections they pass props for.
 */
export default function ComparisonLayout({
  // Hero
  badge,
  h1,
  subtitle,
  competitorName,

  // Quick Fit / Not Fit
  quickFit,        // { mictoo: string[], competitor: string[] }

  // Main use case angle (prose JSX)
  mainAngle,       // JSX node

  // Comparison table
  rows,            // [{ label, mictoo, them }]

  // Why Mictoo cards
  whyMictoo,       // [{ icon?, title, desc }]

  // When competitor is still better
  whenBetter,      // { title?, items: string[] }  honest, respectful

  // Workflow (4-step "how to switch")
  workflow,        // [{ title, desc }]  usually 4 steps

  // Use cases tailored to competitor intent
  useCases,        // { title?, items: [{ title, desc }] }

  // FAQ
  faq,             // [{ q, a }]   answers 40-80 words

  // Final CTA
  cta,             // { title, text, button }

  // Related comparisons
  relatedLinks,    // [{ href, label }]

  // Optional locale override. Localized pages can pass it directly; otherwise
  // we infer it from localized related links such as /ru/descript-alternative.
  defaultLanguage = '',

  // LEGACY (kept for backward compat with un-migrated pages)
  whenToChoose,    // { mictoo: string[], them: string[] }
}) {
  const locale = inferLocale(defaultLanguage, relatedLinks)
  const c = (key, vars) => getCopy(locale, key, { competitorName, ...vars })

  // FAQ JSON-LD for Google rich results
  const faqSchema = faq?.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  } : null

  // ItemList of both products (Mictoo + the competitor) so LLMs answering
  // "what's a good alternative to X" pick up the whole comparison as structured
  // data. Also emits a Review sub-node on the competitor with our positioning
  // sentence — LLMs surface that when asked "how does mictoo compare to X".
  const alternativeSchema = competitorName ? {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Mictoo vs ${competitorName}`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Mictoo',
          url: 'https://mictoo.com',
          applicationCategory: 'UtilityApplication',
          isAccessibleForFree: true,
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'SoftwareApplication',
          name: competitorName,
          applicationCategory: 'UtilityApplication',
          ...(subtitle ? {
            review: {
              '@type': 'Review',
              reviewBody: subtitle,
              author: { '@type': 'Organization', name: 'Mictoo' },
            },
          } : {}),
        },
      },
    ],
  } : null

  return (
    <>
      {/* 1. Hero */}
      <section className="bg-white border-b border-slate-100 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          {badge && (
            <span className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              {badge}
            </span>
          )}
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 leading-tight">{h1}</h1>
          <p className="text-lg text-slate-500 mb-0">{subtitle}</p>
        </div>
      </section>

      {/* 2. Tool, try Mictoo immediately */}
      <section id="tool" className="max-w-2xl mx-auto px-4 -mt-6 pb-12 pt-10 scroll-mt-20">
        <UploadZone />
      </section>

      {/* 3. Quick Fit / Not Fit */}
      {quickFit && (
        <section id="quick-fit" className="max-w-4xl mx-auto px-4 py-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-3">
            {c('quickFitTitle')}
          </h2>
          <p className="text-sm text-slate-500 text-center mb-10 max-w-xl mx-auto">
            {c('quickFitIntro')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-brand-50 rounded-2xl p-6">
              <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-brand-600">✓</span>
                {c('chooseMictoo')}
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {quickFit.mictoo.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-brand-600 mt-0.5 flex-shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-slate-400">→</span>
                {c('stayWith')}
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {quickFit.competitor.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-slate-400 mt-0.5 flex-shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* 4. Main use case angle (unique prose) */}
      {mainAngle && (
        <section id="angle" className="bg-white border-y border-slate-100 py-12 px-4 scroll-mt-20">
          <div className="max-w-3xl mx-auto">
            {mainAngle}
          </div>
        </section>
      )}

      {/* 5. Comparison table */}
      {rows?.length > 0 && (
        <section id="comparison" className="max-w-4xl mx-auto px-4 py-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-3">
            {c('comparisonTitle')}
          </h2>
          <p className="text-sm text-slate-500 text-center mb-8 max-w-xl mx-auto">
            {c('comparisonIntro')}
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="text-left font-semibold px-4 py-3 w-2/5">{c('needWorkflow')}</th>
                  <th className="text-left font-semibold px-4 py-3 text-brand-700">Mictoo</th>
                  <th className="text-left font-semibold px-4 py-3">{competitorName}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rows.map((row, i) => (
                  <tr key={i}>
                    <td className="px-4 py-3 font-medium text-slate-700">{row.label}</td>
                    <td className="px-4 py-3 text-slate-700">{row.mictoo}</td>
                    <td className="px-4 py-3 text-slate-500">{row.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* 6. Why Mictoo */}
      {whyMictoo?.length > 0 && (
        <section id="why-mictoo" className="bg-white border-y border-slate-100 py-14 px-4 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
              {c('whySwitch')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyMictoo.map(({ icon, title, desc }) => (
                <div key={title} className="bg-white border border-slate-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    {icon && <div className="text-2xl flex-shrink-0">{icon}</div>}
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">{title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. When [Competitor] is still better */}
      {whenBetter?.items?.length > 0 && (
        <section id="when-better" className="max-w-3xl mx-auto px-4 py-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-3">
            {whenBetter.title || c('whenBetterTitle')}
          </h2>
          <p className="text-sm text-slate-500 text-center mb-8 max-w-xl mx-auto">
            {c('whenBetterIntro')}
          </p>
          <ul className="space-y-4">
            {whenBetter.items.map((item, i) => (
              <li key={i} className="flex gap-3 bg-slate-50 rounded-xl p-5">
                <span className="text-slate-400 flex-shrink-0 font-mono text-sm mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 8. Workflow (4-step how-to-switch) */}
      {workflow?.length > 0 && (
        <section id="workflow" className="bg-slate-50 border-y border-slate-100 py-14 px-4 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
              {c('workflowTitle')}
            </h2>
            <ol className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {workflow.map(({ title, desc }, i) => (
                <li key={title} className="bg-white border border-slate-200 rounded-xl p-5">
                  <div className="text-brand-600 font-bold text-sm mb-2">
                    {c('step', { n: i + 1 })}
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* 9. Use cases */}
      {useCases?.items?.length > 0 && (
        <section id="use-cases" className="max-w-4xl mx-auto px-4 py-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            {useCases.title || c('useCasesTitle')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {useCases.items.map(({ title, desc }) => (
              <div key={title} className="bg-white border border-slate-200 rounded-xl p-5">
                <h3 className="font-semibold text-slate-800 mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Legacy "When to choose" two-column (kept for any un-migrated page) */}
      {!quickFit && whenToChoose && (
        <section className="max-w-4xl mx-auto px-4 py-14">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">{c('legacyFitTitle')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-brand-50 rounded-2xl p-6">
              <h3 className="font-semibold text-slate-800 mb-3">{c('chooseMictoo')}</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {whenToChoose.mictoo.map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-brand-600">✓</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-semibold text-slate-800 mb-3">{c('chooseCompetitor')}</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {whenToChoose.them.map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-slate-400">✓</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* 10. FAQ */}
      {faq?.length > 0 && (
        <section id="faq" className="bg-white border-y border-slate-100 py-16 px-4 scroll-mt-20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">
              {c('faqTitle')}
            </h2>
            <div className="space-y-3">
              {faq.map(({ q, a }, i) => (
                <details
                  key={q}
                  className="group border border-slate-200 rounded-xl overflow-hidden bg-white open:shadow-sm"
                  {...(i === 0 ? { open: true } : {})}
                >
                  <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-3 font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
                    <span>{q}</span>
                    <svg className="w-4 h-4 flex-shrink-0 text-slate-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                    {typeof a === 'string' ? <p>{a}</p> : a}
                  </div>
                </details>
              ))}
            </div>
          </div>
          {faqSchema && (
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
          )}
          {alternativeSchema && (
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(alternativeSchema) }} />
          )}
        </section>
      )}

      {/* 11. Final CTA */}
      {cta && (
        <section className="max-w-2xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">{cta.title}</h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">{cta.text}</p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            {cta.button || c('ctaButton')}
          </a>
        </section>
      )}

      {/* 12. Related comparisons */}
      {relatedLinks?.length > 0 && (
        <section className="border-t border-slate-100 py-10 px-4">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-slate-400 mb-4 text-center">{c('moreComparisons')}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {relatedLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
