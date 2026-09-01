# FridgeCook

Recipe app: you add what’s in the fridge, it shows what you can cook.

**Live:** https://fridgecook-three.vercel.app  
**Stack:** React 19, TypeScript, Vite, React Router, Supabase, CSS

## What it does

- Add ingredients and match them to recipes
- Browse the cookbook and open a recipe detail page
- Save favorites (localStorage when logged out, Supabase when logged in)
- Sign up / sign in / sign out
- Responsive layout (desktop nav + mobile hamburger)

## How it works

- **React Router** — nested routes: home, recipes list, recipe `:id`, favorites, login
- **Custom hooks** — `useRecipes`, `useFavorites`, `useAuth`
- **Supabase** — auth, recipes table, favorites for logged-in users
- **Matching** — recipes are scored against the ingredients you typed

## Run locally

```bash
npm install
npm run dev
```

Create a `.env` with your Supabase URL and anon key (do not commit the service role key):

```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

## What I focused on

Building a small but complete UI: routing, auth, remote data, empty/loading states, and a layout that works on phone and desktop — not a tutorial todo list.
