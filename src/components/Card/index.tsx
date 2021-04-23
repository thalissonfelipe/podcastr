import Link from 'next/link';

import { usePlayer } from '../../contexts/PlayerContext';

import styles from './styles.module.scss';

type Episode = {
  id: string;
  title: string;
  thumbnail: string;
  members: string;
  publishedAt: string;
  durationAsString: string;
}

type CardProps = {
  episode: Episode;
  episodeList: Episode[];
  index: number;
}

export function Card({ episode, episodeList, index }: CardProps) {
  const { playList } = usePlayer();

  return (
    <div className={styles.cardContainer}>
      <img
        width={192}
        height={192}
        src={episode.thumbnail}
        alt={episode.title}
      />
      <div className={styles.episodeDetails}>
        <Link href={`/episodes/${episode.id}`}>
          <a>{episode.title}</a>
        </Link>
        <p>{episode.members}</p>
        <span>{episode.publishedAt}</span>
        <span>{episode.durationAsString}</span>
      </div>
      <button type="button" onClick={() => playList(episodeList, index)}>
        <img src="/play-green.svg" alt="Tocar episódio" />
      </button>
    </div>
  ) ;
}
