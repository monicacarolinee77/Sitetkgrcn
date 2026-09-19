/**
 * RTP Randomization Utility
 * Generates deterministic "live" RTP values based on time windows
 * Updates every 6 hours (00:00, 06:00, 12:00, 18:00 WIB)
 */

export interface GameData {
  name: string;
  baseRtp: number;      // Base RTP percentage (e.g., 96.50)
  variance: number;     // Max deviation ± (e.g., 0.30 = ±0.30%)
  volatility: string;   // "Rendah" | "Sedang" | "Tinggi"
  maxWin: string;
  features: string[];
}

export interface ProviderData {
  name: string;
  slug: string;
  logo: string;
  games: GameData[];
}

// Deterministic pseudo-random number generator (Mulberry32)
function mulberry32(seed: number) {
  return function() {
    let t = (seed += 0x6D2B79F5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Get current 6-hour time window seed (WIB = UTC+7)
function getTimeWindowSeed(): number {
  const now = new Date();
  // Convert to WIB (UTC+7)
  const wibOffset = 7 * 60 * 60 * 1000;
  const wibTime = new Date(now.getTime() + wibOffset);
  
  const year = wibTime.getUTCFullYear();
  const month = wibTime.getUTCMonth();
  const date = wibTime.getUTCDate();
  const hour = wibTime.getUTCHours();
  
  // 6-hour blocks: 0-5, 6-11, 12-17, 18-23
  const block = Math.floor(hour / 6);
  
  // Create seed from date + block
  return year * 1000000 + (month + 1) * 10000 + date * 100 + block;
}

// Generate RTP for a game based on time window
export function generateGameRtp(game: GameData, seedOffset: number = 0): number {
  const seed = getTimeWindowSeed() + seedOffset;
  const random = mulberry32(seed);
  
  // Generate value between -variance and +variance
  const variation = (random() * 2 - 1) * game.variance;
  const rtp = game.baseRtp + variation;
  
  // Round to 2 decimal places
  return Math.round(rtp * 100) / 100;
}

// Generate all RTPs for a provider
export function generateProviderRtps(provider: ProviderData): Map<string, number> {
  const rtps = new Map<string, number>();
  provider.games.forEach((game, index) => {
    rtps.set(game.name, generateGameRtp(game, index + 1));
  });
  return rtps;
}

// Get next update time (WIB)
export function getNextUpdateTime(): Date {
  const now = new Date();
  const wibOffset = 7 * 60 * 60 * 1000;
  const wibTime = new Date(now.getTime() + wibOffset);
  
  const hour = wibTime.getUTCHours();
  const nextBlockHour = Math.ceil((hour + 1) / 6) * 6;
  
  const nextUpdate = new Date(wibTime);
  nextUpdate.setUTCHours(nextBlockHour % 24, 0, 0, 0);
  
  if (nextBlockHour >= 24) {
    nextUpdate.setUTCDate(nextUpdate.getUTCDate() + 1);
  }
  
  // Convert back to local time
  return new Date(nextUpdate.getTime() - wibOffset);
}

// Format RTP for display
export function formatRtp(rtp: number): string {
  return `${rtp.toFixed(2)}%`;
}

// Get time window label (WIB)
export function getTimeWindowLabel(): string {
  const now = new Date();
  const wibOffset = 7 * 60 * 60 * 1000;
  const wibTime = new Date(now.getTime() + wibOffset);
  
  const hour = wibTime.getUTCHours();
  const block = Math.floor(hour / 6);
  
  const labels = [
    "00:00–06:00 WIB",
    "06:00–12:00 WIB", 
    "12:00–18:00 WIB",
    "18:00–00:00 WIB"
  ];
  
  return labels[block];
}