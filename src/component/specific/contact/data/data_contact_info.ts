import { IconDefinition } from '@fortawesome/fontawesome-svg-core'; // Import IconDefinition from FontAwesome

export interface ContactTile {
  icon: string; // Use IconDefinition for FontAwesome icons
  title: string;
  styleClass: string;
  link: string; // URL or route for the tile
  additionalInfo?: string; // Optional additional information
}

export const contactTiles: ContactTile[] = [
  {
    icon: 'faGithub',
    title: 'GitHub',
    styleClass: 'github',
    link: 'https://github.com/yourusername', // Replace with actual GitHub link
    additionalInfo: 'Follow me on GitHub for more projects!',
  },
  {
    icon: 'faYoutube',
    title: 'YouTube',
    styleClass: 'youtube',
    link: 'https://www.youtube.com/channel/yourchannel', // Replace with actual YouTube link
    additionalInfo: 'Subscribe to my YouTube channel for videos!',
  },
  {
    icon: 'faDiscord',
    title: 'Discord',
    styleClass: 'discord',
    link: 'https://discord.gg/yourserver', // Replace with actual Discord invite link
    additionalInfo: 'Join my Discord server for discussions!',
  },
  // Add more tiles for other social media or contact methods as needed
];
