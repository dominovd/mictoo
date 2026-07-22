import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/sermon-transcription',
  'fr': 'https://mictoo.com/fr/sermon-transcription',
  'de': 'https://mictoo.com/de/sermon-transcription',
  'es': 'https://mictoo.com/es/sermon-transcription',
  'ru': 'https://mictoo.com/ru/sermon-transcription',
  'it': 'https://mictoo.com/it/sermon-transcription',
  'pt': 'https://mictoo.com/pt/sermon-transcription',
  'pl': 'https://mictoo.com/pl/sermon-transcription',
  'ja': 'https://mictoo.com/ja/sermon-transcription',
  'ko': 'https://mictoo.com/ko/sermon-transcription',
  'x-default': 'https://mictoo.com/sermon-transcription',
}

export const metadata = {
  title: 'Transcription de sermon pour services et études | Mictoo',
  description:
    'Téléchargez un enregistrement de sermon ou de service et obtenez un texte consultable, des horodatages, un résumé AI et des fichiers d’exportation.',
  alternates: {
    canonical: 'https://mictoo.com/fr/sermon-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transcription de sermon : gratuite | Mictoo',
    description: 'Téléchargez votre enregistrement de service, obtenez une transcription propre.',
    url: 'https://mictoo.com/fr/sermon-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcription de sermon',
    description: 'Transcriptions gratuites pour les églises et les études.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrSermonTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="fr"
      badge="Églises · Pasteurs · Étude · Gratuit"
      h1First="Transcription de sermon"
      h1Second="Transcription gratuite pour services et études"
      subtitle="Déposez un enregistrement de service du dimanche, un enseignement en semaine ou une session d’étude biblique. Obtenez une transcription propre avec des horodatages pour le site web de l’église, les notes d’étude et les notes d’épisode de podcast."
      currentHref="/fr/sermon-transcription"

      platforms={[
        { name: 'SermonAudio',   iconKey: 'broadcast', brandBg: '#B91C1C' },
        { name: 'ProPresenter',  iconKey: 'monitor',   brandBg: '#0EA5E9' },
        { name: 'YouTube Live',  iconKey: 'broadcast', brandBg: '#FF0000' },
        { name: 'Facebook Live', iconKey: 'broadcast', brandBg: '#1877F2' },
        { name: 'Zoom',          iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/fr/zoom-transcription' },
        { name: 'Church stream', iconKey: 'broadcast', brandBg: '#6B21A8' },
      ]}

      howItWorksTitle="Comment fonctionne la transcription de sermon"
      steps={[
        {
          icon: 'folder',
          title: 'Exportez l’enregistrement du service',
          desc: 'Livestream MP4 du dimanche, WAV de la console de son du sanctuaire, ou le podcast MP3 que vous publiez déjà.',
        },
        {
          icon: 'upload',
          title: 'Déposez le fichier ici',
          desc: 'MP3, MP4, WAV, M4A fonctionnent tous. Les longs services bénéficient d’un auto-split en étant connecté.',
        },
        {
          icon: 'editPen',
          title: 'Transcription pour le site web',
          desc: 'Texte propre prêt pour le site web de l’église, les notes d’étude, la description du podcast et l’archive consultable.',
        },
      ]}

      exampleTitle="Exemple de transcription de sermon"
      exampleFileName="sunday-service-jan-14.mp3"
      exampleDurationLabel="38:56"
      exampleLines={[
        { t: '0:00',  line: 'Bonjour église. Veuillez tourner avec moi au livre de Matthieu, chapitre cinq, verset trois.' },
        { t: '0:12',  line: 'Ce matin, nous commençons une nouvelle série sur ce que Jésus a appelé la vie bénie, les Béatitudes.' },
        { t: '0:24',  line: 'Heureux les pauvres en esprit, car le royaume des cieux est à eux. C’est notre texte cette semaine.' },
        { t: '0:38',  line: 'Le mot que Jésus utilise ici pour béni ne signifie pas heureux dans un sens superficiel ou circonstanciel.' },
        { t: '0:51',  line: 'Cela signifie profondément, fondamentalement content à cause de votre relation avec Dieu, indépendamment des circonstances.' },
        { t: '1:04',  line: 'Et être pauvre en esprit ne concerne pas la pauvreté matérielle. C’est une posture de dépendance envers Dieu.' },
        { t: '1:18',  line: 'C’est savoir que tout ce que vous construisez, tout ce que vous accomplissez, repose finalement sur la grâce, non sur le mérite.' },
      ]}
      summaryPoints={[
        'Nouvelle série sur les Béatitudes (Matthieu 5).',
        'Focus : "Heureux les pauvres en esprit."',
        'Béni = contentement profond à travers la relation avec Dieu.',
        'Pauvre en esprit = posture de dépendance, pas pauvreté matérielle.',
      ]}
      actionItems={[
        'Publiez la transcription sur le site web de l’église',
        'Coupez un clip de 60 secondes pour les réseaux sociaux',
        'Incluez dans le guide d’étude hebdomadaire',
      ]}

      whyTitle="Pourquoi choisir Mictoo pour la transcription de sermon"
      whyCards={[
        {
          icon: 'search',
          title: 'Archive de sermons consultable',
          desc: 'Publiez des transcriptions sur le site de l’église. Les membres trouvent les enseignements par sujet ou verset, des mois ou des années plus tard.',
        },
        {
          icon: 'sparkles',
          title: 'Notes d’étude et guides de petits groupes',
          desc: 'Le résumé AI est le point de départ pour le guide d’étude hebdomadaire ou les questions de discussion de petits groupes.',
        },
        {
          icon: 'clip',
          title: 'Sous-titres pour la rediffusion du livestream',
          desc: 'SRT pour la version vidéo YouTube ou Facebook. Accessibilité pour les membres malentendants.',
        },
        {
          icon: 'globe',
          title: 'Traduire pour des congrégations multilingues',
          desc: 'Sermon en anglais mais une partie de la congrégation préfère l’espagnol ou le coréen. Traduction en un clic.',
        },
      ]}

      scenariosTitle="Scénarios de sermon courants"
      scenarios={[
        { icon: 'church',    title: 'Service du dimanche' },
        { icon: 'book',      title: 'Étude biblique' },
        { icon: 'chat',      title: 'Groupe de discussion' },
        { icon: 'sparkles',  title: 'Dévotionnel' },
        { icon: 'globe',     title: 'Missions' },
        { icon: 'headset',   title: 'Podcast' },
      ]}

      tipsTitle="Conseils pour les enregistrements de sermon"
      tips={[
        'WAV ou M4A de la console de son donne un meilleur input que le micro de la pièce.',
        'Pour les longs services dépassant 60 Mo, connectez-vous pour l’auto-split.',
        'Pour les congrégations avec des termes scripturaires lourds, révisez les mots clés.',
        'Incluez le titre du sermon dans le nom du fichier pour l’ordre d’archive.',
      ]}

      guidesTitle="Outils connexes"
      guides={[
        { href: '/fr/transcribe-mp3-to-text',    icon: 'file',  title: 'Format MP3',        desc: 'Exportation adaptée aux podcasts' },
        { href: '/fr/wav-to-text',               icon: 'file',  title: 'Format WAV',        desc: 'Enregistrement de la console de son' },
        { href: '/fr/lecture-transcription',     icon: 'book',  title: 'Transcription de cours / étude',   desc: 'Contenu riche en enseignement' },
        { href: '/fr/free-srt-generator',        icon: 'file',  title: 'Sous-titres SRT',      desc: 'Rediffusion du livestream' },
      ]}

      faq={[
        {
          q: 'Puis-je transcrire un enregistrement de livestream du dimanche ?',
          a: 'Oui. Téléchargez le MP4 depuis YouTube Live, Facebook Live ou votre fournisseur de streaming d’église et déposez-le ici. La vidéo est auto-démuxée côté serveur.',
        },
        {
          q: 'Mictoo gère-t-il avec précision les références scripturaires et les termes théologiques ?',
          a: 'Whisper large-v3 gère bien le vocabulaire scripturaire et théologique anglais courant. Pour les noms propres inhabituels (anciennes translittérations, termes de traduction spécifiques), révisez après transcription.',
        },
        {
          q: 'Mictoo est-il gratuit pour les églises ?',
          a: 'Oui. Gratuit par fichier jusqu’à la limite de taille. Pas de niveau ou de licence spécifique à l’église.',
        },
        {
          q: 'Mon enregistrement de service dépasse 60 Mo. Que faire ?',
          a: 'Connectez-vous pour l’auto-split (jusqu’à environ 3 heures). Ou réduisez la taille : ffmpeg -i service.mp3 -b:a 64k -ac 1 out.mp3. Même précision, 3-5x plus petit.',
        },
        {
          q: 'Puis-je obtenir des sous-titres pour la rediffusion du livestream ?',
          a: 'Oui. Téléchargez SRT ou VTT après transcription. Les horodatages s’alignent sur l’enregistrement original pour YouTube, Facebook ou votre hébergement vidéo.',
        },
        {
          q: 'Puis-je traduire le sermon pour l’équipe de missions ?',
          a: 'Oui. Choisissez une langue cible et cliquez sur Traduire. Utile pour les congrégations multilingues, les missions et le ministère de la diaspora.',
        },
        {
          q: 'Les enregistrements sont-ils conservés sur vos serveurs ?',
          a: 'Non. L’audio est transmis au fournisseur de transcription, traité une fois, puis supprimé. Seule la transcription persiste sur les comptes connectés.',
        },
      ]}

      ctaHeadline="Transformez chaque sermon en une ressource consultable"
      ctaSubtitle="Transcription pour le site web, sous-titres pour la rediffusion, notes pour les groupes d’étude."
      ctaButton="Téléchargez un sermon"

      relatedLinks={[
        { href: '/fr/lecture-transcription',     label: 'Transcription de cours' },
        { href: '/fr/podcast-transcription',     label: 'Transcription de podcast' },
        { href: '/fr/webinar-transcription',     label: 'Transcription de webinaire' },
        { href: '/fr/free-srt-generator',        label: 'Générateur de SRT gratuit' },
        { href: '/fr/interview-transcription',   label: 'Transcription d’interview' },
      ]}
    />
  )
}