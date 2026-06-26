/**
 * Мок-данные каталога BAZZAR MARKET (только для дизайна/витрины).
 * Реальные данные позже подключатся с бэкенда.
 */

export interface Category {
  id: string
  title: string
  subtitle: string
  emoji: string
  grad: string
  count: number
}

export interface Product {
  id: string
  title: string
  subtitle: string
  category: string
  emoji: string
  grad: string
  price: number
  oldPrice?: number
  rating: number
  sold: number
  badge?: 'hot' | 'new' | 'sale'
  delivery: string
}

export const CATEGORIES: Category[] = [
  { id: 'steam', title: 'Пополнение Steam', subtitle: 'Комиссия от 0%', emoji: '🎮', grad: 'linear-gradient(135deg,#1b2838,#2a475e)', count: 12 },
  { id: 'currency', title: 'Игровая валюта', subtitle: 'ПК и мобайл', emoji: '💎', grad: 'linear-gradient(135deg,#7c5cff,#c026d3)', count: 148 },
  { id: 'accounts', title: 'Общие аккаунты', subtitle: 'Доступ к играм', emoji: '🪪', grad: 'linear-gradient(135deg,#0ea5e9,#22d3ee)', count: 64 },
  { id: 'rent', title: 'Аренда аккаунтов', subtitle: 'По часам и дням', emoji: '⏱️', grad: 'linear-gradient(135deg,#f59e0b,#ef4444)', count: 39 },
  { id: 'apple', title: 'Apple пополнение', subtitle: 'App Store / iTunes', emoji: '', grad: 'linear-gradient(135deg,#3a3a3c,#8e8e93)', count: 8 },
  { id: 'subs', title: 'Подписки и сервисы', subtitle: 'Netflix, Spotify, Discord', emoji: '📺', grad: 'linear-gradient(135deg,#10b981,#22d3ee)', count: 53 },
  { id: 'keys', title: 'Ключи и гифты', subtitle: 'Недоступные в РФ', emoji: '🔑', grad: 'linear-gradient(135deg,#a855f7,#6366f1)', count: 211 },
  { id: 'console', title: 'Консоли', subtitle: 'PS / Xbox / Nintendo', emoji: '🕹️', grad: 'linear-gradient(135deg,#2563eb,#7c3aed)', count: 27 },
]

export const PRODUCTS: Product[] = [
  { id: 'genshin', title: 'Genshin Impact', subtitle: 'Кристаллы Сотворения', category: 'currency', emoji: '🌟', grad: 'linear-gradient(135deg,#5b7cfa,#22d3ee)', price: 349, oldPrice: 499, rating: 4.9, sold: 12840, badge: 'hot', delivery: 'Моментально' },
  { id: 'pubg', title: 'PUBG Mobile', subtitle: 'UC — игровая валюта', category: 'currency', emoji: '🔫', grad: 'linear-gradient(135deg,#f59e0b,#ef4444)', price: 199, oldPrice: 280, rating: 4.8, sold: 23110, badge: 'hot', delivery: 'Моментально' },
  { id: 'steam-1000', title: 'Steam Кошелёк', subtitle: 'Пополнение 1000 ₽', category: 'steam', emoji: '🎮', grad: 'linear-gradient(135deg,#1b2838,#66c0f4)', price: 1040, rating: 5.0, sold: 41200, delivery: '1–5 минут' },
  { id: 'fortnite', title: 'Fortnite V-Bucks', subtitle: '2800 В-баксов', category: 'currency', emoji: '🪂', grad: 'linear-gradient(135deg,#7c5cff,#22d3ee)', price: 1490, oldPrice: 1790, rating: 4.7, sold: 8900, badge: 'sale', delivery: 'Моментально' },
  { id: 'roblox', title: 'Roblox Robux', subtitle: '1000 Robux', category: 'currency', emoji: '🟥', grad: 'linear-gradient(135deg,#ef4444,#f59e0b)', price: 690, rating: 4.9, sold: 31050, badge: 'new', delivery: 'Моментально' },
  { id: 'discord', title: 'Discord Nitro', subtitle: '1 месяц подписки', category: 'subs', emoji: '🎧', grad: 'linear-gradient(135deg,#5865f2,#7c5cff)', price: 399, oldPrice: 599, rating: 4.8, sold: 15600, badge: 'sale', delivery: 'Моментально' },
  { id: 'spotify', title: 'Spotify Premium', subtitle: '3 месяца', category: 'subs', emoji: '🎵', grad: 'linear-gradient(135deg,#10b981,#1db954)', price: 549, rating: 4.9, sold: 9870, delivery: '5–15 минут' },
  { id: 'apple-1000', title: 'Apple Gift Card', subtitle: 'Карта 1000 ₽', category: 'apple', emoji: '', grad: 'linear-gradient(135deg,#48484a,#8e8e93)', price: 1080, rating: 5.0, sold: 6420, delivery: '1–10 минут' },
  { id: 'gta', title: 'GTA Online', subtitle: 'Shark Card — деньги', category: 'currency', emoji: '🚗', grad: 'linear-gradient(135deg,#22c55e,#0ea5e9)', price: 890, oldPrice: 1190, rating: 4.6, sold: 5400, badge: 'sale', delivery: 'Моментально' },
  { id: 'valorant', title: 'Valorant Points', subtitle: '2050 VP', category: 'currency', emoji: '🎯', grad: 'linear-gradient(135deg,#ff4655,#7c3aed)', price: 1290, rating: 4.8, sold: 7700, delivery: 'Моментально' },
  { id: 'netflix', title: 'Netflix Premium', subtitle: 'Аренда аккаунта 30 дней', category: 'rent', emoji: '🎬', grad: 'linear-gradient(135deg,#e50914,#7c1d1d)', price: 299, rating: 4.7, sold: 18300, badge: 'hot', delivery: 'До 30 минут' },
  { id: 'ea-account', title: 'EA Play общий', subtitle: 'Доступ к библиотеке', category: 'accounts', emoji: '🏆', grad: 'linear-gradient(135deg,#1e293b,#f97316)', price: 249, rating: 4.5, sold: 4100, delivery: 'До 1 часа' },
]
