// Mictoo homepage (FR).
//
// L10n Phase 2 pilot: rebuilt to mirror the EN app/page.js SaaS layout —
// tool grid, live result preview, audience segmentation, comparison table,
// bottom CTA plate — with fully translated French copy.
//
// Structure mirrors app/page.js 1:1 so future EN edits port cleanly to FR
// (and later to the other 8 locales via scripts/translate-page.mjs).

import Image from 'next/image'
import UploadZone from '@/components/UploadZone'
import HeroChips from '@/components/HeroChips'
import HeroCounter from '@/components/HeroCounter'

// ── Page-level metadata & canonical ─────────────────────────────────────────
export const metadata = {
  title: 'Transcription IA Audio et Vidéo en Texte, Gratuite — Mictoo',
  description:
    'Transcrivez vos fichiers audio et vidéo en texte gratuitement, sans inscription. Propulsé par Whisper d’OpenAI. MP3, MP4, WAV et plus de 50 langues.',
  alternates: {
    canonical: 'https://mictoo.com/fr',
    languages: {
      'en': 'https://mictoo.com',
      'fr': 'https://mictoo.com/fr',
      'de': 'https://mictoo.com/de',
      'es': 'https://mictoo.com/es',
      'ru': 'https://mictoo.com/ru',
      'it': 'https://mictoo.com/it',
      'pt': 'https://mictoo.com/pt',
      'pl': 'https://mictoo.com/pl',
      'ja': 'https://mictoo.com/ja',
      'ko': 'https://mictoo.com/ko',
      'x-default': 'https://mictoo.com',
    },
  },
  openGraph: {
    title: 'Mictoo — Transcription IA Audio & Vidéo Gratuite',
    description: 'Déposez un fichier audio ou vidéo et obtenez la transcription en quelques secondes.',
    url: 'https://mictoo.com/fr',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630, alt: 'Mictoo — Transcription Audio & Vidéo Gratuite' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mictoo — Transcription IA Gratuite',
    description: 'Déposez un fichier audio ou vidéo et obtenez la transcription en quelques secondes.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

// ── FAQ data (shared between UI and JSON-LD) ─────────────────────────────────
const FAQ = [
  {
    q: 'Mictoo est-il vraiment gratuit ?',
    a: 'Oui. Mictoo est totalement gratuit pour les fichiers jusqu’à 25 Mo. Sans compte, sans carte bancaire, sans frais cachés. Les utilisateurs connectés bénéficient d’une limite plus élevée de 60 Mo par fichier et de 7 transcriptions gratuites par jour, toujours sans paiement.',
  },
  {
    q: 'Quelle est la précision de la transcription ?',
    a: 'Mictoo utilise Whisper large-v3 d’OpenAI, l’un des modèles open source de reconnaissance vocale les plus précis. La précision dépend de la qualité audio et de l’accent, mais dépasse généralement 95 % pour un enregistrement clair.',
  },
  {
    q: 'Quelles langues sont prises en charge ?',
    a: 'Whisper reconnaît plus de 50 langues : anglais, français, espagnol, allemand, portugais, russe, ukrainien, japonais, chinois, arabe et bien d’autres. La langue est détectée automatiquement ou vous pouvez la sélectionner manuellement.',
  },
  {
    q: 'Mon fichier est-il stocké sur vos serveurs ?',
    a: 'Non. Les fichiers sont envoyés directement à l’API Whisper de Groq (hébergée aux États-Unis), avec l’API Whisper d’OpenAI comme secours automatique, et ne sont pas conservés sur les serveurs de Mictoo. Aucun des deux fournisseurs n’utilise l’audio API pour l’entraînement des modèles. OpenAI conserve les données au maximum 30 jours à des fins de surveillance contre les abus.',
  },
  {
    q: 'Quelle est la taille maximale de fichier ?',
    a: 'Jusqu’à 25 Mo en anonyme, 60 Mo après une inscription gratuite. Les fichiers plus volumineux, jusqu’à 180 Mo, sont automatiquement découpés et fusionnés en une seule transcription pour les utilisateurs inscrits.',
  },
  {
    q: 'Quels formats Mictoo prend-il en charge ?',
    a: 'Mictoo accepte MP3, MP4, WAV, M4A, OGG, WEBM, FLAC, AAC, MOV et MPEG. Les fichiers audio et vidéo sont acceptés ; pour la vidéo, la piste audio est extraite côté serveur.',
  },
  {
    q: 'Combien de temps prend la transcription ?',
    a: 'La plupart des fichiers finissent en quelques secondes. Un fichier audio de 10 minutes prend généralement 15 à 30 secondes ; un podcast d’une heure est prêt en environ une minute.',
  },
  {
    q: 'Puis-je modifier la transcription une fois générée ?',
    a: 'Oui. La transcription est entièrement modifiable dans votre navigateur avant d’être copiée ou téléchargée. Aucun compte n’est nécessaire pour enregistrer les modifications dans votre session locale.',
  },
  {
    q: 'Dois-je créer un compte ?',
    a: 'Non. Pour les fichiers jusqu’à 25 Mo, la transcription est possible sans compte. Un compte gratuit débloque les fichiers plus volumineux (jusqu’à 60 Mo par fichier, 180 Mo via l’auto-découpage), l’historique, le résumé IA, la traduction en 28 langues et le chat avec la transcription.',
  },
  {
    q: 'Sur quelle technologie repose Mictoo ?',
    a: 'Mictoo repose sur le modèle Whisper large-v3 d’OpenAI, servi par Groq pour la vitesse avec OpenAI en secours. C’est le même modèle de reconnaissance vocale qui alimente les fonctions vocales de ChatGPT et de nombreux services professionnels de sous-titrage.',
  },
]

// ── JSON-LD schemas ──────────────────────────────────────────────────────────
const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Mictoo',
  url: 'https://mictoo.com/fr',
  description:
    'Outil en ligne gratuit de transcription audio et vidéo propulsé par Whisper d’OpenAI. Sans inscription. Plus de 50 langues.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  browserRequirements: 'Nécessite un navigateur moderne avec JavaScript activé.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Transcrire l’audio en texte',
    'Transcrire la vidéo en texte',
    'Prend en charge 50+ langues',
    'Sans compte',
    'Gratuit',
    'Résumé IA de la transcription',
    'Traduire la transcription vers 28 langues',
    'Chat avec la transcription',
    'MP3, MP4, WAV, M4A, OGG, WEBM, FLAC, AAC',
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

// ── Icon set (identical to app/page.js) ──────────────────────────────────────
const Icons = {
  gift: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7z" /></svg>
  ),
  shield: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 2l9 4v6c0 5-3.9 9.5-9 10-5.1-.5-9-5-9-10V6z" /></svg>
  ),
  globe: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10c-2.5-3-4-6.5-4-10s1.5-7 4-10z" /></svg>
  ),
  sparkles: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5zM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z" /></svg>
  ),
  trending: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8" /><path d="M17 7h4v4" /></svg>
  ),
  music: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M9 18V5l10-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="16" cy="16" r="3" /></svg>
  ),
  video: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="2" y="6" width="14" height="12" rx="2" /><path d="M22 8l-6 4 6 4z" /></svg>
  ),
  waveform: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M3 12h2M19 12h2M7 8v8M11 5v14M15 8v8" /></svg>
  ),
  users: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
  ),
  mic: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8" /></svg>
  ),
  editPen: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4z" /></svg>
  ),
  target: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
  ),
  bolt: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M13 2L3 14h7l-1 8 10-12h-7z" /></svg>
  ),
  lock: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
  ),
  cap: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M2 9l10-5 10 5-10 5L2 9z" /><path d="M6 11v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4M22 9v5" /></svg>
  ),
  newspaper: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M4 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4z" /><path d="M20 8h2v10a2 2 0 0 1-2 2" /><path d="M8 8h6M8 12h6M8 16h6" /></svg>
  ),
  briefcase: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M3 12h18" /></svg>
  ),
  check: (
    <svg fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
  ),
  upload: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 3v14m-5-5l5-5 5 5" /><path d="M4 21h16" /></svg>
  ),
  arrowRight: (
    <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14m-6-6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
}

// ── Page component ───────────────────────────────────────────────────────────
export default function FrenchHome() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ────────────────── HERO + UPLOAD ────────────────── */}
      <section className="bg-gradient-to-b from-brand-50/40 via-slate-100/60 to-slate-100 pt-16 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wide">
            Transcription IA gratuite · Sans inscription
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            Transcription IA gratuite<br />
            <span className="text-brand-600">Audio &amp; Vidéo vers Texte</span>
          </h1>
          <p className="text-lg text-slate-600 mb-7 max-w-2xl mx-auto">
            Des transcriptions précises en quelques secondes. Déposez un MP3, MP4, WAV et bien plus. Sans compte.
          </p>

          <div className="mb-5">
            <HeroChips locale="fr" />
          </div>

          <HeroCounter locale="fr" />
        </div>

        <div id="tool" className="max-w-2xl mx-auto mt-10 scroll-mt-20">
          <UploadZone defaultLanguage="fr" locale="fr" />
        </div>
      </section>

      {/* ────────────────── TOOL GRID ────────────────── */}
      <section className="bg-slate-100 border-b border-slate-200 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Convertir n’importe quel fichier en texte</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { href: '/fr/transcribe-mp3-to-text',   label: 'MP3 en texte',              icon: Icons.music },
              { href: '/fr/transcribe-video-to-text', label: 'Vidéo en texte',            icon: Icons.video },
              { href: '/fr/wav-to-text',              label: 'WAV en texte',              icon: Icons.waveform },
              { href: '/fr/meeting-transcription',    label: 'Transcription de réunion',  icon: Icons.users },
              { href: '/fr/podcast-transcription',    label: 'Transcription de podcast',  icon: Icons.mic },
              { href: '/fr/voice-memo-to-text',       label: 'Mémo vocal en texte',       icon: Icons.editPen },
            ].map(({ href, label, icon }) => (
              <a
                key={href}
                href={href}
                className="bg-white border border-slate-200 rounded-2xl p-4 text-center hover:border-brand-400 hover:shadow-sm transition-all group"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-50 text-brand-600 mb-3 group-hover:bg-brand-100 transition-colors">
                  <span className="w-6 h-6">{icon}</span>
                </div>
                <div className="text-sm font-semibold text-slate-800 leading-tight">{label}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── COMMENT MICTOO FONCTIONNE ────────────────── */}
      <section id="how-it-works" className="bg-white border-y border-slate-100 py-16 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">Comment fonctionne Mictoo</h2>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-10 items-start">
            <ol className="space-y-8">
              {[
                {
                  step: 1,
                  icon: Icons.upload,
                  title: 'Déposez votre fichier',
                  desc: 'Glissez-déposez ou choisissez un fichier audio ou vidéo. MP3, MP4, WAV, M4A et plus.',
                },
                {
                  step: 2,
                  icon: Icons.sparkles,
                  title: 'L’IA transcrit',
                  desc: 'Whisper large-v3 convertit la parole en texte avec une haute précision et une ponctuation automatique.',
                },
                {
                  step: 3,
                  icon: Icons.editPen,
                  title: 'Relire et exporter',
                  desc: 'Modifiez, résumez, traduisez et téléchargez votre transcription en TXT, DOCX, PDF ou SRT.',
                },
              ].map(({ step, icon, title, desc }) => (
                <li key={step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white text-sm font-semibold flex items-center justify-center">
                    {step}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-5 h-5 text-brand-600">{icon}</span>
                      <h3 className="font-semibold text-slate-900">{title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <Image
              src="/how-mictoo-works-interview.webp"
              alt="Espace de travail Mictoo affichant une transcription avec horodatages et options de traduction"
              width={1127}
              height={1395}
              sizes="(max-width: 1024px) 100vw, 512px"
              className="w-full max-w-lg h-auto justify-self-center lg:-mt-[72px] rounded-2xl border border-slate-200 shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* ────────────────── POURQUOI MICTOO ────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Pourquoi choisir Mictoo ?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: Icons.target,
              title: 'Haute précision',
              desc: 'Whisper large-v3 offre des transcriptions précises, même avec des accents et du bruit de fond.',
            },
            {
              icon: Icons.bolt,
              title: 'Résultats rapides',
              desc: 'Des transcriptions en quelques secondes. Un fichier de 30 minutes finit généralement en une minute.',
            },
            {
              icon: Icons.lock,
              title: 'Confidentiel par défaut',
              desc: 'Les fichiers sont traités de façon sécurisée et ne sont jamais conservés sur nos serveurs. Aucun entraînement sur votre audio.',
            },
            {
              icon: Icons.globe,
              title: 'Plus de 50 langues',
              desc: 'Transcrivez et traduisez dans plus de 50 langues. Détection automatique ou sélection manuelle.',
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-white border border-slate-200 rounded-2xl p-5">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-50 text-brand-600 mb-4">
                <span className="w-6 h-6">{icon}</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────── CONÇU POUR TOUTES LES VOIX ────────────────── */}
      <section className="bg-white border-y border-slate-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Conçu pour toutes les voix</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              {
                href: '/fr/lecture-transcription',
                icon: Icons.cap,
                label: 'Étudiants',
                desc: 'Transcrivez cours et supports d’étude. Concentrez-vous sur l’apprentissage.',
              },
              {
                href: '/fr/podcast-transcription',
                icon: Icons.mic,
                label: 'Podcasteurs',
                desc: 'Transformez vos épisodes en notes, articles et contenus sociaux.',
              },
              {
                href: '/fr/interview-transcription',
                icon: Icons.newspaper,
                label: 'Journalistes',
                desc: 'Transcrivez rapidement les interviews et vérifiez les citations.',
              },
              {
                href: '/fr/meeting-transcription',
                icon: Icons.briefcase,
                label: 'Équipes',
                desc: 'Documentez les réunions et partagez des transcriptions exploitables.',
              },
              {
                href: '/fr/free-srt-generator',
                icon: Icons.video,
                label: 'Créateurs de contenu',
                desc: 'Recyclez audio et vidéo en sous-titres, articles, et plus.',
              },
            ].map(({ href, icon, label, desc }) => (
              <a
                key={href}
                href={href}
                className="bg-white border border-slate-200 rounded-2xl p-4 hover:border-brand-400 hover:shadow-sm transition-all group"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-50 text-brand-600 mb-3">
                  <span className="w-5 h-5">{icon}</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-1 text-sm">{label}</h3>
                <p className="text-xs text-slate-500 leading-relaxed flex items-start justify-between gap-2">
                  <span>{desc}</span>
                  <span className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-500 transition-colors flex-shrink-0 mt-0.5">{Icons.arrowRight}</span>
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── COMPARAISON ────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">La transcription gratuite sans abonnement</h2>
        <p className="text-slate-600 mb-8 max-w-2xl">
          Comment Mictoo se positionne face aux outils habituellement envisagés. Cliquez sur une ligne pour la comparaison complète.
        </p>

        <div className="bg-white border border-slate-200 rounded-2xl overflow-x-auto">
          <table className="w-full text-sm min-w-[820px] border-collapse">
            <thead>
              <tr>
                <th className="text-left px-5 py-4 w-56"></th>
                <th className="text-center px-4 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">Gratuit</th>
                <th className="text-center px-4 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">Sans inscription</th>
                <th className="text-center px-4 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">Résumé IA</th>
                <th className="text-center px-4 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">Traduction</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gradient-to-r from-brand-50 to-brand-50/40">
                <td className="px-5 py-5 border-t border-slate-100 align-middle">
                  <div className="inline-flex items-center gap-2.5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="6" fill="#0284c7" />
                      <path d="M8 8v8M12 6v12M16 10v4" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <div>
                      <div className="font-bold text-slate-900 leading-tight">mictoo</div>
                      <div className="text-[11px] text-brand-700 font-medium">Gratuit pour tous</div>
                    </div>
                  </div>
                </td>
                {[
                  { label: 'Gratuit à utiliser' },
                  { label: 'Sans compte' },
                  { label: 'Inclus' },
                  { label: '50+ langues' },
                ].map(({ label }, i) => (
                  <td key={i} className="text-center px-4 py-5 border-t border-slate-100 align-middle">
                    <div className="inline-flex flex-col items-center gap-1.5">
                      <span className="w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center">
                        <span className="w-3.5 h-3.5">{Icons.check}</span>
                      </span>
                      <span className="text-[11px] text-slate-600 leading-snug">{label}</span>
                    </div>
                  </td>
                ))}
              </tr>

              {[
                {
                  name: 'Descript',    href: '/fr/descript-alternative',    tag: 'Workflow orienté éditeur',
                  cells: ['Niveau limité',    'Inscription requise', 'Option payante',   'Limitée'],
                },
                {
                  name: 'Fireflies',   href: '/fr/fireflies-alternative',   tag: 'Bot enregistreur de réunion',
                  cells: ['Niveau limité',    'Inscription requise', 'Formule Pro',      'Limitée'],
                },
                {
                  name: 'TurboScribe', href: '/fr/turboscribe-alternative', tag: 'Transcription grand public',
                  cells: ['Quota quotidien',  'Inscription requise', 'Non inclus',       'Limitée'],
                },
                {
                  name: 'Otter',       href: '/fr/otter-alternative',       tag: 'Notes de réunion en direct',
                  cells: ['Quota mensuel',    'Inscription requise', 'Formule Pro',      'Limitée'],
                },
                {
                  name: 'Notta',       href: '/fr/notta-alternative',       tag: 'Focus multilingue',
                  cells: ['Quota mensuel',    'Inscription requise', 'Formule Pro',      'Large'],
                },
              ].map(({ name, href, tag, cells }) => (
                <tr key={href} className="group hover:bg-slate-50 transition-colors">
                  <td className="border-t border-slate-100 align-middle p-0">
                    <a href={href} className="flex items-center justify-between gap-3 px-5 py-4">
                      <div>
                        <div className="font-semibold text-slate-800">vs {name}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{tag}</div>
                      </div>
                      <span className="w-4 h-4 text-slate-300 group-hover:text-brand-500 group-hover:translate-x-0.5 transition-all">
                        {Icons.arrowRight}
                      </span>
                    </a>
                  </td>
                  {cells.map((label, i) => (
                    <td key={i} className="border-t border-slate-100 align-middle p-0">
                      <a
                        href={href}
                        className="block text-center px-4 py-4 text-xs text-slate-500"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        {label}
                      </a>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-slate-400 text-center mt-4">
          Instantané indicatif. Les pages tarifaires évoluent ; consultez la comparaison liée pour les chiffres à jour.
        </p>
      </section>

      {/* ────────────────── FAQ ────────────────── */}
      <section id="faq" className="bg-white border-y border-slate-100 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">
            Questions fréquentes
          </h2>
          <div className="space-y-3">
            {FAQ.map(({ q, a }, i) => (
              <details
                key={q}
                className="group border border-slate-200 rounded-xl overflow-hidden bg-white open:shadow-sm"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-3 font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
                  <span>{q}</span>
                  <svg
                    className="w-4 h-4 flex-shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                  <p>{a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── BOTTOM CTA PLATE ────────────────── */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="relative bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 rounded-3xl overflow-hidden shadow-lg shadow-brand-500/20">
          <div className="absolute right-24 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white/10 blur-3xl pointer-events-none hidden md:block" />

          <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 py-10 px-6 md:px-10 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center text-white flex-shrink-0">
              <span className="w-7 h-7">{Icons.sparkles}</span>
            </div>

            <div className="min-w-0 flex-1 max-w-lg">
              <div className="font-bold text-white text-xl md:text-2xl leading-tight">
                Transcrivez votre fichier, gratuitement
              </div>
              <div className="text-sm text-white/85 mt-1.5">
                Déposez votre audio ou vidéo et obtenez une transcription précise en quelques secondes.
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-[11px] text-white/80">
                <span className="inline-flex items-center gap-1">
                  <span className="w-3 h-3">{Icons.check}</span> Sans inscription
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="w-3 h-3">{Icons.check}</span> Sans carte bancaire
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="w-3 h-3">{Icons.check}</span> 50+ langues
                </span>
              </div>
            </div>

            <a
              href="#tool"
              className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold text-sm md:text-base px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex-shrink-0 group"
            >
              <span>Commencer la transcription</span>
              <span className="w-4 h-4 group-hover:translate-x-0.5 transition-transform">{Icons.arrowRight}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
