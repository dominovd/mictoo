import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/podcast-transcription',
  'fr': 'https://mictoo.com/fr/podcast-transcription',
  'de': 'https://mictoo.com/de/podcast-transcription',
  'es': 'https://mictoo.com/es/podcast-transcription',
  'ru': 'https://mictoo.com/ru/podcast-transcription',
  'it': 'https://mictoo.com/it/podcast-transcription',
  'pt': 'https://mictoo.com/pt/podcast-transcription',
  'pl': 'https://mictoo.com/pl/podcast-transcription',
  'ja': 'https://mictoo.com/ja/podcast-transcription',
  'ko': 'https://mictoo.com/ko/podcast-transcription',
  'x-default': 'https://mictoo.com/podcast-transcription',
}

export const metadata = {
  title: 'Transkrypcja podcastów z podsumowaniem i SRT | Mictoo',
  description:
    'Prześlij odcinek podcastu i otrzymaj tekst z znacznikami czasowymi, podsumowanie AI oraz eksporty do notatek, napisów i archiwum.',
  alternates: {
    canonical: 'https://mictoo.com/pl/podcast-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transkrypcja podcastów: Darmowy generator transkryptów podcastów AI | Mictoo',
    description: 'Prześlij swój odcinek, otrzymaj czysty transkrypt z znacznikami czasowymi w kilka sekund.',
    url: 'https://mictoo.com/pl/podcast-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transkrypcja podcastów: Darmowy generator',
    description: 'Prześlij swój odcinek, otrzymaj czysty transkrypt.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlPodcastTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="pl"
      badge="Podcasterzy · Gospodarze · Darmowe"
      h1First="Transkrypcja podcastów"
      h1Second="Darmowy transkrypt AI dla każdego odcinka"
      subtitle="Prześlij swój odcinek z dowolnego narzędzia do nagrywania. Otrzymaj czysty transkrypt z znacznikami czasowymi z podsumowaniem AI gotowym do notatek, podsumowania SEO i napisów na YouTube."
      currentHref="/pl/podcast-transcription"

      platforms={[
        { name: 'Riverside',  iconKey: 'waveMic',   brandBg: '#4B2AF7' },
        { name: 'Zencastr',   iconKey: 'soundwave', brandBg: '#F7B32B' },
        { name: 'SquadCast',  iconKey: 'waveMic',   brandBg: '#7E22CE' },
        { name: 'Cleanfeed',  iconKey: 'soundwave', brandBg: '#0F766E' },
        { name: 'Descript',   iconKey: 'soundwave', brandBg: '#111827' },
        { name: 'Anchor',     iconKey: 'mic',       brandBg: '#8B5CF6' },
      ]}

      howItWorksTitle="Jak działa transkrypcja podcastów"
      steps={[
        {
          icon: 'folder',
          title: 'Eksportuj odcinek',
          desc: 'Dowolny format, który produkuje Twoje DAW lub narzędzie do nagrywania. MP3 jest najczęstsze, ale M4A, WAV i FLAC również działają.',
        },
        {
          icon: 'upload',
          title: 'Prześlij plik tutaj',
          desc: 'Prześlij pliki do 60 MB po zalogowaniu. Dłuższe odcinki są automatycznie dzielone na segmenty i łączone z powrotem.',
        },
        {
          icon: 'editPen',
          title: 'Notatki, napisy, eksporty',
          desc: 'Transkrypt, podsumowanie AI, SRT dla wersji wideo na YouTube oraz DOCX dla bloga. Czas przetwarzania zależy od długości odcinka i rozmiaru pliku.',
        },
      ]}

      exampleTitle="Przykładowy transkrypt podcastu"
      exampleFileName="odcinek-042.mp3"
      exampleDurationLabel="52:07"
      exampleLines={[
        { t: '0:00',  line: 'Witamy z powrotem w programie. To jest odcinek czterdzieści dwa, a dzisiaj rozmawiamy o niezależnym podcastingu w 2026 roku.' },
        { t: '0:10',  line: 'Mój gość prowadzi cotygodniowy program od ośmiu lat, nie opuszczając ani jednego odcinka. Dziękuję, że jesteś tutaj.' },
        { t: '0:20',  line: 'Dziękuję za zaproszenie. To szalone, że zaczęliśmy to, gdy wszyscy mówili, że audio jest już nasycone.' },
        { t: '0:30',  line: 'Zacznijmy od tego. Co było innego w uruchamianiu podcastu w 2018 roku w porównaniu do teraz.' },
        { t: '0:38',  line: 'Dystrybucja była trudniejsza do przełamania, ale publiczność była bardziej cierpliwa. Uwaga była tańsza, zasadniczo.' },
        { t: '0:48',  line: 'Dziś narzędzia są niesamowite. Transkrypcja w kilka sekund, AI notatki, ale sama uwaga jest znacznie rzadsza.' },
        { t: '0:58',  line: 'To dobra wprowadzenie. Jaki jest Twój workflow z notatkami teraz, gdy transkrypty są praktycznie darmowe.' },
      ]}
      summaryPoints={[
        'Odcinek 42, skupienie na niezależnym podcastingu w 2026 roku.',
        'Gość: prowadzący cotygodniowy program przez 8 lat.',
        'Dyskusja: zmiany w dystrybucji 2018 vs 2026.',
        'Gospodarka uwagi nowym wąskim gardłem.',
      ]}
      actionItems={[
        'Sporządź notatki z podsumowania',
        'Wyciągnij 3 cytaty do mediów społecznościowych',
        'Opublikuj SRT do wersji wideo na YouTube',
      ]}

      whyTitle="Dlaczego Mictoo do transkrypcji podcastów"
      whyCards={[
        {
          icon: 'sparkles',
          title: 'Podsumowanie AI do notatek',
          desc: 'Solidny pierwszy szkic do opisów odcinków, podsumowań blogów i przyjaznych SEO notatek.',
        },
        {
          icon: 'clip',
          title: 'SRT dla wersji na YouTube',
          desc: 'Znaczniki czasowe są zgodne z oryginalnym dźwiękiem. Wstaw SRT do YouTube Studio, a napisy są gotowe.',
        },
        {
          icon: 'globe',
          title: 'Tłumaczenie dla międzynarodowej publiczności',
          desc: 'Tłumaczenie jednym kliknięciem na 50+ języków. Samotni gospodarze syndykatu globalnie bez agencji tłumaczeniowej.',
        },
        {
          icon: 'gear',
          title: 'Dowolny bitrate, dowolny rejestrator',
          desc: 'Notatki głosowe 32 kbps do 320 kbps studio bounces transkrybują identycznie dla czystej mowy.',
        },
      ]}

      scenariosTitle="Scenariusze transkrypcji podcastów"
      scenarios={[
        { icon: 'chat',      title: 'Notatki' },
        { icon: 'clip',      title: 'Napisy na YouTube' },
        { icon: 'search',    title: 'Podsumowanie SEO' },
        { icon: 'sparkles',  title: 'Cytaty' },
        { icon: 'globe',     title: 'Tłumaczenie' },
        { icon: 'book',      title: 'Archiwum' },
      ]}

      tipsTitle="Wskazówki dla czystszych transkryptów podcastów"
      tips={[
        'Eksportuj tylko ścieżkę głosową, gdy Twoje DAW na to pozwala.',
        'Optymalizowane pod kątem głosu 64 kbps mono MP3 transkrybuje równie dobrze.',
        'W przypadku odcinków wywiadowych usuń muzykę przed transkrypcją.',
        'Sprawdź imiona gospodarza i gościa raz, pojawiają się konsekwentnie później.',
      ]}

      guidesTitle="Powiązane przewodniki dotyczące transkrypcji"
      guides={[
        { href: '/pl/transcribe-mp3-to-text',    icon: 'file',  title: 'Transkrypcja MP3',   desc: 'Przewodnik po formacie podcastu' },
        { href: '/pl/m4a-to-text',               icon: 'file',  title: 'Transkrypcja M4A',   desc: 'Eksporty GarageBand i Apple' },
        { href: '/pl/wav-to-text',               icon: 'file',  title: 'Transkrypcja WAV',   desc: 'Studio bounces' },
        { href: '/pl/timestamped-transcription', icon: 'file',  title: 'Głębokie zanurzenie w znacznikach czasowych', desc: 'Mechanika eksportu SRT / VTT' },
      ]}

      faq={[
        {
          q: 'Z jakimi platformami podcastowymi współpracuje Mictoo?',
          a: 'Ze wszystkimi. Akceptujemy dowolny plik audio lub wideo, niezależnie od hosta. Najczęściej: Riverside, Zencastr, SquadCast, Anchor, Buzzsprout, Libsyn. Darmowe na plik do 60 MB po zalogowaniu.',
        },
        {
          q: 'Czy mogę automatycznie uzyskać transkrypt jako notatki?',
          a: 'Podsumowanie AI pojawia się obok transkryptu automatycznie. Użyj go jako pierwszego szkicu swoich notatek, a następnie przytnij, aby pasowały do Twojego głosu.',
        },
        {
          q: 'Mój odcinek ma ponad 60 MB. Co teraz?',
          a: 'Zaloguj się, aby automatycznie podzielić dłuższe pliki, lub zmniejsz jakość najpierw za pomocą ffmpeg -i episode.mp3 -b:a 64k -ac 1 out.mp3. 60-minutowy podcast staje się ~28 MB bez utraty dokładności.',
        },
        {
          q: 'Czy mogę pobrać SRT dla wersji wideo na YouTube?',
          a: 'Tak. SRT i VTT zawierają znaczniki czasowe zgodne z oryginalnym dźwiękiem. Wstaw bezpośrednio do YouTube Studio.',
        },
        {
          q: 'Czy Mictoo transkrybuje podcasty w innych językach?',
          a: 'Tak. Whisper large-v3 obsługuje 50+ języków z automatycznym wykrywaniem. W przypadku krótkich odcinków lub nietypowych akcentów wybierz język explicite.',
        },
        {
          q: 'Czy odcinki są przechowywane na Waszych serwerach?',
          a: 'Nie. Dźwięk przesyłany jest do dostawcy transkrypcji, przetwarzany raz, a następnie usuwany z pamięci. Transkrypty są przechowywane tylko, jeśli się zalogujesz.',
        },
        {
          q: 'Czy mogę zidentyfikować, kto mówi (gospodarz vs gość)?',
          a: 'Nie. Aktualny transkrypt to ciągły tekst z znacznikami czasowymi i bez automatycznych etykiet mówców.',
        },
      ]}

      ctaHeadline="Zamień każdy odcinek w publikowalny tekst"
      ctaSubtitle="Notatki, napisy na YouTube, podsumowanie SEO, tłumaczenie. Wszystko z jednego przesłania."
      ctaButton="Prześlij odcinek podcastu"

      relatedLinks={[
        { href: '/pl/interview-transcription',   label: 'Transkrypcja wywiadów' },
        { href: '/pl/webinar-transcription',     label: 'Transkrypcja webinarów' },
        { href: '/pl/transcribe-mp3-to-text',    label: 'MP3 na tekst' },
        { href: '/pl/free-srt-generator',        label: 'Darmowy generator SRT' },
        { href: '/pl/meeting-transcription',     label: 'Transkrypcja spotkań' },
      ]}
    />
  )
}